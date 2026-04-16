from __future__ import annotations

# WeChat 4 compatibility in this file is informed by the public WMPFDebugger
# implementation and its adaptation notes, then reworked into a Python-driven
# launcher/injector for this repository.

import asyncio
import base64
import json
import os
import re
import shutil
import subprocess
from collections import Counter
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import frida

from utils.colors import Color


@dataclass(slots=True)
class WeChat4Runtime:
    pid: int
    version: int
    path: str


class WeChat4Debugger:
    def __init__(self, debug_port: int = 9421, cdp_port: int = 62000, options: dict[str, Any] | None = None):
        self.debug_port = debug_port
        self.cdp_port = cdp_port
        self.options = options or {}
        self.project_root = Path(__file__).resolve().parent.parent
        self.config_dir = self.project_root / "configs" / "wx4"
        self.hook_path = self.project_root / "scripts" / "wechat4_hook.js"
        self.codec_bridge_path = self.project_root / "scripts" / "wechat4_codec_bridge.js"
        self.ws_bridge_path = self.project_root / "scripts" / "wechat4_ws_bridge.js"
        self._supported_versions = self._load_supported_versions()
        self._device = None
        self._session = None
        self._script = None
        self._codec_process = None
        self._codec_reader_task = None
        self._codec_stderr_task = None
        self._codec_request_id = 0
        self._codec_pending: dict[int, asyncio.Future] = {}
        self._debug_clients: set[Any] = set()
        self._cdp_clients: set[Any] = set()
        self._debug_connected_event = asyncio.Event()
        self._websockets = None
        self._connection_closed_exc: tuple[type[BaseException], ...] = tuple()
        self._last_debug_category: str | None = None
        self._last_scene_number: int | None = None
        self._scene_was_patched = False
        self._debug_protocol_mode = "raw_debug"
        self._debug_uuid: str = ""
        self._ws_bridge_process = None
        self._ws_bridge_stdout_task = None
        self._ws_bridge_stderr_task = None

    def _load_supported_versions(self) -> set[int]:
        if not self.config_dir.exists():
            return set()

        versions = set()
        for config_file in self.config_dir.glob("addresses.*.json"):
            match = re.search(r"addresses\.(\d+)\.json$", config_file.name)
            if match:
                versions.add(int(match.group(1)))
        return versions

    def is_supported_version(self, version: int) -> bool:
        return version in self._supported_versions

    def detect_runtime(self) -> WeChat4Runtime | None:
        try:
            device = frida.get_local_device()
            processes = device.enumerate_processes(scope="metadata")
        except Exception as error:
            print(Color.RED + f"[-] 获取微信4运行时失败: {error}" + Color.END)
            return None

        wmpf_processes = [
            process
            for process in processes
            if process.name == "WeChatAppEx.exe"
            and "RadiumWMPF" in str(process.parameters.get("path", ""))
        ]
        if not wmpf_processes:
            return None

        parent_counter = Counter(
            int(process.parameters["ppid"])
            for process in wmpf_processes
            if process.parameters.get("ppid")
        )
        if not parent_counter:
            return None

        runtime_pid = parent_counter.most_common(1)[0][0]
        runtime_process = next(
            (process for process in processes if process.pid == runtime_pid), None
        )
        if runtime_process is None:
            runtime_process = next(
                (process for process in wmpf_processes if process.pid == runtime_pid),
                None,
            )
        if runtime_process is None:
            return None

        runtime_path = str(runtime_process.parameters.get("path", ""))
        runtime_version = self._extract_runtime_version(runtime_path)
        if runtime_version is None:
            child_process = next(
                (
                    process
                    for process in wmpf_processes
                    if int(process.parameters.get("ppid", 0)) == runtime_pid
                ),
                None,
            )
            if child_process is not None:
                runtime_path = str(child_process.parameters.get("path", ""))
                runtime_version = self._extract_runtime_version(runtime_path)
        if runtime_version is None:
            return None

        return WeChat4Runtime(
            pid=runtime_pid,
            version=runtime_version,
            path=runtime_path,
        )

    def _extract_runtime_version(self, runtime_path: str) -> int | None:
        match = re.search(r"RadiumWMPF[\\/](\d+)[\\/]extracted", runtime_path, re.I)
        if match:
            return int(match.group(1))

        fallback = re.findall(r"\d+", runtime_path)
        return int(fallback[-1]) if fallback else None

    def run_forever(self, runtime: WeChat4Runtime) -> None:
        try:
            asyncio.run(self._run(runtime))
        except KeyboardInterrupt:
            print(Color.YELLOW + "\n[!] 微信4调试桥已停止" + Color.END)
        except Exception as error:
            print(Color.RED + f"[-] 微信4调试桥启动失败: {error}" + Color.END)

    async def _run(self, runtime: WeChat4Runtime) -> None:
        try:
            await self._start_ws_bridge()
            self._attach_frida(runtime)

            await asyncio.Future()
        finally:
            await self._shutdown()

    async def _start_codec_bridge(self) -> None:
        node_path = self._find_node_executable()
        if node_path is None:
            raise RuntimeError(
                "未找到可用的 Node.js。微信4 调试模式依赖 Node.js 运行编解码桥。"
            )

        if not self.codec_bridge_path.exists():
            raise RuntimeError(f"未找到微信4 编解码脚本: {self.codec_bridge_path}")

        self._codec_process = await asyncio.create_subprocess_exec(
            node_path,
            str(self.codec_bridge_path),
            cwd=str(self.project_root),
            stdin=asyncio.subprocess.PIPE,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )
        self._codec_reader_task = asyncio.create_task(self._read_codec_stdout())
        self._codec_stderr_task = asyncio.create_task(self._read_codec_stderr())

        await self._codec_request({"type": "ping"})

    async def _start_ws_bridge(self) -> None:
        node_path = self._find_node_executable()
        if node_path is None:
            raise RuntimeError(
                "未找到可用的 Node.js。微信4 调试模式依赖 Node.js 运行 ws 桥接服务。"
            )

        if not self.ws_bridge_path.exists():
            raise RuntimeError(f"未找到微信4 ws 桥接脚本: {self.ws_bridge_path}")

        self._ws_bridge_process = await asyncio.create_subprocess_exec(
            node_path,
            str(self.ws_bridge_path),
            str(self.debug_port),
            str(self.cdp_port),
            cwd=str(self.project_root),
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )
        self._ws_bridge_stdout_task = asyncio.create_task(
            self._read_bridge_stream(self._ws_bridge_process.stdout, Color.GREEN)
        )
        self._ws_bridge_stderr_task = asyncio.create_task(
            self._read_bridge_stream(self._ws_bridge_process.stderr, Color.YELLOW)
        )

        await asyncio.sleep(0.5)
        if self._ws_bridge_process.returncode is not None:
            raise RuntimeError(
                f"微信4 ws 桥接服务启动失败，退出码: {self._ws_bridge_process.returncode}"
            )

    def _find_node_executable(self) -> str | None:
        candidates: list[Path] = []
        node_in_path = shutil.which("node")
        if node_in_path:
            candidates.append(Path(node_in_path))

        local_appdata = os.environ.get("LOCALAPPDATA")
        if local_appdata:
            mise_root = Path(local_appdata) / "mise" / "installs" / "node"
            if mise_root.exists():
                candidates.extend(
                    sorted(
                        mise_root.glob("*/node.exe"),
                        key=lambda item: item.stat().st_mtime,
                        reverse=True,
                    )
                )

        candidates.extend(
            [
                Path(r"C:\Program Files\nodejs\node.exe"),
                Path(r"C:\Program Files (x86)\nodejs\node.exe"),
            ]
        )

        tested: set[str] = set()
        for candidate in candidates:
            candidate_str = str(candidate)
            if candidate_str in tested or not candidate.exists():
                continue
            tested.add(candidate_str)

            try:
                subprocess.run(
                    [candidate_str, "--version"],
                    check=True,
                    capture_output=True,
                    text=True,
                )
                return candidate_str
            except Exception:
                continue
        return None

    async def _codec_request(self, payload: dict[str, Any]) -> dict[str, Any]:
        if self._codec_process is None or self._codec_process.stdin is None:
            raise RuntimeError("微信4 编解码桥未启动")

        if self._codec_process.returncode is not None:
            raise RuntimeError("微信4 编解码桥已退出，请检查 Node.js 和 protobufjs 依赖")

        self._codec_request_id += 1
        request_id = self._codec_request_id
        loop = asyncio.get_running_loop()
        future = loop.create_future()
        self._codec_pending[request_id] = future

        message = json.dumps(
            {"id": request_id, **payload},
            ensure_ascii=False,
        ) + "\n"
        self._codec_process.stdin.write(message.encode("utf-8"))
        await self._codec_process.stdin.drain()

        response = await future
        if not response.get("ok", False):
            raise RuntimeError(response.get("error", "微信4 编解码桥返回未知错误"))
        return response

    async def _read_codec_stdout(self) -> None:
        if self._codec_process is None or self._codec_process.stdout is None:
            return

        while True:
            line = await self._codec_process.stdout.readline()
            if not line:
                break

            try:
                response = json.loads(line.decode("utf-8"))
            except json.JSONDecodeError:
                continue

            request_id = response.get("id")
            future = self._codec_pending.pop(request_id, None)
            if future is not None and not future.done():
                future.set_result(response)

        error = RuntimeError("微信4 编解码桥已退出")
        for future in self._codec_pending.values():
            if not future.done():
                future.set_exception(error)
        self._codec_pending.clear()

    async def _read_codec_stderr(self) -> None:
        if self._codec_process is None or self._codec_process.stderr is None:
            return

        while True:
            line = await self._codec_process.stderr.readline()
            if not line:
                break
            message = line.decode("utf-8", errors="replace").rstrip()
            if message:
                print(Color.YELLOW + f"[codec] {message}" + Color.END)

    async def _read_bridge_stream(self, stream, color: str) -> None:
        if stream is None:
            return

        while True:
            line = await stream.readline()
            if not line:
                break
            message = line.decode("utf-8", errors="replace").rstrip()
            if message:
                print(color + message + Color.END)

    def _attach_frida(self, runtime: WeChat4Runtime) -> None:
        if not self.hook_path.exists():
            raise RuntimeError(f"未找到微信4 Hook 脚本: {self.hook_path}")

        config_path = self.config_dir / f"addresses.{runtime.version}.json"
        if not config_path.exists():
            raise RuntimeError(f"未找到微信4地址配置: {config_path}")

        hook_code = self.hook_path.read_text(encoding="utf-8")
        config_text = config_path.read_text(encoding="utf-8")
        runtime_options_text = json.dumps(
            {
                "patchScene": bool(self.options.get("patch_scene", True)),
                "patchCDPFilter": bool(self.options.get("patch_cdp_filter", True)),
                "forceDebugFlag": bool(self.options.get("force_debug_flag", True)),
                "sceneTarget": int(self.options.get("scene_target", 1101)),
            }
        )
        script_text = (
            f"var runtimeOptions = {runtime_options_text};\n"
            + hook_code.replace("@@CONFIG@@", json.dumps(json.loads(config_text)))
        )
        self._last_scene_number = None
        self._scene_was_patched = False
        self._debug_protocol_mode = "raw_debug"
        self._debug_uuid = ""

        self._device = frida.get_local_device()
        self._session = self._device.attach(runtime.pid)
        self._script = self._session.create_script(script_text)
        self._script.on("message", self._on_frida_message)
        self._script.load()

        print(
            Color.GREEN
            + f"[+] 已附加微信4运行时 PID: {runtime.pid}，WMPF版本: {runtime.version}"
            + Color.END
        )
        print(
            Color.CYAN
            + "[+] 微信4 patch 选项: "
            + f"patch_scene={bool(self.options.get('patch_scene', True))} "
            + f"patch_cdp_filter={bool(self.options.get('patch_cdp_filter', True))} "
            + f"force_debug_flag={bool(self.options.get('force_debug_flag', True))} "
            + f"scene_target={int(self.options.get('scene_target', 1101))}"
            + Color.END
        )

    def _on_frida_message(self, message: dict[str, Any], data: Any) -> None:
        if message["type"] == "send":
            payload = str(message["payload"])
            scene_match = re.search(r"\[hook\] scene: (\d+)", payload)
            if scene_match:
                self._last_scene_number = int(scene_match.group(1))
            if "hook scene condition -> 1101" in payload:
                self._scene_was_patched = True
            print(Color.BLUE + f"[frida] {payload}" + Color.END)
        elif message["type"] == "error":
            print(Color.RED + f"[frida] {message['stack']}" + Color.END)

    async def _handle_decoded_debug_frame(
        self, websocket, response: dict[str, Any]
    ) -> None:
        frame_type = response.get("frame_type")
        if frame_type == "debug_message":
            self._debug_protocol_mode = "raw_debug"
            await self._forward_debug_messages(response.get("debug_messages", []))
            return

        if frame_type == "client_request":
            self._debug_protocol_mode = "client_data_format"
            self._debug_uuid = str(response.get("uuid") or "")
            cmd = response.get("cmd")
            comment = response.get("comment")
            print(
                Color.CYAN
                + f"[proto] 收到客户端控制帧 cmd={cmd} comment={comment} uuid={self._debug_uuid}"
                + Color.END
            )
            await self._forward_debug_messages(response.get("debug_messages", []))
            await self._respond_client_request(websocket, response)
            return

        if frame_type == "unknown":
            print(
                Color.YELLOW
                + "[!] 无法识别的小程序调试帧："
                + f" bytes={response.get('byte_length')} preview={response.get('preview_hex')}"
                + Color.END
            )
            errors = response.get("errors") or []
            for error in errors:
                print(Color.YELLOW + f"[!] decode error: {error}" + Color.END)
            return

        print(
            Color.YELLOW
            + f"[!] 收到未知 frame_type={frame_type}，原始响应={response}"
            + Color.END
        )

    async def _forward_debug_messages(self, debug_messages: list[dict[str, Any]]) -> None:
        for debug_message in debug_messages:
            category = debug_message.get("category")
            if category:
                self._last_debug_category = category

            if category != "chromeDevtoolsResult":
                continue

            payload = debug_message.get("payload")
            if payload:
                await self._broadcast(self._cdp_clients, payload)

    async def _respond_client_request(
        self, websocket, response: dict[str, Any]
    ) -> None:
        cmd = response.get("cmd")
        uuid = str(response.get("uuid") or "")
        data = response.get("data") or {}
        debug_messages = response.get("debug_messages") or []
        encoded = None

        if cmd == 1002:  # Login
            encoded = await self._codec_request(
                {
                    "type": "encode_client_response",
                    "response_type": 1002,
                    "uuid": uuid,
                    "payload": {
                        "base_response": {"errcode": 0, "errmsg": ""},
                        "room_info": {
                            "join_room": 1,
                            "original_md5": "",
                            "room_status": 1,
                            "wx_conn_status": 1,
                            "dev_conn_status": 1,
                            "room_id": "",
                        },
                    },
                }
            )
        elif cmd == 1003:  # JoinRoom
            encoded = await self._codec_request(
                {
                    "type": "encode_client_response",
                    "response_type": 1003,
                    "uuid": uuid,
                    "payload": {
                        "base_response": {"errcode": 0, "errmsg": ""},
                    },
                }
            )
        elif cmd == 1001:  # Heartbeat
            encoded = await self._codec_request(
                {
                    "type": "encode_client_response",
                    "response_type": 1001,
                    "uuid": uuid,
                    "payload": {
                        "base_response": {"errcode": 0, "errmsg": ""},
                    },
                }
            )
        elif cmd == 1005:  # SyncMessage
            send_ack = int(data.get("max_seq") or data.get("min_seq") or 0)
            encoded = await self._codec_request(
                {
                    "type": "encode_client_response",
                    "response_type": 1005,
                    "uuid": uuid,
                    "payload": {
                        "base_response": {"errcode": 0, "errmsg": ""},
                        "debug_message": [],
                        "send_ack": send_ack,
                    },
                }
            )
        elif cmd == 1006:  # SendDebugMessageParallelly
            seq_values = [
                int(item.get("seq", 0))
                for item in debug_messages
                if isinstance(item.get("seq"), int)
            ]
            min_ack = min(seq_values) if seq_values else 0
            max_ack = max(seq_values) if seq_values else 0
            encoded = await self._codec_request(
                {
                    "type": "encode_client_response",
                    "response_type": 1006,
                    "uuid": uuid,
                    "payload": {
                        "base_response": {"errcode": 0, "errmsg": ""},
                        "min_ack": min_ack,
                        "max_ack": max_ack,
                    },
                }
            )
        elif cmd == 1004:  # QuitRoom
            encoded = await self._codec_request(
                {
                    "type": "encode_client_response",
                    "response_type": 1004,
                    "uuid": uuid,
                    "payload": {
                        "base_response": {"errcode": 0, "errmsg": ""},
                    },
                }
            )

        if encoded is None:
            print(Color.YELLOW + f"[!] 暂未处理的客户端控制帧 cmd={cmd}" + Color.END)
            return

        await websocket.send(base64.b64decode(encoded["data"]))

    async def _handle_debug_client(self, websocket) -> None:
        self._debug_clients.add(websocket)
        self._debug_connected_event.set()
        self._last_debug_category = None
        print(Color.GREEN + "[+] 微信4小程序调试客户端已连接" + Color.END)
        request = getattr(websocket, "request", None)
        headers = getattr(request, "headers", None)
        if headers:
            print(
                Color.CYAN
                + "[proto] 小程序连接请求头: "
                + f"extensions={headers.get('Sec-WebSocket-Extensions')} "
                + f"protocol={headers.get('Sec-WebSocket-Protocol')} "
                + f"user-agent={headers.get('User-Agent')}"
                + Color.END
            )
        try:
            try:
                async for message in websocket:
                    if not isinstance(message, (bytes, bytearray)):
                        print(
                            Color.YELLOW
                            + f"[!] 收到非二进制调试帧 type={type(message).__name__}，已忽略"
                            + Color.END
                        )
                        continue

                    response = await self._codec_request(
                        {
                            "type": "decode",
                            "data": base64.b64encode(bytes(message)).decode("ascii"),
                        }
                    )
                    await self._handle_decoded_debug_frame(websocket, response)
            except self._connection_closed_exc:
                pass
        finally:
            self._debug_clients.discard(websocket)
            if not self._debug_clients:
                self._debug_connected_event.clear()
            close_code = getattr(websocket, "close_code", None)
            close_reason = getattr(websocket, "close_reason", None)
            print(
                Color.YELLOW
                + f"[-] 微信4小程序调试客户端已断开 close_code={close_code} close_reason={close_reason}"
                + Color.END
            )
            if self._last_debug_category is None:
                print(
                    Color.YELLOW
                    + "[!] 断开前未收到可识别的调试消息。常见原因是先打开了浏览器 DevTools，或当前小程序场景未命中远程调试 patch。"
                    + Color.END
                )
            elif self._last_debug_category != "chromeDevtoolsResult":
                print(
                    Color.YELLOW
                    + f"[!] 断开前最后一条调试消息分类为 {self._last_debug_category}，还没进入 Chrome DevTools 数据流。"
                    + Color.END
                )
            if self._last_scene_number is not None:
                print(
                    Color.YELLOW
                    + f"[!] 最近一次命中的小程序 scene = {self._last_scene_number}，scene patch 命中状态 = {self._scene_was_patched}"
                    + Color.END
                )
            else:
                print(
                    Color.YELLOW
                    + "[!] 运行期间没有看到任何 `[hook] scene:` 日志。当前更像是已经命中 OnLoadStart，但 scene 指针链解析失败或当前 offsets 不匹配。"
                    + Color.END
                )
            await self._close_clients(
                self._cdp_clients,
                code=1012,
                reason="miniapp disconnected; relaunch the miniapp first",
            )

    async def _handle_cdp_client(self, websocket) -> None:
        if not self._debug_clients:
            print(
                Color.YELLOW
                + "[!] DevTools 连接被拒绝：请先启动小程序，等看到“微信4小程序调试客户端已连接”后再打开 DevTools。"
                + Color.END
            )
            await websocket.close(
                code=1013,
                reason="launch miniapp first, then open devtools",
            )
            return

        self._cdp_clients.add(websocket)
        print(Color.GREEN + "[+] DevTools 客户端已连接" + Color.END)
        try:
            try:
                async for message in websocket:
                    if isinstance(message, bytes):
                        message = message.decode("utf-8", errors="replace")

                    if not self._debug_clients:
                        print(
                            Color.YELLOW
                            + "[!] 当前没有可用的小程序调试连接，已关闭 DevTools 客户端，请重新按顺序启动。"
                            + Color.END
                        )
                        await websocket.close(
                            code=1012,
                            reason="miniapp disconnected; relaunch first",
                        )
                        break

                    response = await self._codec_request(
                        self._build_cdp_encode_request(message)
                    )
                    binary_message = base64.b64decode(response["data"])
                    await self._broadcast(self._debug_clients, binary_message)
            except self._connection_closed_exc:
                pass
        finally:
            self._cdp_clients.discard(websocket)
            close_code = getattr(websocket, "close_code", None)
            close_reason = getattr(websocket, "close_reason", None)
            print(
                Color.YELLOW
                + f"[-] DevTools 客户端已断开 close_code={close_code} close_reason={close_reason}"
                + Color.END
            )

    def _build_cdp_encode_request(self, payload: str) -> dict[str, Any]:
        if self._debug_protocol_mode == "client_data_format":
            return {
                "type": "encode_client_notify",
                "uuid": self._debug_uuid,
                "payload": payload,
            }
        return {
            "type": "encode",
            "payload": payload,
        }

    async def _broadcast(self, clients: set[Any], message: str | bytes) -> None:
        disconnected = []
        for client in list(clients):
            try:
                await client.send(message)
            except Exception:
                disconnected.append(client)

        for client in disconnected:
            clients.discard(client)

    async def _close_clients(self, clients: set[Any], code: int, reason: str) -> None:
        for client in list(clients):
            try:
                await client.close(code=code, reason=reason)
            except Exception:
                pass
            finally:
                clients.discard(client)

    async def _shutdown(self) -> None:
        if self._script is not None:
            try:
                self._script.unload()
            except Exception:
                pass
            self._script = None

        if self._session is not None:
            try:
                self._session.detach()
            except Exception:
                pass
            self._session = None

        if self._ws_bridge_process is not None:
            if self._ws_bridge_process.returncode is None:
                self._ws_bridge_process.terminate()
                try:
                    await asyncio.wait_for(self._ws_bridge_process.wait(), timeout=3)
                except asyncio.TimeoutError:
                    self._ws_bridge_process.kill()
                    await self._ws_bridge_process.wait()
            self._ws_bridge_process = None

        if self._codec_process is not None:
            if self._codec_process.stdin is not None:
                try:
                    self._codec_process.stdin.close()
                except Exception:
                    pass

            if self._codec_process.returncode is None:
                self._codec_process.terminate()
                try:
                    await asyncio.wait_for(self._codec_process.wait(), timeout=3)
                except asyncio.TimeoutError:
                    self._codec_process.kill()
                    await self._codec_process.wait()
            self._codec_process = None

        for task in (
            self._ws_bridge_stdout_task,
            self._ws_bridge_stderr_task,
            self._codec_reader_task,
            self._codec_stderr_task,
        ):
            if task is not None:
                task.cancel()

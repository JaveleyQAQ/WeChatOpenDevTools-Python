"use strict";

// Bridge flow inspired by the public WMPFDebugger project:
// https://github.com/evi0s/WMPFDebugger
// This variant keeps the websocket/protocol compatibility work local to this
// repository and is driven by the Python launcher in utils/wechat4debug.py.

const { WebSocketServer, WebSocket } = require("ws");

let codex;
let messageProto;
let constants;

try {
  codex = require("./wechat4_third_party/RemoteDebugCodex.js");
  messageProto = require("./wechat4_third_party/WARemoteDebugProtobuf.js");
  constants = require("./wechat4_third_party/RemoteDebugConstants.js");
} catch (error) {
  console.error(
    "failed to load WeChat 4 bridge dependencies. Run `npm install` first. " +
      (error && error.stack ? error.stack : String(error)),
  );
  process.exit(1);
}

const DEBUG_PORT = Number(process.argv[2] || process.env.WECHAT4_DEBUG_PORT || 9421);
const CDP_PORT = Number(process.argv[3] || process.env.WECHAT4_CDP_PORT || 62000);

if (!Number.isInteger(DEBUG_PORT) || DEBUG_PORT < 1 || DEBUG_PORT > 65535) {
  throw new Error(`invalid debug port: ${DEBUG_PORT}`);
}
if (!Number.isInteger(CDP_PORT) || CDP_PORT < 1 || CDP_PORT > 65535) {
  throw new Error(`invalid cdp port: ${CDP_PORT}`);
}

let messageCounter = 0;
let notifyCounter = 0;
const MAX_PENDING_CDP_MESSAGES = 200;
const VALID_CLIENT_REQUEST_CMDS = new Set([
  1000,
  1001,
  1002,
  1003,
  1004,
  1005,
  1006,
  2000,
  2006,
  3001,
  3002,
  3003,
]);

const debugClients = new Set();
const cdpClients = new Set();
const debugClientState = new WeakMap();
const pendingCdpMessages = [];

function log(message) {
  process.stdout.write(`${message}\n`);
}

function warn(message) {
  process.stderr.write(`${message}\n`);
}

function hexPreview(buffer, length = 64) {
  return Buffer.from(buffer).subarray(0, length).toString("hex");
}

function normalizeDebugMessage(debugMessage) {
  if (!debugMessage) {
    return null;
  }
  return {
    seq: typeof debugMessage.seq === "number" ? debugMessage.seq : 0,
    delay: typeof debugMessage.delay === "number" ? debugMessage.delay : 0,
    category: debugMessage.category ?? null,
    compress_algo:
      typeof debugMessage.compress_algo === "number" ? debugMessage.compress_algo : 0,
    payload:
      debugMessage.data && typeof debugMessage.data.payload === "string"
        ? debugMessage.data.payload
        : null,
    data: debugMessage.data ?? null,
  };
}

function encodeRawDebugPayload(payload) {
  const rawPayload = {
    jscontext_id: "",
    op_id: Math.round(100 * Math.random()),
    payload: String(payload ?? ""),
  };
  const wrappedData = codex.wrapDebugMessageData(rawPayload, "chromeDevtools", 0);
  const outData = {
    seq: ++messageCounter,
    category: "chromeDevtools",
    data: wrappedData.buffer,
    compressAlgo: 0,
    originalSize: wrappedData.originalSize,
  };
  return messageProto.mmbizwxadevremote.WARemoteDebug_DebugMessage.encode(outData).finish();
}

function encodeClientResponse(responseType, uuid, payload) {
  return codex.wrapClientResponseDataFormatToProto(
    payload,
    responseType,
    uuid ?? "",
  );
}

function encodeClientNotify(payload, uuid) {
  const debugMessage = {
    seq: ++notifyCounter,
    delay: 0,
    category: constants.DebugMessageCategory.ChromeDevtools,
    compress_algo: 0,
    data: {
      jscontext_id: "",
      op_id: Math.round(100 * Math.random()),
      payload: String(payload ?? ""),
    },
  };
  return codex.wrapClientResponseDataFormatToProto(
    {
      debug_message: [debugMessage],
    },
    constants.ClientResponseType.MessageNotifyParallelly,
    uuid ?? "",
  );
}

function decodeRawDebugMessage(rawMessage) {
  const decodedData =
    messageProto.mmbizwxadevremote.WARemoteDebug_DebugMessage.decode(rawMessage);
  const unwrappedData = codex.unwrapDebugMessageData(decodedData);
  if (!unwrappedData || !unwrappedData.category) {
    return null;
  }

  return {
    frame_type: "debug_message",
    debug_messages: [
      normalizeDebugMessage({
        seq: decodedData.seq,
        delay: decodedData.delay,
        category: unwrappedData.category,
        compress_algo: decodedData.compressAlgo,
        data: unwrappedData.data,
      }),
    ],
  };
}

function decodeClientFrame(rawMessage) {
  const originalConsoleError = console.error;
  let decoded;
  try {
    console.error = () => {};
    decoded = codex.unwrapClientProtoToDataFormat(rawMessage);
  } finally {
    console.error = originalConsoleError;
  }
  if (
    !decoded ||
    typeof decoded.cmd !== "number" ||
    decoded.cmd === constants.ClientRequestCmd.Unknown ||
    !VALID_CLIENT_REQUEST_CMDS.has(decoded.cmd)
  ) {
    return null;
  }

  let debugMessages = [];
  if (Array.isArray(decoded.data && decoded.data.debug_message)) {
    debugMessages = decoded.data.debug_message.map(normalizeDebugMessage).filter(Boolean);
  }

  return {
    frame_type: "client_request",
    cmd: decoded.cmd,
    comment: decoded._comment ?? null,
    uuid: decoded.uuid ?? "",
    data: decoded.data ?? {},
    debug_messages: debugMessages,
  };
}

function decodeFrame(rawMessage) {
  const errors = [];

  try {
    const clientFrame = decodeClientFrame(rawMessage);
    if (clientFrame) {
      return clientFrame;
    }
  } catch (error) {
    errors.push(`client_frame: ${error && error.message ? error.message : String(error)}`);
  }

  try {
    const debugFrame = decodeRawDebugMessage(rawMessage);
    if (debugFrame) {
      return debugFrame;
    }
  } catch (error) {
    errors.push(`debug_frame: ${error && error.message ? error.message : String(error)}`);
  }

  return {
    frame_type: "unknown",
    errors,
    preview_hex: hexPreview(rawMessage),
    byte_length: rawMessage.byteLength,
    preview_bytes: Array.from(Buffer.from(rawMessage).subarray(0, 16)),
  };
}

function forwardDebugMessages(debugMessages) {
  for (const debugMessage of debugMessages || []) {
    if (debugMessage.category !== "chromeDevtoolsResult" || !debugMessage.payload) {
      continue;
    }

    for (const client of cdpClients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(debugMessage.payload);
      }
    }
  }
}

function respondClientRequest(ws, frame) {
  const cmd = frame.cmd;
  const uuid = String(frame.uuid || "");
  const data = frame.data || {};
  const debugMessages = frame.debug_messages || [];
  let encoded = null;

  if (cmd === 1002) {
    encoded = encodeClientResponse(1002, uuid, {
      base_response: { errcode: 0, errmsg: "" },
      room_info: {
        join_room: 1,
        original_md5: "",
        room_status: 1,
        wx_conn_status: 1,
        dev_conn_status: 1,
        room_id: "",
      },
    });
  } else if (cmd === 1003) {
    encoded = encodeClientResponse(1003, uuid, {
      base_response: { errcode: 0, errmsg: "" },
    });
  } else if (cmd === 1001) {
    encoded = encodeClientResponse(1001, uuid, {
      base_response: { errcode: 0, errmsg: "" },
    });
  } else if (cmd === 1005) {
    const sendAck = Number(data.max_seq || data.min_seq || 0);
    encoded = encodeClientResponse(1005, uuid, {
      base_response: { errcode: 0, errmsg: "" },
      debug_message: [],
      send_ack: sendAck,
    });
  } else if (cmd === 1006) {
    const seqValues = debugMessages
      .map((item) => (typeof item.seq === "number" ? item.seq : 0));
    const minAck = seqValues.length ? Math.min(...seqValues) : 0;
    const maxAck = seqValues.length ? Math.max(...seqValues) : 0;
    encoded = encodeClientResponse(1006, uuid, {
      base_response: { errcode: 0, errmsg: "" },
      min_ack: minAck,
      max_ack: maxAck,
    });
  } else if (cmd === 1004) {
    encoded = encodeClientResponse(1004, uuid, {
      base_response: { errcode: 0, errmsg: "" },
    });
  }

  if (!encoded) {
    warn(`[!] 暂未处理的客户端控制帧 cmd=${cmd}`);
    return;
  }

  if (ws.readyState === WebSocket.OPEN) {
    ws.send(encoded);
  }
}

function enqueueCdpMessage(message) {
  pendingCdpMessages.push(String(message ?? ""));
  if (pendingCdpMessages.length > MAX_PENDING_CDP_MESSAGES) {
    pendingCdpMessages.splice(0, pendingCdpMessages.length - MAX_PENDING_CDP_MESSAGES);
  }
}

function sendCdpMessageToDebugClient(client, text) {
  if (client.readyState !== WebSocket.OPEN) {
    return false;
  }

  const state = debugClientState.get(client) || {
    protocolMode: "raw_debug",
    uuid: "",
  };
  const encoded =
    state.protocolMode === "client_data_format"
      ? encodeClientNotify(text, state.uuid)
      : encodeRawDebugPayload(text);
  client.send(encoded);
  return true;
}

function broadcastCdpMessageToDebugClients(text) {
  let sent = false;
  for (const client of debugClients) {
    if (sendCdpMessageToDebugClient(client, text)) {
      sent = true;
    }
  }
  return sent;
}

function flushPendingCdpMessages() {
  if (pendingCdpMessages.length === 0 || debugClients.size === 0) {
    return;
  }

  log(`[proto] 正在回放 ${pendingCdpMessages.length} 条缓存的 DevTools 消息`);
  const queued = pendingCdpMessages.splice(0, pendingCdpMessages.length);
  for (const message of queued) {
    broadcastCdpMessageToDebugClients(message);
  }
}

const debugServer = new WebSocketServer({
  port: DEBUG_PORT,
  perMessageDeflate: true,
});

const cdpServer = new WebSocketServer({
  port: CDP_PORT,
  perMessageDeflate: true,
});

log(`[+] 微信4调试服务已启动 ws://127.0.0.1:${DEBUG_PORT}`);
log(`[+] DevTools 代理已启动 ws://127.0.0.1:${CDP_PORT}`);
log(
  "[+] 使用顺序：先打开要调试的小程序，看到“微信4小程序调试客户端已连接”后，再打开下面的 DevTools 链接",
);
log(`    devtools://devtools/bundled/inspector.html?ws=127.0.0.1:${CDP_PORT}`);
log("[+] 现在请先启动需要调试的小程序");

debugServer.on("connection", (ws, req) => {
  debugClients.add(ws);
  debugClientState.set(ws, {
    protocolMode: "raw_debug",
    uuid: "",
  });
  log("[+] 微信4小程序调试客户端已连接");
  log(
    `[proto] 小程序连接请求头: path=${req.url || "/"} extensions=${req.headers["sec-websocket-extensions"] || "None"} ` +
      `protocol=${req.headers["sec-websocket-protocol"] || "None"} ` +
      `user-agent=${req.headers["user-agent"] || "None"}`,
  );
  log(`[proto] 小程序连接协商结果: accepted_extensions=${ws.extensions || "None"}`);

  ws.on("message", (message, isBinary) => {
    if (!isBinary) {
      warn(`[!] 收到非二进制调试帧 type=${typeof message}，已忽略`);
      return;
    }

    const rawMessage = Buffer.isBuffer(message) ? message : Buffer.from(message);
    const frame = decodeFrame(rawMessage);
    if (frame.frame_type === "client_request") {
      const state = debugClientState.get(ws);
      if (state) {
        state.protocolMode = "client_data_format";
        state.uuid = String(frame.uuid || "");
      }
      log(
        `[proto] 收到客户端控制帧 cmd=${frame.cmd} comment=${frame.comment} uuid=${frame.uuid}`,
      );
      forwardDebugMessages(frame.debug_messages);
      respondClientRequest(ws, frame);
      flushPendingCdpMessages();
      return;
    }

    if (frame.frame_type === "debug_message") {
      const state = debugClientState.get(ws);
      if (state) {
        state.protocolMode = "raw_debug";
      }
      forwardDebugMessages(frame.debug_messages);
      flushPendingCdpMessages();
      return;
    }

    warn(
      `[!] 无法识别的小程序调试帧: bytes=${frame.byte_length} preview=${frame.preview_hex} raw=${JSON.stringify(frame.preview_bytes)}`,
    );
    for (const error of frame.errors || []) {
      warn(`[!] decode error: ${error}`);
    }
  });

  ws.on("close", (code, reasonBuffer) => {
    debugClients.delete(ws);
    const reason = reasonBuffer ? reasonBuffer.toString() : "";
    log(`[-] 微信4小程序调试客户端已断开 close_code=${code} close_reason=${reason}`);
    if (cdpClients.size > 0) {
      log("[!] 小程序已断开，现有 DevTools 连接将保持打开并等待下次小程序重连");
    }
  });

  ws.on("error", (error) => {
    warn(`[!] 微信4小程序调试客户端异常: ${error && error.stack ? error.stack : error}`);
  });
});

cdpServer.on("connection", (ws) => {
  cdpClients.add(ws);
  log("[+] DevTools 客户端已连接");
  if (debugClients.size === 0) {
    log("[!] 当前还没有小程序调试连接，DevTools 会保持等待并缓存发出的消息");
  }

  ws.on("message", (message) => {
    const text = Buffer.isBuffer(message) ? message.toString("utf8") : String(message);
    if (!broadcastCdpMessageToDebugClients(text)) {
      enqueueCdpMessage(text);
      log(`[proto] 已缓存一条 DevTools 消息，当前缓存数=${pendingCdpMessages.length}`);
    }
  });

  ws.on("close", (code, reasonBuffer) => {
    cdpClients.delete(ws);
    const reason = reasonBuffer ? reasonBuffer.toString() : "";
    log(`[-] DevTools 客户端已断开 close_code=${code} close_reason=${reason}`);
  });

  ws.on("error", (error) => {
    warn(`[!] DevTools 客户端异常: ${error && error.stack ? error.stack : error}`);
  });
});

// Adapted from the public Frida hook workflow in evi0s/WMPFDebugger.
// This repository keeps the high-level hook idea but layers extra runtime
// toggles and diagnostics for Python-driven orchestration.

const getMainModule = (version) => {
    if (version >= 13331) {
        return Process.findModuleByName("flue.dll");
    }
    return Process.findModuleByName("WeChatAppEx.exe");
};

const parseRuntimeOptions = () => {
    if (typeof runtimeOptions === "object" && runtimeOptions !== null) {
        return {
            patchScene: runtimeOptions.patchScene !== false,
            patchCDPFilter: runtimeOptions.patchCDPFilter !== false,
            forceDebugFlag: runtimeOptions.forceDebugFlag !== false,
            sceneTarget:
                typeof runtimeOptions.sceneTarget === "number"
                    ? runtimeOptions.sceneTarget
                    : 1101,
        };
    }
    return {
        patchScene: true,
        patchCDPFilter: true,
        forceDebugFlag: true,
        sceneTarget: 1101,
    };
};

const patchCDPFilter = (base, config, runtime) => {
    if (!runtime.patchCDPFilter) {
        send("[patch] skip CDP filter patch by runtime option");
        return;
    }
    // xref: SendToClientFilter OR devtools_message_filter_applet_webview.cc
    const offset = config.CDPFilterHookOffset;
    Interceptor.attach(base.add(offset), {
        onEnter(args) {
            send(
                `[patch] CDP filter on enter, original value of input: ${args[0].readPointer()}`,
            );
            this.inputValue = args[0];
        },
        onLeave(retval) {
            const inputValue = this.inputValue.readPointer();
            if (inputValue.isNull() || inputValue.add(8).isNull()) {
                // there's a chance the value could be null
                // return here to avoid crash
                return;
            }

            send(
                `[patch] CDP filter on leave, patch input, now value: ${inputValue}; ` +
                    `*(input + 8) = ${inputValue.add(8).readU32()}`,
            );
            if (inputValue.add(8).readU32() == 6) {
                inputValue.add(8).writeU32(0x0);
            }
        },
    });
};

const safeReadPointer = (ptr, label) => {
    try {
        return ptr.readPointer();
    } catch (error) {
        send(`[hook] ${label} readPointer failed at ${ptr}: ${error}`);
        return null;
    }
};

const safeReadInt = (ptr, label) => {
    try {
        return ptr.readInt();
    } catch (error) {
        send(`[hook] ${label} readInt failed at ${ptr}: ${error}`);
        return null;
    }
};

const dedupeOffsetCandidates = (offsetSets) => {
    const seen = {};
    const unique = [];
    for (let i = 0; i < offsetSets.length; i++) {
        const key = JSON.stringify(offsetSets[i]);
        if (seen[key]) {
            continue;
        }
        seen[key] = true;
        unique.push(offsetSets[i]);
    }
    return unique;
};

const buildSceneOffsetCandidates = (sceneOffsets) => {
    const [a, b, c] = sceneOffsets;
    return dedupeOffsetCandidates([
        sceneOffsets,
        [a, b, 456],
        [a, b, 488],
        [1376, 1312, 456],
        [1376, 1312, 488],
        [1408, 1344, 488],
        [1408, 1352, 488],
        [1416, 1360, 488],
        [1360, 1312, 488],
        [1272, 1224, 488],
        [1208, 1160, 488],
    ]);
};

const resolveSceneInfo = (a1, sceneOffsets) => {
    const indexContainerPtr = safeReadPointer(a1.add(56), "indexContainer + 56");
    if (indexContainerPtr === null || indexContainerPtr.isNull()) {
        send("[hook] indexContainer + 56 pointer is null");
        return null;
    }

    const candidates = buildSceneOffsetCandidates(sceneOffsets);
    for (let i = 0; i < candidates.length; i++) {
        const offsets = candidates[i];
        try {
            const configSlot = indexContainerPtr.add(offsets[0]);
            const miniappConfigPtr = safeReadPointer(
                configSlot,
                `miniappConfigPtr offsets=${offsets}`,
            );
            if (miniappConfigPtr === null || miniappConfigPtr.isNull()) {
                continue;
            }

            const configChildPtr = safeReadPointer(
                miniappConfigPtr.add(8),
                `miniappConfigPtr+8 offsets=${offsets}`,
            );
            if (configChildPtr === null || configChildPtr.isNull()) {
                continue;
            }

            const sceneParentPtr = safeReadPointer(
                configChildPtr.add(offsets[1]),
                `sceneParentPtr offsets=${offsets}`,
            );
            if (sceneParentPtr === null || sceneParentPtr.isNull()) {
                continue;
            }

            const sceneBasePtr = safeReadPointer(
                sceneParentPtr.add(16),
                `sceneBasePtr offsets=${offsets}`,
            );
            if (sceneBasePtr === null || sceneBasePtr.isNull()) {
                continue;
            }

            const miniappScenePtr = sceneBasePtr.add(offsets[2]);
            const sceneValue = safeReadInt(
                miniappScenePtr,
                `miniappScenePtr offsets=${offsets}`,
            );
            if (sceneValue === null) {
                continue;
            }

            if (sceneValue >= 0 && sceneValue <= 10000) {
                return {
                    offsets,
                    scenePtr: miniappScenePtr,
                    sceneValue,
                };
            }
        } catch (error) {
            send(`[hook] resolveSceneInfo failed offsets=${offsets}: ${error}`);
        }
    }

    return null;
};

const shouldPatchScene = (sceneValue) => {
    if (sceneValue === 1000) {
        return false;
    }

    // 1000: from issue #83 <-- will crash the process
    // 1007: from issue #80
    // 1008: from issue #53
    // 1027: from issue #78
    // 1035: from issue #78
    // 1053: from issue #25
    // 1074: from issue #32
    // 1145: from search
    // 1178: from phone (issue #117)
    // 1256: from recent
    // 1260: from frequently used
    // 1302: from services
    // 1308: minigame?
    const sceneNumberArray = [
        1005, 1007, 1008, 1027, 1035, 1053, 1074, 1145, 1178, 1256, 1260, 1302,
        1308,
    ];
    if (sceneNumberArray.includes(sceneValue)) {
        return true;
    }

    // Fallback heuristic for newer scenes. Keep 1000 excluded because it is known
    // to crash the process. This broadens compatibility for newer launches.
    if (sceneValue >= 1001 && sceneValue < 2000) {
        send(`[hook] scene ${sceneValue} matched heuristic patch range`);
        return true;
    }

    return false;
};

const hookOnLoadScene = (a1, sceneOffsets, runtime) => {
    const sceneInfo = resolveSceneInfo(a1, sceneOffsets);
    if (sceneInfo === null) {
        send(`[hook] failed to resolve scene using offsets ${sceneOffsets}`);
        return;
    }

    send(
        `[hook] scene: ${sceneInfo.sceneValue}, offsets=${sceneInfo.offsets}, scenePtr=${sceneInfo.scenePtr}`,
    );
    if (!runtime.patchScene) {
        send("[hook] skip scene patch by runtime option");
        return;
    }
    if (!shouldPatchScene(sceneInfo.sceneValue)) {
        return;
    }
    send(`[hook] hook scene condition -> ${runtime.sceneTarget}`);
    try {
        sceneInfo.scenePtr.writeInt(runtime.sceneTarget);
    } catch (error) {
        send(`[hook] write scene ${runtime.sceneTarget} failed: ${error}`);
    }

    // TODO: customize debugging endpoint
    // const websocketServerStringPtr = passArgs.add(8).readPointer().add(520);
    // VERBOSE && console.log("[hook] hook websocket server, original: ", websocketServerStringPtr.readUtf8String());
    // websocketServerStringPtr.writeUtf8String("ws://127.0.0.1:8189/");
};

const patchOnLoadStart = (base, config, runtime) => {
    // xref: AppletIndexContainer::OnLoadStart
    Interceptor.attach(base.add(config.LoadStartHookOffset), {
        onEnter(args) {
            send(
                `[inteceptor] AppletIndexContainer::OnLoadStart onEnter, ` +
                    `indexContainer.this: ${this.context.rcx}, dl(before)=${this.context.rdx & 0xff}`,
            );
            // write dl to 0x1
            if (runtime.forceDebugFlag && (this.context.rdx & 0xff) !== 1) {
                this.context.rdx = (this.context.rdx & ~0xff) | 0x1;
                send(`[patch] force dl flag -> 1, dl(after)=${this.context.rdx & 0xff}`);
            } else if (!runtime.forceDebugFlag) {
                send("[patch] skip force dl flag by runtime option");
            }
            // handle onLoad scene
            hookOnLoadScene(this.context.rcx, config.SceneOffsets, runtime);
        },
        onLeave(retval) {
            // do nothing
        },
    });
};

const parseConfig = () => {
    const rawConfig = `@@CONFIG@@`;
    if (rawConfig.includes("@@")) {
        // test addresses
        return {
            Version: 18955,
            LoadStartHookOffset: "0x25B52C0",
            CDPFilterHookOffset: "0x30248B0",
            SceneOffsets: [1408, 1344, 488],
        };
    }
    return JSON.parse(rawConfig);
};

const main = () => {
    const config = parseConfig();
    const runtime = parseRuntimeOptions();
    const mainModule = getMainModule(config.Version);
    send(
        `[patch] runtime options patchScene=${runtime.patchScene} patchCDPFilter=${runtime.patchCDPFilter} forceDebugFlag=${runtime.forceDebugFlag} sceneTarget=${runtime.sceneTarget}`,
    );
    patchOnLoadStart(mainModule.base, config, runtime);
    patchCDPFilter(mainModule.base, config, runtime);
};

main();

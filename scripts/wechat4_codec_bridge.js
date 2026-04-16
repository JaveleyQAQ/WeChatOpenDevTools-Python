"use strict";

const readline = require("node:readline");

let codex;
let messageProto;
let constants;

try {
  codex = require("./wechat4_third_party/RemoteDebugCodex.js");
  messageProto = require("./wechat4_third_party/WARemoteDebugProtobuf.js");
  constants = require("./wechat4_third_party/RemoteDebugConstants.js");
} catch (error) {
  console.error(
    "failed to load WeChat 4 codec dependencies. Run `npm install` first. " +
      (error && error.stack ? error.stack : String(error)),
  );
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

let messageCounter = 0;
let notifyCounter = 0;

function reply(payload) {
  process.stdout.write(`${JSON.stringify(payload)}\n`);
}

function encodePayload(payload) {
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
  const encoded = messageProto.mmbizwxadevremote.WARemoteDebug_DebugMessage.encode(
    outData,
  ).finish();
  return Buffer.from(encoded).toString("base64");
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

function decodeRawDebugMessage(rawMessage) {
  const decodedData =
    messageProto.mmbizwxadevremote.WARemoteDebug_DebugMessage.decode(rawMessage);
  const unwrappedData = codex.unwrapDebugMessageData(decodedData);
  if (!unwrappedData || !unwrappedData.category) {
    return null;
  }

  return {
    frame_type: "debug_message",
    category: unwrappedData.category,
    payload:
      unwrappedData.data && typeof unwrappedData.data.payload === "string"
        ? unwrappedData.data.payload
        : null,
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
  const decoded = codex.unwrapClientProtoToDataFormat(rawMessage);
  if (
    !decoded ||
    typeof decoded.cmd !== "number" ||
    decoded.cmd === constants.ClientRequestCmd.Unknown
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

function decodePayloadAuto(rawMessageBase64) {
  const rawMessage = Buffer.from(String(rawMessageBase64 ?? ""), "base64");
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
  };
}

function encodeClientResponse(responseType, uuid, payload) {
  const encoded = codex.wrapClientResponseDataFormatToProto(
    payload,
    responseType,
    uuid ?? "",
  );
  return Buffer.from(encoded).toString("base64");
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
  const encoded = codex.wrapClientResponseDataFormatToProto(
    {
      debug_message: [debugMessage],
    },
    constants.ClientResponseType.MessageNotifyParallelly,
    uuid ?? "",
  );
  return Buffer.from(encoded).toString("base64");
}

rl.on("line", (line) => {
  let request;
  try {
    request = JSON.parse(line);
  } catch (error) {
    reply({
      id: null,
      ok: false,
      error: error && error.stack ? error.stack : String(error),
    });
    return;
  }

  try {
    if (request.type === "ping") {
      reply({ id: request.id, ok: true, data: { version: process.version } });
      return;
    }

    if (request.type === "encode") {
      reply({
        id: request.id,
        ok: true,
        data: encodePayload(request.payload),
      });
      return;
    }

    if (request.type === "decode") {
      const decoded = decodePayloadAuto(request.data);
      reply({
        id: request.id,
        ok: true,
        ...decoded,
      });
      return;
    }

    if (request.type === "encode_client_response") {
      reply({
        id: request.id,
        ok: true,
        data: encodeClientResponse(request.response_type, request.uuid, request.payload || {}),
      });
      return;
    }

    if (request.type === "encode_client_notify") {
      reply({
        id: request.id,
        ok: true,
        data: encodeClientNotify(request.payload, request.uuid),
      });
      return;
    }

    reply({
      id: request.id,
      ok: false,
      error: `unknown request type: ${request.type}`,
    });
  } catch (error) {
    reply({
      id: request.id,
      ok: false,
      error: error && error.stack ? error.stack : String(error),
    });
  }
});

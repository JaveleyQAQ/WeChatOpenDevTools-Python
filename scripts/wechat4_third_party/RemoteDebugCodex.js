! function(require, directRequire) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports.model = exports.wrapClientResponseDataFormatToProto = exports.unwrapClientProtoToDataFormat = exports.bufferToUint8Array = exports.uint8ArrayToBuffer = exports.unwrapProtoToDataFormat = exports.unwrapDebugMessageData = exports.wrapOutgoingToProto = exports.wrapDebugMessageData = exports.clientRequestCmdForType = exports.requestCmdForType = void 0;
  const e = require("zlib"),
    o = require('./WARemoteDebugProtobuf.js'),
    t = require('./RemoteDebugConstants.js'),
    s = require('./RemoteDebugUtils.js'),
    a = {e: (msg) => {console.error(msg)}};
  let n;

  function r(e) {
    return t.ResponseType[e] || t.ClientRequestType[e] || "<unknown>"
  }

  function i(e) {
    switch (e) {
      case t.RequestType.Login:
        return t.RequestCmd.Login;
      case t.RequestType.EventNotifyBegin:
        return t.RequestCmd.EventNotifyBegin;
      case t.RequestType.EventNotifyBlock:
        return t.RequestCmd.EventNotifyBlock;
      case t.RequestType.EventNotifyEnd:
        return t.RequestCmd.EventNotifyEnd;
      case t.RequestType.Heartbeat:
        return t.RequestCmd.Heartbeat;
      case t.RequestType.JoinRoom:
        return t.RequestCmd.JoinRoom;
      case t.RequestType.MessageNotifyParallelly:
        return t.RequestCmd.MessageNotifyParallelly;
      case t.RequestType.MessageNotify:
        return t.RequestCmd.MessageNotify;
      case t.RequestType.QuitRoom:
        return t.RequestCmd.QuitRoom;
      case t.RequestType.SendDebugMessage:
        return t.RequestCmd.SendDebugMessage;
      case t.RequestType.SyncMessage:
        return t.RequestCmd.SyncMessage;
      case t.RequestType.SendDebugMessageParallelly:
        return t.RequestCmd.SendDebugMessageParallelly;
      case t.ResponseType.MessageNotifyParallelly:
        return t.RequestCmd.MessageNotifyParallelly;
      default:
        return t.RequestCmd.Unknown
    }
  }

  function m(e) {
    switch (e) {
      case t.ClientResponseType.Login:
        return t.ClientRequestCmd.Login;
      case t.ClientResponseType.EventNotifyBegin:
        return t.ClientRequestCmd.EventNotifyBegin;
      case t.ClientResponseType.EventNotifyBlock:
        return t.ClientRequestCmd.EventNotifyBlock;
      case t.ClientResponseType.EventNotifyEnd:
        return t.ClientRequestCmd.EventNotifyEnd;
      case t.ClientResponseType.Heartbeat:
        return t.ClientRequestCmd.Heartbeat;
      case t.ClientResponseType.JoinRoom:
        return t.ClientRequestCmd.JoinRoom;
      case t.ClientResponseType.MessageNotifyParallelly:
        return t.ClientRequestCmd.MessageNotifyParallelly;
      case t.ClientResponseType.MessageNotify:
        return t.ClientRequestCmd.MessageNotify;
      case t.ClientResponseType.QuitRoom:
        return t.ClientRequestCmd.QuitRoom;
      case t.ClientResponseType.SendDebugMessage:
        return t.ClientRequestCmd.SendDebugMessage;
      case t.ClientResponseType.SyncMessage:
        return t.ClientRequestCmd.SyncMessage;
      case t.ClientResponseType.SendDebugMessageParallelly:
        return t.ClientRequestCmd.SendDebugMessageParallelly;
      default:
        return t.ClientRequestCmd.Unknown
    }
  }

  function b(r, i, m = 0) {
    let b = null;
    switch (i) {
      case t.DebugMessageCategory.CallInterface: {
        const e = r,
          t = {
            objName: e.name,
            methodName: e.method,
            methodArgList: e.args.map(e => String(e)),
            callId: e.call_id
          },
          n = o.mmbizwxadevremote.WARemoteDebug_CallInterface.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid callInterfaceObject obj", n), n
        }), b = o.mmbizwxadevremote.WARemoteDebug_CallInterface.encode(t).finish();
        break
      }
      case t.DebugMessageCategory.EvaluateJavascriptResult: {
        const e = r,
          t = {
            ret: e.ret,
            evaluateId: e.evaluate_id
          },
          n = o.mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid EvaluateJavascriptResult obj", n), n
        }), b = o.mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult.encode(t).finish();
        break
      }
      case t.DebugMessageCategory.Ping: {
        const e = r,
          t = {
            pingId: e.ping_id,
            payload: e.payload
          },
          n = o.mmbizwxadevremote.WARemoteDebug_Ping.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid Ping obj", n), n
        }), b = o.mmbizwxadevremote.WARemoteDebug_Ping.encode(t).finish();
        break
      }
      case t.DebugMessageCategory.Breakpoint: {
        const e = {
            isHit: Boolean(r.is_hit)
          },
          t = o.mmbizwxadevremote.WARemoteDebug_Breakpoint.verify(e);
        (0, s.expect)(Boolean(t), a).toBe(!1).fail(() => {
          throw a.e("invalid Breakpoint obj", t), t
        }), b = o.mmbizwxadevremote.WARemoteDebug_Breakpoint.encode(e).finish();
        break
      }
      case t.DebugMessageCategory.DomOp: {
        const e = r,
          t = {
            params: e.params,
            webviewId: e.webview_id
          },
          n = o.mmbizwxadevremote.WARemoteDebug_DomOp.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid DomOp obj", n), n
        }), b = o.mmbizwxadevremote.WARemoteDebug_DomOp.encode(t).finish();
        break
      }
      case t.DebugMessageCategory.DomEvent: {
        const e = r,
          t = {
            params: e.params,
            webviewId: e.webview_id
          },
          n = o.mmbizwxadevremote.WARemoteDebug_DomEvent.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid DomOp obj", n), n
        }), b = o.mmbizwxadevremote.WARemoteDebug_DomEvent.encode(t).finish();
        break
      }
      case t.DebugMessageCategory.ChromeDevtools: {
        const e = r,
          t = {
            opId: e.op_id,
            payload: e.payload,
            jscontextId: e.jscontext_id
          },
          n = o.mmbizwxadevremote.WARemoteDebug_ChromeDevtools.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid chrome devtools object", n), n
        }), b = o.mmbizwxadevremote.WARemoteDebug_ChromeDevtools.encode(t).finish();
        break
      }
      case t.DebugMessageCategory.ConnectJsContext: {
        const e = {
            jscontextId: r.jscontext_id
          },
          t = o.mmbizwxadevremote.WARemoteDebug_ConnectJsContext.verify(e);
        (0, s.expect)(Boolean(t), a).toBe(!1).fail(() => {
          throw a.e("invalid connect js context object", t), t
        }), b = o.mmbizwxadevremote.WARemoteDebug_ConnectJsContext.encode(e).finish();
        break
      }
      case t.DebugMessageCategory.CustomMessage: {
        const e = r,
          t = {
            method: e.method,
            payload: e.payload,
            raw: e.raw
          },
          n = o.mmbizwxadevremote.WARemoteDebug_CustomMessage.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid custom message object", n), n
        }), b = o.mmbizwxadevremote.WARemoteDebug_CustomMessage.encode(t).finish();
        break
      }
      default:
        throw a.e("invalid debug message category", i), new Error("invalid debug message category " + i)
    }
    let d = 0;
    if (b && m && 0 != (m & t.CompressAlgo.Zlib)) {
      Date.now();
      d = b.byteLength, b = e.deflateSync(u(b)), b = g(b), n.compressionSavedBytes += d - b.byteLength
    }
    return {
      buffer: b,
      originalSize: d
    }
  }

  function d(e) {
    return e.map(e => {
      const o = b(e.data, e.category, e.compress_algo);
      return {
        seq: e.seq,
        delay: e.delay,
        category: e.category,
        data: o.buffer,
        compressAlgo: e.compress_algo,
        originalSize: o.originalSize
      }
    })
  }

  function c(s) {
    const r = "string" == typeof s.data ? Buffer.from(s.data) : s.data;
    let i = r,
      m = 0;
    if (r && s.compressAlgo && 0 != (s.compressAlgo & t.CompressAlgo.Zlib)) {
      Date.now();
      m = i.byteLength, i = e.inflateSync(r), n.compressionSavedBytes += i.byteLength - m
    }
    let b = null;
    const d = s.category;
    if (i) switch (s.category) {
      case t.DebugMessageCategory.Breakpoint: {
        const e = o.mmbizwxadevremote.WARemoteDebug_Breakpoint.decode(i);
        b = {
          is_hit: o.mmbizwxadevremote.WARemoteDebug_Breakpoint.toObject(e).isHit ? 1 : 0
        };
        break
      }
      case t.DebugMessageCategory.CallInterface: {
        const e = o.mmbizwxadevremote.WARemoteDebug_CallInterface.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_CallInterface.toObject(e);
        b = {
          name: t.objName,
          method: t.methodName,
          args: t.methodArgList,
          call_id: t.callId
        };
        break
      }
      case t.DebugMessageCategory.CallInterfaceResult: {
        const e = o.mmbizwxadevremote.WARemoteDebug_CallInterfaceResult.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_CallInterfaceResult.toObject(e);
        b = {
          ret: t.ret,
          call_id: t.callId,
          debug_info: t.debugInfo
        };
        break
      }
      case t.DebugMessageCategory.EvaluateJavascript: {
        const e = o.mmbizwxadevremote.WARemoteDebug_EvaluateJavascript.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_EvaluateJavascript.toObject(e);
        b = {
          script: t.script,
          evaluate_id: t.evaluateId,
          debug_info: t.debugInfo
        };
        break
      }
      case t.DebugMessageCategory.EvaluateJavascriptResult: {
        const e = o.mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult.toObject(e);
        b = {
          ret: t.ret,
          evaluate_id: t.evaluateId
        };
        break
      }
      case t.DebugMessageCategory.Ping: {
        const e = o.mmbizwxadevremote.WARemoteDebug_Ping.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_Ping.toObject(e);
        b = {
          ping_id: t.pingId,
          payload: t.payload
        };
        break
      }
      case t.DebugMessageCategory.Pong: {
        const e = o.mmbizwxadevremote.WARemoteDebug_Pong.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_Pong.toObject(e, {
            longs: Number
          });
        b = {
          ping_id: t.pingId,
          network_type: t.networkType,
          payload: t.payload
        };
        break
      }
      case t.DebugMessageCategory.SetupContext: {
        const e = o.mmbizwxadevremote.WARemoteDebug_SetupContext.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_SetupContext.toObject(e);
        b = {
          register_interface: {
            obj_name: (t.registerInterface || {}).objName,
            obj_methods: ((t.registerInterface || {}).objMethodList || []).map(e => ({
              method_name: e.methodName,
              method_args: e.methodArgList
            }))
          },
          configure_js: t.configureJs,
          public_js_md5: t.publicJsMd5,
          three_js_md5: t.threeJsMd5,
          device_info: {
            device_name: (t.deviceInfo || {}).deviceName,
            device_model: (t.deviceInfo || {}).deviceModel,
            os: (t.deviceInfo || {}).systemVersion,
            wechat_version: (t.deviceInfo || {}).wechatVersion,
            pixel_ratio: (t.deviceInfo || {}).pixelRatio,
            screen_width: (t.deviceInfo || {}).screenWidth,
            publib: (t.deviceInfo || {}).publibVersion,
            user_agent: (t.deviceInfo || {}).userAgent
          },
          support_compress_algo: t.supportCompressAlgo
        };
        break
      }
      case t.DebugMessageCategory.DomOp: {
        const e = o.mmbizwxadevremote.WARemoteDebug_DomOp.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_DomOp.toObject(e);
        b = {
          params: t.params,
          webview_id: t.webviewId
        };
        break
      }
      case t.DebugMessageCategory.DomEvent: {
        const e = o.mmbizwxadevremote.WARemoteDebug_DomEvent.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_DomEvent.toObject(e);
        b = {
          params: t.params,
          webview_id: t.webviewId
        };
        break
      }
      case t.DebugMessageCategory.NetworkDebugAPI: {
        const e = o.mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI.toObject(e);
        b = {
          api_name: t.apiName,
          task_id: t.taskId,
          request_headers: t.requestHeaders,
          timestamp: t.timestamp
        };
        break
      }
      case t.DebugMessageCategory.ChromeDevtools: {
        const e = o.mmbizwxadevremote.WARemoteDebug_ChromeDevtools.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_ChromeDevtools.toObject(e);
        b = {
          op_id: t.opId,
          payload: t.payload,
          jscontext_id: t.jscontextId
        };
        break
      }
      case t.DebugMessageCategory.ChromeDevtoolsResult: {
        const e = o.mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult.toObject(e);
        b = {
          op_id: t.opId,
          payload: t.payload,
          jscontext_id: t.jscontextId
        };
        break
      }
      case t.DebugMessageCategory.AddJsContext: {
        const e = o.mmbizwxadevremote.WARemoteDebug_AddJsContext.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_AddJsContext.toObject(e);
        b = {
          jscontext_id: t.jscontextId,
          jscontext_name: t.jscontextName
        };
        break
      }
      case t.DebugMessageCategory.RemoveJsContext: {
        const e = o.mmbizwxadevremote.WARemoteDebug_RemoveJsContext.decode(i);
        b = {
          jscontext_id: o.mmbizwxadevremote.WARemoteDebug_RemoveJsContext.toObject(e).jscontextId
        };
        break
      }
      case t.DebugMessageCategory.ConnectJsContext: {
        const e = o.mmbizwxadevremote.WARemoteDebug_ConnectJsContext.decode(i);
        b = {
          jscontext_id: o.mmbizwxadevremote.WARemoteDebug_ConnectJsContext.toObject(e).jscontextId
        };
        break
      }
      case t.DebugMessageCategory.CustomMessage: {
        const e = o.mmbizwxadevremote.WARemoteDebug_CustomMessage.decode(i),
          t = o.mmbizwxadevremote.WARemoteDebug_CustomMessage.toObject(e);
        b = {
          method: t.method,
          payload: t.payload,
          raw: t.raw
        };
        break
      }
      default:
        a.e("invalid debug object category"), b = null
    } else b = null;
    return {
      seq: s.seq || 0,
      delay: s.after || 0,
      category: d || t.DebugMessageCategory.Ping,
      data: b || {},
      compress_algo: s.compressAlgo || 0,
      original_size: s.originalSize || m
    }
  }

  function u(e) {
    let o = Buffer.from(e.buffer);
    return e.byteLength !== e.buffer.byteLength && (o = o.slice(e.byteOffset, e.byteOffset + e.byteLength)), o
  }

  function g(e) {
    if (!e) throw new Error("invalid buffer " + e);
    if ("Uint8Array" === e.constructor.name || e.constructor === Uint8Array) return e;
    "string" == typeof e && (e = Buffer.from(e));
    const o = new Uint8Array(e.length);
    for (let t = 0; t < e.length; t++) o[t] = e[t];
    return o
  }
  exports.requestCmdForType = i, exports.clientRequestCmdForType = m, exports.wrapDebugMessageData = b, exports.wrapOutgoingToProto = function(e, n, r, m = !1) {
    let b = null;
    switch (n) {
      case t.RequestType.Login: {
        const t = e,
          n = {
            baseRequest: {
              clientVersion: t.base_request.clientversion
            },
            newticket: t.newticket
          };
        t.autodev && (n.autodev = t.autodev);
        const r = o.mmbizwxadevremote.WARemoteDebug_DevLoginReq.verify(n);
        (0, s.expect)(Boolean(r), a).toBe(!1).fail(() => {
          throw a.e("invalid login request obj", r), r
        }), b = o.mmbizwxadevremote.WARemoteDebug_DevLoginReq.encode(n).finish();
        break
      }
      case t.RequestType.JoinRoom: {
        const t = e,
          n = {
            baseRequest: {
              clientVersion: t.base_request.clientversion
            },
            appid: t.appid,
            roomId: t.room_id,
            wxpkgInfo: t.wxpkg_info
          },
          r = o.mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq.verify(n);
        (0, s.expect)(Boolean(r), a).toBe(!1).fail(() => {
          throw a.e("invalid join room request obj", r), r
        }), b = o.mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq.encode(n).finish();
        break
      }
      case t.RequestType.Heartbeat: {
        const t = e,
          n = {
            baseRequest: {
              clientVersion: t.base_request.clientversion
            },
            recvAck: t.recv_ack
          },
          r = o.mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq.verify(n);
        (0, s.expect)(Boolean(r), a).toBe(!1).fail(() => {
          throw a.e("invalid heartbeat request obj", r), r
        }), b = o.mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq.encode(n).finish();
        break
      }
      case t.RequestType.SendDebugMessageParallelly:
        if (m) {
          const t = {
              debugMessageList: d(e.debug_message)
            },
            n = o.mmbizwxadevremote.WARemoteDebug_MessageNotify.verify(t);
          (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
            throw a.e("invalid SendDebugMessageParallelly request obj", n), n
          }), b = o.mmbizwxadevremote.WARemoteDebug_MessageNotify.encode(t).finish();
          break
        } {
          const t = e,
            n = {
              baseRequest: {
                clientVersion: t.base_request.clientversion
              },
              recvAck: t.recv_ack,
              debugMessageList: d(t.debug_message)
            },
            r = o.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq.verify(n);
          (0, s.expect)(Boolean(r), a).toBe(!1).fail(() => {
            throw a.e("invalid SendDebugMessageParallelly request obj", r), r
          }), b = o.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq.encode(n).finish();
          break
        }
      case t.RequestType.SendDebugMessage: {
        const t = e,
          n = {
            baseRequest: {
              clientVersion: t.base_request.clientversion
            },
            recvAck: t.recv_ack,
            debugMessageList: d(t.debug_message)
          },
          r = o.mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq.verify(n);
        (0, s.expect)(Boolean(r), a).toBe(!1).fail(() => {
          throw a.e("invalid SendDebugMessage request obj", r), r
        }), b = o.mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq.encode(n).finish();
        break
      }
      case t.RequestType.QuitRoom: {
        const t = {
            baseRequest: {
              clientVersion: e.base_request.clientversion
            }
          },
          n = o.mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid QuitRoom request obj", n), n
        }), b = o.mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq.encode(t).finish();
        break
      }
      case t.RequestType.SyncMessage: {
        const t = e,
          n = {
            baseRequest: {
              clientVersion: t.base_request.clientversion
            },
            minSeq: t.min_seq
          };
        "number" == typeof t.max_seq && (n.maxSeq = t.max_seq);
        const r = o.mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq.verify(n);
        (0, s.expect)(Boolean(r), a).toBe(!1).fail(() => {
          throw a.e("invalid SyncMessage request obj", r), r
        }), b = o.mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq.encode(n).finish();
        break
      }
      case t.ResponseType.MessageNotifyParallelly: {
        const e = {
          errcode: 0,
          errmsg: ""
        };
        b = o.mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp.encode({
          baseResponse: e
        }).finish();
        break
      }
      default:
        throw a.e("error wrapping outgoing object, invalid type", n), new Error("error wrapping outgoing object, invalid type " + n)
    }
    const c = o.mmbizwxadevremote.WARemoteDebug_DataFormat.create({
      cmd: i(n),
      uuid: r,
      data: b
    });
    return o.mmbizwxadevremote.WARemoteDebug_DataFormat.encode(c).finish()
  }, exports.unwrapDebugMessageData = c, exports.unwrapProtoToDataFormat = function(e) {
    const s = o.mmbizwxadevremote.WARemoteDebug_DataFormat.decode(e),
      n = "string" == typeof s.data ? Buffer.from(s.data) : s.data;
    let i = null;
    switch (s.cmd) {
      case t.ResponseType.Heartbeat: {
        const e = o.mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp.decode(n);
        i = {
          base_response: o.mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp.toObject(e).baseResponse
        };
        break
      }
      case t.ResponseType.Login: {
        const e = o.mmbizwxadevremote.WARemoteDebug_DevLoginResp.decode(n),
          t = o.mmbizwxadevremote.WARemoteDebug_DevLoginResp.toObject(e);
        i = {
          base_response: t.baseResponse,
          room_info: {
            join_room: (t.roomInfo || {}).joinRoom,
            original_md5: (t.roomInfo || {}).originalMd5,
            room_status: (t.roomInfo || {}).roomStatus,
            wx_conn_status: (t.roomInfo || {}).wxConnStatus,
            dev_conn_status: (t.roomInfo || {}).devConnStatus,
            room_id: (t.roomInfo || {}).roomId
          }
        };
        break
      }
      case t.ResponseType.EventNotifyEnd:
      case t.ResponseType.EventNotifyBlock:
      case t.ResponseType.EventNotifyBegin: {
        const e = o.mmbizwxadevremote.WARemoteDebug_EventNotify.decode(n),
          t = o.mmbizwxadevremote.WARemoteDebug_EventNotify.toObject(e);
        i = {
          base_response: Object.assign({}, t.baseResponse || {})
        };
        break
      }
      case t.ResponseType.JoinRoom: {
        const e = o.mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp.decode(n);
        i = {
          base_response: o.mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp.toObject(e).baseResponse
        };
        break
      }
      case t.ResponseType.MessageNotifyParallelly:
      case t.ResponseType.MessageNotify: {
        const e = o.mmbizwxadevremote.WARemoteDebug_MessageNotify.decode(n).debugMessageList,
          t = [];
        for (const o of e) t.push(c(o));
        i = {
          debug_message: t
        };
        break
      }
      case t.ResponseType.QuitRoom: {
        const e = o.mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp.decode(n);
        i = {
          base_response: o.mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp.toObject(e).baseResponse
        };
        break
      }
      case t.ResponseType.SendDebugMessageParallelly: {
        const e = o.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp.decode(n),
          t = o.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp.toObject(e);
        i = {
          base_response: t.baseResponse,
          max_ack: t.maxAck,
          min_ack: t.minAck
        };
        break
      }
      case t.ResponseType.SendDebugMessage: {
        const e = o.mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp.decode(n),
          t = o.mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp.toObject(e);
        i = {
          base_response: t.baseResponse,
          send_ack: t.sendAck
        };
        break
      }
      case t.ResponseType.SyncMessage: {
        const e = o.mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp.decode(n),
          t = e.debugMessageList,
          s = [];
        for (const e of t) s.push(c(e));
        i = {
          debug_message: s,
          send_ack: e.sendAck,
          base_response: e.baseResponse
        };
        break
      }
      default:
        a.e("error receive invalid cmd", s.cmd), i = {}
    }
    return {
      cmd: s.cmd,
      uuid: s.uuid,
      data: i,
      _comment: r(s.cmd)
    }
  }, exports.uint8ArrayToBuffer = u, exports.bufferToUint8Array = g, exports.unwrapClientProtoToDataFormat = function(e) {
    const s = o.mmbizwxadevremote.WARemoteDebug_DataFormat.decode(e),
      n = "string" == typeof s.data ? Buffer.from(s.data) : s.data;
    let i = null;
    switch (s.cmd) {
      case t.ClientRequestCmd.Login: {
        const e = o.mmbizwxadevremote.WARemoteDebug_WxLoginReq.decode(n),
          t = o.mmbizwxadevremote.WARemoteDebug_WxLoginReq.toObject(e);
        i = {
          base_request: {
            clientversion: t.baseRequest
          },
          loginticket: t.loginTicket
        };
        break
      }
      case t.ClientRequestCmd.Heartbeat: {
        const e = o.mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq.decode(n),
          t = o.mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq.toObject(e);
        i = {
          base_request: {
            clientversion: t.baseRequest
          },
          recv_ack: t.recvAck
        };
        break
      }
      case t.ClientRequestCmd.JoinRoom: {
        const e = o.mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq.decode(n),
          t = o.mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq.toObject(e);
        i = {
          base_request: {
            clientversion: t.baseRequest
          },
          wxpkg_info: t.wxpkgInfo,
          username: t.username,
          room_id: t.roomId
        };
        break
      }
      case t.ClientRequestCmd.QuitRoom: {
        const e = o.mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq.decode(n);
        i = {
          base_request: {
            clientversion: o.mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq.toObject(e).baseRequest
          }
        };
        break
      }
      case t.ClientRequestCmd.SendDebugMessageParallelly: {
        const e = o.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq.decode(n),
          t = o.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq.toObject(e);
        i = {
          base_request: {
            clientversion: t.baseRequest
          },
          debug_message: (t.debugMessageList || []).map(e => c(e)),
          recv_ack: t.recvAck
        };
        break
      }
      case t.ClientRequestCmd.SyncMessage: {
        const e = o.mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq.decode(n),
          t = o.mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq.toObject(e);
        i = {
          base_request: {
            clientversion: t.baseRequest
          },
          min_seq: t.minSeq,
          max_seq: t.maxSeq
        };
        break
      }
      default:
        a.e("error receive invalid cmd", s.cmd), i = {}
    }
    return {
      cmd: s.cmd,
      uuid: s.uuid,
      data: i,
      _comment: r(s.cmd)
    }
  }, exports.wrapClientResponseDataFormatToProto = function(e, n, r) {
    let i = null;
    switch (n) {
      case t.ClientResponseType.Login: {
        const t = e,
          n = {
            baseResponse: {
              errcode: (t.base_response || {}).errcode,
              errmsg: (t.base_response || {}).errmsg
            },
            roomInfo: {
              joinRoom: (t.room_info || {}).join_room,
              originalMd5: (t.room_info || {}).original_md5,
              roomStatus: (t.room_info || {}).room_status,
              wxConnStatus: (t.room_info || {}).wx_conn_status,
              devConnStatus: (t.room_info || {}).dev_conn_status,
              roomId: (t.room_info || {}).room_id
            }
          },
          r = o.mmbizwxadevremote.WARemoteDebug_WxLoginResp.verify(n);
        (0, s.expect)(Boolean(r), a).toBe(!1).fail(() => {
          throw a.e("invalid client login response obj", r), r
        }), i = o.mmbizwxadevremote.WARemoteDebug_WxLoginResp.encode(n).finish();
        break
      }
      case t.ClientResponseType.JoinRoom: {
        const t = {
            baseResponse: e.base_response
          },
          n = o.mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid client join room response obj", n), n
        }), i = o.mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp.encode(t).finish();
        break
      }
      case t.ClientResponseType.Heartbeat: {
        const t = {
            baseResponse: e.base_response
          },
          n = o.mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid client heartbeat response obj", n), n
        }), i = o.mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp.encode(t).finish();
        break
      }
      case t.ClientResponseType.SendDebugMessageParallelly: {
        const t = e,
          n = {
            baseResponse: t.base_response,
            maxAck: t.max_ack,
            minAck: t.min_ack
          },
          r = o.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp.verify(n);
        (0, s.expect)(Boolean(r), a).toBe(!1).fail(() => {
          throw a.e("invalid client SendDebugMessageParallelly response obj", r), r
        }), i = o.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp.encode(n).finish();
        break
      }
      case t.ClientResponseType.QuitRoom: {
        const t = {
            baseResponse: e.base_response
          },
          n = o.mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid client QuitRoom response obj", n), n
        }), i = o.mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp.encode(t).finish();
        break
      }
      case t.ClientResponseType.SyncMessage: {
        const t = e,
          n = {
            baseResponse: t.base_response,
            debugMessageList: d(t.debug_message),
            sendAck: t.send_ack
          },
          r = o.mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp.verify(n);
        (0, s.expect)(Boolean(r), a).toBe(!1).fail(() => {
          throw a.e("invalid client sync message response obj", r), r
        }), i = o.mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp.encode(n).finish();
        break
      }
      case t.ClientResponseType.MessageNotifyParallelly: {
        const t = {
            debugMessageList: d(e.debug_message)
          },
          n = o.mmbizwxadevremote.WARemoteDebug_MessageNotify.verify(t);
        (0, s.expect)(Boolean(n), a).toBe(!1).fail(() => {
          throw a.e("invalid client MessageNotifyParallelly response obj", n), n
        }), i = o.mmbizwxadevremote.WARemoteDebug_MessageNotify.encode(t).finish();
        break
      }
      case t.ClientResponseType.EventNotifyEnd:
      case t.ClientResponseType.EventNotifyBlock:
      case t.ClientResponseType.EventNotifyBegin: {
        const e = {},
          t = o.mmbizwxadevremote.WARemoteDebug_EventNotify.verify(e);
        (0, s.expect)(Boolean(t), a).toBe(!1).fail(() => {
          throw a.e("invalid client ClientEventNotify response obj", t), t
        }), i = o.mmbizwxadevremote.WARemoteDebug_EventNotify.encode(e).finish();
        break
      }
      default:
        throw a.e("error wrapping outgoing object, invalid type", n), new Error("error wrapping outgoing object, invalid type " + n)
    }
    const b = o.mmbizwxadevremote.WARemoteDebug_DataFormat.create({
      cmd: m(n),
      uuid: r,
      data: i
    });
    return o.mmbizwxadevremote.WARemoteDebug_DataFormat.encode(b).finish()
  }, exports.model = {
    resetStatistics() {
      n = {
        compressionSavedBytes: 0
      }
    },
    getCompressionSavedBytes: () => n.compressionSavedBytes || 0
  }, exports.model.resetStatistics();
}(require, require)
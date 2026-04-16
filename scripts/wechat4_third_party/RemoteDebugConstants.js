! function(require, directRequire) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports.PubLibMap = exports.DevtoolNetworkType = exports.ClientNetWorkSpeed = exports.ClientNetWorkType = exports.KnownErrorCode = exports.DebugMessageCategory = exports.ClientRequestCmd = exports.RequestCmd = exports.ClientResponseType = exports.ClientRequestType = exports.RequestType = exports.CompressAlgo = exports.ResponseType = exports.RemoteDataPrefix = exports.RemoteRuntimePrefx = exports.RemoteAppPrefix = exports.RemoteVendorDir = exports.RemoteLogDir = exports.RemoteDataDir = exports.RemoteTempDir = exports.RemoteDir = exports.RemoteHttpUrlHost = exports.RemoteUrl = void 0;
  // const e = require('./87340deef308fb62efd7eb7a7e63e98d.js');
  // exports.RemoteUrl = "wss://wxagame.weixin.qq.com/remote/", exports.RemoteHttpUrlHost = "https://servicewechat.com/wxa-dev-cloud/", exports.RemoteDir = e.WeappRemote, exports.RemoteTempDir = e.WeappRemoteTemp, exports.RemoteDataDir = e.WeappRemoteData, exports.RemoteLogDir = e.WeappRemoteLog, exports.RemoteVendorDir = e.WeappRemoteVendor, exports.RemoteAppPrefix = "REMOTE_DEBUG_APP/", exports.RemoteRuntimePrefx = "REMOTE_DEBUG_RUNTIME/", exports.RemoteDataPrefix = "REMOTE_DEBUG_DATA/",
  exports, function(e) {
      e[e.Heartbeat = 2001] = "Heartbeat", e[e.Login = 2002] = "Login", e[e.EventNotifyBegin = 3001] = "EventNotifyBegin", e[e.EventNotifyEnd = 3002] = "EventNotifyEnd", e[e.EventNotifyBlock = 3003] = "EventNotifyBlock", e[e.JoinRoom = 2003] = "JoinRoom", e[e.SendDebugMessage = 2e3] = "SendDebugMessage", e[e.SendDebugMessageParallelly = 2006] = "SendDebugMessageParallelly", e[e.QuitRoom = 2004] = "QuitRoom", e[e.MessageNotify = 1e3] = "MessageNotify", e[e.MessageNotifyParallelly = 1006] = "MessageNotifyParallelly", e[e.SyncMessage = 2005] = "SyncMessage", e[e.Unknown = -1] = "Unknown"
    }(exports.ResponseType || (exports.ResponseType = {})),
    function(e) {
      e[e.None = 0] = "None", e[e.Zlib = 1] = "Zlib"
    }(exports.CompressAlgo || (exports.CompressAlgo = {})),
    function(e) {
      e[e.Heartbeat = 2001] = "Heartbeat", e[e.Login = 2002] = "Login", e[e.EventNotifyBegin = 3001] = "EventNotifyBegin", e[e.EventNotifyEnd = 3002] = "EventNotifyEnd", e[e.EventNotifyBlock = 3003] = "EventNotifyBlock", e[e.JoinRoom = 2003] = "JoinRoom", e[e.SendDebugMessage = 2e3] = "SendDebugMessage", e[e.SendDebugMessageParallelly = 2006] = "SendDebugMessageParallelly", e[e.QuitRoom = 2004] = "QuitRoom", e[e.MessageNotify = 1e3] = "MessageNotify", e[e.MessageNotifyParallelly = 1006] = "MessageNotifyParallelly", e[e.SyncMessage = 2005] = "SyncMessage", e[e.Unknown = -1] = "Unknown"
    }(exports.RequestType || (exports.RequestType = {})),
    function(e) {
      e[e.Heartbeat = 1001] = "Heartbeat", e[e.Login = 1002] = "Login", e[e.EventNotifyBegin = 3001] = "EventNotifyBegin", e[e.EventNotifyEnd = 3002] = "EventNotifyEnd", e[e.EventNotifyBlock = 3003] = "EventNotifyBlock", e[e.JoinRoom = 1003] = "JoinRoom", e[e.SendDebugMessage = 1e3] = "SendDebugMessage", e[e.SendDebugMessageParallelly = 1006] = "SendDebugMessageParallelly", e[e.QuitRoom = 1004] = "QuitRoom", e[e.MessageNotify = 2e3] = "MessageNotify", e[e.MessageNotifyParallelly = 2006] = "MessageNotifyParallelly", e[e.SyncMessage = 1005] = "SyncMessage", e[e.Unknown = -1] = "Unknown"
    }(exports.ClientRequestType || (exports.ClientRequestType = {})),
    function(e) {
      e[e.Heartbeat = 1001] = "Heartbeat", e[e.Login = 1002] = "Login", e[e.EventNotifyBegin = 3001] = "EventNotifyBegin", e[e.EventNotifyEnd = 3002] = "EventNotifyEnd", e[e.EventNotifyBlock = 3003] = "EventNotifyBlock", e[e.JoinRoom = 1003] = "JoinRoom", e[e.SendDebugMessage = 1e3] = "SendDebugMessage", e[e.SendDebugMessageParallelly = 1006] = "SendDebugMessageParallelly", e[e.QuitRoom = 1004] = "QuitRoom", e[e.MessageNotify = 2e3] = "MessageNotify", e[e.MessageNotifyParallelly = 2006] = "MessageNotifyParallelly", e[e.SyncMessage = 1005] = "SyncMessage", e[e.Unknown = -1] = "Unknown"
    }(exports.ClientResponseType || (exports.ClientResponseType = {})),
    function(e) {
      e[e.Heartbeat = 2001] = "Heartbeat", e[e.Login = 2002] = "Login", e[e.EventNotifyBegin = 3001] = "EventNotifyBegin", e[e.EventNotifyEnd = 3002] = "EventNotifyEnd", e[e.EventNotifyBlock = 3003] = "EventNotifyBlock", e[e.JoinRoom = 2003] = "JoinRoom", e[e.SendDebugMessage = 2e3] = "SendDebugMessage", e[e.SendDebugMessageParallelly = 2006] = "SendDebugMessageParallelly", e[e.QuitRoom = 2004] = "QuitRoom", e[e.MessageNotify = 1e3] = "MessageNotify", e[e.MessageNotifyParallelly = 1006] = "MessageNotifyParallelly", e[e.SyncMessage = 2005] = "SyncMessage", e[e.Unknown = -1] = "Unknown"
    }(exports.RequestCmd || (exports.RequestCmd = {})),
    function(e) {
      e[e.Heartbeat = 1001] = "Heartbeat", e[e.Login = 1002] = "Login", e[e.EventNotifyBegin = 3001] = "EventNotifyBegin", e[e.EventNotifyEnd = 3002] = "EventNotifyEnd", e[e.EventNotifyBlock = 3003] = "EventNotifyBlock", e[e.JoinRoom = 1003] = "JoinRoom", e[e.SendDebugMessage = 1e3] = "SendDebugMessage", e[e.SendDebugMessageParallelly = 1006] = "SendDebugMessageParallelly", e[e.QuitRoom = 1004] = "QuitRoom", e[e.MessageNotify = 2e3] = "MessageNotify", e[e.MessageNotifyParallelly = 2006] = "MessageNotifyParallelly", e[e.SyncMessage = 1005] = "SyncMessage", e[e.Unknown = -1] = "Unknown"
    }(exports.ClientRequestCmd || (exports.ClientRequestCmd = {})),
    function(e) {
      e.SetupContext = "setupContext", e.CallInterface = "callInterface", e.EvaluateJavascript = "evaluateJavascript", e.CallInterfaceResult = "callInterfaceResult", e.EvaluateJavascriptResult = "evaluateJavascriptResult", e.Breakpoint = "breakpoint", e.Ping = "ping", e.Pong = "pong", e.DomOp = "domOp", e.DomEvent = "domEvent", e.NetworkDebugAPI = "networkDebugAPI", e.ChromeDevtools = "chromeDevtools", e.ChromeDevtoolsResult = "chromeDevtoolsResult", e.AddJsContext = "addJsContext", e.RemoveJsContext = "removeJsContext", e.ConnectJsContext = "connectJsContext", e.EngineEvent = "engineEvent", e.EngineOp = "engineOp", e.CustomMessage = "customMessage"
    }(exports.DebugMessageCategory || (exports.DebugMessageCategory = {})),
    function(e) {
      e[e.OK = 0] = "OK", e[e.ERR_SYS = -1] = "ERR_SYS", e[e.NOT_EXIST = 1] = "NOT_EXIST", e[e.INVALID_ARGS = -2] = "INVALID_ARGS", e[e.SYSTEM_BUSY = -3] = "SYSTEM_BUSY", e[e.INVALID_LOGIN_TICKET = -50001] = "INVALID_LOGIN_TICKET", e[e.HAS_NO_PERMISSION = -50002] = "HAS_NO_PERMISSION", e[e.ROOM_IN_DEBUGGING = -50003] = "ROOM_IN_DEBUGGING", e[e.NO_EXIST_ROOM = -50004] = "NO_EXIST_ROOM", e[e.MD5_NOT_MATCH = -50005] = "MD5_NOT_MATCH", e[e.USER_IN_DEBUGGING = -50006] = "USER_IN_DEBUGGING", e[e.SEQ_ERROR = -50010] = "SEQ_ERROR", e[e.SEND_MSG_BUSY = -50011] = "SEND_MSG_BUSY", e[e.SEND_MSG_SEQ_RANGE_ERROR = -50012] = "SEND_MSG_SEQ_RANGE_ERROR"
    }(exports.KnownErrorCode || (exports.KnownErrorCode = {})),
    function(e) {
      e[e.Offline = 0] = "Offline", e[e.TwoG = 1] = "TwoG", e[e.ThreeG = 2] = "ThreeG", e[e.FourG = 3] = "FourG", e[e.WiFi = 4] = "WiFi", e[e.Other = 5] = "Other", e[e.AndroidCable = -1] = "AndroidCable", e[e.IOSCable = -2] = "IOSCable", e[e.Local = -3] = "Local"
    }(exports.ClientNetWorkType || (exports.ClientNetWorkType = {})),
    function(e) {
      e[e.Lost = 0] = "Lost", e[e.VeryBad = 1] = "VeryBad", e[e.Bad = 2] = "Bad", e[e.Normal = 3] = "Normal", e[e.Good = 4] = "Good", e[e.VeryGood = 5] = "VeryGood"
    }(exports.ClientNetWorkSpeed || (exports.ClientNetWorkSpeed = {})),
    function(e) {
      e[e.bluetooth = 11] = "bluetooth", e[e.bellular = 12] = "bellular", e[e.ethernet = 13] = "ethernet", e[e.mixed = 14] = "mixed", e[e.none = 15] = "none", e[e.other = 16] = "other", e[e.unknown = 17] = "unknown", e[e.wifi = 18] = "wifi", e[e.wimax = 19] = "wimax"
    }(exports.DevtoolNetworkType || (exports.DevtoolNetworkType = {})), exports.PubLibMap = {
      33: {
        number_version: 33,
        version: "6.5.4.1",
        status: 1
      },
      34: {
        number_version: 34,
        version: "6.5.3.1",
        status: 1
      },
      35: {
        number_version: 35,
        version: "6.5.4.2",
        status: 1
      },
      36: {
        number_version: 36,
        version: "6.5.6.1",
        status: 1
      },
      37: {
        number_version: 37,
        version: "6.5.4.2",
        status: 1
      },
      38: {
        number_version: 38,
        version: "1.1.0",
        status: 1
      },
      39: {
        number_version: 39,
        version: "1.1.1",
        status: 1
      },
      40: {
        number_version: 40,
        version: "1.0.1",
        status: 1
      },
      41: {
        number_version: 41,
        version: "1.1.1",
        status: 1
      },
      42: {
        number_version: 42,
        version: "1.2.0",
        status: 1
      },
      43: {
        number_version: 43,
        version: "1.2.1",
        status: 1
      },
      44: {
        number_version: 44,
        version: "1.2.2",
        status: 1
      },
      45: {
        number_version: 45,
        version: "1.2.3",
        status: 1
      },
      46: {
        number_version: 46,
        version: "1.2.2",
        status: 1
      },
      47: {
        number_version: 47,
        version: "1.2.4",
        status: 1
      },
      48: {
        number_version: 48,
        version: "1.2.5",
        status: 1
      },
      49: {
        number_version: 49,
        version: "1.2.4",
        ios_begin_ver: 0,
        ios_end_ver: 0,
        android_begin_ver: 637864048,
        android_end_ver: 637864049,
        status: 1
      },
      50: {
        number_version: 50,
        version: "1.2.6",
        ios_begin_ver: 369428480,
        ios_end_ver: 536870911,
        android_begin_ver: 637863936,
        android_end_ver: 805306367,
        status: 1
      },
      51: {
        number_version: 51,
        version: "1.3.0",
        ios_begin_ver: 369428736,
        ios_end_ver: 536870911,
        android_begin_ver: 637864448,
        android_end_ver: 805306367,
        status: 1
      },
      52: {
        number_version: 52,
        version: "1.3.0",
        ios_begin_ver: 0,
        ios_end_ver: 0,
        android_begin_ver: 637864448,
        android_end_ver: 805306367,
        status: 1
      },
      53: {
        number_version: 53,
        version: "1.4.0",
        ios_begin_ver: 369428992,
        ios_end_ver: 536870911,
        android_begin_ver: 637864448,
        android_end_ver: 805306367,
        status: 1
      },
      54: {
        number_version: 54,
        version: "1.4.0",
        ios_begin_ver: 369428992,
        ios_end_ver: 536870911,
        android_begin_ver: 637864448,
        android_end_ver: 805306367,
        status: 1
      },
      55: {
        number_version: 55,
        version: "1.4.1",
        ios_begin_ver: 369428992,
        ios_end_ver: 536870911,
        android_begin_ver: 637864448,
        android_end_ver: 805306367,
        status: 1
      },
      56: {
        number_version: 56,
        version: "1.4.1",
        ios_begin_ver: 369428992,
        ios_end_ver: 536870911,
        android_begin_ver: 637864448,
        android_end_ver: 805306367,
        status: 1
      },
      57: {
        number_version: 57,
        version: "1.4.2",
        ios_begin_ver: 369428992,
        ios_end_ver: 536870911,
        android_begin_ver: 637864448,
        android_end_ver: 805306367,
        status: 1
      },
      58: {
        number_version: 58,
        version: "1.4.3",
        ios_begin_ver: 369428992,
        ios_end_ver: 536870911,
        android_begin_ver: 637864448,
        android_end_ver: 805306367,
        status: 1
      },
      59: {
        number_version: 59,
        version: "1.4.4",
        ios_begin_ver: 369428992,
        ios_end_ver: 536870911,
        android_begin_ver: 637864448,
        android_end_ver: 805306367,
        status: 1
      },
      60: {
        number_version: 60,
        version: "1.5.0",
        ios_begin_ver: 369429760,
        ios_end_ver: 536870911,
        android_begin_ver: 637865216,
        android_end_ver: 805306367,
        status: 1
      },
      61: {
        number_version: 61,
        version: "1.5.1",
        ios_begin_ver: 369429760,
        ios_end_ver: 536870911,
        android_begin_ver: 637865216,
        android_end_ver: 805306367,
        status: 1
      },
      62: {
        number_version: 62,
        version: "1.5.2",
        ios_begin_ver: 369429760,
        ios_end_ver: 536870911,
        android_begin_ver: 637865216,
        android_end_ver: 805306367,
        status: 1
      },
      63: {
        number_version: 63,
        version: "1.5.3",
        ios_begin_ver: 369429760,
        ios_end_ver: 536870911,
        android_begin_ver: 637865216,
        android_end_ver: 805306367,
        status: 1
      },
      64: {
        number_version: 64,
        version: "1.5.4",
        ios_begin_ver: 369430561,
        ios_end_ver: 369430561,
        android_begin_ver: 0,
        android_end_ver: 0,
        status: 1
      },
      65: {
        number_version: 65,
        version: "1.5.4",
        ios_begin_ver: 369430561,
        ios_end_ver: 536870911,
        android_begin_ver: 0,
        android_end_ver: 0,
        status: 1
      },
      66: {
        number_version: 66,
        version: "1.5.5",
        ios_begin_ver: 369429760,
        ios_end_ver: 369430527,
        android_begin_ver: 637865216,
        android_end_ver: 637865983,
        status: 1
      },
      67: {
        number_version: 67,
        version: "1.5.6",
        ios_begin_ver: 369429760,
        ios_end_ver: 369430527,
        android_begin_ver: 637865216,
        android_end_ver: 637865983,
        status: 1
      },
      68: {
        number_version: 68,
        version: "1.5.3",
        ios_begin_ver: 369431328,
        ios_end_ver: 369431328,
        android_begin_ver: 0,
        android_end_ver: 0,
        status: 1
      },
      69: {
        number_version: 69,
        version: "1.5.6",
        ios_begin_ver: 369429760,
        ios_end_ver: 369430527,
        android_begin_ver: 0,
        android_end_ver: 0,
        status: 1
      },
      70: {
        number_version: 70,
        version: "1.5.3",
        ios_begin_ver: 369431329,
        ios_end_ver: 369431329,
        android_begin_ver: 0,
        android_end_ver: 0,
        status: 1
      },
      71: {
        number_version: 71,
        version: "1.6.0",
        ios_begin_ver: 369430528,
        ios_end_ver: 369431295,
        android_begin_ver: 637865984,
        android_end_ver: 637866751,
        status: 1
      },
      72: {
        number_version: 72,
        version: "1.5.7",
        ios_begin_ver: 369429760,
        ios_end_ver: 369430527,
        android_begin_ver: 637865216,
        android_end_ver: 637865983,
        status: 1
      },
      73: {
        number_version: 73,
        version: "1.6.1",
        ios_begin_ver: 369430528,
        ios_end_ver: 369431295,
        android_begin_ver: 637865984,
        android_end_ver: 637866751,
        status: 1
      },
      74: {
        number_version: 74,
        version: "1.6.2",
        ios_begin_ver: 369431296,
        ios_end_ver: 536870911,
        android_begin_ver: 637866752,
        android_end_ver: 805306367,
        status: 1
      },
      75: {
        number_version: 75,
        version: "1.6.3",
        ios_begin_ver: 369430528,
        ios_end_ver: 536870911,
        android_begin_ver: 637865984,
        android_end_ver: 805306367,
        status: 1
      },
      77: {
        number_version: 77,
        version: "1.6.4",
        ios_begin_ver: 369430528,
        ios_end_ver: 536870911,
        android_begin_ver: 637865984,
        android_end_ver: 805306367,
        status: 1
      },
      78: {
        number_version: 78,
        version: "1.6.4",
        ios_begin_ver: 369430528,
        ios_end_ver: 536870911,
        android_begin_ver: 637865984,
        android_end_ver: 805306367,
        status: 1
      },
      79: {
        number_version: 79,
        version: "1.6.5",
        ios_begin_ver: 369430528,
        ios_end_ver: 536870911,
        android_begin_ver: 637865984,
        android_end_ver: 805306367,
        status: 1
      },
      80: {
        number_version: 80,
        version: "1.6.6",
        ios_begin_ver: 369430528,
        ios_end_ver: 536870911,
        android_begin_ver: 637865984,
        android_end_ver: 805306367,
        status: 1
      },
      82: {
        number_version: 82,
        version: "1.7.0",
        ios_begin_ver: 369432064,
        ios_end_ver: 536870911,
        android_begin_ver: 637867520,
        android_end_ver: 805306367,
        status: 0
      },
      83: {
        number_version: 83,
        version: "1.7.0",
        ios_begin_ver: 369432064,
        ios_end_ver: 536870911,
        android_begin_ver: 637867520,
        android_end_ver: 805306367,
        status: 0
      },
      84: {
        number_version: 84,
        version: "1.7.0",
        ios_begin_ver: 369432064,
        ios_end_ver: 536870911,
        android_begin_ver: 637867520,
        android_end_ver: 805306367,
        status: 1
      },
      85: {
        number_version: 85,
        version: "1.5.8",
        ios_begin_ver: 369429760,
        ios_end_ver: 369430527,
        android_begin_ver: 637865216,
        android_end_ver: 637865983,
        status: 1
      },
      86: {
        number_version: 86,
        version: "1.7.1",
        ios_begin_ver: 369432064,
        ios_end_ver: 536870911,
        android_begin_ver: 637867520,
        android_end_ver: 805306367,
        status: 1
      },
      87: {
        number_version: 87,
        version: "1.6.7",
        ios_begin_ver: 369430528,
        ios_end_ver: 369432063,
        android_begin_ver: 637865984,
        android_end_ver: 637867519,
        status: 0
      },
      88: {
        number_version: 88,
        version: "1.7.2",
        ios_begin_ver: 369432064,
        ios_end_ver: 536870911,
        android_begin_ver: 637867520,
        android_end_ver: 805306367,
        status: 0
      },
      89: {
        number_version: 89,
        version: "1.7.3",
        ios_begin_ver: 369432064,
        ios_end_ver: 536870911,
        android_begin_ver: 637867520,
        android_end_ver: 805306367,
        status: 1
      },
      90: {
        number_version: 90,
        version: "0.0.0",
        ios_begin_ver: 369432064,
        ios_end_ver: 369432063,
        android_begin_ver: 637867520,
        android_end_ver: 637867519,
        status: 0
      },
      91: {
        number_version: 91,
        version: "1.6.8",
        ios_begin_ver: 369430528,
        ios_end_ver: 369432063,
        android_begin_ver: 637865984,
        android_end_ver: 637867519,
        status: 1
      },
      92: {
        number_version: 92,
        version: "1.7.4",
        ios_begin_ver: 369432064,
        ios_end_ver: 536870911,
        android_begin_ver: 637867520,
        android_end_ver: 805306367,
        status: 1
      },
      93: {
        number_version: 93,
        version: "1.9.0",
        ios_begin_ver: 369491968,
        ios_end_ver: 536870911,
        android_begin_ver: 637927424,
        android_end_ver: 805306367,
        status: 1
      },
      94: {
        number_version: 94,
        version: "1.9.1",
        ios_begin_ver: 369491968,
        ios_end_ver: 536870911,
        android_begin_ver: 637927424,
        android_end_ver: 805306367,
        status: 1
      },
      95: {
        number_version: 95,
        version: "1.9.2",
        ios_begin_ver: 369491968,
        ios_end_ver: 536870911,
        android_begin_ver: 637927424,
        android_end_ver: 805306367,
        status: 1
      },
      96: {
        number_version: 96,
        version: "1.9.3",
        ios_begin_ver: 369491968,
        ios_end_ver: 536870911,
        android_begin_ver: 637927424,
        android_end_ver: 805306367,
        status: 0
      },
      97: {
        number_version: 97,
        version: "1.9.3",
        ios_begin_ver: 369491968,
        ios_end_ver: 536870911,
        android_begin_ver: 637927424,
        android_end_ver: 805306367,
        status: 0
      },
      98: {
        number_version: 98,
        version: "1.9.3",
        ios_begin_ver: 369491968,
        ios_end_ver: 536870911,
        android_begin_ver: 637927424,
        android_end_ver: 805306367,
        status: 0
      },
      99: {
        number_version: 99,
        version: "1.9.3",
        ios_begin_ver: 369491968,
        ios_end_ver: 369492223,
        android_begin_ver: 637927424,
        android_end_ver: 637927679,
        status: 1
      },
      100: {
        number_version: 100,
        version: "1.9.5",
        ios_begin_ver: 369492224,
        ios_end_ver: 536870911,
        android_begin_ver: 637927680,
        android_end_ver: 805306367,
        status: 1
      },
      101: {
        number_version: 101,
        version: "1.9.4",
        ios_begin_ver: 369491968,
        ios_end_ver: 369492223,
        android_begin_ver: 637927424,
        android_end_ver: 637927679,
        status: 1
      },
      102: {
        number_version: 102,
        version: "1.9.6",
        ios_begin_ver: 369492224,
        ios_end_ver: 536870911,
        android_begin_ver: 637927680,
        android_end_ver: 805306367,
        status: 1
      },
      103: {
        number_version: 103,
        version: "1.9.8",
        ios_begin_ver: 369492224,
        ios_end_ver: 536870911,
        android_begin_ver: 637927680,
        android_end_ver: 805306367,
        status: 1
      },
      104: {
        number_version: 104,
        version: "1.9.8",
        ios_begin_ver: 369492224,
        ios_end_ver: 536870911,
        android_begin_ver: 637927680,
        android_end_ver: 805306367,
        status: 1
      },
      105: {
        number_version: 105,
        version: "1.9.8",
        ios_begin_ver: 369492224,
        ios_end_ver: 536870911,
        android_begin_ver: 637927680,
        android_end_ver: 805306367,
        status: 1
      },
      106: {
        number_version: 106,
        version: "1.9.9",
        ios_begin_ver: 369492224,
        ios_end_ver: 536870911,
        android_begin_ver: 637927680,
        android_end_ver: 805306367,
        status: 1
      },
      107: {
        number_version: 107,
        version: "1.9.90",
        ios_begin_ver: 369492480,
        ios_end_ver: 536870911,
        android_begin_ver: 637927936,
        android_end_ver: 805306367,
        status: 1
      },
      108: {
        number_version: 108,
        version: "1.9.91",
        ios_begin_ver: 369492480,
        ios_end_ver: 536870911,
        android_begin_ver: 637927936,
        android_end_ver: 805306367,
        status: 1
      },
      109: {
        number_version: 109,
        version: "1.9.91",
        ios_begin_ver: 369492480,
        ios_end_ver: 536870911,
        android_begin_ver: 637927936,
        android_end_ver: 805306367,
        status: 0
      },
      110: {
        number_version: 110,
        version: "1.9.91",
        ios_begin_ver: 369492480,
        ios_end_ver: 536870911,
        android_begin_ver: 637927936,
        android_end_ver: 805306367,
        status: 1
      },
      111: {
        number_version: 111,
        version: "1.9.91",
        ios_begin_ver: 369493536,
        ios_end_ver: 369493536,
        android_begin_ver: 0,
        android_end_ver: 0,
        status: 0
      },
      112: {
        number_version: 112,
        version: "1.9.92",
        ios_begin_ver: 369492480,
        ios_end_ver: 536870911,
        android_begin_ver: 637927936,
        android_end_ver: 805306367,
        status: 1
      },
      113: {
        number_version: 113,
        version: "1.9.93",
        ios_begin_ver: 369492480,
        ios_end_ver: 536870911,
        android_begin_ver: 637927936,
        android_end_ver: 805306367,
        status: 1
      },
      114: {
        number_version: 114,
        version: "1.9.94",
        ios_begin_ver: 369492480,
        ios_end_ver: 536870911,
        android_begin_ver: 637927936,
        android_end_ver: 805306367,
        status: 1
      },
      115: {
        number_version: 115,
        version: "1.9.95",
        ios_begin_ver: 369492480,
        ios_end_ver: 536870911,
        android_begin_ver: 637927936,
        android_end_ver: 805306367,
        status: 1
      },
      116: {
        number_version: 116,
        version: "1.9.96",
        ios_begin_ver: 369492480,
        ios_end_ver: 536870911,
        android_begin_ver: 637927936,
        android_end_ver: 805306367,
        status: 1
      },
      117: {
        number_version: 117,
        version: "1.9.97",
        ios_begin_ver: 369492480,
        ios_end_ver: 536870911,
        android_begin_ver: 637927936,
        android_end_ver: 805306367,
        status: 1
      },
      118: {
        number_version: 118,
        version: "1.9.98",
        ios_begin_ver: 369493504,
        ios_end_ver: 536870911,
        android_begin_ver: 0,
        android_end_ver: 0,
        status: 1
      },
      119: {
        number_version: 119,
        version: "2.0.0",
        ios_begin_ver: 369493504,
        ios_end_ver: 536870911,
        android_begin_ver: 0,
        android_end_ver: 0,
        status: 1
      },
      120: {
        number_version: 120,
        version: "2.0.1",
        ios_begin_ver: 369493504,
        ios_end_ver: 536870911,
        android_begin_ver: 637928960,
        android_end_ver: 805306367,
        status: 1
      },
      121: {
        number_version: 121,
        version: "2.0.2",
        ios_begin_ver: 369493504,
        ios_end_ver: 536870911,
        android_begin_ver: 637928960,
        android_end_ver: 805306367,
        status: 1
      },
      122: {
        number_version: 122,
        version: "2.0.3",
        ios_begin_ver: 369493504,
        ios_end_ver: 536870911,
        android_begin_ver: 637928960,
        android_end_ver: 805306367,
        status: 1
      },
      123: {
        number_version: 123,
        version: "1",
        ios_begin_ver: 0,
        ios_end_ver: 0,
        android_begin_ver: 0,
        android_end_ver: 0,
        status: 0
      },
      124: {
        number_version: 124,
        version: "2.0.4",
        ios_begin_ver: 369493504,
        ios_end_ver: 536870911,
        android_begin_ver: 637928960,
        android_end_ver: 805306367,
        status: 1
      }
    };
}(require, require)
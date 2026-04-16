! function(require, directRequire) {
  "use strict";

  function t(t) {
    return Object.prototype.toString.call(t).toLowerCase().slice(8, -1)
  }

  function e(e, o) {
    "string" === t(e) && (o = e, e = null);
    let r = e;
    const n = o || (null == e ? void 0 : e.message);
    return e instanceof Error || (r = new Error(n)), r.message = n, r
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports.guessMimeTypeFromHeader = exports.randomString = exports.expect = exports.expectFail = exports.delayPromise = exports.assertNever = exports.safeGet = exports.jsonParse = exports.jsonStringify = exports.invalidTryCatchResult = exports.tryCatch = exports.logStack = exports.logInvoke = exports.randomId = exports.dateStamp = exports.timeStamp = exports.padStart = exports.noop = exports.clientVersion = exports.isMac = exports.isDev = exports.commonError = exports.typeOf = void 0, exports.typeOf = t, exports.commonError = e, exports.isDev = global.appConfig && global.appConfig.isDev, exports.isMac = "darwin" === process.platform, exports.clientVersion = parseInt((global.appVersion || "-1").replace(/\./g, ""), 10);

  function o(t, e, o) {
    o = "" + o;
    let r = "";
    for (let o = 0; o < t; o++) r += e;
    return r.substring(0, r.length - o.length) + o
  }
  exports.noop = () => {}, exports.padStart = o, exports.timeStamp = function(t) {
    const e = o.bind(null, 3, "0"),
      r = o.bind(null, 2, "0"),
      n = -(t = t || new Date).getTimezoneOffset() / 60;
    return `[GMT${n>=0?"+":"-"}${n} ${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())} ${r(t.getHours())}:${r(t.getMinutes())}:${r(t.getSeconds())}:${e(t.getMilliseconds())}]`
  }, exports.dateStamp = function(t, e = !1) {
    const r = o.bind(null, 3, "0"),
      n = o.bind(null, 2, "0");
    return t = t || new Date, e ? `${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())} ${n(t.getHours())}-${n(t.getMinutes())}-${n(t.getSeconds())}-${r(t.getMilliseconds())}` : `${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}`
  }, exports.randomId = function(t = "") {
    return `${t=t?t+"-":""}${Math.round(1e4*Math.random())}-${Date.now()}`
  }, exports.logInvoke = function(t) {
    return function(e, o, r) {
      if (!exports.isDev) return r;
      const n = r.value;
      return r.value = function(...e) {
        var r;
        const s = (null === (r = null == this ? void 0 : this.constructor) || void 0 === r ? void 0 : r.name) || "<N/A>";
        e.length > 0 ? t.i(`${s}.${o}(`, e, ")") : t.i(`${s}.${o}()`);
        return n.call(this, ...e)
      }, r
    }
  }, exports.logStack = function(t) {
    return function(e, o, r) {
      if (!exports.isDev) return r;
      const n = r.value;
      return r.value = function(...e) {
        var r;
        const s = (null === (r = null == this ? void 0 : this.constructor) || void 0 === r ? void 0 : r.name) || "<N/A>",
          i = (new Error).stack;
        exports.isDev && console.group && console.group(`${s}.${o} :: STACK`), t.i(i), exports.isDev && console.groupEnd && console.groupEnd();
        return n.call(this, ...e)
      }, r
    }
  };
  const r = Symbol.for("tryCatchError");

  function n(t, e, o) {
    var r, n;
    t.assert("!!! [assert expect] !!!", e, "does not satisfy", o), null === (r = console.group) || void 0 === r || r.call(console, "!!! [assert :: STACK] !!!"), t.assert((new Error).stack), null === (n = console.groupEnd) || void 0 === n || n.call(console)
  }
  exports.tryCatch = function(t) {
    try {
      return t()
    } catch (t) {
      return {
        error: e(t),
        _tag: r,
        toString: () => "[Object TryCatchError]"
      }
    }
  }, exports.invalidTryCatchResult = function(t) {
    return t && t._tag === r
  }, exports.jsonStringify = function(t) {
    return JSON.stringify(t)
  }, exports.jsonParse = function(t) {
    return JSON.parse(t)
  }, exports.safeGet = function(t, e, o) {
    const r = e.split(".");
    let n = t;
    for (const t of r) {
      const e = n[t];
      if (void 0 === e) return o;
      n = e
    }
    return n
  }, exports.assertNever = function(...t) {
    console.error("!!! [assert never] !!!", ...t)
  }, exports.delayPromise = function(t) {
    return new Promise(e => {
      setTimeout(() => {
        e()
      }, t > 0 ? t : 0)
    })
  };
  const s = {
    fail: (...t) => s,
    pass: t => (t.call(void 0), s)
  };
  exports.expectFail = {
    fail: t => (t.call(void 0), exports.expectFail),
    pass: (...t) => exports.expectFail
  }, exports.expect = function(t, e) {
    return {
      as: o => o(t) ? s : (n(e, t, o.toString()), exports.expectFail),
      toBe: o => Object.is(t, o) ? s : (n(e, t, o), exports.expectFail),
      toFuzzyEqual: o => o !== t ? (n(e, t, o), exports.expectFail) : s
    }
  }, exports.randomString = function(t = 12) {
    const e = "=-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + Date.now();
    let o = "";
    for (let r = 0; r < t; r++) {
      const t = Math.floor(Math.random() * e.length);
      o += e.substring(t, t + 1)
    }
    return o
  }, exports.guessMimeTypeFromHeader = function(t) {
    if (!t) return "text/plain";
    const e = ["Content-Type", "content-type", "Content-type", "content-Type"];
    for (const o of e)
      if ("string" == typeof t[o]) {
        return t[o].split(";")[0]
      } return "text/plain"
  };
}(require, require)
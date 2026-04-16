/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.mmbizwxadevremote = (function() {

  /**
   * Namespace mmbizwxadevremote.
   * @exports mmbizwxadevremote
   * @namespace
   */
  var mmbizwxadevremote = {};

  mmbizwxadevremote.WARemoteDebug_DataFormat = (function() {

    /**
     * Properties of a WARemoteDebug_DataFormat.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DataFormat
     * @property {number} [cmd] WARemoteDebug_DataFormat cmd
     * @property {string} [uuid] WARemoteDebug_DataFormat uuid
     * @property {Uint8Array} [data] WARemoteDebug_DataFormat data
     */

    /**
     * Constructs a new WARemoteDebug_DataFormat.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DataFormat.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DataFormat=} [properties] Properties to set
     */
    function WARemoteDebug_DataFormat(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DataFormat cmd.
     * @member {number}cmd
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @instance
     */
    WARemoteDebug_DataFormat.prototype.cmd = 0;

    /**
     * WARemoteDebug_DataFormat uuid.
     * @member {string}uuid
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @instance
     */
    WARemoteDebug_DataFormat.prototype.uuid = "";

    /**
     * WARemoteDebug_DataFormat data.
     * @member {Uint8Array}data
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @instance
     */
    WARemoteDebug_DataFormat.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new WARemoteDebug_DataFormat instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DataFormat=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DataFormat} WARemoteDebug_DataFormat instance
     */
    WARemoteDebug_DataFormat.create = function create(properties) {
      return new WARemoteDebug_DataFormat(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DataFormat message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DataFormat.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DataFormat} message WARemoteDebug_DataFormat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DataFormat.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.cmd != null && message.hasOwnProperty("cmd"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.cmd);
      if (message.uuid != null && message.hasOwnProperty("uuid"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.uuid);
      if (message.data != null && message.hasOwnProperty("data"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).bytes(message.data);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DataFormat message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DataFormat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DataFormat} message WARemoteDebug_DataFormat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DataFormat.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DataFormat message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DataFormat} WARemoteDebug_DataFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DataFormat.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DataFormat();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.cmd = reader.uint32();
            break;
          case 2:
            message.uuid = reader.string();
            break;
          case 3:
            message.data = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DataFormat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DataFormat} WARemoteDebug_DataFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DataFormat.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DataFormat message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DataFormat.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.cmd != null && message.hasOwnProperty("cmd"))
        if (!$util.isInteger(message.cmd))
          return "cmd: integer expected";
      if (message.uuid != null && message.hasOwnProperty("uuid"))
        if (!$util.isString(message.uuid))
          return "uuid: string expected";
      if (message.data != null && message.hasOwnProperty("data"))
        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
          return "data: buffer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_DataFormat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DataFormat} WARemoteDebug_DataFormat
     */
    WARemoteDebug_DataFormat.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DataFormat)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DataFormat();
      if (object.cmd != null)
        message.cmd = object.cmd >>> 0;
      if (object.uuid != null)
        message.uuid = String(object.uuid);
      if (object.data != null)
        if (typeof object.data === "string")
          $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
        else if (object.data.length)
        message.data = object.data;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DataFormat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DataFormat} message WARemoteDebug_DataFormat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DataFormat.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.cmd = 0;
        object.uuid = "";
        object.data = options.bytes === String ? "" : [];
      }
      if (message.cmd != null && message.hasOwnProperty("cmd"))
        object.cmd = message.cmd;
      if (message.uuid != null && message.hasOwnProperty("uuid"))
        object.uuid = message.uuid;
      if (message.data != null && message.hasOwnProperty("data"))
        object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
      return object;
    };

    /**
     * Converts this WARemoteDebug_DataFormat to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DataFormat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DataFormat.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DataFormat;
  })();

  mmbizwxadevremote.WARemoteDebug_BaseReq = (function() {

    /**
     * Properties of a WARemoteDebug_BaseReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_BaseReq
     * @property {number} [clientVersion] WARemoteDebug_BaseReq clientVersion
     */

    /**
     * Constructs a new WARemoteDebug_BaseReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_BaseReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_BaseReq=} [properties] Properties to set
     */
    function WARemoteDebug_BaseReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_BaseReq clientVersion.
     * @member {number}clientVersion
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseReq
     * @instance
     */
    WARemoteDebug_BaseReq.prototype.clientVersion = 0;

    /**
     * Creates a new WARemoteDebug_BaseReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_BaseReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_BaseReq} WARemoteDebug_BaseReq instance
     */
    WARemoteDebug_BaseReq.create = function create(properties) {
      return new WARemoteDebug_BaseReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_BaseReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_BaseReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_BaseReq} message WARemoteDebug_BaseReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_BaseReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.clientVersion);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_BaseReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_BaseReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_BaseReq} message WARemoteDebug_BaseReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_BaseReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_BaseReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_BaseReq} WARemoteDebug_BaseReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_BaseReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_BaseReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.clientVersion = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_BaseReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_BaseReq} WARemoteDebug_BaseReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_BaseReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_BaseReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_BaseReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
        if (!$util.isInteger(message.clientVersion))
          return "clientVersion: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_BaseReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_BaseReq} WARemoteDebug_BaseReq
     */
    WARemoteDebug_BaseReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_BaseReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_BaseReq();
      if (object.clientVersion != null)
        message.clientVersion = object.clientVersion >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_BaseReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_BaseReq} message WARemoteDebug_BaseReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_BaseReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.clientVersion = 0;
      if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
        object.clientVersion = message.clientVersion;
      return object;
    };

    /**
     * Converts this WARemoteDebug_BaseReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_BaseReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_BaseReq;
  })();

  mmbizwxadevremote.WARemoteDebug_BaseResp = (function() {

    /**
     * Properties of a WARemoteDebug_BaseResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_BaseResp
     * @property {number} [errcode] WARemoteDebug_BaseResp errcode
     * @property {string} [errmsg] WARemoteDebug_BaseResp errmsg
     */

    /**
     * Constructs a new WARemoteDebug_BaseResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_BaseResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_BaseResp=} [properties] Properties to set
     */
    function WARemoteDebug_BaseResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_BaseResp errcode.
     * @member {number}errcode
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @instance
     */
    WARemoteDebug_BaseResp.prototype.errcode = 0;

    /**
     * WARemoteDebug_BaseResp errmsg.
     * @member {string}errmsg
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @instance
     */
    WARemoteDebug_BaseResp.prototype.errmsg = "";

    /**
     * Creates a new WARemoteDebug_BaseResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_BaseResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_BaseResp} WARemoteDebug_BaseResp instance
     */
    WARemoteDebug_BaseResp.create = function create(properties) {
      return new WARemoteDebug_BaseResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_BaseResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_BaseResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_BaseResp} message WARemoteDebug_BaseResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_BaseResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.errcode != null && message.hasOwnProperty("errcode"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).int32(message.errcode);
      if (message.errmsg != null && message.hasOwnProperty("errmsg"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.errmsg);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_BaseResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_BaseResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_BaseResp} message WARemoteDebug_BaseResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_BaseResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_BaseResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_BaseResp} WARemoteDebug_BaseResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_BaseResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_BaseResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.errcode = reader.int32();
            break;
          case 2:
            message.errmsg = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_BaseResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_BaseResp} WARemoteDebug_BaseResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_BaseResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_BaseResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_BaseResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.errcode != null && message.hasOwnProperty("errcode"))
        if (!$util.isInteger(message.errcode))
          return "errcode: integer expected";
      if (message.errmsg != null && message.hasOwnProperty("errmsg"))
        if (!$util.isString(message.errmsg))
          return "errmsg: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_BaseResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_BaseResp} WARemoteDebug_BaseResp
     */
    WARemoteDebug_BaseResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_BaseResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_BaseResp();
      if (object.errcode != null)
        message.errcode = object.errcode | 0;
      if (object.errmsg != null)
        message.errmsg = String(object.errmsg);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_BaseResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_BaseResp} message WARemoteDebug_BaseResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_BaseResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.errcode = 0;
        object.errmsg = "";
      }
      if (message.errcode != null && message.hasOwnProperty("errcode"))
        object.errcode = message.errcode;
      if (message.errmsg != null && message.hasOwnProperty("errmsg"))
        object.errmsg = message.errmsg;
      return object;
    };

    /**
     * Converts this WARemoteDebug_BaseResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_BaseResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_BaseResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_BaseResp;
  })();

  mmbizwxadevremote.WARemoteDebug_CommReq = (function() {

    /**
     * Properties of a WARemoteDebug_CommReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_CommReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_CommReq baseRequest
     */

    /**
     * Constructs a new WARemoteDebug_CommReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_CommReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_CommReq=} [properties] Properties to set
     */
    function WARemoteDebug_CommReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_CommReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_CommReq
     * @instance
     */
    WARemoteDebug_CommReq.prototype.baseRequest = null;

    /**
     * Creates a new WARemoteDebug_CommReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_CommReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CommReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_CommReq} WARemoteDebug_CommReq instance
     */
    WARemoteDebug_CommReq.create = function create(properties) {
      return new WARemoteDebug_CommReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_CommReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_CommReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_CommReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CommReq} message WARemoteDebug_CommReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_CommReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_CommReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_CommReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_CommReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CommReq} message WARemoteDebug_CommReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_CommReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_CommReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_CommReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_CommReq} WARemoteDebug_CommReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_CommReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_CommReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_CommReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_CommReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_CommReq} WARemoteDebug_CommReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_CommReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_CommReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_CommReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_CommReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      return null;
    };

    /**
     * Creates a WARemoteDebug_CommReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_CommReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_CommReq} WARemoteDebug_CommReq
     */
    WARemoteDebug_CommReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_CommReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_CommReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_CommReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_CommReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_CommReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_CommReq} message WARemoteDebug_CommReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_CommReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.baseRequest = null;
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_CommReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_CommReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_CommReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_CommReq;
  })();

  mmbizwxadevremote.WARemoteDebug_CommResp = (function() {

    /**
     * Properties of a WARemoteDebug_CommResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_CommResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_CommResp baseResponse
     */

    /**
     * Constructs a new WARemoteDebug_CommResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_CommResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_CommResp=} [properties] Properties to set
     */
    function WARemoteDebug_CommResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_CommResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_CommResp
     * @instance
     */
    WARemoteDebug_CommResp.prototype.baseResponse = null;

    /**
     * Creates a new WARemoteDebug_CommResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_CommResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CommResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_CommResp} WARemoteDebug_CommResp instance
     */
    WARemoteDebug_CommResp.create = function create(properties) {
      return new WARemoteDebug_CommResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_CommResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_CommResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_CommResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CommResp} message WARemoteDebug_CommResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_CommResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_CommResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_CommResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_CommResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CommResp} message WARemoteDebug_CommResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_CommResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_CommResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_CommResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_CommResp} WARemoteDebug_CommResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_CommResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_CommResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_CommResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_CommResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_CommResp} WARemoteDebug_CommResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_CommResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_CommResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_CommResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_CommResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      return null;
    };

    /**
     * Creates a WARemoteDebug_CommResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_CommResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_CommResp} WARemoteDebug_CommResp
     */
    WARemoteDebug_CommResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_CommResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_CommResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_CommResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_CommResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_CommResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_CommResp} message WARemoteDebug_CommResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_CommResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.baseResponse = null;
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_CommResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_CommResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_CommResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_CommResp;
  })();

  mmbizwxadevremote.WARemoteDebug_DebugMessage = (function() {

    /**
     * Properties of a WARemoteDebug_DebugMessage.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DebugMessage
     * @property {number} [seq] WARemoteDebug_DebugMessage seq
     * @property {number} [after] WARemoteDebug_DebugMessage after
     * @property {string} [category] WARemoteDebug_DebugMessage category
     * @property {Uint8Array} [data] WARemoteDebug_DebugMessage data
     * @property {number} [compressAlgo] WARemoteDebug_DebugMessage compressAlgo
     * @property {number} [originalSize] WARemoteDebug_DebugMessage originalSize
     */

    /**
     * Constructs a new WARemoteDebug_DebugMessage.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DebugMessage.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DebugMessage=} [properties] Properties to set
     */
    function WARemoteDebug_DebugMessage(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DebugMessage seq.
     * @member {number}seq
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @instance
     */
    WARemoteDebug_DebugMessage.prototype.seq = 0;

    /**
     * WARemoteDebug_DebugMessage after.
     * @member {number}after
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @instance
     */
    WARemoteDebug_DebugMessage.prototype.after = 0;

    /**
     * WARemoteDebug_DebugMessage category.
     * @member {string}category
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @instance
     */
    WARemoteDebug_DebugMessage.prototype.category = "";

    /**
     * WARemoteDebug_DebugMessage data.
     * @member {Uint8Array}data
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @instance
     */
    WARemoteDebug_DebugMessage.prototype.data = $util.newBuffer([]);

    /**
     * WARemoteDebug_DebugMessage compressAlgo.
     * @member {number}compressAlgo
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @instance
     */
    WARemoteDebug_DebugMessage.prototype.compressAlgo = 0;

    /**
     * WARemoteDebug_DebugMessage originalSize.
     * @member {number}originalSize
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @instance
     */
    WARemoteDebug_DebugMessage.prototype.originalSize = 0;

    /**
     * Creates a new WARemoteDebug_DebugMessage instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DebugMessage=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DebugMessage} WARemoteDebug_DebugMessage instance
     */
    WARemoteDebug_DebugMessage.create = function create(properties) {
      return new WARemoteDebug_DebugMessage(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DebugMessage message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DebugMessage.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DebugMessage} message WARemoteDebug_DebugMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DebugMessage.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.seq != null && message.hasOwnProperty("seq"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.seq);
      if (message.after != null && message.hasOwnProperty("after"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.after);
      if (message.category != null && message.hasOwnProperty("category"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.category);
      if (message.data != null && message.hasOwnProperty("data"))
        writer.uint32( /* id 4, wireType 2 =*/ 34).bytes(message.data);
      if (message.compressAlgo != null && message.hasOwnProperty("compressAlgo"))
        writer.uint32( /* id 5, wireType 0 =*/ 40).uint32(message.compressAlgo);
      if (message.originalSize != null && message.hasOwnProperty("originalSize"))
        writer.uint32( /* id 6, wireType 0 =*/ 48).uint32(message.originalSize);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DebugMessage message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DebugMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DebugMessage} message WARemoteDebug_DebugMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DebugMessage.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DebugMessage message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DebugMessage} WARemoteDebug_DebugMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DebugMessage.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DebugMessage();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.seq = reader.uint32();
            break;
          case 2:
            message.after = reader.uint32();
            break;
          case 3:
            message.category = reader.string();
            break;
          case 4:
            message.data = reader.bytes();
            break;
          case 5:
            message.compressAlgo = reader.uint32();
            break;
          case 6:
            message.originalSize = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DebugMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DebugMessage} WARemoteDebug_DebugMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DebugMessage.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DebugMessage message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DebugMessage.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.seq != null && message.hasOwnProperty("seq"))
        if (!$util.isInteger(message.seq))
          return "seq: integer expected";
      if (message.after != null && message.hasOwnProperty("after"))
        if (!$util.isInteger(message.after))
          return "after: integer expected";
      if (message.category != null && message.hasOwnProperty("category"))
        if (!$util.isString(message.category))
          return "category: string expected";
      if (message.data != null && message.hasOwnProperty("data"))
        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
          return "data: buffer expected";
      if (message.compressAlgo != null && message.hasOwnProperty("compressAlgo"))
        if (!$util.isInteger(message.compressAlgo))
          return "compressAlgo: integer expected";
      if (message.originalSize != null && message.hasOwnProperty("originalSize"))
        if (!$util.isInteger(message.originalSize))
          return "originalSize: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_DebugMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DebugMessage} WARemoteDebug_DebugMessage
     */
    WARemoteDebug_DebugMessage.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DebugMessage)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DebugMessage();
      if (object.seq != null)
        message.seq = object.seq >>> 0;
      if (object.after != null)
        message.after = object.after >>> 0;
      if (object.category != null)
        message.category = String(object.category);
      if (object.data != null)
        if (typeof object.data === "string")
          $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
        else if (object.data.length)
        message.data = object.data;
      if (object.compressAlgo != null)
        message.compressAlgo = object.compressAlgo >>> 0;
      if (object.originalSize != null)
        message.originalSize = object.originalSize >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DebugMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DebugMessage} message WARemoteDebug_DebugMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DebugMessage.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.seq = 0;
        object.after = 0;
        object.category = "";
        object.data = options.bytes === String ? "" : [];
        object.compressAlgo = 0;
        object.originalSize = 0;
      }
      if (message.seq != null && message.hasOwnProperty("seq"))
        object.seq = message.seq;
      if (message.after != null && message.hasOwnProperty("after"))
        object.after = message.after;
      if (message.category != null && message.hasOwnProperty("category"))
        object.category = message.category;
      if (message.data != null && message.hasOwnProperty("data"))
        object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
      if (message.compressAlgo != null && message.hasOwnProperty("compressAlgo"))
        object.compressAlgo = message.compressAlgo;
      if (message.originalSize != null && message.hasOwnProperty("originalSize"))
        object.originalSize = message.originalSize;
      return object;
    };

    /**
     * Converts this WARemoteDebug_DebugMessage to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DebugMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DebugMessage.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DebugMessage;
  })();

  mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq = (function() {

    /**
     * Properties of a WARemoteDebug_SendDebugMessageReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_SendDebugMessageReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_SendDebugMessageReq baseRequest
     * @property {Array.<mmbizwxadevremote.IWARemoteDebug_DebugMessage>} [debugMessageList] WARemoteDebug_SendDebugMessageReq debugMessageList
     * @property {number} [recvAck] WARemoteDebug_SendDebugMessageReq recvAck
     */

    /**
     * Constructs a new WARemoteDebug_SendDebugMessageReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_SendDebugMessageReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_SendDebugMessageReq=} [properties] Properties to set
     */
    function WARemoteDebug_SendDebugMessageReq(properties) {
      this.debugMessageList = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_SendDebugMessageReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @instance
     */
    WARemoteDebug_SendDebugMessageReq.prototype.baseRequest = null;

    /**
     * WARemoteDebug_SendDebugMessageReq debugMessageList.
     * @member {Array.<mmbizwxadevremote.IWARemoteDebug_DebugMessage>}debugMessageList
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @instance
     */
    WARemoteDebug_SendDebugMessageReq.prototype.debugMessageList = $util.emptyArray;

    /**
     * WARemoteDebug_SendDebugMessageReq recvAck.
     * @member {number}recvAck
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @instance
     */
    WARemoteDebug_SendDebugMessageReq.prototype.recvAck = 0;

    /**
     * Creates a new WARemoteDebug_SendDebugMessageReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_SendDebugMessageReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq} WARemoteDebug_SendDebugMessageReq instance
     */
    WARemoteDebug_SendDebugMessageReq.create = function create(properties) {
      return new WARemoteDebug_SendDebugMessageReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_SendDebugMessageReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_SendDebugMessageReq} message WARemoteDebug_SendDebugMessageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_SendDebugMessageReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.debugMessageList != null && message.debugMessageList.length)
        for (var i = 0; i < message.debugMessageList.length; ++i)
          $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.encode(message.debugMessageList[i], writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.recvAck);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_SendDebugMessageReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_SendDebugMessageReq} message WARemoteDebug_SendDebugMessageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_SendDebugMessageReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_SendDebugMessageReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq} WARemoteDebug_SendDebugMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_SendDebugMessageReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          case 2:
            if (!(message.debugMessageList && message.debugMessageList.length))
              message.debugMessageList = [];
            message.debugMessageList.push($root.mmbizwxadevremote.WARemoteDebug_DebugMessage.decode(reader, reader.uint32()));
            break;
          case 3:
            message.recvAck = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_SendDebugMessageReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq} WARemoteDebug_SendDebugMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_SendDebugMessageReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_SendDebugMessageReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_SendDebugMessageReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      if (message.debugMessageList != null && message.hasOwnProperty("debugMessageList")) {
        if (!Array.isArray(message.debugMessageList))
          return "debugMessageList: array expected";
        for (var i = 0; i < message.debugMessageList.length; ++i) {
          error = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.verify(message.debugMessageList[i]);
          if (error)
            return "debugMessageList." + error;
        }
      }
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        if (!$util.isInteger(message.recvAck))
          return "recvAck: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_SendDebugMessageReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq} WARemoteDebug_SendDebugMessageReq
     */
    WARemoteDebug_SendDebugMessageReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      if (object.debugMessageList) {
        if (!Array.isArray(object.debugMessageList))
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq.debugMessageList: array expected");
        message.debugMessageList = [];
        for (var i = 0; i < object.debugMessageList.length; ++i) {
          if (typeof object.debugMessageList[i] !== "object")
            throw TypeError(".mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq.debugMessageList: object expected");
          message.debugMessageList[i] = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.fromObject(object.debugMessageList[i]);
        }
      }
      if (object.recvAck != null)
        message.recvAck = object.recvAck >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_SendDebugMessageReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq} message WARemoteDebug_SendDebugMessageReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_SendDebugMessageReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.arrays || options.defaults)
        object.debugMessageList = [];
      if (options.defaults) {
        object.baseRequest = null;
        object.recvAck = 0;
      }
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      if (message.debugMessageList && message.debugMessageList.length) {
        object.debugMessageList = [];
        for (var j = 0; j < message.debugMessageList.length; ++j)
          object.debugMessageList[j] = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.toObject(message.debugMessageList[j], options);
      }
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        object.recvAck = message.recvAck;
      return object;
    };

    /**
     * Converts this WARemoteDebug_SendDebugMessageReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_SendDebugMessageReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_SendDebugMessageReq;
  })();

  mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp = (function() {

    /**
     * Properties of a WARemoteDebug_SendDebugMessageResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_SendDebugMessageResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_SendDebugMessageResp baseResponse
     * @property {number} [sendAck] WARemoteDebug_SendDebugMessageResp sendAck
     */

    /**
     * Constructs a new WARemoteDebug_SendDebugMessageResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_SendDebugMessageResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_SendDebugMessageResp=} [properties] Properties to set
     */
    function WARemoteDebug_SendDebugMessageResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_SendDebugMessageResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @instance
     */
    WARemoteDebug_SendDebugMessageResp.prototype.baseResponse = null;

    /**
     * WARemoteDebug_SendDebugMessageResp sendAck.
     * @member {number}sendAck
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @instance
     */
    WARemoteDebug_SendDebugMessageResp.prototype.sendAck = 0;

    /**
     * Creates a new WARemoteDebug_SendDebugMessageResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_SendDebugMessageResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp} WARemoteDebug_SendDebugMessageResp instance
     */
    WARemoteDebug_SendDebugMessageResp.create = function create(properties) {
      return new WARemoteDebug_SendDebugMessageResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_SendDebugMessageResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_SendDebugMessageResp} message WARemoteDebug_SendDebugMessageResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_SendDebugMessageResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.sendAck != null && message.hasOwnProperty("sendAck"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.sendAck);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_SendDebugMessageResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_SendDebugMessageResp} message WARemoteDebug_SendDebugMessageResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_SendDebugMessageResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_SendDebugMessageResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp} WARemoteDebug_SendDebugMessageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_SendDebugMessageResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          case 2:
            message.sendAck = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_SendDebugMessageResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp} WARemoteDebug_SendDebugMessageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_SendDebugMessageResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_SendDebugMessageResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_SendDebugMessageResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      if (message.sendAck != null && message.hasOwnProperty("sendAck"))
        if (!$util.isInteger(message.sendAck))
          return "sendAck: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_SendDebugMessageResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp} WARemoteDebug_SendDebugMessageResp
     */
    WARemoteDebug_SendDebugMessageResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      if (object.sendAck != null)
        message.sendAck = object.sendAck >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_SendDebugMessageResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp} message WARemoteDebug_SendDebugMessageResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_SendDebugMessageResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseResponse = null;
        object.sendAck = 0;
      }
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      if (message.sendAck != null && message.hasOwnProperty("sendAck"))
        object.sendAck = message.sendAck;
      return object;
    };

    /**
     * Converts this WARemoteDebug_SendDebugMessageResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_SendDebugMessageResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_SendDebugMessageResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_SendDebugMessageResp;
  })();

  mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq = (function() {

    /**
     * Properties of a WARemoteDebug_NewSendDebugMessageReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_NewSendDebugMessageReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_NewSendDebugMessageReq baseRequest
     * @property {Array.<mmbizwxadevremote.IWARemoteDebug_DebugMessage>} [debugMessageList] WARemoteDebug_NewSendDebugMessageReq debugMessageList
     * @property {number} [recvAck] WARemoteDebug_NewSendDebugMessageReq recvAck
     */

    /**
     * Constructs a new WARemoteDebug_NewSendDebugMessageReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_NewSendDebugMessageReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_NewSendDebugMessageReq=} [properties] Properties to set
     */
    function WARemoteDebug_NewSendDebugMessageReq(properties) {
      this.debugMessageList = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_NewSendDebugMessageReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @instance
     */
    WARemoteDebug_NewSendDebugMessageReq.prototype.baseRequest = null;

    /**
     * WARemoteDebug_NewSendDebugMessageReq debugMessageList.
     * @member {Array.<mmbizwxadevremote.IWARemoteDebug_DebugMessage>}debugMessageList
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @instance
     */
    WARemoteDebug_NewSendDebugMessageReq.prototype.debugMessageList = $util.emptyArray;

    /**
     * WARemoteDebug_NewSendDebugMessageReq recvAck.
     * @member {number}recvAck
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @instance
     */
    WARemoteDebug_NewSendDebugMessageReq.prototype.recvAck = 0;

    /**
     * Creates a new WARemoteDebug_NewSendDebugMessageReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_NewSendDebugMessageReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq} WARemoteDebug_NewSendDebugMessageReq instance
     */
    WARemoteDebug_NewSendDebugMessageReq.create = function create(properties) {
      return new WARemoteDebug_NewSendDebugMessageReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_NewSendDebugMessageReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_NewSendDebugMessageReq} message WARemoteDebug_NewSendDebugMessageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_NewSendDebugMessageReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.debugMessageList != null && message.debugMessageList.length)
        for (var i = 0; i < message.debugMessageList.length; ++i)
          $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.encode(message.debugMessageList[i], writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.recvAck);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_NewSendDebugMessageReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_NewSendDebugMessageReq} message WARemoteDebug_NewSendDebugMessageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_NewSendDebugMessageReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_NewSendDebugMessageReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq} WARemoteDebug_NewSendDebugMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_NewSendDebugMessageReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          case 2:
            if (!(message.debugMessageList && message.debugMessageList.length))
              message.debugMessageList = [];
            message.debugMessageList.push($root.mmbizwxadevremote.WARemoteDebug_DebugMessage.decode(reader, reader.uint32()));
            break;
          case 3:
            message.recvAck = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_NewSendDebugMessageReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq} WARemoteDebug_NewSendDebugMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_NewSendDebugMessageReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_NewSendDebugMessageReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_NewSendDebugMessageReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      if (message.debugMessageList != null && message.hasOwnProperty("debugMessageList")) {
        if (!Array.isArray(message.debugMessageList))
          return "debugMessageList: array expected";
        for (var i = 0; i < message.debugMessageList.length; ++i) {
          error = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.verify(message.debugMessageList[i]);
          if (error)
            return "debugMessageList." + error;
        }
      }
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        if (!$util.isInteger(message.recvAck))
          return "recvAck: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_NewSendDebugMessageReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq} WARemoteDebug_NewSendDebugMessageReq
     */
    WARemoteDebug_NewSendDebugMessageReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      if (object.debugMessageList) {
        if (!Array.isArray(object.debugMessageList))
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq.debugMessageList: array expected");
        message.debugMessageList = [];
        for (var i = 0; i < object.debugMessageList.length; ++i) {
          if (typeof object.debugMessageList[i] !== "object")
            throw TypeError(".mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq.debugMessageList: object expected");
          message.debugMessageList[i] = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.fromObject(object.debugMessageList[i]);
        }
      }
      if (object.recvAck != null)
        message.recvAck = object.recvAck >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_NewSendDebugMessageReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq} message WARemoteDebug_NewSendDebugMessageReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_NewSendDebugMessageReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.arrays || options.defaults)
        object.debugMessageList = [];
      if (options.defaults) {
        object.baseRequest = null;
        object.recvAck = 0;
      }
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      if (message.debugMessageList && message.debugMessageList.length) {
        object.debugMessageList = [];
        for (var j = 0; j < message.debugMessageList.length; ++j)
          object.debugMessageList[j] = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.toObject(message.debugMessageList[j], options);
      }
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        object.recvAck = message.recvAck;
      return object;
    };

    /**
     * Converts this WARemoteDebug_NewSendDebugMessageReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_NewSendDebugMessageReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_NewSendDebugMessageReq;
  })();

  mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp = (function() {

    /**
     * Properties of a WARemoteDebug_NewSendDebugMessageResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_NewSendDebugMessageResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_NewSendDebugMessageResp baseResponse
     * @property {number} [minAck] WARemoteDebug_NewSendDebugMessageResp minAck
     * @property {number} [maxAck] WARemoteDebug_NewSendDebugMessageResp maxAck
     */

    /**
     * Constructs a new WARemoteDebug_NewSendDebugMessageResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_NewSendDebugMessageResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_NewSendDebugMessageResp=} [properties] Properties to set
     */
    function WARemoteDebug_NewSendDebugMessageResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_NewSendDebugMessageResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @instance
     */
    WARemoteDebug_NewSendDebugMessageResp.prototype.baseResponse = null;

    /**
     * WARemoteDebug_NewSendDebugMessageResp minAck.
     * @member {number}minAck
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @instance
     */
    WARemoteDebug_NewSendDebugMessageResp.prototype.minAck = 0;

    /**
     * WARemoteDebug_NewSendDebugMessageResp maxAck.
     * @member {number}maxAck
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @instance
     */
    WARemoteDebug_NewSendDebugMessageResp.prototype.maxAck = 0;

    /**
     * Creates a new WARemoteDebug_NewSendDebugMessageResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_NewSendDebugMessageResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp} WARemoteDebug_NewSendDebugMessageResp instance
     */
    WARemoteDebug_NewSendDebugMessageResp.create = function create(properties) {
      return new WARemoteDebug_NewSendDebugMessageResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_NewSendDebugMessageResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_NewSendDebugMessageResp} message WARemoteDebug_NewSendDebugMessageResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_NewSendDebugMessageResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.minAck != null && message.hasOwnProperty("minAck"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.minAck);
      if (message.maxAck != null && message.hasOwnProperty("maxAck"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.maxAck);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_NewSendDebugMessageResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_NewSendDebugMessageResp} message WARemoteDebug_NewSendDebugMessageResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_NewSendDebugMessageResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_NewSendDebugMessageResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp} WARemoteDebug_NewSendDebugMessageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_NewSendDebugMessageResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          case 2:
            message.minAck = reader.uint32();
            break;
          case 3:
            message.maxAck = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_NewSendDebugMessageResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp} WARemoteDebug_NewSendDebugMessageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_NewSendDebugMessageResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_NewSendDebugMessageResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_NewSendDebugMessageResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      if (message.minAck != null && message.hasOwnProperty("minAck"))
        if (!$util.isInteger(message.minAck))
          return "minAck: integer expected";
      if (message.maxAck != null && message.hasOwnProperty("maxAck"))
        if (!$util.isInteger(message.maxAck))
          return "maxAck: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_NewSendDebugMessageResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp} WARemoteDebug_NewSendDebugMessageResp
     */
    WARemoteDebug_NewSendDebugMessageResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      if (object.minAck != null)
        message.minAck = object.minAck >>> 0;
      if (object.maxAck != null)
        message.maxAck = object.maxAck >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_NewSendDebugMessageResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp} message WARemoteDebug_NewSendDebugMessageResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_NewSendDebugMessageResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseResponse = null;
        object.minAck = 0;
        object.maxAck = 0;
      }
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      if (message.minAck != null && message.hasOwnProperty("minAck"))
        object.minAck = message.minAck;
      if (message.maxAck != null && message.hasOwnProperty("maxAck"))
        object.maxAck = message.maxAck;
      return object;
    };

    /**
     * Converts this WARemoteDebug_NewSendDebugMessageResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_NewSendDebugMessageResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_NewSendDebugMessageResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_NewSendDebugMessageResp;
  })();

  mmbizwxadevremote.WARemoteDebug_MessageNotify = (function() {

    /**
     * Properties of a WARemoteDebug_MessageNotify.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_MessageNotify
     * @property {Array.<mmbizwxadevremote.IWARemoteDebug_DebugMessage>} [debugMessageList] WARemoteDebug_MessageNotify debugMessageList
     */

    /**
     * Constructs a new WARemoteDebug_MessageNotify.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_MessageNotify.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_MessageNotify=} [properties] Properties to set
     */
    function WARemoteDebug_MessageNotify(properties) {
      this.debugMessageList = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_MessageNotify debugMessageList.
     * @member {Array.<mmbizwxadevremote.IWARemoteDebug_DebugMessage>}debugMessageList
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotify
     * @instance
     */
    WARemoteDebug_MessageNotify.prototype.debugMessageList = $util.emptyArray;

    /**
     * Creates a new WARemoteDebug_MessageNotify instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotify
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_MessageNotify=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_MessageNotify} WARemoteDebug_MessageNotify instance
     */
    WARemoteDebug_MessageNotify.create = function create(properties) {
      return new WARemoteDebug_MessageNotify(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_MessageNotify message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_MessageNotify.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotify
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_MessageNotify} message WARemoteDebug_MessageNotify message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_MessageNotify.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.debugMessageList != null && message.debugMessageList.length)
        for (var i = 0; i < message.debugMessageList.length; ++i)
          $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.encode(message.debugMessageList[i], writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_MessageNotify message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_MessageNotify.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotify
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_MessageNotify} message WARemoteDebug_MessageNotify message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_MessageNotify.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_MessageNotify message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotify
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_MessageNotify} WARemoteDebug_MessageNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_MessageNotify.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_MessageNotify();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (!(message.debugMessageList && message.debugMessageList.length))
              message.debugMessageList = [];
            message.debugMessageList.push($root.mmbizwxadevremote.WARemoteDebug_DebugMessage.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_MessageNotify message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotify
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_MessageNotify} WARemoteDebug_MessageNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_MessageNotify.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_MessageNotify message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotify
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_MessageNotify.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.debugMessageList != null && message.hasOwnProperty("debugMessageList")) {
        if (!Array.isArray(message.debugMessageList))
          return "debugMessageList: array expected";
        for (var i = 0; i < message.debugMessageList.length; ++i) {
          var error = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.verify(message.debugMessageList[i]);
          if (error)
            return "debugMessageList." + error;
        }
      }
      return null;
    };

    /**
     * Creates a WARemoteDebug_MessageNotify message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotify
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_MessageNotify} WARemoteDebug_MessageNotify
     */
    WARemoteDebug_MessageNotify.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_MessageNotify)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_MessageNotify();
      if (object.debugMessageList) {
        if (!Array.isArray(object.debugMessageList))
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_MessageNotify.debugMessageList: array expected");
        message.debugMessageList = [];
        for (var i = 0; i < object.debugMessageList.length; ++i) {
          if (typeof object.debugMessageList[i] !== "object")
            throw TypeError(".mmbizwxadevremote.WARemoteDebug_MessageNotify.debugMessageList: object expected");
          message.debugMessageList[i] = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.fromObject(object.debugMessageList[i]);
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_MessageNotify message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotify
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_MessageNotify} message WARemoteDebug_MessageNotify
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_MessageNotify.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.arrays || options.defaults)
        object.debugMessageList = [];
      if (message.debugMessageList && message.debugMessageList.length) {
        object.debugMessageList = [];
        for (var j = 0; j < message.debugMessageList.length; ++j)
          object.debugMessageList[j] = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.toObject(message.debugMessageList[j], options);
      }
      return object;
    };

    /**
     * Converts this WARemoteDebug_MessageNotify to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotify
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_MessageNotify.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_MessageNotify;
  })();

  mmbizwxadevremote.WARemoteDebug_MessageNotifyResp = (function() {

    /**
     * Properties of a WARemoteDebug_MessageNotifyResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_MessageNotifyResp
     * @property {number} [recvAck] WARemoteDebug_MessageNotifyResp recvAck
     */

    /**
     * Constructs a new WARemoteDebug_MessageNotifyResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_MessageNotifyResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_MessageNotifyResp=} [properties] Properties to set
     */
    function WARemoteDebug_MessageNotifyResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_MessageNotifyResp recvAck.
     * @member {number}recvAck
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotifyResp
     * @instance
     */
    WARemoteDebug_MessageNotifyResp.prototype.recvAck = 0;

    /**
     * Creates a new WARemoteDebug_MessageNotifyResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotifyResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_MessageNotifyResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_MessageNotifyResp} WARemoteDebug_MessageNotifyResp instance
     */
    WARemoteDebug_MessageNotifyResp.create = function create(properties) {
      return new WARemoteDebug_MessageNotifyResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_MessageNotifyResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_MessageNotifyResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotifyResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_MessageNotifyResp} message WARemoteDebug_MessageNotifyResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_MessageNotifyResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.recvAck);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_MessageNotifyResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_MessageNotifyResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotifyResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_MessageNotifyResp} message WARemoteDebug_MessageNotifyResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_MessageNotifyResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_MessageNotifyResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotifyResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_MessageNotifyResp} WARemoteDebug_MessageNotifyResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_MessageNotifyResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_MessageNotifyResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.recvAck = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_MessageNotifyResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotifyResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_MessageNotifyResp} WARemoteDebug_MessageNotifyResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_MessageNotifyResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_MessageNotifyResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotifyResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_MessageNotifyResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        if (!$util.isInteger(message.recvAck))
          return "recvAck: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_MessageNotifyResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotifyResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_MessageNotifyResp} WARemoteDebug_MessageNotifyResp
     */
    WARemoteDebug_MessageNotifyResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_MessageNotifyResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_MessageNotifyResp();
      if (object.recvAck != null)
        message.recvAck = object.recvAck >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_MessageNotifyResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotifyResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_MessageNotifyResp} message WARemoteDebug_MessageNotifyResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_MessageNotifyResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.recvAck = 0;
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        object.recvAck = message.recvAck;
      return object;
    };

    /**
     * Converts this WARemoteDebug_MessageNotifyResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_MessageNotifyResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_MessageNotifyResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_MessageNotifyResp;
  })();

  mmbizwxadevremote.WARemoteDebug_EventNotify = (function() {

    /**
     * Properties of a WARemoteDebug_EventNotify.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_EventNotify
     */

    /**
     * Constructs a new WARemoteDebug_EventNotify.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_EventNotify.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_EventNotify=} [properties] Properties to set
     */
    function WARemoteDebug_EventNotify(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new WARemoteDebug_EventNotify instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotify
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EventNotify=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_EventNotify} WARemoteDebug_EventNotify instance
     */
    WARemoteDebug_EventNotify.create = function create(properties) {
      return new WARemoteDebug_EventNotify(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_EventNotify message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_EventNotify.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotify
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EventNotify} message WARemoteDebug_EventNotify message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_EventNotify.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_EventNotify message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_EventNotify.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotify
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EventNotify} message WARemoteDebug_EventNotify message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_EventNotify.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_EventNotify message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotify
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_EventNotify} WARemoteDebug_EventNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_EventNotify.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_EventNotify();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_EventNotify message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotify
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_EventNotify} WARemoteDebug_EventNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_EventNotify.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_EventNotify message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotify
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_EventNotify.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_EventNotify message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotify
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_EventNotify} WARemoteDebug_EventNotify
     */
    WARemoteDebug_EventNotify.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_EventNotify)
        return object;
      return new $root.mmbizwxadevremote.WARemoteDebug_EventNotify();
    };

    /**
     * Creates a plain object from a WARemoteDebug_EventNotify message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotify
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_EventNotify} message WARemoteDebug_EventNotify
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_EventNotify.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this WARemoteDebug_EventNotify to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotify
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_EventNotify.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_EventNotify;
  })();

  mmbizwxadevremote.WARemoteDebug_EventNotifyResp = (function() {

    /**
     * Properties of a WARemoteDebug_EventNotifyResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_EventNotifyResp
     */

    /**
     * Constructs a new WARemoteDebug_EventNotifyResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_EventNotifyResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_EventNotifyResp=} [properties] Properties to set
     */
    function WARemoteDebug_EventNotifyResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new WARemoteDebug_EventNotifyResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotifyResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EventNotifyResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_EventNotifyResp} WARemoteDebug_EventNotifyResp instance
     */
    WARemoteDebug_EventNotifyResp.create = function create(properties) {
      return new WARemoteDebug_EventNotifyResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_EventNotifyResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_EventNotifyResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotifyResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EventNotifyResp} message WARemoteDebug_EventNotifyResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_EventNotifyResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_EventNotifyResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_EventNotifyResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotifyResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EventNotifyResp} message WARemoteDebug_EventNotifyResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_EventNotifyResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_EventNotifyResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotifyResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_EventNotifyResp} WARemoteDebug_EventNotifyResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_EventNotifyResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_EventNotifyResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_EventNotifyResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotifyResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_EventNotifyResp} WARemoteDebug_EventNotifyResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_EventNotifyResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_EventNotifyResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotifyResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_EventNotifyResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_EventNotifyResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotifyResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_EventNotifyResp} WARemoteDebug_EventNotifyResp
     */
    WARemoteDebug_EventNotifyResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_EventNotifyResp)
        return object;
      return new $root.mmbizwxadevremote.WARemoteDebug_EventNotifyResp();
    };

    /**
     * Creates a plain object from a WARemoteDebug_EventNotifyResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotifyResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_EventNotifyResp} message WARemoteDebug_EventNotifyResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_EventNotifyResp.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this WARemoteDebug_EventNotifyResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_EventNotifyResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_EventNotifyResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_EventNotifyResp;
  })();

  mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq = (function() {

    /**
     * Properties of a WARemoteDebug_WxHeartBeatReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_WxHeartBeatReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_WxHeartBeatReq baseRequest
     * @property {number} [recvAck] WARemoteDebug_WxHeartBeatReq recvAck
     */

    /**
     * Constructs a new WARemoteDebug_WxHeartBeatReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_WxHeartBeatReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_WxHeartBeatReq=} [properties] Properties to set
     */
    function WARemoteDebug_WxHeartBeatReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_WxHeartBeatReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @instance
     */
    WARemoteDebug_WxHeartBeatReq.prototype.baseRequest = null;

    /**
     * WARemoteDebug_WxHeartBeatReq recvAck.
     * @member {number}recvAck
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @instance
     */
    WARemoteDebug_WxHeartBeatReq.prototype.recvAck = 0;

    /**
     * Creates a new WARemoteDebug_WxHeartBeatReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxHeartBeatReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq} WARemoteDebug_WxHeartBeatReq instance
     */
    WARemoteDebug_WxHeartBeatReq.create = function create(properties) {
      return new WARemoteDebug_WxHeartBeatReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_WxHeartBeatReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxHeartBeatReq} message WARemoteDebug_WxHeartBeatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxHeartBeatReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.recvAck);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_WxHeartBeatReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxHeartBeatReq} message WARemoteDebug_WxHeartBeatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxHeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_WxHeartBeatReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq} WARemoteDebug_WxHeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxHeartBeatReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          case 2:
            message.recvAck = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_WxHeartBeatReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq} WARemoteDebug_WxHeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxHeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_WxHeartBeatReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_WxHeartBeatReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        if (!$util.isInteger(message.recvAck))
          return "recvAck: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_WxHeartBeatReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq} WARemoteDebug_WxHeartBeatReq
     */
    WARemoteDebug_WxHeartBeatReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      if (object.recvAck != null)
        message.recvAck = object.recvAck >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_WxHeartBeatReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq} message WARemoteDebug_WxHeartBeatReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_WxHeartBeatReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseRequest = null;
        object.recvAck = 0;
      }
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        object.recvAck = message.recvAck;
      return object;
    };

    /**
     * Converts this WARemoteDebug_WxHeartBeatReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_WxHeartBeatReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_WxHeartBeatReq;
  })();

  mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp = (function() {

    /**
     * Properties of a WARemoteDebug_WxHeartBeatResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_WxHeartBeatResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_WxHeartBeatResp baseResponse
     */

    /**
     * Constructs a new WARemoteDebug_WxHeartBeatResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_WxHeartBeatResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_WxHeartBeatResp=} [properties] Properties to set
     */
    function WARemoteDebug_WxHeartBeatResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_WxHeartBeatResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp
     * @instance
     */
    WARemoteDebug_WxHeartBeatResp.prototype.baseResponse = null;

    /**
     * Creates a new WARemoteDebug_WxHeartBeatResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxHeartBeatResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp} WARemoteDebug_WxHeartBeatResp instance
     */
    WARemoteDebug_WxHeartBeatResp.create = function create(properties) {
      return new WARemoteDebug_WxHeartBeatResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_WxHeartBeatResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxHeartBeatResp} message WARemoteDebug_WxHeartBeatResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxHeartBeatResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_WxHeartBeatResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxHeartBeatResp} message WARemoteDebug_WxHeartBeatResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxHeartBeatResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_WxHeartBeatResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp} WARemoteDebug_WxHeartBeatResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxHeartBeatResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_WxHeartBeatResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp} WARemoteDebug_WxHeartBeatResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxHeartBeatResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_WxHeartBeatResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_WxHeartBeatResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      return null;
    };

    /**
     * Creates a WARemoteDebug_WxHeartBeatResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp} WARemoteDebug_WxHeartBeatResp
     */
    WARemoteDebug_WxHeartBeatResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_WxHeartBeatResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp} message WARemoteDebug_WxHeartBeatResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_WxHeartBeatResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.baseResponse = null;
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_WxHeartBeatResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_WxHeartBeatResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_WxHeartBeatResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_WxHeartBeatResp;
  })();

  mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq = (function() {

    /**
     * Properties of a WARemoteDebug_DevHeartBeatReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DevHeartBeatReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_DevHeartBeatReq baseRequest
     * @property {number} [recvAck] WARemoteDebug_DevHeartBeatReq recvAck
     */

    /**
     * Constructs a new WARemoteDebug_DevHeartBeatReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DevHeartBeatReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DevHeartBeatReq=} [properties] Properties to set
     */
    function WARemoteDebug_DevHeartBeatReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DevHeartBeatReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @instance
     */
    WARemoteDebug_DevHeartBeatReq.prototype.baseRequest = null;

    /**
     * WARemoteDebug_DevHeartBeatReq recvAck.
     * @member {number}recvAck
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @instance
     */
    WARemoteDebug_DevHeartBeatReq.prototype.recvAck = 0;

    /**
     * Creates a new WARemoteDebug_DevHeartBeatReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevHeartBeatReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq} WARemoteDebug_DevHeartBeatReq instance
     */
    WARemoteDebug_DevHeartBeatReq.create = function create(properties) {
      return new WARemoteDebug_DevHeartBeatReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DevHeartBeatReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevHeartBeatReq} message WARemoteDebug_DevHeartBeatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevHeartBeatReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.recvAck);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DevHeartBeatReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevHeartBeatReq} message WARemoteDebug_DevHeartBeatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevHeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DevHeartBeatReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq} WARemoteDebug_DevHeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevHeartBeatReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          case 2:
            message.recvAck = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DevHeartBeatReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq} WARemoteDebug_DevHeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevHeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DevHeartBeatReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DevHeartBeatReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        if (!$util.isInteger(message.recvAck))
          return "recvAck: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_DevHeartBeatReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq} WARemoteDebug_DevHeartBeatReq
     */
    WARemoteDebug_DevHeartBeatReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      if (object.recvAck != null)
        message.recvAck = object.recvAck >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DevHeartBeatReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq} message WARemoteDebug_DevHeartBeatReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DevHeartBeatReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseRequest = null;
        object.recvAck = 0;
      }
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      if (message.recvAck != null && message.hasOwnProperty("recvAck"))
        object.recvAck = message.recvAck;
      return object;
    };

    /**
     * Converts this WARemoteDebug_DevHeartBeatReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DevHeartBeatReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DevHeartBeatReq;
  })();

  mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp = (function() {

    /**
     * Properties of a WARemoteDebug_DevHeartBeatResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DevHeartBeatResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_DevHeartBeatResp baseResponse
     */

    /**
     * Constructs a new WARemoteDebug_DevHeartBeatResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DevHeartBeatResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DevHeartBeatResp=} [properties] Properties to set
     */
    function WARemoteDebug_DevHeartBeatResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DevHeartBeatResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp
     * @instance
     */
    WARemoteDebug_DevHeartBeatResp.prototype.baseResponse = null;

    /**
     * Creates a new WARemoteDebug_DevHeartBeatResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevHeartBeatResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp} WARemoteDebug_DevHeartBeatResp instance
     */
    WARemoteDebug_DevHeartBeatResp.create = function create(properties) {
      return new WARemoteDebug_DevHeartBeatResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DevHeartBeatResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevHeartBeatResp} message WARemoteDebug_DevHeartBeatResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevHeartBeatResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DevHeartBeatResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevHeartBeatResp} message WARemoteDebug_DevHeartBeatResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevHeartBeatResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DevHeartBeatResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp} WARemoteDebug_DevHeartBeatResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevHeartBeatResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DevHeartBeatResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp} WARemoteDebug_DevHeartBeatResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevHeartBeatResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DevHeartBeatResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DevHeartBeatResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      return null;
    };

    /**
     * Creates a WARemoteDebug_DevHeartBeatResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp} WARemoteDebug_DevHeartBeatResp
     */
    WARemoteDebug_DevHeartBeatResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DevHeartBeatResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp} message WARemoteDebug_DevHeartBeatResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DevHeartBeatResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.baseResponse = null;
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_DevHeartBeatResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DevHeartBeatResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DevHeartBeatResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DevHeartBeatResp;
  })();

  mmbizwxadevremote.WARemoteDebug_RoomInfo = (function() {

    /**
     * Properties of a WARemoteDebug_RoomInfo.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_RoomInfo
     * @property {boolean} [joinRoom] WARemoteDebug_RoomInfo joinRoom
     * @property {string} [roomId] WARemoteDebug_RoomInfo roomId
     * @property {string} [originalMd5] WARemoteDebug_RoomInfo originalMd5
     * @property {number} [roomStatus] WARemoteDebug_RoomInfo roomStatus
     * @property {number} [wxConnStatus] WARemoteDebug_RoomInfo wxConnStatus
     * @property {number} [devConnStatus] WARemoteDebug_RoomInfo devConnStatus
     */

    /**
     * Constructs a new WARemoteDebug_RoomInfo.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_RoomInfo.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_RoomInfo=} [properties] Properties to set
     */
    function WARemoteDebug_RoomInfo(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_RoomInfo joinRoom.
     * @member {boolean}joinRoom
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @instance
     */
    WARemoteDebug_RoomInfo.prototype.joinRoom = false;

    /**
     * WARemoteDebug_RoomInfo roomId.
     * @member {string}roomId
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @instance
     */
    WARemoteDebug_RoomInfo.prototype.roomId = "";

    /**
     * WARemoteDebug_RoomInfo originalMd5.
     * @member {string}originalMd5
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @instance
     */
    WARemoteDebug_RoomInfo.prototype.originalMd5 = "";

    /**
     * WARemoteDebug_RoomInfo roomStatus.
     * @member {number}roomStatus
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @instance
     */
    WARemoteDebug_RoomInfo.prototype.roomStatus = 0;

    /**
     * WARemoteDebug_RoomInfo wxConnStatus.
     * @member {number}wxConnStatus
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @instance
     */
    WARemoteDebug_RoomInfo.prototype.wxConnStatus = 0;

    /**
     * WARemoteDebug_RoomInfo devConnStatus.
     * @member {number}devConnStatus
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @instance
     */
    WARemoteDebug_RoomInfo.prototype.devConnStatus = 0;

    /**
     * Creates a new WARemoteDebug_RoomInfo instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_RoomInfo=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_RoomInfo} WARemoteDebug_RoomInfo instance
     */
    WARemoteDebug_RoomInfo.create = function create(properties) {
      return new WARemoteDebug_RoomInfo(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_RoomInfo message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_RoomInfo.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_RoomInfo} message WARemoteDebug_RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_RoomInfo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.joinRoom != null && message.hasOwnProperty("joinRoom"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).bool(message.joinRoom);
      if (message.roomId != null && message.hasOwnProperty("roomId"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.roomId);
      if (message.originalMd5 != null && message.hasOwnProperty("originalMd5"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.originalMd5);
      if (message.roomStatus != null && message.hasOwnProperty("roomStatus"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).uint32(message.roomStatus);
      if (message.wxConnStatus != null && message.hasOwnProperty("wxConnStatus"))
        writer.uint32( /* id 5, wireType 0 =*/ 40).uint32(message.wxConnStatus);
      if (message.devConnStatus != null && message.hasOwnProperty("devConnStatus"))
        writer.uint32( /* id 6, wireType 0 =*/ 48).uint32(message.devConnStatus);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_RoomInfo message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_RoomInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_RoomInfo} message WARemoteDebug_RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_RoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_RoomInfo} WARemoteDebug_RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_RoomInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_RoomInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.joinRoom = reader.bool();
            break;
          case 2:
            message.roomId = reader.string();
            break;
          case 3:
            message.originalMd5 = reader.string();
            break;
          case 4:
            message.roomStatus = reader.uint32();
            break;
          case 5:
            message.wxConnStatus = reader.uint32();
            break;
          case 6:
            message.devConnStatus = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_RoomInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_RoomInfo} WARemoteDebug_RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_RoomInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_RoomInfo message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_RoomInfo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.joinRoom != null && message.hasOwnProperty("joinRoom"))
        if (typeof message.joinRoom !== "boolean")
          return "joinRoom: boolean expected";
      if (message.roomId != null && message.hasOwnProperty("roomId"))
        if (!$util.isString(message.roomId))
          return "roomId: string expected";
      if (message.originalMd5 != null && message.hasOwnProperty("originalMd5"))
        if (!$util.isString(message.originalMd5))
          return "originalMd5: string expected";
      if (message.roomStatus != null && message.hasOwnProperty("roomStatus"))
        if (!$util.isInteger(message.roomStatus))
          return "roomStatus: integer expected";
      if (message.wxConnStatus != null && message.hasOwnProperty("wxConnStatus"))
        if (!$util.isInteger(message.wxConnStatus))
          return "wxConnStatus: integer expected";
      if (message.devConnStatus != null && message.hasOwnProperty("devConnStatus"))
        if (!$util.isInteger(message.devConnStatus))
          return "devConnStatus: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_RoomInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_RoomInfo} WARemoteDebug_RoomInfo
     */
    WARemoteDebug_RoomInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_RoomInfo)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_RoomInfo();
      if (object.joinRoom != null)
        message.joinRoom = Boolean(object.joinRoom);
      if (object.roomId != null)
        message.roomId = String(object.roomId);
      if (object.originalMd5 != null)
        message.originalMd5 = String(object.originalMd5);
      if (object.roomStatus != null)
        message.roomStatus = object.roomStatus >>> 0;
      if (object.wxConnStatus != null)
        message.wxConnStatus = object.wxConnStatus >>> 0;
      if (object.devConnStatus != null)
        message.devConnStatus = object.devConnStatus >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_RoomInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_RoomInfo} message WARemoteDebug_RoomInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_RoomInfo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.joinRoom = false;
        object.roomId = "";
        object.originalMd5 = "";
        object.roomStatus = 0;
        object.wxConnStatus = 0;
        object.devConnStatus = 0;
      }
      if (message.joinRoom != null && message.hasOwnProperty("joinRoom"))
        object.joinRoom = message.joinRoom;
      if (message.roomId != null && message.hasOwnProperty("roomId"))
        object.roomId = message.roomId;
      if (message.originalMd5 != null && message.hasOwnProperty("originalMd5"))
        object.originalMd5 = message.originalMd5;
      if (message.roomStatus != null && message.hasOwnProperty("roomStatus"))
        object.roomStatus = message.roomStatus;
      if (message.wxConnStatus != null && message.hasOwnProperty("wxConnStatus"))
        object.wxConnStatus = message.wxConnStatus;
      if (message.devConnStatus != null && message.hasOwnProperty("devConnStatus"))
        object.devConnStatus = message.devConnStatus;
      return object;
    };

    /**
     * Converts this WARemoteDebug_RoomInfo to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_RoomInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_RoomInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_RoomInfo;
  })();

  mmbizwxadevremote.WARemoteDebug_WxLoginReq = (function() {

    /**
     * Properties of a WARemoteDebug_WxLoginReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_WxLoginReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_WxLoginReq baseRequest
     * @property {string} [loginTicket] WARemoteDebug_WxLoginReq loginTicket
     */

    /**
     * Constructs a new WARemoteDebug_WxLoginReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_WxLoginReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_WxLoginReq=} [properties] Properties to set
     */
    function WARemoteDebug_WxLoginReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_WxLoginReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @instance
     */
    WARemoteDebug_WxLoginReq.prototype.baseRequest = null;

    /**
     * WARemoteDebug_WxLoginReq loginTicket.
     * @member {string}loginTicket
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @instance
     */
    WARemoteDebug_WxLoginReq.prototype.loginTicket = "";

    /**
     * Creates a new WARemoteDebug_WxLoginReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxLoginReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_WxLoginReq} WARemoteDebug_WxLoginReq instance
     */
    WARemoteDebug_WxLoginReq.create = function create(properties) {
      return new WARemoteDebug_WxLoginReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_WxLoginReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxLoginReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxLoginReq} message WARemoteDebug_WxLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxLoginReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.loginTicket != null && message.hasOwnProperty("loginTicket"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.loginTicket);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_WxLoginReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxLoginReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxLoginReq} message WARemoteDebug_WxLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_WxLoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_WxLoginReq} WARemoteDebug_WxLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxLoginReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_WxLoginReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          case 2:
            message.loginTicket = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_WxLoginReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_WxLoginReq} WARemoteDebug_WxLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxLoginReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_WxLoginReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_WxLoginReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      if (message.loginTicket != null && message.hasOwnProperty("loginTicket"))
        if (!$util.isString(message.loginTicket))
          return "loginTicket: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_WxLoginReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_WxLoginReq} WARemoteDebug_WxLoginReq
     */
    WARemoteDebug_WxLoginReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_WxLoginReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_WxLoginReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxLoginReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      if (object.loginTicket != null)
        message.loginTicket = String(object.loginTicket);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_WxLoginReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_WxLoginReq} message WARemoteDebug_WxLoginReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_WxLoginReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseRequest = null;
        object.loginTicket = "";
      }
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      if (message.loginTicket != null && message.hasOwnProperty("loginTicket"))
        object.loginTicket = message.loginTicket;
      return object;
    };

    /**
     * Converts this WARemoteDebug_WxLoginReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_WxLoginReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_WxLoginReq;
  })();

  mmbizwxadevremote.WARemoteDebug_WxLoginResp = (function() {

    /**
     * Properties of a WARemoteDebug_WxLoginResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_WxLoginResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_WxLoginResp baseResponse
     * @property {mmbizwxadevremote.IWARemoteDebug_RoomInfo} [roomInfo] WARemoteDebug_WxLoginResp roomInfo
     */

    /**
     * Constructs a new WARemoteDebug_WxLoginResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_WxLoginResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_WxLoginResp=} [properties] Properties to set
     */
    function WARemoteDebug_WxLoginResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_WxLoginResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @instance
     */
    WARemoteDebug_WxLoginResp.prototype.baseResponse = null;

    /**
     * WARemoteDebug_WxLoginResp roomInfo.
     * @member {(mmbizwxadevremote.IWARemoteDebug_RoomInfo|null|undefined)}roomInfo
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @instance
     */
    WARemoteDebug_WxLoginResp.prototype.roomInfo = null;

    /**
     * Creates a new WARemoteDebug_WxLoginResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxLoginResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_WxLoginResp} WARemoteDebug_WxLoginResp instance
     */
    WARemoteDebug_WxLoginResp.create = function create(properties) {
      return new WARemoteDebug_WxLoginResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_WxLoginResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxLoginResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxLoginResp} message WARemoteDebug_WxLoginResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxLoginResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
        $root.mmbizwxadevremote.WARemoteDebug_RoomInfo.encode(message.roomInfo, writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_WxLoginResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxLoginResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxLoginResp} message WARemoteDebug_WxLoginResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxLoginResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_WxLoginResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_WxLoginResp} WARemoteDebug_WxLoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxLoginResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_WxLoginResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          case 2:
            message.roomInfo = $root.mmbizwxadevremote.WARemoteDebug_RoomInfo.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_WxLoginResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_WxLoginResp} WARemoteDebug_WxLoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxLoginResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_WxLoginResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_WxLoginResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
        error = $root.mmbizwxadevremote.WARemoteDebug_RoomInfo.verify(message.roomInfo);
        if (error)
          return "roomInfo." + error;
      }
      return null;
    };

    /**
     * Creates a WARemoteDebug_WxLoginResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_WxLoginResp} WARemoteDebug_WxLoginResp
     */
    WARemoteDebug_WxLoginResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_WxLoginResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_WxLoginResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxLoginResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      if (object.roomInfo != null) {
        if (typeof object.roomInfo !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxLoginResp.roomInfo: object expected");
        message.roomInfo = $root.mmbizwxadevremote.WARemoteDebug_RoomInfo.fromObject(object.roomInfo);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_WxLoginResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_WxLoginResp} message WARemoteDebug_WxLoginResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_WxLoginResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseResponse = null;
        object.roomInfo = null;
      }
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
        object.roomInfo = $root.mmbizwxadevremote.WARemoteDebug_RoomInfo.toObject(message.roomInfo, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_WxLoginResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_WxLoginResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_WxLoginResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_WxLoginResp;
  })();

  mmbizwxadevremote.WARemoteDebug_DevLoginReq = (function() {

    /**
     * Properties of a WARemoteDebug_DevLoginReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DevLoginReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_DevLoginReq baseRequest
     * @property {string} [newticket] WARemoteDebug_DevLoginReq newticket
     * @property {number} [autodev] WARemoteDebug_DevLoginReq autodev
     */

    /**
     * Constructs a new WARemoteDebug_DevLoginReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DevLoginReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DevLoginReq=} [properties] Properties to set
     */
    function WARemoteDebug_DevLoginReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DevLoginReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @instance
     */
    WARemoteDebug_DevLoginReq.prototype.baseRequest = null;

    /**
     * WARemoteDebug_DevLoginReq newticket.
     * @member {string}newticket
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @instance
     */
    WARemoteDebug_DevLoginReq.prototype.newticket = "";

    /**
     * WARemoteDebug_DevLoginReq autodev.
     * @member {number}autodev
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @instance
     */
    WARemoteDebug_DevLoginReq.prototype.autodev = 0;

    /**
     * Creates a new WARemoteDebug_DevLoginReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevLoginReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DevLoginReq} WARemoteDebug_DevLoginReq instance
     */
    WARemoteDebug_DevLoginReq.create = function create(properties) {
      return new WARemoteDebug_DevLoginReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DevLoginReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevLoginReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevLoginReq} message WARemoteDebug_DevLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevLoginReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.newticket != null && message.hasOwnProperty("newticket"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.newticket);
      if (message.autodev != null && message.hasOwnProperty("autodev"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.autodev);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DevLoginReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevLoginReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevLoginReq} message WARemoteDebug_DevLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DevLoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DevLoginReq} WARemoteDebug_DevLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevLoginReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DevLoginReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          case 2:
            message.newticket = reader.string();
            break;
          case 3:
            message.autodev = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DevLoginReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DevLoginReq} WARemoteDebug_DevLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevLoginReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DevLoginReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DevLoginReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      if (message.newticket != null && message.hasOwnProperty("newticket"))
        if (!$util.isString(message.newticket))
          return "newticket: string expected";
      if (message.autodev != null && message.hasOwnProperty("autodev"))
        if (!$util.isInteger(message.autodev))
          return "autodev: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_DevLoginReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DevLoginReq} WARemoteDebug_DevLoginReq
     */
    WARemoteDebug_DevLoginReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DevLoginReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DevLoginReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevLoginReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      if (object.newticket != null)
        message.newticket = String(object.newticket);
      if (object.autodev != null)
        message.autodev = object.autodev >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DevLoginReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DevLoginReq} message WARemoteDebug_DevLoginReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DevLoginReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseRequest = null;
        object.newticket = "";
        object.autodev = 0;
      }
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      if (message.newticket != null && message.hasOwnProperty("newticket"))
        object.newticket = message.newticket;
      if (message.autodev != null && message.hasOwnProperty("autodev"))
        object.autodev = message.autodev;
      return object;
    };

    /**
     * Converts this WARemoteDebug_DevLoginReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DevLoginReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DevLoginReq;
  })();

  mmbizwxadevremote.WARemoteDebug_DevLoginResp = (function() {

    /**
     * Properties of a WARemoteDebug_DevLoginResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DevLoginResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_DevLoginResp baseResponse
     * @property {mmbizwxadevremote.IWARemoteDebug_RoomInfo} [roomInfo] WARemoteDebug_DevLoginResp roomInfo
     */

    /**
     * Constructs a new WARemoteDebug_DevLoginResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DevLoginResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DevLoginResp=} [properties] Properties to set
     */
    function WARemoteDebug_DevLoginResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DevLoginResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @instance
     */
    WARemoteDebug_DevLoginResp.prototype.baseResponse = null;

    /**
     * WARemoteDebug_DevLoginResp roomInfo.
     * @member {(mmbizwxadevremote.IWARemoteDebug_RoomInfo|null|undefined)}roomInfo
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @instance
     */
    WARemoteDebug_DevLoginResp.prototype.roomInfo = null;

    /**
     * Creates a new WARemoteDebug_DevLoginResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevLoginResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DevLoginResp} WARemoteDebug_DevLoginResp instance
     */
    WARemoteDebug_DevLoginResp.create = function create(properties) {
      return new WARemoteDebug_DevLoginResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DevLoginResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevLoginResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevLoginResp} message WARemoteDebug_DevLoginResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevLoginResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
        $root.mmbizwxadevremote.WARemoteDebug_RoomInfo.encode(message.roomInfo, writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DevLoginResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevLoginResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevLoginResp} message WARemoteDebug_DevLoginResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevLoginResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DevLoginResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DevLoginResp} WARemoteDebug_DevLoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevLoginResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DevLoginResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          case 2:
            message.roomInfo = $root.mmbizwxadevremote.WARemoteDebug_RoomInfo.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DevLoginResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DevLoginResp} WARemoteDebug_DevLoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevLoginResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DevLoginResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DevLoginResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
        error = $root.mmbizwxadevremote.WARemoteDebug_RoomInfo.verify(message.roomInfo);
        if (error)
          return "roomInfo." + error;
      }
      return null;
    };

    /**
     * Creates a WARemoteDebug_DevLoginResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DevLoginResp} WARemoteDebug_DevLoginResp
     */
    WARemoteDebug_DevLoginResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DevLoginResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DevLoginResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevLoginResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      if (object.roomInfo != null) {
        if (typeof object.roomInfo !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevLoginResp.roomInfo: object expected");
        message.roomInfo = $root.mmbizwxadevremote.WARemoteDebug_RoomInfo.fromObject(object.roomInfo);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DevLoginResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DevLoginResp} message WARemoteDebug_DevLoginResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DevLoginResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseResponse = null;
        object.roomInfo = null;
      }
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
        object.roomInfo = $root.mmbizwxadevremote.WARemoteDebug_RoomInfo.toObject(message.roomInfo, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_DevLoginResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DevLoginResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DevLoginResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DevLoginResp;
  })();

  mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq = (function() {

    /**
     * Properties of a WARemoteDebug_WxJoinRoomReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_WxJoinRoomReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_WxJoinRoomReq baseRequest
     * @property {string} [username] WARemoteDebug_WxJoinRoomReq username
     * @property {string} [roomId] WARemoteDebug_WxJoinRoomReq roomId
     * @property {string} [wxpkgInfo] WARemoteDebug_WxJoinRoomReq wxpkgInfo
     */

    /**
     * Constructs a new WARemoteDebug_WxJoinRoomReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_WxJoinRoomReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_WxJoinRoomReq=} [properties] Properties to set
     */
    function WARemoteDebug_WxJoinRoomReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_WxJoinRoomReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @instance
     */
    WARemoteDebug_WxJoinRoomReq.prototype.baseRequest = null;

    /**
     * WARemoteDebug_WxJoinRoomReq username.
     * @member {string}username
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @instance
     */
    WARemoteDebug_WxJoinRoomReq.prototype.username = "";

    /**
     * WARemoteDebug_WxJoinRoomReq roomId.
     * @member {string}roomId
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @instance
     */
    WARemoteDebug_WxJoinRoomReq.prototype.roomId = "";

    /**
     * WARemoteDebug_WxJoinRoomReq wxpkgInfo.
     * @member {string}wxpkgInfo
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @instance
     */
    WARemoteDebug_WxJoinRoomReq.prototype.wxpkgInfo = "";

    /**
     * Creates a new WARemoteDebug_WxJoinRoomReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxJoinRoomReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq} WARemoteDebug_WxJoinRoomReq instance
     */
    WARemoteDebug_WxJoinRoomReq.create = function create(properties) {
      return new WARemoteDebug_WxJoinRoomReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_WxJoinRoomReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxJoinRoomReq} message WARemoteDebug_WxJoinRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxJoinRoomReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.username != null && message.hasOwnProperty("username"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.username);
      if (message.roomId != null && message.hasOwnProperty("roomId"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.roomId);
      if (message.wxpkgInfo != null && message.hasOwnProperty("wxpkgInfo"))
        writer.uint32( /* id 4, wireType 2 =*/ 34).string(message.wxpkgInfo);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_WxJoinRoomReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxJoinRoomReq} message WARemoteDebug_WxJoinRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxJoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_WxJoinRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq} WARemoteDebug_WxJoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxJoinRoomReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          case 2:
            message.username = reader.string();
            break;
          case 3:
            message.roomId = reader.string();
            break;
          case 4:
            message.wxpkgInfo = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_WxJoinRoomReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq} WARemoteDebug_WxJoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxJoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_WxJoinRoomReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_WxJoinRoomReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      if (message.username != null && message.hasOwnProperty("username"))
        if (!$util.isString(message.username))
          return "username: string expected";
      if (message.roomId != null && message.hasOwnProperty("roomId"))
        if (!$util.isString(message.roomId))
          return "roomId: string expected";
      if (message.wxpkgInfo != null && message.hasOwnProperty("wxpkgInfo"))
        if (!$util.isString(message.wxpkgInfo))
          return "wxpkgInfo: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_WxJoinRoomReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq} WARemoteDebug_WxJoinRoomReq
     */
    WARemoteDebug_WxJoinRoomReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      if (object.username != null)
        message.username = String(object.username);
      if (object.roomId != null)
        message.roomId = String(object.roomId);
      if (object.wxpkgInfo != null)
        message.wxpkgInfo = String(object.wxpkgInfo);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_WxJoinRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq} message WARemoteDebug_WxJoinRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_WxJoinRoomReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseRequest = null;
        object.username = "";
        object.roomId = "";
        object.wxpkgInfo = "";
      }
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      if (message.username != null && message.hasOwnProperty("username"))
        object.username = message.username;
      if (message.roomId != null && message.hasOwnProperty("roomId"))
        object.roomId = message.roomId;
      if (message.wxpkgInfo != null && message.hasOwnProperty("wxpkgInfo"))
        object.wxpkgInfo = message.wxpkgInfo;
      return object;
    };

    /**
     * Converts this WARemoteDebug_WxJoinRoomReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_WxJoinRoomReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_WxJoinRoomReq;
  })();

  mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp = (function() {

    /**
     * Properties of a WARemoteDebug_WxJoinRoomResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_WxJoinRoomResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_WxJoinRoomResp baseResponse
     */

    /**
     * Constructs a new WARemoteDebug_WxJoinRoomResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_WxJoinRoomResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_WxJoinRoomResp=} [properties] Properties to set
     */
    function WARemoteDebug_WxJoinRoomResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_WxJoinRoomResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp
     * @instance
     */
    WARemoteDebug_WxJoinRoomResp.prototype.baseResponse = null;

    /**
     * Creates a new WARemoteDebug_WxJoinRoomResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxJoinRoomResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp} WARemoteDebug_WxJoinRoomResp instance
     */
    WARemoteDebug_WxJoinRoomResp.create = function create(properties) {
      return new WARemoteDebug_WxJoinRoomResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_WxJoinRoomResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxJoinRoomResp} message WARemoteDebug_WxJoinRoomResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxJoinRoomResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_WxJoinRoomResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxJoinRoomResp} message WARemoteDebug_WxJoinRoomResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxJoinRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_WxJoinRoomResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp} WARemoteDebug_WxJoinRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxJoinRoomResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_WxJoinRoomResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp} WARemoteDebug_WxJoinRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxJoinRoomResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_WxJoinRoomResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_WxJoinRoomResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      return null;
    };

    /**
     * Creates a WARemoteDebug_WxJoinRoomResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp} WARemoteDebug_WxJoinRoomResp
     */
    WARemoteDebug_WxJoinRoomResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_WxJoinRoomResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp} message WARemoteDebug_WxJoinRoomResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_WxJoinRoomResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.baseResponse = null;
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_WxJoinRoomResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_WxJoinRoomResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_WxJoinRoomResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_WxJoinRoomResp;
  })();

  mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq = (function() {

    /**
     * Properties of a WARemoteDebug_DevJoinRoomReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DevJoinRoomReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_DevJoinRoomReq baseRequest
     * @property {string} [appid] WARemoteDebug_DevJoinRoomReq appid
     * @property {string} [roomId] WARemoteDebug_DevJoinRoomReq roomId
     * @property {string} [wxpkgInfo] WARemoteDebug_DevJoinRoomReq wxpkgInfo
     */

    /**
     * Constructs a new WARemoteDebug_DevJoinRoomReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DevJoinRoomReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DevJoinRoomReq=} [properties] Properties to set
     */
    function WARemoteDebug_DevJoinRoomReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DevJoinRoomReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @instance
     */
    WARemoteDebug_DevJoinRoomReq.prototype.baseRequest = null;

    /**
     * WARemoteDebug_DevJoinRoomReq appid.
     * @member {string}appid
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @instance
     */
    WARemoteDebug_DevJoinRoomReq.prototype.appid = "";

    /**
     * WARemoteDebug_DevJoinRoomReq roomId.
     * @member {string}roomId
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @instance
     */
    WARemoteDebug_DevJoinRoomReq.prototype.roomId = "";

    /**
     * WARemoteDebug_DevJoinRoomReq wxpkgInfo.
     * @member {string}wxpkgInfo
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @instance
     */
    WARemoteDebug_DevJoinRoomReq.prototype.wxpkgInfo = "";

    /**
     * Creates a new WARemoteDebug_DevJoinRoomReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevJoinRoomReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq} WARemoteDebug_DevJoinRoomReq instance
     */
    WARemoteDebug_DevJoinRoomReq.create = function create(properties) {
      return new WARemoteDebug_DevJoinRoomReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DevJoinRoomReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevJoinRoomReq} message WARemoteDebug_DevJoinRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevJoinRoomReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.appid != null && message.hasOwnProperty("appid"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.appid);
      if (message.roomId != null && message.hasOwnProperty("roomId"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.roomId);
      if (message.wxpkgInfo != null && message.hasOwnProperty("wxpkgInfo"))
        writer.uint32( /* id 4, wireType 2 =*/ 34).string(message.wxpkgInfo);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DevJoinRoomReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevJoinRoomReq} message WARemoteDebug_DevJoinRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevJoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DevJoinRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq} WARemoteDebug_DevJoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevJoinRoomReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          case 2:
            message.appid = reader.string();
            break;
          case 3:
            message.roomId = reader.string();
            break;
          case 4:
            message.wxpkgInfo = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DevJoinRoomReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq} WARemoteDebug_DevJoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevJoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DevJoinRoomReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DevJoinRoomReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      if (message.appid != null && message.hasOwnProperty("appid"))
        if (!$util.isString(message.appid))
          return "appid: string expected";
      if (message.roomId != null && message.hasOwnProperty("roomId"))
        if (!$util.isString(message.roomId))
          return "roomId: string expected";
      if (message.wxpkgInfo != null && message.hasOwnProperty("wxpkgInfo"))
        if (!$util.isString(message.wxpkgInfo))
          return "wxpkgInfo: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_DevJoinRoomReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq} WARemoteDebug_DevJoinRoomReq
     */
    WARemoteDebug_DevJoinRoomReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      if (object.appid != null)
        message.appid = String(object.appid);
      if (object.roomId != null)
        message.roomId = String(object.roomId);
      if (object.wxpkgInfo != null)
        message.wxpkgInfo = String(object.wxpkgInfo);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DevJoinRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq} message WARemoteDebug_DevJoinRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DevJoinRoomReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseRequest = null;
        object.appid = "";
        object.roomId = "";
        object.wxpkgInfo = "";
      }
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      if (message.appid != null && message.hasOwnProperty("appid"))
        object.appid = message.appid;
      if (message.roomId != null && message.hasOwnProperty("roomId"))
        object.roomId = message.roomId;
      if (message.wxpkgInfo != null && message.hasOwnProperty("wxpkgInfo"))
        object.wxpkgInfo = message.wxpkgInfo;
      return object;
    };

    /**
     * Converts this WARemoteDebug_DevJoinRoomReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DevJoinRoomReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DevJoinRoomReq;
  })();

  mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp = (function() {

    /**
     * Properties of a WARemoteDebug_DevJoinRoomResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DevJoinRoomResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_DevJoinRoomResp baseResponse
     */

    /**
     * Constructs a new WARemoteDebug_DevJoinRoomResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DevJoinRoomResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DevJoinRoomResp=} [properties] Properties to set
     */
    function WARemoteDebug_DevJoinRoomResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DevJoinRoomResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp
     * @instance
     */
    WARemoteDebug_DevJoinRoomResp.prototype.baseResponse = null;

    /**
     * Creates a new WARemoteDebug_DevJoinRoomResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevJoinRoomResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp} WARemoteDebug_DevJoinRoomResp instance
     */
    WARemoteDebug_DevJoinRoomResp.create = function create(properties) {
      return new WARemoteDebug_DevJoinRoomResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DevJoinRoomResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevJoinRoomResp} message WARemoteDebug_DevJoinRoomResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevJoinRoomResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DevJoinRoomResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevJoinRoomResp} message WARemoteDebug_DevJoinRoomResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevJoinRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DevJoinRoomResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp} WARemoteDebug_DevJoinRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevJoinRoomResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DevJoinRoomResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp} WARemoteDebug_DevJoinRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevJoinRoomResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DevJoinRoomResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DevJoinRoomResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      return null;
    };

    /**
     * Creates a WARemoteDebug_DevJoinRoomResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp} WARemoteDebug_DevJoinRoomResp
     */
    WARemoteDebug_DevJoinRoomResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DevJoinRoomResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp} message WARemoteDebug_DevJoinRoomResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DevJoinRoomResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.baseResponse = null;
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_DevJoinRoomResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DevJoinRoomResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DevJoinRoomResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DevJoinRoomResp;
  })();

  mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq = (function() {

    /**
     * Properties of a WARemoteDebug_WxQuitRoomReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_WxQuitRoomReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_WxQuitRoomReq baseRequest
     */

    /**
     * Constructs a new WARemoteDebug_WxQuitRoomReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_WxQuitRoomReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_WxQuitRoomReq=} [properties] Properties to set
     */
    function WARemoteDebug_WxQuitRoomReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_WxQuitRoomReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq
     * @instance
     */
    WARemoteDebug_WxQuitRoomReq.prototype.baseRequest = null;

    /**
     * Creates a new WARemoteDebug_WxQuitRoomReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxQuitRoomReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq} WARemoteDebug_WxQuitRoomReq instance
     */
    WARemoteDebug_WxQuitRoomReq.create = function create(properties) {
      return new WARemoteDebug_WxQuitRoomReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_WxQuitRoomReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxQuitRoomReq} message WARemoteDebug_WxQuitRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxQuitRoomReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_WxQuitRoomReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxQuitRoomReq} message WARemoteDebug_WxQuitRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxQuitRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_WxQuitRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq} WARemoteDebug_WxQuitRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxQuitRoomReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_WxQuitRoomReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq} WARemoteDebug_WxQuitRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxQuitRoomReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_WxQuitRoomReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_WxQuitRoomReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      return null;
    };

    /**
     * Creates a WARemoteDebug_WxQuitRoomReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq} WARemoteDebug_WxQuitRoomReq
     */
    WARemoteDebug_WxQuitRoomReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_WxQuitRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq} message WARemoteDebug_WxQuitRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_WxQuitRoomReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.baseRequest = null;
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_WxQuitRoomReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_WxQuitRoomReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_WxQuitRoomReq;
  })();

  mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp = (function() {

    /**
     * Properties of a WARemoteDebug_WxQuitRoomResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_WxQuitRoomResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_WxQuitRoomResp baseResponse
     */

    /**
     * Constructs a new WARemoteDebug_WxQuitRoomResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_WxQuitRoomResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_WxQuitRoomResp=} [properties] Properties to set
     */
    function WARemoteDebug_WxQuitRoomResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_WxQuitRoomResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp
     * @instance
     */
    WARemoteDebug_WxQuitRoomResp.prototype.baseResponse = null;

    /**
     * Creates a new WARemoteDebug_WxQuitRoomResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxQuitRoomResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp} WARemoteDebug_WxQuitRoomResp instance
     */
    WARemoteDebug_WxQuitRoomResp.create = function create(properties) {
      return new WARemoteDebug_WxQuitRoomResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_WxQuitRoomResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxQuitRoomResp} message WARemoteDebug_WxQuitRoomResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxQuitRoomResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_WxQuitRoomResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxQuitRoomResp} message WARemoteDebug_WxQuitRoomResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxQuitRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_WxQuitRoomResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp} WARemoteDebug_WxQuitRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxQuitRoomResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_WxQuitRoomResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp} WARemoteDebug_WxQuitRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxQuitRoomResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_WxQuitRoomResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_WxQuitRoomResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      return null;
    };

    /**
     * Creates a WARemoteDebug_WxQuitRoomResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp} WARemoteDebug_WxQuitRoomResp
     */
    WARemoteDebug_WxQuitRoomResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_WxQuitRoomResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp} message WARemoteDebug_WxQuitRoomResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_WxQuitRoomResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.baseResponse = null;
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_WxQuitRoomResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_WxQuitRoomResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_WxQuitRoomResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_WxQuitRoomResp;
  })();

  mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq = (function() {

    /**
     * Properties of a WARemoteDebug_DevQuitRoomReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DevQuitRoomReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_DevQuitRoomReq baseRequest
     */

    /**
     * Constructs a new WARemoteDebug_DevQuitRoomReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DevQuitRoomReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DevQuitRoomReq=} [properties] Properties to set
     */
    function WARemoteDebug_DevQuitRoomReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DevQuitRoomReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq
     * @instance
     */
    WARemoteDebug_DevQuitRoomReq.prototype.baseRequest = null;

    /**
     * Creates a new WARemoteDebug_DevQuitRoomReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevQuitRoomReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq} WARemoteDebug_DevQuitRoomReq instance
     */
    WARemoteDebug_DevQuitRoomReq.create = function create(properties) {
      return new WARemoteDebug_DevQuitRoomReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DevQuitRoomReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevQuitRoomReq} message WARemoteDebug_DevQuitRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevQuitRoomReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DevQuitRoomReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevQuitRoomReq} message WARemoteDebug_DevQuitRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevQuitRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DevQuitRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq} WARemoteDebug_DevQuitRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevQuitRoomReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DevQuitRoomReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq} WARemoteDebug_DevQuitRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevQuitRoomReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DevQuitRoomReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DevQuitRoomReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      return null;
    };

    /**
     * Creates a WARemoteDebug_DevQuitRoomReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq} WARemoteDebug_DevQuitRoomReq
     */
    WARemoteDebug_DevQuitRoomReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DevQuitRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq} message WARemoteDebug_DevQuitRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DevQuitRoomReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.baseRequest = null;
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_DevQuitRoomReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DevQuitRoomReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DevQuitRoomReq;
  })();

  mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp = (function() {

    /**
     * Properties of a WARemoteDebug_DevQuitRoomResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DevQuitRoomResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_DevQuitRoomResp baseResponse
     */

    /**
     * Constructs a new WARemoteDebug_DevQuitRoomResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DevQuitRoomResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DevQuitRoomResp=} [properties] Properties to set
     */
    function WARemoteDebug_DevQuitRoomResp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DevQuitRoomResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp
     * @instance
     */
    WARemoteDebug_DevQuitRoomResp.prototype.baseResponse = null;

    /**
     * Creates a new WARemoteDebug_DevQuitRoomResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevQuitRoomResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp} WARemoteDebug_DevQuitRoomResp instance
     */
    WARemoteDebug_DevQuitRoomResp.create = function create(properties) {
      return new WARemoteDebug_DevQuitRoomResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DevQuitRoomResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevQuitRoomResp} message WARemoteDebug_DevQuitRoomResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevQuitRoomResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DevQuitRoomResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevQuitRoomResp} message WARemoteDebug_DevQuitRoomResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevQuitRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DevQuitRoomResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp} WARemoteDebug_DevQuitRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevQuitRoomResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DevQuitRoomResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp} WARemoteDebug_DevQuitRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevQuitRoomResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DevQuitRoomResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DevQuitRoomResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      return null;
    };

    /**
     * Creates a WARemoteDebug_DevQuitRoomResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp} WARemoteDebug_DevQuitRoomResp
     */
    WARemoteDebug_DevQuitRoomResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DevQuitRoomResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp} message WARemoteDebug_DevQuitRoomResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DevQuitRoomResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.baseResponse = null;
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      return object;
    };

    /**
     * Converts this WARemoteDebug_DevQuitRoomResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DevQuitRoomResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DevQuitRoomResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DevQuitRoomResp;
  })();

  mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq = (function() {

    /**
     * Properties of a WARemoteDebug_WxSyncMessageReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_WxSyncMessageReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_WxSyncMessageReq baseRequest
     * @property {number} [minSeq] WARemoteDebug_WxSyncMessageReq minSeq
     * @property {number} [maxSeq] WARemoteDebug_WxSyncMessageReq maxSeq
     */

    /**
     * Constructs a new WARemoteDebug_WxSyncMessageReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_WxSyncMessageReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_WxSyncMessageReq=} [properties] Properties to set
     */
    function WARemoteDebug_WxSyncMessageReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_WxSyncMessageReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @instance
     */
    WARemoteDebug_WxSyncMessageReq.prototype.baseRequest = null;

    /**
     * WARemoteDebug_WxSyncMessageReq minSeq.
     * @member {number}minSeq
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @instance
     */
    WARemoteDebug_WxSyncMessageReq.prototype.minSeq = 0;

    /**
     * WARemoteDebug_WxSyncMessageReq maxSeq.
     * @member {number}maxSeq
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @instance
     */
    WARemoteDebug_WxSyncMessageReq.prototype.maxSeq = 0;

    /**
     * Creates a new WARemoteDebug_WxSyncMessageReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxSyncMessageReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq} WARemoteDebug_WxSyncMessageReq instance
     */
    WARemoteDebug_WxSyncMessageReq.create = function create(properties) {
      return new WARemoteDebug_WxSyncMessageReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_WxSyncMessageReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxSyncMessageReq} message WARemoteDebug_WxSyncMessageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxSyncMessageReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.minSeq != null && message.hasOwnProperty("minSeq"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.minSeq);
      if (message.maxSeq != null && message.hasOwnProperty("maxSeq"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.maxSeq);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_WxSyncMessageReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxSyncMessageReq} message WARemoteDebug_WxSyncMessageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxSyncMessageReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_WxSyncMessageReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq} WARemoteDebug_WxSyncMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxSyncMessageReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          case 2:
            message.minSeq = reader.uint32();
            break;
          case 3:
            message.maxSeq = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_WxSyncMessageReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq} WARemoteDebug_WxSyncMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxSyncMessageReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_WxSyncMessageReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_WxSyncMessageReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      if (message.minSeq != null && message.hasOwnProperty("minSeq"))
        if (!$util.isInteger(message.minSeq))
          return "minSeq: integer expected";
      if (message.maxSeq != null && message.hasOwnProperty("maxSeq"))
        if (!$util.isInteger(message.maxSeq))
          return "maxSeq: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_WxSyncMessageReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq} WARemoteDebug_WxSyncMessageReq
     */
    WARemoteDebug_WxSyncMessageReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      if (object.minSeq != null)
        message.minSeq = object.minSeq >>> 0;
      if (object.maxSeq != null)
        message.maxSeq = object.maxSeq >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_WxSyncMessageReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq} message WARemoteDebug_WxSyncMessageReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_WxSyncMessageReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseRequest = null;
        object.minSeq = 0;
        object.maxSeq = 0;
      }
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      if (message.minSeq != null && message.hasOwnProperty("minSeq"))
        object.minSeq = message.minSeq;
      if (message.maxSeq != null && message.hasOwnProperty("maxSeq"))
        object.maxSeq = message.maxSeq;
      return object;
    };

    /**
     * Converts this WARemoteDebug_WxSyncMessageReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_WxSyncMessageReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_WxSyncMessageReq;
  })();

  mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp = (function() {

    /**
     * Properties of a WARemoteDebug_WxSyncMessageResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_WxSyncMessageResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_WxSyncMessageResp baseResponse
     * @property {Array.<mmbizwxadevremote.IWARemoteDebug_DebugMessage>} [debugMessageList] WARemoteDebug_WxSyncMessageResp debugMessageList
     * @property {number} [sendAck] WARemoteDebug_WxSyncMessageResp sendAck
     */

    /**
     * Constructs a new WARemoteDebug_WxSyncMessageResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_WxSyncMessageResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_WxSyncMessageResp=} [properties] Properties to set
     */
    function WARemoteDebug_WxSyncMessageResp(properties) {
      this.debugMessageList = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_WxSyncMessageResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @instance
     */
    WARemoteDebug_WxSyncMessageResp.prototype.baseResponse = null;

    /**
     * WARemoteDebug_WxSyncMessageResp debugMessageList.
     * @member {Array.<mmbizwxadevremote.IWARemoteDebug_DebugMessage>}debugMessageList
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @instance
     */
    WARemoteDebug_WxSyncMessageResp.prototype.debugMessageList = $util.emptyArray;

    /**
     * WARemoteDebug_WxSyncMessageResp sendAck.
     * @member {number}sendAck
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @instance
     */
    WARemoteDebug_WxSyncMessageResp.prototype.sendAck = 0;

    /**
     * Creates a new WARemoteDebug_WxSyncMessageResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxSyncMessageResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp} WARemoteDebug_WxSyncMessageResp instance
     */
    WARemoteDebug_WxSyncMessageResp.create = function create(properties) {
      return new WARemoteDebug_WxSyncMessageResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_WxSyncMessageResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxSyncMessageResp} message WARemoteDebug_WxSyncMessageResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxSyncMessageResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.debugMessageList != null && message.debugMessageList.length)
        for (var i = 0; i < message.debugMessageList.length; ++i)
          $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.encode(message.debugMessageList[i], writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
      if (message.sendAck != null && message.hasOwnProperty("sendAck"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.sendAck);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_WxSyncMessageResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_WxSyncMessageResp} message WARemoteDebug_WxSyncMessageResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_WxSyncMessageResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_WxSyncMessageResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp} WARemoteDebug_WxSyncMessageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxSyncMessageResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          case 2:
            if (!(message.debugMessageList && message.debugMessageList.length))
              message.debugMessageList = [];
            message.debugMessageList.push($root.mmbizwxadevremote.WARemoteDebug_DebugMessage.decode(reader, reader.uint32()));
            break;
          case 3:
            message.sendAck = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_WxSyncMessageResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp} WARemoteDebug_WxSyncMessageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_WxSyncMessageResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_WxSyncMessageResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_WxSyncMessageResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      if (message.debugMessageList != null && message.hasOwnProperty("debugMessageList")) {
        if (!Array.isArray(message.debugMessageList))
          return "debugMessageList: array expected";
        for (var i = 0; i < message.debugMessageList.length; ++i) {
          error = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.verify(message.debugMessageList[i]);
          if (error)
            return "debugMessageList." + error;
        }
      }
      if (message.sendAck != null && message.hasOwnProperty("sendAck"))
        if (!$util.isInteger(message.sendAck))
          return "sendAck: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_WxSyncMessageResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp} WARemoteDebug_WxSyncMessageResp
     */
    WARemoteDebug_WxSyncMessageResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      if (object.debugMessageList) {
        if (!Array.isArray(object.debugMessageList))
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp.debugMessageList: array expected");
        message.debugMessageList = [];
        for (var i = 0; i < object.debugMessageList.length; ++i) {
          if (typeof object.debugMessageList[i] !== "object")
            throw TypeError(".mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp.debugMessageList: object expected");
          message.debugMessageList[i] = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.fromObject(object.debugMessageList[i]);
        }
      }
      if (object.sendAck != null)
        message.sendAck = object.sendAck >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_WxSyncMessageResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp} message WARemoteDebug_WxSyncMessageResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_WxSyncMessageResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.arrays || options.defaults)
        object.debugMessageList = [];
      if (options.defaults) {
        object.baseResponse = null;
        object.sendAck = 0;
      }
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      if (message.debugMessageList && message.debugMessageList.length) {
        object.debugMessageList = [];
        for (var j = 0; j < message.debugMessageList.length; ++j)
          object.debugMessageList[j] = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.toObject(message.debugMessageList[j], options);
      }
      if (message.sendAck != null && message.hasOwnProperty("sendAck"))
        object.sendAck = message.sendAck;
      return object;
    };

    /**
     * Converts this WARemoteDebug_WxSyncMessageResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_WxSyncMessageResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_WxSyncMessageResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_WxSyncMessageResp;
  })();

  mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq = (function() {

    /**
     * Properties of a WARemoteDebug_DevSyncMessageReq.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DevSyncMessageReq
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseReq} baseRequest WARemoteDebug_DevSyncMessageReq baseRequest
     * @property {number} [minSeq] WARemoteDebug_DevSyncMessageReq minSeq
     * @property {number} [maxSeq] WARemoteDebug_DevSyncMessageReq maxSeq
     */

    /**
     * Constructs a new WARemoteDebug_DevSyncMessageReq.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DevSyncMessageReq.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DevSyncMessageReq=} [properties] Properties to set
     */
    function WARemoteDebug_DevSyncMessageReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DevSyncMessageReq baseRequest.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseReq}baseRequest
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @instance
     */
    WARemoteDebug_DevSyncMessageReq.prototype.baseRequest = null;

    /**
     * WARemoteDebug_DevSyncMessageReq minSeq.
     * @member {number}minSeq
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @instance
     */
    WARemoteDebug_DevSyncMessageReq.prototype.minSeq = 0;

    /**
     * WARemoteDebug_DevSyncMessageReq maxSeq.
     * @member {number}maxSeq
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @instance
     */
    WARemoteDebug_DevSyncMessageReq.prototype.maxSeq = 0;

    /**
     * Creates a new WARemoteDebug_DevSyncMessageReq instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevSyncMessageReq=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq} WARemoteDebug_DevSyncMessageReq instance
     */
    WARemoteDebug_DevSyncMessageReq.create = function create(properties) {
      return new WARemoteDebug_DevSyncMessageReq(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DevSyncMessageReq message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevSyncMessageReq} message WARemoteDebug_DevSyncMessageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevSyncMessageReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseReq.encode(message.baseRequest, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.minSeq != null && message.hasOwnProperty("minSeq"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.minSeq);
      if (message.maxSeq != null && message.hasOwnProperty("maxSeq"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.maxSeq);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DevSyncMessageReq message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevSyncMessageReq} message WARemoteDebug_DevSyncMessageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevSyncMessageReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DevSyncMessageReq message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq} WARemoteDebug_DevSyncMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevSyncMessageReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.decode(reader, reader.uint32());
            break;
          case 2:
            message.minSeq = reader.uint32();
            break;
          case 3:
            message.maxSeq = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseRequest"))
        throw $util.ProtocolError("missing required 'baseRequest'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DevSyncMessageReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq} WARemoteDebug_DevSyncMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevSyncMessageReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DevSyncMessageReq message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DevSyncMessageReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.verify(message.baseRequest);
      if (error)
        return "baseRequest." + error;
      if (message.minSeq != null && message.hasOwnProperty("minSeq"))
        if (!$util.isInteger(message.minSeq))
          return "minSeq: integer expected";
      if (message.maxSeq != null && message.hasOwnProperty("maxSeq"))
        if (!$util.isInteger(message.maxSeq))
          return "maxSeq: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_DevSyncMessageReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq} WARemoteDebug_DevSyncMessageReq
     */
    WARemoteDebug_DevSyncMessageReq.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq();
      if (object.baseRequest != null) {
        if (typeof object.baseRequest !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq.baseRequest: object expected");
        message.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.fromObject(object.baseRequest);
      }
      if (object.minSeq != null)
        message.minSeq = object.minSeq >>> 0;
      if (object.maxSeq != null)
        message.maxSeq = object.maxSeq >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DevSyncMessageReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq} message WARemoteDebug_DevSyncMessageReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DevSyncMessageReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.baseRequest = null;
        object.minSeq = 0;
        object.maxSeq = 0;
      }
      if (message.baseRequest != null && message.hasOwnProperty("baseRequest"))
        object.baseRequest = $root.mmbizwxadevremote.WARemoteDebug_BaseReq.toObject(message.baseRequest, options);
      if (message.minSeq != null && message.hasOwnProperty("minSeq"))
        object.minSeq = message.minSeq;
      if (message.maxSeq != null && message.hasOwnProperty("maxSeq"))
        object.maxSeq = message.maxSeq;
      return object;
    };

    /**
     * Converts this WARemoteDebug_DevSyncMessageReq to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DevSyncMessageReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DevSyncMessageReq;
  })();

  mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp = (function() {

    /**
     * Properties of a WARemoteDebug_DevSyncMessageResp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DevSyncMessageResp
     * @property {mmbizwxadevremote.IWARemoteDebug_BaseResp} baseResponse WARemoteDebug_DevSyncMessageResp baseResponse
     * @property {Array.<mmbizwxadevremote.IWARemoteDebug_DebugMessage>} [debugMessageList] WARemoteDebug_DevSyncMessageResp debugMessageList
     * @property {number} [sendAck] WARemoteDebug_DevSyncMessageResp sendAck
     */

    /**
     * Constructs a new WARemoteDebug_DevSyncMessageResp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DevSyncMessageResp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DevSyncMessageResp=} [properties] Properties to set
     */
    function WARemoteDebug_DevSyncMessageResp(properties) {
      this.debugMessageList = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DevSyncMessageResp baseResponse.
     * @member {mmbizwxadevremote.IWARemoteDebug_BaseResp}baseResponse
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @instance
     */
    WARemoteDebug_DevSyncMessageResp.prototype.baseResponse = null;

    /**
     * WARemoteDebug_DevSyncMessageResp debugMessageList.
     * @member {Array.<mmbizwxadevremote.IWARemoteDebug_DebugMessage>}debugMessageList
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @instance
     */
    WARemoteDebug_DevSyncMessageResp.prototype.debugMessageList = $util.emptyArray;

    /**
     * WARemoteDebug_DevSyncMessageResp sendAck.
     * @member {number}sendAck
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @instance
     */
    WARemoteDebug_DevSyncMessageResp.prototype.sendAck = 0;

    /**
     * Creates a new WARemoteDebug_DevSyncMessageResp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevSyncMessageResp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp} WARemoteDebug_DevSyncMessageResp instance
     */
    WARemoteDebug_DevSyncMessageResp.create = function create(properties) {
      return new WARemoteDebug_DevSyncMessageResp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DevSyncMessageResp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevSyncMessageResp} message WARemoteDebug_DevSyncMessageResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevSyncMessageResp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      $root.mmbizwxadevremote.WARemoteDebug_BaseResp.encode(message.baseResponse, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.debugMessageList != null && message.debugMessageList.length)
        for (var i = 0; i < message.debugMessageList.length; ++i)
          $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.encode(message.debugMessageList[i], writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
      if (message.sendAck != null && message.hasOwnProperty("sendAck"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.sendAck);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DevSyncMessageResp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DevSyncMessageResp} message WARemoteDebug_DevSyncMessageResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DevSyncMessageResp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DevSyncMessageResp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp} WARemoteDebug_DevSyncMessageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevSyncMessageResp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.decode(reader, reader.uint32());
            break;
          case 2:
            if (!(message.debugMessageList && message.debugMessageList.length))
              message.debugMessageList = [];
            message.debugMessageList.push($root.mmbizwxadevremote.WARemoteDebug_DebugMessage.decode(reader, reader.uint32()));
            break;
          case 3:
            message.sendAck = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("baseResponse"))
        throw $util.ProtocolError("missing required 'baseResponse'", {
          instance: message
        });
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DevSyncMessageResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp} WARemoteDebug_DevSyncMessageResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DevSyncMessageResp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DevSyncMessageResp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DevSyncMessageResp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var error = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.verify(message.baseResponse);
      if (error)
        return "baseResponse." + error;
      if (message.debugMessageList != null && message.hasOwnProperty("debugMessageList")) {
        if (!Array.isArray(message.debugMessageList))
          return "debugMessageList: array expected";
        for (var i = 0; i < message.debugMessageList.length; ++i) {
          error = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.verify(message.debugMessageList[i]);
          if (error)
            return "debugMessageList." + error;
        }
      }
      if (message.sendAck != null && message.hasOwnProperty("sendAck"))
        if (!$util.isInteger(message.sendAck))
          return "sendAck: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_DevSyncMessageResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp} WARemoteDebug_DevSyncMessageResp
     */
    WARemoteDebug_DevSyncMessageResp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp();
      if (object.baseResponse != null) {
        if (typeof object.baseResponse !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp.baseResponse: object expected");
        message.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.fromObject(object.baseResponse);
      }
      if (object.debugMessageList) {
        if (!Array.isArray(object.debugMessageList))
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp.debugMessageList: array expected");
        message.debugMessageList = [];
        for (var i = 0; i < object.debugMessageList.length; ++i) {
          if (typeof object.debugMessageList[i] !== "object")
            throw TypeError(".mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp.debugMessageList: object expected");
          message.debugMessageList[i] = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.fromObject(object.debugMessageList[i]);
        }
      }
      if (object.sendAck != null)
        message.sendAck = object.sendAck >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DevSyncMessageResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp} message WARemoteDebug_DevSyncMessageResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DevSyncMessageResp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.arrays || options.defaults)
        object.debugMessageList = [];
      if (options.defaults) {
        object.baseResponse = null;
        object.sendAck = 0;
      }
      if (message.baseResponse != null && message.hasOwnProperty("baseResponse"))
        object.baseResponse = $root.mmbizwxadevremote.WARemoteDebug_BaseResp.toObject(message.baseResponse, options);
      if (message.debugMessageList && message.debugMessageList.length) {
        object.debugMessageList = [];
        for (var j = 0; j < message.debugMessageList.length; ++j)
          object.debugMessageList[j] = $root.mmbizwxadevremote.WARemoteDebug_DebugMessage.toObject(message.debugMessageList[j], options);
      }
      if (message.sendAck != null && message.hasOwnProperty("sendAck"))
        object.sendAck = message.sendAck;
      return object;
    };

    /**
     * Converts this WARemoteDebug_DevSyncMessageResp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DevSyncMessageResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DevSyncMessageResp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DevSyncMessageResp;
  })();

  mmbizwxadevremote.WARemoteDebug_MethodWithArgs = (function() {

    /**
     * Properties of a WARemoteDebug_MethodWithArgs.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_MethodWithArgs
     * @property {string} [methodName] WARemoteDebug_MethodWithArgs methodName
     * @property {Array.<string>} [methodArgList] WARemoteDebug_MethodWithArgs methodArgList
     */

    /**
     * Constructs a new WARemoteDebug_MethodWithArgs.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_MethodWithArgs.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_MethodWithArgs=} [properties] Properties to set
     */
    function WARemoteDebug_MethodWithArgs(properties) {
      this.methodArgList = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_MethodWithArgs methodName.
     * @member {string}methodName
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @instance
     */
    WARemoteDebug_MethodWithArgs.prototype.methodName = "";

    /**
     * WARemoteDebug_MethodWithArgs methodArgList.
     * @member {Array.<string>}methodArgList
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @instance
     */
    WARemoteDebug_MethodWithArgs.prototype.methodArgList = $util.emptyArray;

    /**
     * Creates a new WARemoteDebug_MethodWithArgs instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_MethodWithArgs=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_MethodWithArgs} WARemoteDebug_MethodWithArgs instance
     */
    WARemoteDebug_MethodWithArgs.create = function create(properties) {
      return new WARemoteDebug_MethodWithArgs(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_MethodWithArgs message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_MethodWithArgs.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_MethodWithArgs} message WARemoteDebug_MethodWithArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_MethodWithArgs.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.methodName != null && message.hasOwnProperty("methodName"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.methodName);
      if (message.methodArgList != null && message.methodArgList.length)
        for (var i = 0; i < message.methodArgList.length; ++i)
          writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.methodArgList[i]);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_MethodWithArgs message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_MethodWithArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_MethodWithArgs} message WARemoteDebug_MethodWithArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_MethodWithArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_MethodWithArgs message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_MethodWithArgs} WARemoteDebug_MethodWithArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_MethodWithArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_MethodWithArgs();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.methodName = reader.string();
            break;
          case 2:
            if (!(message.methodArgList && message.methodArgList.length))
              message.methodArgList = [];
            message.methodArgList.push(reader.string());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_MethodWithArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_MethodWithArgs} WARemoteDebug_MethodWithArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_MethodWithArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_MethodWithArgs message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_MethodWithArgs.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.methodName != null && message.hasOwnProperty("methodName"))
        if (!$util.isString(message.methodName))
          return "methodName: string expected";
      if (message.methodArgList != null && message.hasOwnProperty("methodArgList")) {
        if (!Array.isArray(message.methodArgList))
          return "methodArgList: array expected";
        for (var i = 0; i < message.methodArgList.length; ++i)
          if (!$util.isString(message.methodArgList[i]))
            return "methodArgList: string[] expected";
      }
      return null;
    };

    /**
     * Creates a WARemoteDebug_MethodWithArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_MethodWithArgs} WARemoteDebug_MethodWithArgs
     */
    WARemoteDebug_MethodWithArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_MethodWithArgs)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_MethodWithArgs();
      if (object.methodName != null)
        message.methodName = String(object.methodName);
      if (object.methodArgList) {
        if (!Array.isArray(object.methodArgList))
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_MethodWithArgs.methodArgList: array expected");
        message.methodArgList = [];
        for (var i = 0; i < object.methodArgList.length; ++i)
          message.methodArgList[i] = String(object.methodArgList[i]);
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_MethodWithArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_MethodWithArgs} message WARemoteDebug_MethodWithArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_MethodWithArgs.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.arrays || options.defaults)
        object.methodArgList = [];
      if (options.defaults)
        object.methodName = "";
      if (message.methodName != null && message.hasOwnProperty("methodName"))
        object.methodName = message.methodName;
      if (message.methodArgList && message.methodArgList.length) {
        object.methodArgList = [];
        for (var j = 0; j < message.methodArgList.length; ++j)
          object.methodArgList[j] = message.methodArgList[j];
      }
      return object;
    };

    /**
     * Converts this WARemoteDebug_MethodWithArgs to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_MethodWithArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_MethodWithArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_MethodWithArgs;
  })();

  mmbizwxadevremote.WARemoteDebug_RegisterInterface = (function() {

    /**
     * Properties of a WARemoteDebug_RegisterInterface.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_RegisterInterface
     * @property {string} [objName] WARemoteDebug_RegisterInterface objName
     * @property {Array.<mmbizwxadevremote.IWARemoteDebug_MethodWithArgs>} [objMethodList] WARemoteDebug_RegisterInterface objMethodList
     */

    /**
     * Constructs a new WARemoteDebug_RegisterInterface.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_RegisterInterface.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_RegisterInterface=} [properties] Properties to set
     */
    function WARemoteDebug_RegisterInterface(properties) {
      this.objMethodList = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_RegisterInterface objName.
     * @member {string}objName
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @instance
     */
    WARemoteDebug_RegisterInterface.prototype.objName = "";

    /**
     * WARemoteDebug_RegisterInterface objMethodList.
     * @member {Array.<mmbizwxadevremote.IWARemoteDebug_MethodWithArgs>}objMethodList
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @instance
     */
    WARemoteDebug_RegisterInterface.prototype.objMethodList = $util.emptyArray;

    /**
     * Creates a new WARemoteDebug_RegisterInterface instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_RegisterInterface=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_RegisterInterface} WARemoteDebug_RegisterInterface instance
     */
    WARemoteDebug_RegisterInterface.create = function create(properties) {
      return new WARemoteDebug_RegisterInterface(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_RegisterInterface message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_RegisterInterface.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_RegisterInterface} message WARemoteDebug_RegisterInterface message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_RegisterInterface.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.objName != null && message.hasOwnProperty("objName"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.objName);
      if (message.objMethodList != null && message.objMethodList.length)
        for (var i = 0; i < message.objMethodList.length; ++i)
          $root.mmbizwxadevremote.WARemoteDebug_MethodWithArgs.encode(message.objMethodList[i], writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_RegisterInterface message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_RegisterInterface.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_RegisterInterface} message WARemoteDebug_RegisterInterface message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_RegisterInterface.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_RegisterInterface message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_RegisterInterface} WARemoteDebug_RegisterInterface
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_RegisterInterface.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_RegisterInterface();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.objName = reader.string();
            break;
          case 2:
            if (!(message.objMethodList && message.objMethodList.length))
              message.objMethodList = [];
            message.objMethodList.push($root.mmbizwxadevremote.WARemoteDebug_MethodWithArgs.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_RegisterInterface message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_RegisterInterface} WARemoteDebug_RegisterInterface
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_RegisterInterface.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_RegisterInterface message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_RegisterInterface.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.objName != null && message.hasOwnProperty("objName"))
        if (!$util.isString(message.objName))
          return "objName: string expected";
      if (message.objMethodList != null && message.hasOwnProperty("objMethodList")) {
        if (!Array.isArray(message.objMethodList))
          return "objMethodList: array expected";
        for (var i = 0; i < message.objMethodList.length; ++i) {
          var error = $root.mmbizwxadevremote.WARemoteDebug_MethodWithArgs.verify(message.objMethodList[i]);
          if (error)
            return "objMethodList." + error;
        }
      }
      return null;
    };

    /**
     * Creates a WARemoteDebug_RegisterInterface message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_RegisterInterface} WARemoteDebug_RegisterInterface
     */
    WARemoteDebug_RegisterInterface.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_RegisterInterface)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_RegisterInterface();
      if (object.objName != null)
        message.objName = String(object.objName);
      if (object.objMethodList) {
        if (!Array.isArray(object.objMethodList))
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_RegisterInterface.objMethodList: array expected");
        message.objMethodList = [];
        for (var i = 0; i < object.objMethodList.length; ++i) {
          if (typeof object.objMethodList[i] !== "object")
            throw TypeError(".mmbizwxadevremote.WARemoteDebug_RegisterInterface.objMethodList: object expected");
          message.objMethodList[i] = $root.mmbizwxadevremote.WARemoteDebug_MethodWithArgs.fromObject(object.objMethodList[i]);
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_RegisterInterface message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_RegisterInterface} message WARemoteDebug_RegisterInterface
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_RegisterInterface.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.arrays || options.defaults)
        object.objMethodList = [];
      if (options.defaults)
        object.objName = "";
      if (message.objName != null && message.hasOwnProperty("objName"))
        object.objName = message.objName;
      if (message.objMethodList && message.objMethodList.length) {
        object.objMethodList = [];
        for (var j = 0; j < message.objMethodList.length; ++j)
          object.objMethodList[j] = $root.mmbizwxadevremote.WARemoteDebug_MethodWithArgs.toObject(message.objMethodList[j], options);
      }
      return object;
    };

    /**
     * Converts this WARemoteDebug_RegisterInterface to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_RegisterInterface
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_RegisterInterface.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_RegisterInterface;
  })();

  mmbizwxadevremote.WARemoteDebug_DeviceInfo = (function() {

    /**
     * Properties of a WARemoteDebug_DeviceInfo.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DeviceInfo
     * @property {string} [deviceName] WARemoteDebug_DeviceInfo deviceName
     * @property {string} [deviceModel] WARemoteDebug_DeviceInfo deviceModel
     * @property {string} [systemVersion] WARemoteDebug_DeviceInfo systemVersion
     * @property {string} [wechatVersion] WARemoteDebug_DeviceInfo wechatVersion
     * @property {number} [publibVersion] WARemoteDebug_DeviceInfo publibVersion
     * @property {number} [screenWidth] WARemoteDebug_DeviceInfo screenWidth
     * @property {number} [pixelRatio] WARemoteDebug_DeviceInfo pixelRatio
     * @property {string} [userAgent] WARemoteDebug_DeviceInfo userAgent
     */

    /**
     * Constructs a new WARemoteDebug_DeviceInfo.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DeviceInfo.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DeviceInfo=} [properties] Properties to set
     */
    function WARemoteDebug_DeviceInfo(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DeviceInfo deviceName.
     * @member {string}deviceName
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @instance
     */
    WARemoteDebug_DeviceInfo.prototype.deviceName = "";

    /**
     * WARemoteDebug_DeviceInfo deviceModel.
     * @member {string}deviceModel
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @instance
     */
    WARemoteDebug_DeviceInfo.prototype.deviceModel = "";

    /**
     * WARemoteDebug_DeviceInfo systemVersion.
     * @member {string}systemVersion
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @instance
     */
    WARemoteDebug_DeviceInfo.prototype.systemVersion = "";

    /**
     * WARemoteDebug_DeviceInfo wechatVersion.
     * @member {string}wechatVersion
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @instance
     */
    WARemoteDebug_DeviceInfo.prototype.wechatVersion = "";

    /**
     * WARemoteDebug_DeviceInfo publibVersion.
     * @member {number}publibVersion
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @instance
     */
    WARemoteDebug_DeviceInfo.prototype.publibVersion = 0;

    /**
     * WARemoteDebug_DeviceInfo screenWidth.
     * @member {number}screenWidth
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @instance
     */
    WARemoteDebug_DeviceInfo.prototype.screenWidth = 0;

    /**
     * WARemoteDebug_DeviceInfo pixelRatio.
     * @member {number}pixelRatio
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @instance
     */
    WARemoteDebug_DeviceInfo.prototype.pixelRatio = 0;

    /**
     * WARemoteDebug_DeviceInfo userAgent.
     * @member {string}userAgent
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @instance
     */
    WARemoteDebug_DeviceInfo.prototype.userAgent = "";

    /**
     * Creates a new WARemoteDebug_DeviceInfo instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DeviceInfo=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DeviceInfo} WARemoteDebug_DeviceInfo instance
     */
    WARemoteDebug_DeviceInfo.create = function create(properties) {
      return new WARemoteDebug_DeviceInfo(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DeviceInfo message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DeviceInfo.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DeviceInfo} message WARemoteDebug_DeviceInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DeviceInfo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.deviceName != null && message.hasOwnProperty("deviceName"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.deviceName);
      if (message.deviceModel != null && message.hasOwnProperty("deviceModel"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.deviceModel);
      if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.systemVersion);
      if (message.wechatVersion != null && message.hasOwnProperty("wechatVersion"))
        writer.uint32( /* id 4, wireType 2 =*/ 34).string(message.wechatVersion);
      if (message.publibVersion != null && message.hasOwnProperty("publibVersion"))
        writer.uint32( /* id 5, wireType 0 =*/ 40).uint32(message.publibVersion);
      if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
        writer.uint32( /* id 6, wireType 5 =*/ 53).float(message.screenWidth);
      if (message.pixelRatio != null && message.hasOwnProperty("pixelRatio"))
        writer.uint32( /* id 7, wireType 5 =*/ 61).float(message.pixelRatio);
      if (message.userAgent != null && message.hasOwnProperty("userAgent"))
        writer.uint32( /* id 8, wireType 2 =*/ 66).string(message.userAgent);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DeviceInfo message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DeviceInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DeviceInfo} message WARemoteDebug_DeviceInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DeviceInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DeviceInfo message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DeviceInfo} WARemoteDebug_DeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DeviceInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DeviceInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.deviceName = reader.string();
            break;
          case 2:
            message.deviceModel = reader.string();
            break;
          case 3:
            message.systemVersion = reader.string();
            break;
          case 4:
            message.wechatVersion = reader.string();
            break;
          case 5:
            message.publibVersion = reader.uint32();
            break;
          case 6:
            message.screenWidth = reader.float();
            break;
          case 7:
            message.pixelRatio = reader.float();
            break;
          case 8:
            message.userAgent = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DeviceInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DeviceInfo} WARemoteDebug_DeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DeviceInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DeviceInfo message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DeviceInfo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.deviceName != null && message.hasOwnProperty("deviceName"))
        if (!$util.isString(message.deviceName))
          return "deviceName: string expected";
      if (message.deviceModel != null && message.hasOwnProperty("deviceModel"))
        if (!$util.isString(message.deviceModel))
          return "deviceModel: string expected";
      if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
        if (!$util.isString(message.systemVersion))
          return "systemVersion: string expected";
      if (message.wechatVersion != null && message.hasOwnProperty("wechatVersion"))
        if (!$util.isString(message.wechatVersion))
          return "wechatVersion: string expected";
      if (message.publibVersion != null && message.hasOwnProperty("publibVersion"))
        if (!$util.isInteger(message.publibVersion))
          return "publibVersion: integer expected";
      if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
        if (typeof message.screenWidth !== "number")
          return "screenWidth: number expected";
      if (message.pixelRatio != null && message.hasOwnProperty("pixelRatio"))
        if (typeof message.pixelRatio !== "number")
          return "pixelRatio: number expected";
      if (message.userAgent != null && message.hasOwnProperty("userAgent"))
        if (!$util.isString(message.userAgent))
          return "userAgent: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_DeviceInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DeviceInfo} WARemoteDebug_DeviceInfo
     */
    WARemoteDebug_DeviceInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DeviceInfo)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DeviceInfo();
      if (object.deviceName != null)
        message.deviceName = String(object.deviceName);
      if (object.deviceModel != null)
        message.deviceModel = String(object.deviceModel);
      if (object.systemVersion != null)
        message.systemVersion = String(object.systemVersion);
      if (object.wechatVersion != null)
        message.wechatVersion = String(object.wechatVersion);
      if (object.publibVersion != null)
        message.publibVersion = object.publibVersion >>> 0;
      if (object.screenWidth != null)
        message.screenWidth = Number(object.screenWidth);
      if (object.pixelRatio != null)
        message.pixelRatio = Number(object.pixelRatio);
      if (object.userAgent != null)
        message.userAgent = String(object.userAgent);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DeviceInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DeviceInfo} message WARemoteDebug_DeviceInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DeviceInfo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.deviceName = "";
        object.deviceModel = "";
        object.systemVersion = "";
        object.wechatVersion = "";
        object.publibVersion = 0;
        object.screenWidth = 0;
        object.pixelRatio = 0;
        object.userAgent = "";
      }
      if (message.deviceName != null && message.hasOwnProperty("deviceName"))
        object.deviceName = message.deviceName;
      if (message.deviceModel != null && message.hasOwnProperty("deviceModel"))
        object.deviceModel = message.deviceModel;
      if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
        object.systemVersion = message.systemVersion;
      if (message.wechatVersion != null && message.hasOwnProperty("wechatVersion"))
        object.wechatVersion = message.wechatVersion;
      if (message.publibVersion != null && message.hasOwnProperty("publibVersion"))
        object.publibVersion = message.publibVersion;
      if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
        object.screenWidth = options.json && !isFinite(message.screenWidth) ? String(message.screenWidth) : message.screenWidth;
      if (message.pixelRatio != null && message.hasOwnProperty("pixelRatio"))
        object.pixelRatio = options.json && !isFinite(message.pixelRatio) ? String(message.pixelRatio) : message.pixelRatio;
      if (message.userAgent != null && message.hasOwnProperty("userAgent"))
        object.userAgent = message.userAgent;
      return object;
    };

    /**
     * Converts this WARemoteDebug_DeviceInfo to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DeviceInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DeviceInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DeviceInfo;
  })();

  mmbizwxadevremote.WARemoteDebug_SetupContext = (function() {

    /**
     * Properties of a WARemoteDebug_SetupContext.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_SetupContext
     * @property {mmbizwxadevremote.IWARemoteDebug_RegisterInterface} [registerInterface] WARemoteDebug_SetupContext registerInterface
     * @property {mmbizwxadevremote.IWARemoteDebug_DeviceInfo} [deviceInfo] WARemoteDebug_SetupContext deviceInfo
     * @property {string} [configureJs] WARemoteDebug_SetupContext configureJs
     * @property {string} [publicJsMd5] WARemoteDebug_SetupContext publicJsMd5
     * @property {string} [threeJsMd5] WARemoteDebug_SetupContext threeJsMd5
     * @property {number} [supportCompressAlgo] WARemoteDebug_SetupContext supportCompressAlgo
     */

    /**
     * Constructs a new WARemoteDebug_SetupContext.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_SetupContext.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_SetupContext=} [properties] Properties to set
     */
    function WARemoteDebug_SetupContext(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_SetupContext registerInterface.
     * @member {(mmbizwxadevremote.IWARemoteDebug_RegisterInterface|null|undefined)}registerInterface
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @instance
     */
    WARemoteDebug_SetupContext.prototype.registerInterface = null;

    /**
     * WARemoteDebug_SetupContext deviceInfo.
     * @member {(mmbizwxadevremote.IWARemoteDebug_DeviceInfo|null|undefined)}deviceInfo
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @instance
     */
    WARemoteDebug_SetupContext.prototype.deviceInfo = null;

    /**
     * WARemoteDebug_SetupContext configureJs.
     * @member {string}configureJs
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @instance
     */
    WARemoteDebug_SetupContext.prototype.configureJs = "";

    /**
     * WARemoteDebug_SetupContext publicJsMd5.
     * @member {string}publicJsMd5
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @instance
     */
    WARemoteDebug_SetupContext.prototype.publicJsMd5 = "";

    /**
     * WARemoteDebug_SetupContext threeJsMd5.
     * @member {string}threeJsMd5
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @instance
     */
    WARemoteDebug_SetupContext.prototype.threeJsMd5 = "";

    /**
     * WARemoteDebug_SetupContext supportCompressAlgo.
     * @member {number}supportCompressAlgo
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @instance
     */
    WARemoteDebug_SetupContext.prototype.supportCompressAlgo = 0;

    /**
     * Creates a new WARemoteDebug_SetupContext instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_SetupContext=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_SetupContext} WARemoteDebug_SetupContext instance
     */
    WARemoteDebug_SetupContext.create = function create(properties) {
      return new WARemoteDebug_SetupContext(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_SetupContext message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_SetupContext.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_SetupContext} message WARemoteDebug_SetupContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_SetupContext.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.registerInterface != null && message.hasOwnProperty("registerInterface"))
        $root.mmbizwxadevremote.WARemoteDebug_RegisterInterface.encode(message.registerInterface, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
        $root.mmbizwxadevremote.WARemoteDebug_DeviceInfo.encode(message.deviceInfo, writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
      if (message.configureJs != null && message.hasOwnProperty("configureJs"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.configureJs);
      if (message.publicJsMd5 != null && message.hasOwnProperty("publicJsMd5"))
        writer.uint32( /* id 4, wireType 2 =*/ 34).string(message.publicJsMd5);
      if (message.threeJsMd5 != null && message.hasOwnProperty("threeJsMd5"))
        writer.uint32( /* id 5, wireType 2 =*/ 42).string(message.threeJsMd5);
      if (message.supportCompressAlgo != null && message.hasOwnProperty("supportCompressAlgo"))
        writer.uint32( /* id 6, wireType 0 =*/ 48).uint32(message.supportCompressAlgo);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_SetupContext message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_SetupContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_SetupContext} message WARemoteDebug_SetupContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_SetupContext.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_SetupContext message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_SetupContext} WARemoteDebug_SetupContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_SetupContext.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_SetupContext();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.registerInterface = $root.mmbizwxadevremote.WARemoteDebug_RegisterInterface.decode(reader, reader.uint32());
            break;
          case 2:
            message.deviceInfo = $root.mmbizwxadevremote.WARemoteDebug_DeviceInfo.decode(reader, reader.uint32());
            break;
          case 3:
            message.configureJs = reader.string();
            break;
          case 4:
            message.publicJsMd5 = reader.string();
            break;
          case 5:
            message.threeJsMd5 = reader.string();
            break;
          case 6:
            message.supportCompressAlgo = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_SetupContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_SetupContext} WARemoteDebug_SetupContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_SetupContext.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_SetupContext message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_SetupContext.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.registerInterface != null && message.hasOwnProperty("registerInterface")) {
        var error = $root.mmbizwxadevremote.WARemoteDebug_RegisterInterface.verify(message.registerInterface);
        if (error)
          return "registerInterface." + error;
      }
      if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo")) {
        error = $root.mmbizwxadevremote.WARemoteDebug_DeviceInfo.verify(message.deviceInfo);
        if (error)
          return "deviceInfo." + error;
      }
      if (message.configureJs != null && message.hasOwnProperty("configureJs"))
        if (!$util.isString(message.configureJs))
          return "configureJs: string expected";
      if (message.publicJsMd5 != null && message.hasOwnProperty("publicJsMd5"))
        if (!$util.isString(message.publicJsMd5))
          return "publicJsMd5: string expected";
      if (message.threeJsMd5 != null && message.hasOwnProperty("threeJsMd5"))
        if (!$util.isString(message.threeJsMd5))
          return "threeJsMd5: string expected";
      if (message.supportCompressAlgo != null && message.hasOwnProperty("supportCompressAlgo"))
        if (!$util.isInteger(message.supportCompressAlgo))
          return "supportCompressAlgo: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_SetupContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_SetupContext} WARemoteDebug_SetupContext
     */
    WARemoteDebug_SetupContext.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_SetupContext)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_SetupContext();
      if (object.registerInterface != null) {
        if (typeof object.registerInterface !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_SetupContext.registerInterface: object expected");
        message.registerInterface = $root.mmbizwxadevremote.WARemoteDebug_RegisterInterface.fromObject(object.registerInterface);
      }
      if (object.deviceInfo != null) {
        if (typeof object.deviceInfo !== "object")
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_SetupContext.deviceInfo: object expected");
        message.deviceInfo = $root.mmbizwxadevremote.WARemoteDebug_DeviceInfo.fromObject(object.deviceInfo);
      }
      if (object.configureJs != null)
        message.configureJs = String(object.configureJs);
      if (object.publicJsMd5 != null)
        message.publicJsMd5 = String(object.publicJsMd5);
      if (object.threeJsMd5 != null)
        message.threeJsMd5 = String(object.threeJsMd5);
      if (object.supportCompressAlgo != null)
        message.supportCompressAlgo = object.supportCompressAlgo >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_SetupContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_SetupContext} message WARemoteDebug_SetupContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_SetupContext.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.registerInterface = null;
        object.deviceInfo = null;
        object.configureJs = "";
        object.publicJsMd5 = "";
        object.threeJsMd5 = "";
        object.supportCompressAlgo = 0;
      }
      if (message.registerInterface != null && message.hasOwnProperty("registerInterface"))
        object.registerInterface = $root.mmbizwxadevremote.WARemoteDebug_RegisterInterface.toObject(message.registerInterface, options);
      if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
        object.deviceInfo = $root.mmbizwxadevremote.WARemoteDebug_DeviceInfo.toObject(message.deviceInfo, options);
      if (message.configureJs != null && message.hasOwnProperty("configureJs"))
        object.configureJs = message.configureJs;
      if (message.publicJsMd5 != null && message.hasOwnProperty("publicJsMd5"))
        object.publicJsMd5 = message.publicJsMd5;
      if (message.threeJsMd5 != null && message.hasOwnProperty("threeJsMd5"))
        object.threeJsMd5 = message.threeJsMd5;
      if (message.supportCompressAlgo != null && message.hasOwnProperty("supportCompressAlgo"))
        object.supportCompressAlgo = message.supportCompressAlgo;
      return object;
    };

    /**
     * Converts this WARemoteDebug_SetupContext to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_SetupContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_SetupContext.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_SetupContext;
  })();

  mmbizwxadevremote.WARemoteDebug_CallInterface = (function() {

    /**
     * Properties of a WARemoteDebug_CallInterface.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_CallInterface
     * @property {string} [objName] WARemoteDebug_CallInterface objName
     * @property {string} [methodName] WARemoteDebug_CallInterface methodName
     * @property {Array.<string>} [methodArgList] WARemoteDebug_CallInterface methodArgList
     * @property {number} [callId] WARemoteDebug_CallInterface callId
     */

    /**
     * Constructs a new WARemoteDebug_CallInterface.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_CallInterface.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_CallInterface=} [properties] Properties to set
     */
    function WARemoteDebug_CallInterface(properties) {
      this.methodArgList = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_CallInterface objName.
     * @member {string}objName
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @instance
     */
    WARemoteDebug_CallInterface.prototype.objName = "";

    /**
     * WARemoteDebug_CallInterface methodName.
     * @member {string}methodName
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @instance
     */
    WARemoteDebug_CallInterface.prototype.methodName = "";

    /**
     * WARemoteDebug_CallInterface methodArgList.
     * @member {Array.<string>}methodArgList
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @instance
     */
    WARemoteDebug_CallInterface.prototype.methodArgList = $util.emptyArray;

    /**
     * WARemoteDebug_CallInterface callId.
     * @member {number}callId
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @instance
     */
    WARemoteDebug_CallInterface.prototype.callId = 0;

    /**
     * Creates a new WARemoteDebug_CallInterface instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CallInterface=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_CallInterface} WARemoteDebug_CallInterface instance
     */
    WARemoteDebug_CallInterface.create = function create(properties) {
      return new WARemoteDebug_CallInterface(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_CallInterface message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_CallInterface.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CallInterface} message WARemoteDebug_CallInterface message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_CallInterface.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.objName != null && message.hasOwnProperty("objName"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.objName);
      if (message.methodName != null && message.hasOwnProperty("methodName"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.methodName);
      if (message.methodArgList != null && message.methodArgList.length)
        for (var i = 0; i < message.methodArgList.length; ++i)
          writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.methodArgList[i]);
      if (message.callId != null && message.hasOwnProperty("callId"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).uint32(message.callId);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_CallInterface message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_CallInterface.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CallInterface} message WARemoteDebug_CallInterface message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_CallInterface.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_CallInterface message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_CallInterface} WARemoteDebug_CallInterface
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_CallInterface.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_CallInterface();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.objName = reader.string();
            break;
          case 2:
            message.methodName = reader.string();
            break;
          case 3:
            if (!(message.methodArgList && message.methodArgList.length))
              message.methodArgList = [];
            message.methodArgList.push(reader.string());
            break;
          case 4:
            message.callId = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_CallInterface message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_CallInterface} WARemoteDebug_CallInterface
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_CallInterface.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_CallInterface message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_CallInterface.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.objName != null && message.hasOwnProperty("objName"))
        if (!$util.isString(message.objName))
          return "objName: string expected";
      if (message.methodName != null && message.hasOwnProperty("methodName"))
        if (!$util.isString(message.methodName))
          return "methodName: string expected";
      if (message.methodArgList != null && message.hasOwnProperty("methodArgList")) {
        if (!Array.isArray(message.methodArgList))
          return "methodArgList: array expected";
        for (var i = 0; i < message.methodArgList.length; ++i)
          if (!$util.isString(message.methodArgList[i]))
            return "methodArgList: string[] expected";
      }
      if (message.callId != null && message.hasOwnProperty("callId"))
        if (!$util.isInteger(message.callId))
          return "callId: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_CallInterface message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_CallInterface} WARemoteDebug_CallInterface
     */
    WARemoteDebug_CallInterface.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_CallInterface)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_CallInterface();
      if (object.objName != null)
        message.objName = String(object.objName);
      if (object.methodName != null)
        message.methodName = String(object.methodName);
      if (object.methodArgList) {
        if (!Array.isArray(object.methodArgList))
          throw TypeError(".mmbizwxadevremote.WARemoteDebug_CallInterface.methodArgList: array expected");
        message.methodArgList = [];
        for (var i = 0; i < object.methodArgList.length; ++i)
          message.methodArgList[i] = String(object.methodArgList[i]);
      }
      if (object.callId != null)
        message.callId = object.callId >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_CallInterface message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_CallInterface} message WARemoteDebug_CallInterface
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_CallInterface.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.arrays || options.defaults)
        object.methodArgList = [];
      if (options.defaults) {
        object.objName = "";
        object.methodName = "";
        object.callId = 0;
      }
      if (message.objName != null && message.hasOwnProperty("objName"))
        object.objName = message.objName;
      if (message.methodName != null && message.hasOwnProperty("methodName"))
        object.methodName = message.methodName;
      if (message.methodArgList && message.methodArgList.length) {
        object.methodArgList = [];
        for (var j = 0; j < message.methodArgList.length; ++j)
          object.methodArgList[j] = message.methodArgList[j];
      }
      if (message.callId != null && message.hasOwnProperty("callId"))
        object.callId = message.callId;
      return object;
    };

    /**
     * Converts this WARemoteDebug_CallInterface to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterface
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_CallInterface.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_CallInterface;
  })();

  mmbizwxadevremote.WARemoteDebug_CallInterfaceResult = (function() {

    /**
     * Properties of a WARemoteDebug_CallInterfaceResult.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_CallInterfaceResult
     * @property {string} [ret] WARemoteDebug_CallInterfaceResult ret
     * @property {number} [callId] WARemoteDebug_CallInterfaceResult callId
     * @property {string} [debugInfo] WARemoteDebug_CallInterfaceResult debugInfo
     */

    /**
     * Constructs a new WARemoteDebug_CallInterfaceResult.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_CallInterfaceResult.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_CallInterfaceResult=} [properties] Properties to set
     */
    function WARemoteDebug_CallInterfaceResult(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_CallInterfaceResult ret.
     * @member {string}ret
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @instance
     */
    WARemoteDebug_CallInterfaceResult.prototype.ret = "";

    /**
     * WARemoteDebug_CallInterfaceResult callId.
     * @member {number}callId
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @instance
     */
    WARemoteDebug_CallInterfaceResult.prototype.callId = 0;

    /**
     * WARemoteDebug_CallInterfaceResult debugInfo.
     * @member {string}debugInfo
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @instance
     */
    WARemoteDebug_CallInterfaceResult.prototype.debugInfo = "";

    /**
     * Creates a new WARemoteDebug_CallInterfaceResult instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CallInterfaceResult=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_CallInterfaceResult} WARemoteDebug_CallInterfaceResult instance
     */
    WARemoteDebug_CallInterfaceResult.create = function create(properties) {
      return new WARemoteDebug_CallInterfaceResult(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_CallInterfaceResult message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_CallInterfaceResult.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CallInterfaceResult} message WARemoteDebug_CallInterfaceResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_CallInterfaceResult.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.ret != null && message.hasOwnProperty("ret"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.ret);
      if (message.callId != null && message.hasOwnProperty("callId"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.callId);
      if (message.debugInfo != null && message.hasOwnProperty("debugInfo"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.debugInfo);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_CallInterfaceResult message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_CallInterfaceResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CallInterfaceResult} message WARemoteDebug_CallInterfaceResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_CallInterfaceResult.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_CallInterfaceResult message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_CallInterfaceResult} WARemoteDebug_CallInterfaceResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_CallInterfaceResult.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_CallInterfaceResult();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.ret = reader.string();
            break;
          case 2:
            message.callId = reader.uint32();
            break;
          case 3:
            message.debugInfo = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_CallInterfaceResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_CallInterfaceResult} WARemoteDebug_CallInterfaceResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_CallInterfaceResult.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_CallInterfaceResult message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_CallInterfaceResult.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.ret != null && message.hasOwnProperty("ret"))
        if (!$util.isString(message.ret))
          return "ret: string expected";
      if (message.callId != null && message.hasOwnProperty("callId"))
        if (!$util.isInteger(message.callId))
          return "callId: integer expected";
      if (message.debugInfo != null && message.hasOwnProperty("debugInfo"))
        if (!$util.isString(message.debugInfo))
          return "debugInfo: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_CallInterfaceResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_CallInterfaceResult} WARemoteDebug_CallInterfaceResult
     */
    WARemoteDebug_CallInterfaceResult.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_CallInterfaceResult)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_CallInterfaceResult();
      if (object.ret != null)
        message.ret = String(object.ret);
      if (object.callId != null)
        message.callId = object.callId >>> 0;
      if (object.debugInfo != null)
        message.debugInfo = String(object.debugInfo);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_CallInterfaceResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_CallInterfaceResult} message WARemoteDebug_CallInterfaceResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_CallInterfaceResult.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.ret = "";
        object.callId = 0;
        object.debugInfo = "";
      }
      if (message.ret != null && message.hasOwnProperty("ret"))
        object.ret = message.ret;
      if (message.callId != null && message.hasOwnProperty("callId"))
        object.callId = message.callId;
      if (message.debugInfo != null && message.hasOwnProperty("debugInfo"))
        object.debugInfo = message.debugInfo;
      return object;
    };

    /**
     * Converts this WARemoteDebug_CallInterfaceResult to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_CallInterfaceResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_CallInterfaceResult.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_CallInterfaceResult;
  })();

  mmbizwxadevremote.WARemoteDebug_EvaluateJavascript = (function() {

    /**
     * Properties of a WARemoteDebug_EvaluateJavascript.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_EvaluateJavascript
     * @property {string} [script] WARemoteDebug_EvaluateJavascript script
     * @property {number} [evaluateId] WARemoteDebug_EvaluateJavascript evaluateId
     * @property {string} [debugInfo] WARemoteDebug_EvaluateJavascript debugInfo
     */

    /**
     * Constructs a new WARemoteDebug_EvaluateJavascript.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_EvaluateJavascript.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_EvaluateJavascript=} [properties] Properties to set
     */
    function WARemoteDebug_EvaluateJavascript(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_EvaluateJavascript script.
     * @member {string}script
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @instance
     */
    WARemoteDebug_EvaluateJavascript.prototype.script = "";

    /**
     * WARemoteDebug_EvaluateJavascript evaluateId.
     * @member {number}evaluateId
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @instance
     */
    WARemoteDebug_EvaluateJavascript.prototype.evaluateId = 0;

    /**
     * WARemoteDebug_EvaluateJavascript debugInfo.
     * @member {string}debugInfo
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @instance
     */
    WARemoteDebug_EvaluateJavascript.prototype.debugInfo = "";

    /**
     * Creates a new WARemoteDebug_EvaluateJavascript instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EvaluateJavascript=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_EvaluateJavascript} WARemoteDebug_EvaluateJavascript instance
     */
    WARemoteDebug_EvaluateJavascript.create = function create(properties) {
      return new WARemoteDebug_EvaluateJavascript(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_EvaluateJavascript message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_EvaluateJavascript.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EvaluateJavascript} message WARemoteDebug_EvaluateJavascript message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_EvaluateJavascript.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.script != null && message.hasOwnProperty("script"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.script);
      if (message.evaluateId != null && message.hasOwnProperty("evaluateId"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.evaluateId);
      if (message.debugInfo != null && message.hasOwnProperty("debugInfo"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.debugInfo);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_EvaluateJavascript message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_EvaluateJavascript.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EvaluateJavascript} message WARemoteDebug_EvaluateJavascript message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_EvaluateJavascript.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_EvaluateJavascript message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_EvaluateJavascript} WARemoteDebug_EvaluateJavascript
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_EvaluateJavascript.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_EvaluateJavascript();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.script = reader.string();
            break;
          case 2:
            message.evaluateId = reader.uint32();
            break;
          case 3:
            message.debugInfo = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_EvaluateJavascript message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_EvaluateJavascript} WARemoteDebug_EvaluateJavascript
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_EvaluateJavascript.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_EvaluateJavascript message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_EvaluateJavascript.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.script != null && message.hasOwnProperty("script"))
        if (!$util.isString(message.script))
          return "script: string expected";
      if (message.evaluateId != null && message.hasOwnProperty("evaluateId"))
        if (!$util.isInteger(message.evaluateId))
          return "evaluateId: integer expected";
      if (message.debugInfo != null && message.hasOwnProperty("debugInfo"))
        if (!$util.isString(message.debugInfo))
          return "debugInfo: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_EvaluateJavascript message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_EvaluateJavascript} WARemoteDebug_EvaluateJavascript
     */
    WARemoteDebug_EvaluateJavascript.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_EvaluateJavascript)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_EvaluateJavascript();
      if (object.script != null)
        message.script = String(object.script);
      if (object.evaluateId != null)
        message.evaluateId = object.evaluateId >>> 0;
      if (object.debugInfo != null)
        message.debugInfo = String(object.debugInfo);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_EvaluateJavascript message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_EvaluateJavascript} message WARemoteDebug_EvaluateJavascript
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_EvaluateJavascript.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.script = "";
        object.evaluateId = 0;
        object.debugInfo = "";
      }
      if (message.script != null && message.hasOwnProperty("script"))
        object.script = message.script;
      if (message.evaluateId != null && message.hasOwnProperty("evaluateId"))
        object.evaluateId = message.evaluateId;
      if (message.debugInfo != null && message.hasOwnProperty("debugInfo"))
        object.debugInfo = message.debugInfo;
      return object;
    };

    /**
     * Converts this WARemoteDebug_EvaluateJavascript to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascript
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_EvaluateJavascript.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_EvaluateJavascript;
  })();

  mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult = (function() {

    /**
     * Properties of a WARemoteDebug_EvaluateJavascriptResult.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_EvaluateJavascriptResult
     * @property {string} [ret] WARemoteDebug_EvaluateJavascriptResult ret
     * @property {number} [evaluateId] WARemoteDebug_EvaluateJavascriptResult evaluateId
     */

    /**
     * Constructs a new WARemoteDebug_EvaluateJavascriptResult.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_EvaluateJavascriptResult.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_EvaluateJavascriptResult=} [properties] Properties to set
     */
    function WARemoteDebug_EvaluateJavascriptResult(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_EvaluateJavascriptResult ret.
     * @member {string}ret
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @instance
     */
    WARemoteDebug_EvaluateJavascriptResult.prototype.ret = "";

    /**
     * WARemoteDebug_EvaluateJavascriptResult evaluateId.
     * @member {number}evaluateId
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @instance
     */
    WARemoteDebug_EvaluateJavascriptResult.prototype.evaluateId = 0;

    /**
     * Creates a new WARemoteDebug_EvaluateJavascriptResult instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EvaluateJavascriptResult=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult} WARemoteDebug_EvaluateJavascriptResult instance
     */
    WARemoteDebug_EvaluateJavascriptResult.create = function create(properties) {
      return new WARemoteDebug_EvaluateJavascriptResult(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_EvaluateJavascriptResult message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EvaluateJavascriptResult} message WARemoteDebug_EvaluateJavascriptResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_EvaluateJavascriptResult.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.ret != null && message.hasOwnProperty("ret"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.ret);
      if (message.evaluateId != null && message.hasOwnProperty("evaluateId"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.evaluateId);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_EvaluateJavascriptResult message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_EvaluateJavascriptResult} message WARemoteDebug_EvaluateJavascriptResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_EvaluateJavascriptResult.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_EvaluateJavascriptResult message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult} WARemoteDebug_EvaluateJavascriptResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_EvaluateJavascriptResult.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.ret = reader.string();
            break;
          case 2:
            message.evaluateId = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_EvaluateJavascriptResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult} WARemoteDebug_EvaluateJavascriptResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_EvaluateJavascriptResult.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_EvaluateJavascriptResult message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_EvaluateJavascriptResult.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.ret != null && message.hasOwnProperty("ret"))
        if (!$util.isString(message.ret))
          return "ret: string expected";
      if (message.evaluateId != null && message.hasOwnProperty("evaluateId"))
        if (!$util.isInteger(message.evaluateId))
          return "evaluateId: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_EvaluateJavascriptResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult} WARemoteDebug_EvaluateJavascriptResult
     */
    WARemoteDebug_EvaluateJavascriptResult.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult();
      if (object.ret != null)
        message.ret = String(object.ret);
      if (object.evaluateId != null)
        message.evaluateId = object.evaluateId >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_EvaluateJavascriptResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult} message WARemoteDebug_EvaluateJavascriptResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_EvaluateJavascriptResult.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.ret = "";
        object.evaluateId = 0;
      }
      if (message.ret != null && message.hasOwnProperty("ret"))
        object.ret = message.ret;
      if (message.evaluateId != null && message.hasOwnProperty("evaluateId"))
        object.evaluateId = message.evaluateId;
      return object;
    };

    /**
     * Converts this WARemoteDebug_EvaluateJavascriptResult to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_EvaluateJavascriptResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_EvaluateJavascriptResult.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_EvaluateJavascriptResult;
  })();

  mmbizwxadevremote.WARemoteDebug_Breakpoint = (function() {

    /**
     * Properties of a WARemoteDebug_Breakpoint.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_Breakpoint
     * @property {boolean} [isHit] WARemoteDebug_Breakpoint isHit
     */

    /**
     * Constructs a new WARemoteDebug_Breakpoint.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_Breakpoint.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_Breakpoint=} [properties] Properties to set
     */
    function WARemoteDebug_Breakpoint(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_Breakpoint isHit.
     * @member {boolean}isHit
     * @memberof mmbizwxadevremote.WARemoteDebug_Breakpoint
     * @instance
     */
    WARemoteDebug_Breakpoint.prototype.isHit = false;

    /**
     * Creates a new WARemoteDebug_Breakpoint instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_Breakpoint
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_Breakpoint=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_Breakpoint} WARemoteDebug_Breakpoint instance
     */
    WARemoteDebug_Breakpoint.create = function create(properties) {
      return new WARemoteDebug_Breakpoint(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_Breakpoint message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_Breakpoint.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_Breakpoint
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_Breakpoint} message WARemoteDebug_Breakpoint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_Breakpoint.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.isHit != null && message.hasOwnProperty("isHit"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).bool(message.isHit);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_Breakpoint message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_Breakpoint.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_Breakpoint
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_Breakpoint} message WARemoteDebug_Breakpoint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_Breakpoint.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_Breakpoint message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_Breakpoint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_Breakpoint} WARemoteDebug_Breakpoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_Breakpoint.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_Breakpoint();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.isHit = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_Breakpoint message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_Breakpoint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_Breakpoint} WARemoteDebug_Breakpoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_Breakpoint.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_Breakpoint message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_Breakpoint
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_Breakpoint.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.isHit != null && message.hasOwnProperty("isHit"))
        if (typeof message.isHit !== "boolean")
          return "isHit: boolean expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_Breakpoint message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_Breakpoint
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_Breakpoint} WARemoteDebug_Breakpoint
     */
    WARemoteDebug_Breakpoint.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_Breakpoint)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_Breakpoint();
      if (object.isHit != null)
        message.isHit = Boolean(object.isHit);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_Breakpoint message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_Breakpoint
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_Breakpoint} message WARemoteDebug_Breakpoint
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_Breakpoint.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.isHit = false;
      if (message.isHit != null && message.hasOwnProperty("isHit"))
        object.isHit = message.isHit;
      return object;
    };

    /**
     * Converts this WARemoteDebug_Breakpoint to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_Breakpoint
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_Breakpoint.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_Breakpoint;
  })();

  mmbizwxadevremote.WARemoteDebug_Ping = (function() {

    /**
     * Properties of a WARemoteDebug_Ping.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_Ping
     * @property {number|Long} [pingId] WARemoteDebug_Ping pingId
     * @property {string} [payload] WARemoteDebug_Ping payload
     */

    /**
     * Constructs a new WARemoteDebug_Ping.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_Ping.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_Ping=} [properties] Properties to set
     */
    function WARemoteDebug_Ping(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_Ping pingId.
     * @member {number|Long}pingId
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @instance
     */
    WARemoteDebug_Ping.prototype.pingId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * WARemoteDebug_Ping payload.
     * @member {string}payload
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @instance
     */
    WARemoteDebug_Ping.prototype.payload = "";

    /**
     * Creates a new WARemoteDebug_Ping instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_Ping=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_Ping} WARemoteDebug_Ping instance
     */
    WARemoteDebug_Ping.create = function create(properties) {
      return new WARemoteDebug_Ping(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_Ping message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_Ping.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_Ping} message WARemoteDebug_Ping message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_Ping.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.pingId != null && message.hasOwnProperty("pingId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.pingId);
      if (message.payload != null && message.hasOwnProperty("payload"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.payload);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_Ping message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_Ping.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_Ping} message WARemoteDebug_Ping message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_Ping.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_Ping message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_Ping} WARemoteDebug_Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_Ping.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_Ping();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.pingId = reader.uint64();
            break;
          case 2:
            message.payload = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_Ping message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_Ping} WARemoteDebug_Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_Ping.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_Ping message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_Ping.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.pingId != null && message.hasOwnProperty("pingId"))
        if (!$util.isInteger(message.pingId) && !(message.pingId && $util.isInteger(message.pingId.low) && $util.isInteger(message.pingId.high)))
          return "pingId: integer|Long expected";
      if (message.payload != null && message.hasOwnProperty("payload"))
        if (!$util.isString(message.payload))
          return "payload: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_Ping message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_Ping} WARemoteDebug_Ping
     */
    WARemoteDebug_Ping.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_Ping)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_Ping();
      if (object.pingId != null)
        if ($util.Long)
          (message.pingId = $util.Long.fromValue(object.pingId)).unsigned = true;
        else if (typeof object.pingId === "string")
        message.pingId = parseInt(object.pingId, 10);
      else if (typeof object.pingId === "number")
        message.pingId = object.pingId;
      else if (typeof object.pingId === "object")
        message.pingId = new $util.LongBits(object.pingId.low >>> 0, object.pingId.high >>> 0).toNumber(true);
      if (object.payload != null)
        message.payload = String(object.payload);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_Ping message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_Ping} message WARemoteDebug_Ping
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_Ping.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.pingId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else
          object.pingId = options.longs === String ? "0" : 0;
        object.payload = "";
      }
      if (message.pingId != null && message.hasOwnProperty("pingId"))
        if (typeof message.pingId === "number")
          object.pingId = options.longs === String ? String(message.pingId) : message.pingId;
        else
          object.pingId = options.longs === String ? $util.Long.prototype.toString.call(message.pingId) : options.longs === Number ? new $util.LongBits(message.pingId.low >>> 0, message.pingId.high >>> 0).toNumber(true) : message.pingId;
      if (message.payload != null && message.hasOwnProperty("payload"))
        object.payload = message.payload;
      return object;
    };

    /**
     * Converts this WARemoteDebug_Ping to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_Ping
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_Ping.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_Ping;
  })();

  mmbizwxadevremote.WARemoteDebug_Pong = (function() {

    /**
     * Properties of a WARemoteDebug_Pong.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_Pong
     * @property {number|Long} [pingId] WARemoteDebug_Pong pingId
     * @property {number} [networkType] WARemoteDebug_Pong networkType
     * @property {string} [payload] WARemoteDebug_Pong payload
     */

    /**
     * Constructs a new WARemoteDebug_Pong.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_Pong.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_Pong=} [properties] Properties to set
     */
    function WARemoteDebug_Pong(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_Pong pingId.
     * @member {number|Long}pingId
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @instance
     */
    WARemoteDebug_Pong.prototype.pingId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * WARemoteDebug_Pong networkType.
     * @member {number}networkType
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @instance
     */
    WARemoteDebug_Pong.prototype.networkType = 0;

    /**
     * WARemoteDebug_Pong payload.
     * @member {string}payload
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @instance
     */
    WARemoteDebug_Pong.prototype.payload = "";

    /**
     * Creates a new WARemoteDebug_Pong instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_Pong=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_Pong} WARemoteDebug_Pong instance
     */
    WARemoteDebug_Pong.create = function create(properties) {
      return new WARemoteDebug_Pong(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_Pong message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_Pong.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_Pong} message WARemoteDebug_Pong message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_Pong.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.pingId != null && message.hasOwnProperty("pingId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.pingId);
      if (message.networkType != null && message.hasOwnProperty("networkType"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.networkType);
      if (message.payload != null && message.hasOwnProperty("payload"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.payload);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_Pong message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_Pong.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_Pong} message WARemoteDebug_Pong message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_Pong.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_Pong message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_Pong} WARemoteDebug_Pong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_Pong.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_Pong();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.pingId = reader.uint64();
            break;
          case 2:
            message.networkType = reader.uint32();
            break;
          case 3:
            message.payload = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_Pong message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_Pong} WARemoteDebug_Pong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_Pong.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_Pong message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_Pong.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.pingId != null && message.hasOwnProperty("pingId"))
        if (!$util.isInteger(message.pingId) && !(message.pingId && $util.isInteger(message.pingId.low) && $util.isInteger(message.pingId.high)))
          return "pingId: integer|Long expected";
      if (message.networkType != null && message.hasOwnProperty("networkType"))
        if (!$util.isInteger(message.networkType))
          return "networkType: integer expected";
      if (message.payload != null && message.hasOwnProperty("payload"))
        if (!$util.isString(message.payload))
          return "payload: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_Pong message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_Pong} WARemoteDebug_Pong
     */
    WARemoteDebug_Pong.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_Pong)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_Pong();
      if (object.pingId != null)
        if ($util.Long)
          (message.pingId = $util.Long.fromValue(object.pingId)).unsigned = true;
        else if (typeof object.pingId === "string")
        message.pingId = parseInt(object.pingId, 10);
      else if (typeof object.pingId === "number")
        message.pingId = object.pingId;
      else if (typeof object.pingId === "object")
        message.pingId = new $util.LongBits(object.pingId.low >>> 0, object.pingId.high >>> 0).toNumber(true);
      if (object.networkType != null)
        message.networkType = object.networkType >>> 0;
      if (object.payload != null)
        message.payload = String(object.payload);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_Pong message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_Pong} message WARemoteDebug_Pong
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_Pong.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.pingId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else
          object.pingId = options.longs === String ? "0" : 0;
        object.networkType = 0;
        object.payload = "";
      }
      if (message.pingId != null && message.hasOwnProperty("pingId"))
        if (typeof message.pingId === "number")
          object.pingId = options.longs === String ? String(message.pingId) : message.pingId;
        else
          object.pingId = options.longs === String ? $util.Long.prototype.toString.call(message.pingId) : options.longs === Number ? new $util.LongBits(message.pingId.low >>> 0, message.pingId.high >>> 0).toNumber(true) : message.pingId;
      if (message.networkType != null && message.hasOwnProperty("networkType"))
        object.networkType = message.networkType;
      if (message.payload != null && message.hasOwnProperty("payload"))
        object.payload = message.payload;
      return object;
    };

    /**
     * Converts this WARemoteDebug_Pong to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_Pong
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_Pong.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_Pong;
  })();

  mmbizwxadevremote.WARemoteDebug_DomOp = (function() {

    /**
     * Properties of a WARemoteDebug_DomOp.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DomOp
     * @property {string} [params] WARemoteDebug_DomOp params
     * @property {number} [webviewId] WARemoteDebug_DomOp webviewId
     */

    /**
     * Constructs a new WARemoteDebug_DomOp.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DomOp.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DomOp=} [properties] Properties to set
     */
    function WARemoteDebug_DomOp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DomOp params.
     * @member {string}params
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @instance
     */
    WARemoteDebug_DomOp.prototype.params = "";

    /**
     * WARemoteDebug_DomOp webviewId.
     * @member {number}webviewId
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @instance
     */
    WARemoteDebug_DomOp.prototype.webviewId = 0;

    /**
     * Creates a new WARemoteDebug_DomOp instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DomOp=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DomOp} WARemoteDebug_DomOp instance
     */
    WARemoteDebug_DomOp.create = function create(properties) {
      return new WARemoteDebug_DomOp(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DomOp message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DomOp.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DomOp} message WARemoteDebug_DomOp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DomOp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.params != null && message.hasOwnProperty("params"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.params);
      if (message.webviewId != null && message.hasOwnProperty("webviewId"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.webviewId);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DomOp message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DomOp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DomOp} message WARemoteDebug_DomOp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DomOp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DomOp message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DomOp} WARemoteDebug_DomOp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DomOp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DomOp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.params = reader.string();
            break;
          case 2:
            message.webviewId = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DomOp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DomOp} WARemoteDebug_DomOp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DomOp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DomOp message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DomOp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.params != null && message.hasOwnProperty("params"))
        if (!$util.isString(message.params))
          return "params: string expected";
      if (message.webviewId != null && message.hasOwnProperty("webviewId"))
        if (!$util.isInteger(message.webviewId))
          return "webviewId: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_DomOp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DomOp} WARemoteDebug_DomOp
     */
    WARemoteDebug_DomOp.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DomOp)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DomOp();
      if (object.params != null)
        message.params = String(object.params);
      if (object.webviewId != null)
        message.webviewId = object.webviewId >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DomOp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DomOp} message WARemoteDebug_DomOp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DomOp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.params = "";
        object.webviewId = 0;
      }
      if (message.params != null && message.hasOwnProperty("params"))
        object.params = message.params;
      if (message.webviewId != null && message.hasOwnProperty("webviewId"))
        object.webviewId = message.webviewId;
      return object;
    };

    /**
     * Converts this WARemoteDebug_DomOp to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DomOp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DomOp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DomOp;
  })();

  mmbizwxadevremote.WARemoteDebug_DomEvent = (function() {

    /**
     * Properties of a WARemoteDebug_DomEvent.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_DomEvent
     * @property {string} [params] WARemoteDebug_DomEvent params
     * @property {number} [webviewId] WARemoteDebug_DomEvent webviewId
     */

    /**
     * Constructs a new WARemoteDebug_DomEvent.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_DomEvent.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_DomEvent=} [properties] Properties to set
     */
    function WARemoteDebug_DomEvent(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_DomEvent params.
     * @member {string}params
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @instance
     */
    WARemoteDebug_DomEvent.prototype.params = "";

    /**
     * WARemoteDebug_DomEvent webviewId.
     * @member {number}webviewId
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @instance
     */
    WARemoteDebug_DomEvent.prototype.webviewId = 0;

    /**
     * Creates a new WARemoteDebug_DomEvent instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DomEvent=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_DomEvent} WARemoteDebug_DomEvent instance
     */
    WARemoteDebug_DomEvent.create = function create(properties) {
      return new WARemoteDebug_DomEvent(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_DomEvent message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DomEvent.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DomEvent} message WARemoteDebug_DomEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DomEvent.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.params != null && message.hasOwnProperty("params"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.params);
      if (message.webviewId != null && message.hasOwnProperty("webviewId"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.webviewId);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_DomEvent message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_DomEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_DomEvent} message WARemoteDebug_DomEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_DomEvent.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_DomEvent message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_DomEvent} WARemoteDebug_DomEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DomEvent.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_DomEvent();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.params = reader.string();
            break;
          case 2:
            message.webviewId = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_DomEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_DomEvent} WARemoteDebug_DomEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_DomEvent.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_DomEvent message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_DomEvent.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.params != null && message.hasOwnProperty("params"))
        if (!$util.isString(message.params))
          return "params: string expected";
      if (message.webviewId != null && message.hasOwnProperty("webviewId"))
        if (!$util.isInteger(message.webviewId))
          return "webviewId: integer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_DomEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_DomEvent} WARemoteDebug_DomEvent
     */
    WARemoteDebug_DomEvent.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_DomEvent)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_DomEvent();
      if (object.params != null)
        message.params = String(object.params);
      if (object.webviewId != null)
        message.webviewId = object.webviewId >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_DomEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_DomEvent} message WARemoteDebug_DomEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_DomEvent.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.params = "";
        object.webviewId = 0;
      }
      if (message.params != null && message.hasOwnProperty("params"))
        object.params = message.params;
      if (message.webviewId != null && message.hasOwnProperty("webviewId"))
        object.webviewId = message.webviewId;
      return object;
    };

    /**
     * Converts this WARemoteDebug_DomEvent to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_DomEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_DomEvent.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_DomEvent;
  })();

  mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI = (function() {

    /**
     * Properties of a WARemoteDebug_NetworkDebugAPI.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_NetworkDebugAPI
     * @property {string} [apiName] WARemoteDebug_NetworkDebugAPI apiName
     * @property {string} [taskId] WARemoteDebug_NetworkDebugAPI taskId
     * @property {string} [requestHeaders] WARemoteDebug_NetworkDebugAPI requestHeaders
     * @property {number|Long} [timestamp] WARemoteDebug_NetworkDebugAPI timestamp
     */

    /**
     * Constructs a new WARemoteDebug_NetworkDebugAPI.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_NetworkDebugAPI.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_NetworkDebugAPI=} [properties] Properties to set
     */
    function WARemoteDebug_NetworkDebugAPI(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_NetworkDebugAPI apiName.
     * @member {string}apiName
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @instance
     */
    WARemoteDebug_NetworkDebugAPI.prototype.apiName = "";

    /**
     * WARemoteDebug_NetworkDebugAPI taskId.
     * @member {string}taskId
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @instance
     */
    WARemoteDebug_NetworkDebugAPI.prototype.taskId = "";

    /**
     * WARemoteDebug_NetworkDebugAPI requestHeaders.
     * @member {string}requestHeaders
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @instance
     */
    WARemoteDebug_NetworkDebugAPI.prototype.requestHeaders = "";

    /**
     * WARemoteDebug_NetworkDebugAPI timestamp.
     * @member {number|Long}timestamp
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @instance
     */
    WARemoteDebug_NetworkDebugAPI.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * Creates a new WARemoteDebug_NetworkDebugAPI instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_NetworkDebugAPI=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI} WARemoteDebug_NetworkDebugAPI instance
     */
    WARemoteDebug_NetworkDebugAPI.create = function create(properties) {
      return new WARemoteDebug_NetworkDebugAPI(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_NetworkDebugAPI message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_NetworkDebugAPI} message WARemoteDebug_NetworkDebugAPI message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_NetworkDebugAPI.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.apiName != null && message.hasOwnProperty("apiName"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.apiName);
      if (message.taskId != null && message.hasOwnProperty("taskId"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.taskId);
      if (message.requestHeaders != null && message.hasOwnProperty("requestHeaders"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.requestHeaders);
      if (message.timestamp != null && message.hasOwnProperty("timestamp"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).uint64(message.timestamp);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_NetworkDebugAPI message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_NetworkDebugAPI} message WARemoteDebug_NetworkDebugAPI message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_NetworkDebugAPI.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_NetworkDebugAPI message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI} WARemoteDebug_NetworkDebugAPI
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_NetworkDebugAPI.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.apiName = reader.string();
            break;
          case 2:
            message.taskId = reader.string();
            break;
          case 3:
            message.requestHeaders = reader.string();
            break;
          case 4:
            message.timestamp = reader.uint64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_NetworkDebugAPI message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI} WARemoteDebug_NetworkDebugAPI
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_NetworkDebugAPI.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_NetworkDebugAPI message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_NetworkDebugAPI.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.apiName != null && message.hasOwnProperty("apiName"))
        if (!$util.isString(message.apiName))
          return "apiName: string expected";
      if (message.taskId != null && message.hasOwnProperty("taskId"))
        if (!$util.isString(message.taskId))
          return "taskId: string expected";
      if (message.requestHeaders != null && message.hasOwnProperty("requestHeaders"))
        if (!$util.isString(message.requestHeaders))
          return "requestHeaders: string expected";
      if (message.timestamp != null && message.hasOwnProperty("timestamp"))
        if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
          return "timestamp: integer|Long expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_NetworkDebugAPI message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI} WARemoteDebug_NetworkDebugAPI
     */
    WARemoteDebug_NetworkDebugAPI.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI();
      if (object.apiName != null)
        message.apiName = String(object.apiName);
      if (object.taskId != null)
        message.taskId = String(object.taskId);
      if (object.requestHeaders != null)
        message.requestHeaders = String(object.requestHeaders);
      if (object.timestamp != null)
        if ($util.Long)
          (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
        else if (typeof object.timestamp === "string")
        message.timestamp = parseInt(object.timestamp, 10);
      else if (typeof object.timestamp === "number")
        message.timestamp = object.timestamp;
      else if (typeof object.timestamp === "object")
        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_NetworkDebugAPI message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI} message WARemoteDebug_NetworkDebugAPI
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_NetworkDebugAPI.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.apiName = "";
        object.taskId = "";
        object.requestHeaders = "";
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else
          object.timestamp = options.longs === String ? "0" : 0;
      }
      if (message.apiName != null && message.hasOwnProperty("apiName"))
        object.apiName = message.apiName;
      if (message.taskId != null && message.hasOwnProperty("taskId"))
        object.taskId = message.taskId;
      if (message.requestHeaders != null && message.hasOwnProperty("requestHeaders"))
        object.requestHeaders = message.requestHeaders;
      if (message.timestamp != null && message.hasOwnProperty("timestamp"))
        if (typeof message.timestamp === "number")
          object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
        else
          object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
      return object;
    };

    /**
     * Converts this WARemoteDebug_NetworkDebugAPI to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_NetworkDebugAPI
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_NetworkDebugAPI.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_NetworkDebugAPI;
  })();

  mmbizwxadevremote.WARemoteDebug_ChromeDevtools = (function() {

    /**
     * Properties of a WARemoteDebug_ChromeDevtools.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_ChromeDevtools
     * @property {number|Long} [opId] WARemoteDebug_ChromeDevtools opId
     * @property {string} [payload] WARemoteDebug_ChromeDevtools payload
     * @property {string} [jscontextId] WARemoteDebug_ChromeDevtools jscontextId
     */

    /**
     * Constructs a new WARemoteDebug_ChromeDevtools.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_ChromeDevtools.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_ChromeDevtools=} [properties] Properties to set
     */
    function WARemoteDebug_ChromeDevtools(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_ChromeDevtools opId.
     * @member {number|Long}opId
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @instance
     */
    WARemoteDebug_ChromeDevtools.prototype.opId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * WARemoteDebug_ChromeDevtools payload.
     * @member {string}payload
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @instance
     */
    WARemoteDebug_ChromeDevtools.prototype.payload = "";

    /**
     * WARemoteDebug_ChromeDevtools jscontextId.
     * @member {string}jscontextId
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @instance
     */
    WARemoteDebug_ChromeDevtools.prototype.jscontextId = "";

    /**
     * Creates a new WARemoteDebug_ChromeDevtools instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_ChromeDevtools=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_ChromeDevtools} WARemoteDebug_ChromeDevtools instance
     */
    WARemoteDebug_ChromeDevtools.create = function create(properties) {
      return new WARemoteDebug_ChromeDevtools(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_ChromeDevtools message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_ChromeDevtools.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_ChromeDevtools} message WARemoteDebug_ChromeDevtools message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_ChromeDevtools.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.opId != null && message.hasOwnProperty("opId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.opId);
      if (message.payload != null && message.hasOwnProperty("payload"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.payload);
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.jscontextId);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_ChromeDevtools message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_ChromeDevtools.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_ChromeDevtools} message WARemoteDebug_ChromeDevtools message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_ChromeDevtools.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_ChromeDevtools message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_ChromeDevtools} WARemoteDebug_ChromeDevtools
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_ChromeDevtools.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_ChromeDevtools();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.opId = reader.uint64();
            break;
          case 2:
            message.payload = reader.string();
            break;
          case 3:
            message.jscontextId = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_ChromeDevtools message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_ChromeDevtools} WARemoteDebug_ChromeDevtools
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_ChromeDevtools.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_ChromeDevtools message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_ChromeDevtools.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.opId != null && message.hasOwnProperty("opId"))
        if (!$util.isInteger(message.opId) && !(message.opId && $util.isInteger(message.opId.low) && $util.isInteger(message.opId.high)))
          return "opId: integer|Long expected";
      if (message.payload != null && message.hasOwnProperty("payload"))
        if (!$util.isString(message.payload))
          return "payload: string expected";
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        if (!$util.isString(message.jscontextId))
          return "jscontextId: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_ChromeDevtools message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_ChromeDevtools} WARemoteDebug_ChromeDevtools
     */
    WARemoteDebug_ChromeDevtools.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_ChromeDevtools)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_ChromeDevtools();
      if (object.opId != null)
        if ($util.Long)
          (message.opId = $util.Long.fromValue(object.opId)).unsigned = true;
        else if (typeof object.opId === "string")
        message.opId = parseInt(object.opId, 10);
      else if (typeof object.opId === "number")
        message.opId = object.opId;
      else if (typeof object.opId === "object")
        message.opId = new $util.LongBits(object.opId.low >>> 0, object.opId.high >>> 0).toNumber(true);
      if (object.payload != null)
        message.payload = String(object.payload);
      if (object.jscontextId != null)
        message.jscontextId = String(object.jscontextId);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_ChromeDevtools message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_ChromeDevtools} message WARemoteDebug_ChromeDevtools
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_ChromeDevtools.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.opId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else
          object.opId = options.longs === String ? "0" : 0;
        object.payload = "";
        object.jscontextId = "";
      }
      if (message.opId != null && message.hasOwnProperty("opId"))
        if (typeof message.opId === "number")
          object.opId = options.longs === String ? String(message.opId) : message.opId;
        else
          object.opId = options.longs === String ? $util.Long.prototype.toString.call(message.opId) : options.longs === Number ? new $util.LongBits(message.opId.low >>> 0, message.opId.high >>> 0).toNumber(true) : message.opId;
      if (message.payload != null && message.hasOwnProperty("payload"))
        object.payload = message.payload;
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        object.jscontextId = message.jscontextId;
      return object;
    };

    /**
     * Converts this WARemoteDebug_ChromeDevtools to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtools
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_ChromeDevtools.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_ChromeDevtools;
  })();

  mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult = (function() {

    /**
     * Properties of a WARemoteDebug_ChromeDevtoolsResult.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_ChromeDevtoolsResult
     * @property {number|Long} [opId] WARemoteDebug_ChromeDevtoolsResult opId
     * @property {string} [payload] WARemoteDebug_ChromeDevtoolsResult payload
     * @property {string} [jscontextId] WARemoteDebug_ChromeDevtoolsResult jscontextId
     */

    /**
     * Constructs a new WARemoteDebug_ChromeDevtoolsResult.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_ChromeDevtoolsResult.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_ChromeDevtoolsResult=} [properties] Properties to set
     */
    function WARemoteDebug_ChromeDevtoolsResult(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_ChromeDevtoolsResult opId.
     * @member {number|Long}opId
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @instance
     */
    WARemoteDebug_ChromeDevtoolsResult.prototype.opId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * WARemoteDebug_ChromeDevtoolsResult payload.
     * @member {string}payload
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @instance
     */
    WARemoteDebug_ChromeDevtoolsResult.prototype.payload = "";

    /**
     * WARemoteDebug_ChromeDevtoolsResult jscontextId.
     * @member {string}jscontextId
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @instance
     */
    WARemoteDebug_ChromeDevtoolsResult.prototype.jscontextId = "";

    /**
     * Creates a new WARemoteDebug_ChromeDevtoolsResult instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_ChromeDevtoolsResult=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult} WARemoteDebug_ChromeDevtoolsResult instance
     */
    WARemoteDebug_ChromeDevtoolsResult.create = function create(properties) {
      return new WARemoteDebug_ChromeDevtoolsResult(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_ChromeDevtoolsResult message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_ChromeDevtoolsResult} message WARemoteDebug_ChromeDevtoolsResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_ChromeDevtoolsResult.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.opId != null && message.hasOwnProperty("opId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.opId);
      if (message.payload != null && message.hasOwnProperty("payload"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.payload);
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.jscontextId);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_ChromeDevtoolsResult message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_ChromeDevtoolsResult} message WARemoteDebug_ChromeDevtoolsResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_ChromeDevtoolsResult.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_ChromeDevtoolsResult message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult} WARemoteDebug_ChromeDevtoolsResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_ChromeDevtoolsResult.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.opId = reader.uint64();
            break;
          case 2:
            message.payload = reader.string();
            break;
          case 3:
            message.jscontextId = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_ChromeDevtoolsResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult} WARemoteDebug_ChromeDevtoolsResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_ChromeDevtoolsResult.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_ChromeDevtoolsResult message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_ChromeDevtoolsResult.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.opId != null && message.hasOwnProperty("opId"))
        if (!$util.isInteger(message.opId) && !(message.opId && $util.isInteger(message.opId.low) && $util.isInteger(message.opId.high)))
          return "opId: integer|Long expected";
      if (message.payload != null && message.hasOwnProperty("payload"))
        if (!$util.isString(message.payload))
          return "payload: string expected";
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        if (!$util.isString(message.jscontextId))
          return "jscontextId: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_ChromeDevtoolsResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult} WARemoteDebug_ChromeDevtoolsResult
     */
    WARemoteDebug_ChromeDevtoolsResult.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult();
      if (object.opId != null)
        if ($util.Long)
          (message.opId = $util.Long.fromValue(object.opId)).unsigned = true;
        else if (typeof object.opId === "string")
        message.opId = parseInt(object.opId, 10);
      else if (typeof object.opId === "number")
        message.opId = object.opId;
      else if (typeof object.opId === "object")
        message.opId = new $util.LongBits(object.opId.low >>> 0, object.opId.high >>> 0).toNumber(true);
      if (object.payload != null)
        message.payload = String(object.payload);
      if (object.jscontextId != null)
        message.jscontextId = String(object.jscontextId);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_ChromeDevtoolsResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult} message WARemoteDebug_ChromeDevtoolsResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_ChromeDevtoolsResult.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.opId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else
          object.opId = options.longs === String ? "0" : 0;
        object.payload = "";
        object.jscontextId = "";
      }
      if (message.opId != null && message.hasOwnProperty("opId"))
        if (typeof message.opId === "number")
          object.opId = options.longs === String ? String(message.opId) : message.opId;
        else
          object.opId = options.longs === String ? $util.Long.prototype.toString.call(message.opId) : options.longs === Number ? new $util.LongBits(message.opId.low >>> 0, message.opId.high >>> 0).toNumber(true) : message.opId;
      if (message.payload != null && message.hasOwnProperty("payload"))
        object.payload = message.payload;
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        object.jscontextId = message.jscontextId;
      return object;
    };

    /**
     * Converts this WARemoteDebug_ChromeDevtoolsResult to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_ChromeDevtoolsResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_ChromeDevtoolsResult.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_ChromeDevtoolsResult;
  })();

  mmbizwxadevremote.WARemoteDebug_AddJsContext = (function() {

    /**
     * Properties of a WARemoteDebug_AddJsContext.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_AddJsContext
     * @property {string} [jscontextId] WARemoteDebug_AddJsContext jscontextId
     * @property {string} [jscontextName] WARemoteDebug_AddJsContext jscontextName
     */

    /**
     * Constructs a new WARemoteDebug_AddJsContext.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_AddJsContext.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_AddJsContext=} [properties] Properties to set
     */
    function WARemoteDebug_AddJsContext(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_AddJsContext jscontextId.
     * @member {string}jscontextId
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @instance
     */
    WARemoteDebug_AddJsContext.prototype.jscontextId = "";

    /**
     * WARemoteDebug_AddJsContext jscontextName.
     * @member {string}jscontextName
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @instance
     */
    WARemoteDebug_AddJsContext.prototype.jscontextName = "";

    /**
     * Creates a new WARemoteDebug_AddJsContext instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_AddJsContext=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_AddJsContext} WARemoteDebug_AddJsContext instance
     */
    WARemoteDebug_AddJsContext.create = function create(properties) {
      return new WARemoteDebug_AddJsContext(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_AddJsContext message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_AddJsContext.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_AddJsContext} message WARemoteDebug_AddJsContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_AddJsContext.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.jscontextId);
      if (message.jscontextName != null && message.hasOwnProperty("jscontextName"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.jscontextName);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_AddJsContext message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_AddJsContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_AddJsContext} message WARemoteDebug_AddJsContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_AddJsContext.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_AddJsContext message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_AddJsContext} WARemoteDebug_AddJsContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_AddJsContext.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_AddJsContext();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.jscontextId = reader.string();
            break;
          case 2:
            message.jscontextName = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_AddJsContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_AddJsContext} WARemoteDebug_AddJsContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_AddJsContext.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_AddJsContext message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_AddJsContext.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        if (!$util.isString(message.jscontextId))
          return "jscontextId: string expected";
      if (message.jscontextName != null && message.hasOwnProperty("jscontextName"))
        if (!$util.isString(message.jscontextName))
          return "jscontextName: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_AddJsContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_AddJsContext} WARemoteDebug_AddJsContext
     */
    WARemoteDebug_AddJsContext.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_AddJsContext)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_AddJsContext();
      if (object.jscontextId != null)
        message.jscontextId = String(object.jscontextId);
      if (object.jscontextName != null)
        message.jscontextName = String(object.jscontextName);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_AddJsContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_AddJsContext} message WARemoteDebug_AddJsContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_AddJsContext.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.jscontextId = "";
        object.jscontextName = "";
      }
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        object.jscontextId = message.jscontextId;
      if (message.jscontextName != null && message.hasOwnProperty("jscontextName"))
        object.jscontextName = message.jscontextName;
      return object;
    };

    /**
     * Converts this WARemoteDebug_AddJsContext to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_AddJsContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_AddJsContext.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_AddJsContext;
  })();

  mmbizwxadevremote.WARemoteDebug_RemoveJsContext = (function() {

    /**
     * Properties of a WARemoteDebug_RemoveJsContext.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_RemoveJsContext
     * @property {string} [jscontextId] WARemoteDebug_RemoveJsContext jscontextId
     */

    /**
     * Constructs a new WARemoteDebug_RemoveJsContext.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_RemoveJsContext.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_RemoveJsContext=} [properties] Properties to set
     */
    function WARemoteDebug_RemoveJsContext(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_RemoveJsContext jscontextId.
     * @member {string}jscontextId
     * @memberof mmbizwxadevremote.WARemoteDebug_RemoveJsContext
     * @instance
     */
    WARemoteDebug_RemoveJsContext.prototype.jscontextId = "";

    /**
     * Creates a new WARemoteDebug_RemoveJsContext instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_RemoveJsContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_RemoveJsContext=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_RemoveJsContext} WARemoteDebug_RemoveJsContext instance
     */
    WARemoteDebug_RemoveJsContext.create = function create(properties) {
      return new WARemoteDebug_RemoveJsContext(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_RemoveJsContext message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_RemoveJsContext.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_RemoveJsContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_RemoveJsContext} message WARemoteDebug_RemoveJsContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_RemoveJsContext.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.jscontextId);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_RemoveJsContext message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_RemoveJsContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_RemoveJsContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_RemoveJsContext} message WARemoteDebug_RemoveJsContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_RemoveJsContext.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_RemoveJsContext message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_RemoveJsContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_RemoveJsContext} WARemoteDebug_RemoveJsContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_RemoveJsContext.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_RemoveJsContext();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.jscontextId = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_RemoveJsContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_RemoveJsContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_RemoveJsContext} WARemoteDebug_RemoveJsContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_RemoveJsContext.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_RemoveJsContext message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_RemoveJsContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_RemoveJsContext.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        if (!$util.isString(message.jscontextId))
          return "jscontextId: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_RemoveJsContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_RemoveJsContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_RemoveJsContext} WARemoteDebug_RemoveJsContext
     */
    WARemoteDebug_RemoveJsContext.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_RemoveJsContext)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_RemoveJsContext();
      if (object.jscontextId != null)
        message.jscontextId = String(object.jscontextId);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_RemoveJsContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_RemoveJsContext
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_RemoveJsContext} message WARemoteDebug_RemoveJsContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_RemoveJsContext.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.jscontextId = "";
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        object.jscontextId = message.jscontextId;
      return object;
    };

    /**
     * Converts this WARemoteDebug_RemoveJsContext to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_RemoveJsContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_RemoveJsContext.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_RemoveJsContext;
  })();

  mmbizwxadevremote.WARemoteDebug_ConnectJsContext = (function() {

    /**
     * Properties of a WARemoteDebug_ConnectJsContext.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_ConnectJsContext
     * @property {string} [jscontextId] WARemoteDebug_ConnectJsContext jscontextId
     */

    /**
     * Constructs a new WARemoteDebug_ConnectJsContext.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_ConnectJsContext.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_ConnectJsContext=} [properties] Properties to set
     */
    function WARemoteDebug_ConnectJsContext(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_ConnectJsContext jscontextId.
     * @member {string}jscontextId
     * @memberof mmbizwxadevremote.WARemoteDebug_ConnectJsContext
     * @instance
     */
    WARemoteDebug_ConnectJsContext.prototype.jscontextId = "";

    /**
     * Creates a new WARemoteDebug_ConnectJsContext instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_ConnectJsContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_ConnectJsContext=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_ConnectJsContext} WARemoteDebug_ConnectJsContext instance
     */
    WARemoteDebug_ConnectJsContext.create = function create(properties) {
      return new WARemoteDebug_ConnectJsContext(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_ConnectJsContext message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_ConnectJsContext.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_ConnectJsContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_ConnectJsContext} message WARemoteDebug_ConnectJsContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_ConnectJsContext.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.jscontextId);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_ConnectJsContext message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_ConnectJsContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_ConnectJsContext
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_ConnectJsContext} message WARemoteDebug_ConnectJsContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_ConnectJsContext.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_ConnectJsContext message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_ConnectJsContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_ConnectJsContext} WARemoteDebug_ConnectJsContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_ConnectJsContext.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_ConnectJsContext();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.jscontextId = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_ConnectJsContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_ConnectJsContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_ConnectJsContext} WARemoteDebug_ConnectJsContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_ConnectJsContext.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_ConnectJsContext message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_ConnectJsContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_ConnectJsContext.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        if (!$util.isString(message.jscontextId))
          return "jscontextId: string expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_ConnectJsContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_ConnectJsContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_ConnectJsContext} WARemoteDebug_ConnectJsContext
     */
    WARemoteDebug_ConnectJsContext.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_ConnectJsContext)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_ConnectJsContext();
      if (object.jscontextId != null)
        message.jscontextId = String(object.jscontextId);
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_ConnectJsContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_ConnectJsContext
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_ConnectJsContext} message WARemoteDebug_ConnectJsContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_ConnectJsContext.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.jscontextId = "";
      if (message.jscontextId != null && message.hasOwnProperty("jscontextId"))
        object.jscontextId = message.jscontextId;
      return object;
    };

    /**
     * Converts this WARemoteDebug_ConnectJsContext to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_ConnectJsContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_ConnectJsContext.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_ConnectJsContext;
  })();

  mmbizwxadevremote.WARemoteDebug_CustomMessage = (function() {

    /**
     * Properties of a WARemoteDebug_CustomMessage.
     * @memberof mmbizwxadevremote
     * @interface IWARemoteDebug_CustomMessage
     * @property {string} [method] WARemoteDebug_CustomMessage method
     * @property {string} [payload] WARemoteDebug_CustomMessage payload
     * @property {Uint8Array} [raw] WARemoteDebug_CustomMessage raw
     */

    /**
     * Constructs a new WARemoteDebug_CustomMessage.
     * @memberof mmbizwxadevremote
     * @classdesc Represents a WARemoteDebug_CustomMessage.
     * @constructor
     * @param {mmbizwxadevremote.IWARemoteDebug_CustomMessage=} [properties] Properties to set
     */
    function WARemoteDebug_CustomMessage(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * WARemoteDebug_CustomMessage method.
     * @member {string}method
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @instance
     */
    WARemoteDebug_CustomMessage.prototype.method = "";

    /**
     * WARemoteDebug_CustomMessage payload.
     * @member {string}payload
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @instance
     */
    WARemoteDebug_CustomMessage.prototype.payload = "";

    /**
     * WARemoteDebug_CustomMessage raw.
     * @member {Uint8Array}raw
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @instance
     */
    WARemoteDebug_CustomMessage.prototype.raw = $util.newBuffer([]);

    /**
     * Creates a new WARemoteDebug_CustomMessage instance using the specified properties.
     * @function create
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CustomMessage=} [properties] Properties to set
     * @returns {mmbizwxadevremote.WARemoteDebug_CustomMessage} WARemoteDebug_CustomMessage instance
     */
    WARemoteDebug_CustomMessage.create = function create(properties) {
      return new WARemoteDebug_CustomMessage(properties);
    };

    /**
     * Encodes the specified WARemoteDebug_CustomMessage message. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_CustomMessage.verify|verify} messages.
     * @function encode
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CustomMessage} message WARemoteDebug_CustomMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_CustomMessage.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.method != null && message.hasOwnProperty("method"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.method);
      if (message.payload != null && message.hasOwnProperty("payload"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.payload);
      if (message.raw != null && message.hasOwnProperty("raw"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).bytes(message.raw);
      return writer;
    };

    /**
     * Encodes the specified WARemoteDebug_CustomMessage message, length delimited. Does not implicitly {@link mmbizwxadevremote.WARemoteDebug_CustomMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @static
     * @param {mmbizwxadevremote.IWARemoteDebug_CustomMessage} message WARemoteDebug_CustomMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WARemoteDebug_CustomMessage.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WARemoteDebug_CustomMessage message from the specified reader or buffer.
     * @function decode
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mmbizwxadevremote.WARemoteDebug_CustomMessage} WARemoteDebug_CustomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_CustomMessage.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.mmbizwxadevremote.WARemoteDebug_CustomMessage();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.method = reader.string();
            break;
          case 2:
            message.payload = reader.string();
            break;
          case 3:
            message.raw = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a WARemoteDebug_CustomMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mmbizwxadevremote.WARemoteDebug_CustomMessage} WARemoteDebug_CustomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WARemoteDebug_CustomMessage.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WARemoteDebug_CustomMessage message.
     * @function verify
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WARemoteDebug_CustomMessage.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.method != null && message.hasOwnProperty("method"))
        if (!$util.isString(message.method))
          return "method: string expected";
      if (message.payload != null && message.hasOwnProperty("payload"))
        if (!$util.isString(message.payload))
          return "payload: string expected";
      if (message.raw != null && message.hasOwnProperty("raw"))
        if (!(message.raw && typeof message.raw.length === "number" || $util.isString(message.raw)))
          return "raw: buffer expected";
      return null;
    };

    /**
     * Creates a WARemoteDebug_CustomMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mmbizwxadevremote.WARemoteDebug_CustomMessage} WARemoteDebug_CustomMessage
     */
    WARemoteDebug_CustomMessage.fromObject = function fromObject(object) {
      if (object instanceof $root.mmbizwxadevremote.WARemoteDebug_CustomMessage)
        return object;
      var message = new $root.mmbizwxadevremote.WARemoteDebug_CustomMessage();
      if (object.method != null)
        message.method = String(object.method);
      if (object.payload != null)
        message.payload = String(object.payload);
      if (object.raw != null)
        if (typeof object.raw === "string")
          $util.base64.decode(object.raw, message.raw = $util.newBuffer($util.base64.length(object.raw)), 0);
        else if (object.raw.length)
        message.raw = object.raw;
      return message;
    };

    /**
     * Creates a plain object from a WARemoteDebug_CustomMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @static
     * @param {mmbizwxadevremote.WARemoteDebug_CustomMessage} message WARemoteDebug_CustomMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WARemoteDebug_CustomMessage.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.method = "";
        object.payload = "";
        object.raw = options.bytes === String ? "" : [];
      }
      if (message.method != null && message.hasOwnProperty("method"))
        object.method = message.method;
      if (message.payload != null && message.hasOwnProperty("payload"))
        object.payload = message.payload;
      if (message.raw != null && message.hasOwnProperty("raw"))
        object.raw = options.bytes === String ? $util.base64.encode(message.raw, 0, message.raw.length) : options.bytes === Array ? Array.prototype.slice.call(message.raw) : message.raw;
      return object;
    };

    /**
     * Converts this WARemoteDebug_CustomMessage to JSON.
     * @function toJSON
     * @memberof mmbizwxadevremote.WARemoteDebug_CustomMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WARemoteDebug_CustomMessage.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WARemoteDebug_CustomMessage;
  })();

  return mmbizwxadevremote;
})();

module.exports = $root;
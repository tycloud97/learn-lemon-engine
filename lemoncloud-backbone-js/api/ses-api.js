"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(e,r){if(!e)throw new Error("_$(global instance pool) is required!");var t=e._,m=e.U,s=e.SE;if(!t)throw new Error("$_ is required!");if(!s)throw new Error("$SE is required!");var p=m.NS(r||"SESS","yellow"),E=e.log,b=(e.inf,e.err);function _(e){return T(404,e)}function S(e){return T(503,e)}function T(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}var o=function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var o=e.queryStringParameters||{},n=e.pathParameters||{},i=decodeURIComponent(n.type||""),s=decodeURIComponent(n.id||""),c=(s||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",a=decodeURIComponent(n.cmd||""),u=!c&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[c],d=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!d&&E(p,"#"+u+":"+a+" ("+c+", "+i+"/"+s+")...."),d&&E(p,"#"+u+":"+a+" ("+c+", "+i+"/"+s+").... body.len=",d?m.json(d).length:-1);var l={_id:s,_type:i,_param:o,_body:d,_ctx:r},f=Promise.resolve(l),y=function(e,r,t,o){var n=null;switch(e){case"LIST":break;case"GET":"0"===t&&"test-self"===o&&(n=h);break;case"PUT":break;case"POST":"0"===t&&"send"===o&&(n=P)}return n}(u,0,s,a);if(!y)return t(null,_({MODE:u}));try{f.then(function(e){var r=e._id,t=e._type,o=e._param,n=e._body,i=e._ctx;return y(t,r,o,n,i)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=m.cleanup(e)),t(null,T(200,e)),!0}).catch(function(e){return b(p,"!!! callback@1 with err",e),0<=(e&&e.message||"").indexOf("404 NOT FOUND")?t(null,_(e.message)):t(null,S(e.message||e)),!1})}catch(e){t(e,S(e.message))}};function P(r,e,t,o,n){if(E(p,"do_post_send_email("+r+"/"+e+")...."),"email"!=r)return Promise.reject(new Error("TYPE is invalid! TYPE:"+r));if("0"!=e)return Promise.reject(new Error("ID is  invalid! ID:"+e));if(!o)return Promise.reject(new Error("$body is required!"));var i=Object.assign({},o||{});return i?s.do_send_email(i).then(function(e){return E(p,"> pub-message["+r+"] :=",e),i.result=e,i}):Promise.reject(new Error("body is required!"))}function h(e,r,t,o,n){if(E(p,"do_get_test_self("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var i=t?Object.assign({},t):{};return i?Promise.resolve(i):Promise.reject(new Error("node is required!"))}return o.do_post_send_email=P,o};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, callback) {
  /**
   * @param {!Array} callback
   * @return {?}
   */
  function assign(callback) {
    return fn(404, callback);
  }
  /**
   * @param {!Array} duration
   * @return {?}
   */
  function done(duration) {
    return fn(503, duration);
  }
  /**
   * @param {number} i
   * @param {!Array} value
   * @return {?}
   */
  function fn(i, value) {
    return {
      statusCode : i,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(value)
    };
  }
  /**
   * @param {string} ext
   * @param {string} hash
   * @param {?} template
   * @param {number} l10n
   * @param {?} fn
   * @return {?}
   */
  function build(ext, hash, template, l10n, fn) {
    if (log(msg, "do_post_send_email(" + ext + "/" + hash + ")...."), "email" != ext) {
      return Promise.reject(new Error("TYPE is invalid! TYPE:" + ext));
    }
    if ("0" != hash) {
      return Promise.reject(new Error("ID is  invalid! ID:" + hash));
    }
    if (!l10n) {
      return Promise.reject(new Error("$body is required!"));
    }
    /** @type {!Object} */
    var message = Object.assign({}, l10n || {});
    return message ? s.do_send_email(message).then(function(e) {
      return log(msg, "> pub-message[" + ext + "] :=", e), message.result = e, message;
    }) : Promise.reject(new Error("body is required!"));
  }
  /**
   * @param {string} name
   * @param {string} siteId
   * @param {boolean} data
   * @param {?} fn
   * @param {?} opt_description
   * @return {?}
   */
  function execute(name, siteId, data, fn, opt_description) {
    if (log(msg, "do_get_test_self(" + name + "/" + siteId + ")...."), !name) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== siteId) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var files = data ? Object.assign({}, data) : {};
    return files ? Promise.resolve(files) : Promise.reject(new Error("node is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var self = opts.U;
  var s = opts.SE;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  if (!s) {
    throw new Error("$SE is required!");
  }
  var msg = self.NS(callback || "SESS", "yellow");
  var log = opts.log;
  var updateMessagge = (opts.inf, opts.err);
  /**
   * @param {!Object} event
   * @param {!Node} ctx
   * @param {?} cb
   * @return {?}
   */
  var create = function(event, ctx, cb) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var type = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var path = decodeURIComponent(settings.id || "");
    var ret = (path || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
    /** @type {string} */
    var value = decodeURIComponent(settings.cmd || "");
    var i = !ret && event.Records ? "EVENT" : {
      LIST : "LIST",
      GET : "GET",
      PUT : "PUT",
      POST : "POST",
      DELETE : "DELETE"
    }[ret];
    /** @type {*} */
    var body = event.body && ("string" == typeof event.body && (event.body.startsWith("{") || event.body.startsWith("[")) ? JSON.parse(event.body) : event.body) || event.Records && {
      records : event.Records
    } || null;
    if (!body) {
      log(msg, "#" + i + ":" + value + " (" + ret + ", " + type + "/" + path + ")....");
    }
    if (body) {
      log(msg, "#" + i + ":" + value + " (" + ret + ", " + type + "/" + path + ").... body.len=", body ? self.json(body).length : -1);
    }
    var listview = {
      _id : path,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var fn = function(method, addedRenderer, down, total) {
      /** @type {null} */
      var i = null;
      switch(method) {
        case "LIST":
          break;
        case "GET":
          if ("0" === down && "test-self" === total) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            i = execute;
          }
          break;
        case "PUT":
          break;
        case "POST":
          if ("0" === down && "send" === total) {
            /** @type {function(string, string, ?, number, ?): ?} */
            i = build;
          }
      }
      return i;
    }(i, 0, path, value);
    if (!fn) {
      return cb(null, assign({
        MODE : i
      }));
    }
    try {
      results.then(function(self) {
        /** @type {string} */
        var module = self._id;
        /** @type {string} */
        var t = self._type;
        var pad = self._param;
        /** @type {*} */
        var container = self._body;
        var escapeHTML = self._ctx;
        return fn(t, module, pad, container, escapeHTML);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = self.cleanup(value)), cb(null, fn(200, value)), true;
      }).catch(function(err) {
        return updateMessagge(msg, "!!! callback@1 with err", err), 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? cb(null, assign(err.message)) : cb(null, done(err.message || err)), false;
      });
    } catch (e) {
      cb(e, done(e.message));
    }
  };
  return create.do_post_send_email = build, create;
};


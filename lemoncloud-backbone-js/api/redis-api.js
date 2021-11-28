"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(e,r){if(!e)throw new Error("_$(global instance pool) is required!");var t=e._,_=e.U,c=e.RS;if(!t)throw new Error("$_ is required!");var p=_.NS(r||"RDIS","yellow"),E=e.log,y=(e.inf,e.err);function b(e){return T(404,e)}function P(e){return T(503,e)}function T(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}var n=function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var n=e.queryStringParameters||{},o=e.pathParameters||{},i=decodeURIComponent(o.type||""),s=decodeURIComponent(o.id||""),u=(s||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",c=decodeURIComponent(o.cmd||""),d=!u&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[u],a=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!a&&E(p,"#"+d+":"+c+" ("+u+", "+i+"/"+s+")...."),a&&E(p,"#"+d+":"+c+" ("+u+", "+i+"/"+s+").... body.len=",a?_.json(a).length:-1);var l={_id:s,_type:i,_param:n,_body:a,_ctx:r},f=Promise.resolve(l),m=function(e,r,t,n){var o=null;switch(e){case"LIST":break;case"GET":"0"===t&&"test-self"===n?o=g:"0"!==t&&""===n&&(o=w);break;case"PUT":"0"!==t&&""===n&&(o=v);break;case"POST":""!==t&&""===n&&(o=h);break;case"DELETE":""!==t&&""===n&&(o=S)}return o}(d,0,s,c);if(!m)return t(null,b({MODE:d}));try{f.then(function(e){var r=e._id,t=e._type,n=e._param,o=e._body,i=e._ctx;return m(t,r,n,o,i)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=_.cleanup(e)),t(null,T(200,e)),!0}).catch(function(e){return 0<=(e&&e.message||"").indexOf("404 NOT FOUND")?t(null,b(e.message)):(y(p,"!!! callback@1-2 with err",e),t(null,P(e.message||e))),!1})}catch(e){t(e,P(e.message))}};function h(e,r,t,n,o){if(E(p,"do_post_create_item("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));if(!n)return Promise.reject(new Error("$body is required!"));t=t||{};var i=0<e.indexOf("+")?e.split("+"):e,s=n,u=_.N(t.timeout,0);return c.do_create_item(i,r,s,u).then(function(e){return t.result=e,t})}function w(e,r,t,n,o){if(E(p,"do_get_read_item("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));t=t||{};var i=0<e.indexOf("+")?e.split("+"):e;return c.do_get_item(i,r).then(function(e){return t.result=e,t})}function S(e,r,t,n,o){if(E(p,"do_delete_item("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));t=t||{};var i=0<e.indexOf("+")?e.split("+"):e;return c.do_delete_item(i,r).then(function(e){return t.result=e,t})}function v(e,r,t,n,o){if(E(p,"do_put_update_item("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));t=t||{};var i=0<e.indexOf("+")?e.split("+"):e,s=n;return c.do_update_item(i,r,s).then(function(e){return t.result=e,t})}function g(e,r,t,n,o){return E(p,"do_get_test_self("+e+"/"+r+")...."),e?"0"!==r?Promise.reject(new Error("ID is invalid!")):(t=t||{},c.do_test_self(t).then(function(e){return E(p,"> test-self.res :=",e),t.result=e,t})):Promise.reject(new Error("TYPE is required!"))}return n.do_post_create_item=h,n};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, callback) {
  /**
   * @param {!Array} force
   * @return {?}
   */
  function log(force) {
    return cb(404, force);
  }
  /**
   * @param {!Array} options
   * @return {?}
   */
  function success(options) {
    return cb(503, options);
  }
  /**
   * @param {number} i
   * @param {!Array} value
   * @return {?}
   */
  function cb(i, value) {
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
   * @param {string} e
   * @param {string} record
   * @param {!Object} t
   * @param {?} template
   * @param {?} extra
   * @return {?}
   */
  function name(e, record, t, template, extra) {
    if (join(file, "do_post_create_item(" + e + "/" + record + ")...."), !e) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!record) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!template) {
      return Promise.reject(new Error("$body is required!"));
    }
    t = t || {};
    var te = 0 < e.indexOf("+") ? e.split("+") : e;
    var res = template;
    var checker = self.N(t.timeout, 0);
    return body.do_create_item(te, record, res, checker).then(function(e) {
      return t.result = e, t;
    });
  }
  /**
   * @param {string} next
   * @param {string} id
   * @param {number} n
   * @param {?} options
   * @param {?} showSecure
   * @return {?}
   */
  function call(next, id, n, options, showSecure) {
    if (join(file, "do_get_read_item(" + next + "/" + id + ")...."), !next) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!id) {
      return Promise.reject(new Error("ID is required!"));
    }
    n = n || {};
    var dir = 0 < next.indexOf("+") ? next.split("+") : next;
    return body.do_get_item(dir, id).then(function(t) {
      return n.result = t, n;
    });
  }
  /**
   * @param {string} e
   * @param {string} id
   * @param {number} s
   * @param {?} index
   * @param {?} data
   * @return {?}
   */
  function handler(e, id, s, index, data) {
    if (join(file, "do_delete_item(" + e + "/" + id + ")...."), !e) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!id) {
      return Promise.reject(new Error("ID is required!"));
    }
    s = s || {};
    var te = 0 < e.indexOf("+") ? e.split("+") : e;
    return body.do_delete_item(te, id).then(function(f) {
      return s.result = f, s;
    });
  }
  /**
   * @param {string} z
   * @param {string} c
   * @param {number} n
   * @param {?} r
   * @param {?} q
   * @return {?}
   */
  function v(z, c, n, r, q) {
    if (join(file, "do_put_update_item(" + z + "/" + c + ")...."), !z) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!c) {
      return Promise.reject(new Error("ID is required!"));
    }
    n = n || {};
    var i = 0 < z.indexOf("+") ? z.split("+") : z;
    var dir = r;
    return body.do_update_item(i, c, dir).then(function(t) {
      return n.result = t, n;
    });
  }
  /**
   * @param {string} result
   * @param {string} date
   * @param {number} e
   * @param {?} f
   * @param {?} a
   * @return {?}
   */
  function calc(result, date, e, f, a) {
    return join(file, "do_get_test_self(" + result + "/" + date + ")...."), result ? "0" !== date ? Promise.reject(new Error("ID is invalid!")) : (e = e || {}, body.do_test_self(e).then(function(f) {
      return join(file, "> test-self.res :=", f), e.result = f, e;
    })) : Promise.reject(new Error("TYPE is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var self = opts.U;
  var body = opts.RS;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  var file = self.NS(callback || "RDIS", "yellow");
  var join = opts.log;
  var debug = (opts.inf, opts.err);
  /**
   * @param {!Object} event
   * @param {!Node} ctx
   * @param {?} next
   * @return {?}
   */
  var create = function(event, ctx, next) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var type = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var hash = decodeURIComponent(settings.id || "");
    var ret = (hash || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
    /** @type {string} */
    var val = decodeURIComponent(settings.cmd || "");
    var mode = !ret && event.Records ? "EVENT" : {
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
      join(file, "#" + mode + ":" + val + " (" + ret + ", " + type + "/" + hash + ")....");
    }
    if (body) {
      join(file, "#" + mode + ":" + val + " (" + ret + ", " + type + "/" + hash + ").... body.len=", body ? self.json(body).length : -1);
    }
    var listview = {
      _id : hash,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var format = function(method, addedRenderer, part, base) {
      /** @type {null} */
      var id = null;
      switch(method) {
        case "LIST":
          break;
        case "GET":
          if ("0" === part && "test-self" === base) {
            /** @type {function(string, string, number, ?, ?): ?} */
            id = calc;
          } else {
            if ("0" !== part && "" === base) {
              /** @type {function(string, string, number, ?, ?): ?} */
              id = call;
            }
          }
          break;
        case "PUT":
          if ("0" !== part && "" === base) {
            /** @type {function(string, string, number, ?, ?): ?} */
            id = v;
          }
          break;
        case "POST":
          if ("" !== part && "" === base) {
            /** @type {function(string, string, !Object, ?, ?): ?} */
            id = name;
          }
          break;
        case "DELETE":
          if ("" !== part && "" === base) {
            /** @type {function(string, string, number, ?, ?): ?} */
            id = handler;
          }
      }
      return id;
    }(mode, 0, hash, val);
    if (!format) {
      return next(null, log({
        MODE : mode
      }));
    }
    try {
      results.then(function(self) {
        /** @type {string} */
        var originalId = self._id;
        /** @type {string} */
        var t = self._type;
        var extraData = self._param;
        /** @type {*} */
        var body = self._body;
        var className = self._ctx;
        return format(t, originalId, extraData, body, className);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = self.cleanup(value)), next(null, cb(200, value)), true;
      }).catch(function(data) {
        return 0 <= (data && data.message || "").indexOf("404 NOT FOUND") ? next(null, log(data.message)) : (debug(file, "!!! callback@1-2 with err", data), next(null, success(data.message || data))), false;
      });
    } catch (r) {
      next(r, success(r.message));
    }
  };
  return create.do_post_create_item = name, create;
};


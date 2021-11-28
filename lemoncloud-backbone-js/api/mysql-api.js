"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(e,r){if(!e)throw new Error("_$(global instance pool) is required!");var t=e._,y=e.U,u=e.MS;if(!t)throw new Error("$_ is required!");var m=y.NS(r||"MSQL","yellow"),p=e.log,E=(e.inf,e.err);function b(e){return w(404,e)}function g(e){return w(503,e)}function w(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}var n=function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var n=e.queryStringParameters||{},i=e.pathParameters||{},o=decodeURIComponent(i.type||""),s=decodeURIComponent(i.id||""),d=(s||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",u=decodeURIComponent(i.cmd||""),c=!d&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[d],a=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!a&&p(m,"#"+c+":"+u+" ("+d+", "+o+"/"+s+")...."),a&&p(m,"#"+c+":"+u+" ("+d+", "+o+"/"+s+").... body.len=",a?y.json(a).length:-1);var l={_id:s,_type:o,_param:n,_body:a,_ctx:r},_=Promise.resolve(l),f=function(e,r,t,n){var i=null;switch(e){case"LIST":break;case"GET":"0"===t&&"last-id"===n&&(i=v),"0"===t&&"next-id"===n&&(i=j),"0"===t&&"create-id"===n&&(i=P),"0"===t&&"delete-id"===n&&(i=h),"0"===t&&"query"===n&&(i=q)}return i}(c,0,s,u);if(!f)return t(null,b({MODE:c}));try{_.then(function(e){var r=e._id,t=e._type,n=e._param,i=e._body,o=e._ctx;return f(t,r,n,i,o)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=y.cleanup(e)),t(null,w(200,e)),!0}).catch(function(e){return 0<=(e&&e.message||"").indexOf("404 NOT FOUND")?t(null,b(e.message)):(E(m,"!!! callback@1-2 with err",e),t(null,g(e.message||e))),!1})}catch(e){t(e,g(e.message))}};function v(e,r,t,n,i){if(p(m,"do_get_last_id("+e+"/"+r+")...."),!e)return Promise.reject(new Error("type is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};return o?(o._id=y.N(r,0),u.do_get_last_id(e).then(function(e){return p(m,"> last-id :=",e),o.result=e,o})):Promise.reject(new Error("node is required!"))}function j(e,r,t,n,i){if(p(m,"do_get_next_id("+e+"/"+r+")...."),!e)return Promise.reject(new Error("type is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};return o?(o._id=y.N(r,0),u.do_get_next_id(e).then(function(e){return p(m,"> next-id :=",e),o.result=e,o})):Promise.reject(new Error("node is required!"))}function P(e,r,t,n,i){if(p(m,"do_get_create_id("+e+"/"+r+")...."),!e)return Promise.reject(new Error("type is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=y.N(r,0);var s=y.N(o.next,1e3);return u.do_create_id_seq(e,s).then(function(e){return p(m,"> create-id :=",e),o.result=e,o})}function h(e,r,t,n,i){if(p(m,"do_get_delete_id("+e+"/"+r+")...."),!e)return Promise.reject(new Error("type is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};return o?(o._id=y.N(r,0),u.do_delete_id_seq(e).then(function(e){return p(m,"> delete-id :=",e),o.result=e,o})):Promise.reject(new Error("node is required!"))}function q(e,r,t,n,i){if(p(m,"do_get_delete_id("+e+"/"+r+")...."),!e)return Promise.reject(new Error("type is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=y.N(r,0);var s=o.query,d=o.values;return s?d&&!Array.isArray(d)?Promise.reject(new Error(m+":values should be array!")):u.do_promise_query(s,d).then(function(e){return p(m,"> promise-query :=",e),o.result=e,o}):Promise.reject(new Error(m+":query is required"))}return n.do_get_last_id=v,n.do_get_next_id=j,n.do_get_create_id=P,n.do_get_delete_id=h,n};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(p, a) {
  /**
   * @param {!Array} expr
   * @return {?}
   */
  function log(expr) {
    return callback(404, expr);
  }
  /**
   * @param {!Array} items
   * @return {?}
   */
  function cb(items) {
    return callback(503, items);
  }
  /**
   * @param {number} i
   * @param {!Array} value
   * @return {?}
   */
  function callback(i, value) {
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
   * @param {string} name
   * @param {string} url
   * @param {boolean} group
   * @param {?} options
   * @param {?} sourceInput
   * @return {?}
   */
  function check(name, url, group, options, sourceInput) {
    if (push(msg, "do_get_last_id(" + name + "/" + url + ")...."), !name) {
      return Promise.reject(new Error("type is required!"));
    }
    if ("0" !== url) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var self = group ? Object.assign({}, group) : {};
    return self ? (self._id = t.N(url, 0), u.do_get_last_id(name).then(function(context) {
      return push(msg, "> last-id :=", context), self.result = context, self;
    })) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} object
   * @param {string} key
   * @param {boolean} data
   * @param {?} headers
   * @param {?} callback
   * @return {?}
   */
  function move(object, key, data, headers, callback) {
    if (push(msg, "do_get_next_id(" + object + "/" + key + ")...."), !object) {
      return Promise.reject(new Error("type is required!"));
    }
    if ("0" !== key) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var ret = data ? Object.assign({}, data) : {};
    return ret ? (ret._id = t.N(key, 0), u.do_get_next_id(object).then(function(context) {
      return push(msg, "> next-id :=", context), ret.result = context, ret;
    })) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} name
   * @param {string} file
   * @param {boolean} data
   * @param {?} requestid
   * @param {?} callback
   * @return {?}
   */
  function publish(name, file, data, requestid, callback) {
    if (push(msg, "do_get_create_id(" + name + "/" + file + ")...."), !name) {
      return Promise.reject(new Error("type is required!"));
    }
    if ("0" !== file) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var entry = data ? Object.assign({}, data) : {};
    if (!entry) {
      return Promise.reject(new Error("node is required!"));
    }
    entry._id = t.N(file, 0);
    var email = t.N(entry.next, 1e3);
    return u.do_create_id_seq(name, email).then(function(context) {
      return push(msg, "> create-id :=", context), entry.result = context, entry;
    });
  }
  /**
   * @param {string} url
   * @param {string} key
   * @param {boolean} err
   * @param {?} client
   * @param {?} events
   * @return {?}
   */
  function watch(url, key, err, client, events) {
    if (push(msg, "do_get_delete_id(" + url + "/" + key + ")...."), !url) {
      return Promise.reject(new Error("type is required!"));
    }
    if ("0" !== key) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var data = err ? Object.assign({}, err) : {};
    return data ? (data._id = t.N(key, 0), u.do_delete_id_seq(url).then(function(context) {
      return push(msg, "> delete-id :=", context), data.result = context, data;
    })) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} module
   * @param {string} id
   * @param {boolean} body
   * @param {?} req
   * @param {?} stat
   * @return {?}
   */
  function next(module, id, body, req, stat) {
    if (push(msg, "do_get_delete_id(" + module + "/" + id + ")...."), !module) {
      return Promise.reject(new Error("type is required!"));
    }
    if ("0" !== id) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var args = body ? Object.assign({}, body) : {};
    if (!args) {
      return Promise.reject(new Error("node is required!"));
    }
    args._id = t.N(id, 0);
    var q = args.query;
    var a = args.values;
    return q ? a && !Array.isArray(a) ? Promise.reject(new Error(msg + ":values should be array!")) : u.do_promise_query(q, a).then(function(context) {
      return push(msg, "> promise-query :=", context), args.result = context, args;
    }) : Promise.reject(new Error(msg + ":query is required"));
  }
  if (!p) {
    throw new Error("_$(global instance pool) is required!");
  }
  var _ = p._;
  var t = p.U;
  var u = p.MS;
  if (!_) {
    throw new Error("$_ is required!");
  }
  var msg = t.NS(a || "MSQL", "yellow");
  var push = p.log;
  var debug = (p.inf, p.err);
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
    var token = decodeURIComponent(settings.id || "");
    var ret = (token || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
    /** @type {string} */
    var reqUrl = decodeURIComponent(settings.cmd || "");
    var mod = !ret && event.Records ? "EVENT" : {
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
      push(msg, "#" + mod + ":" + reqUrl + " (" + ret + ", " + type + "/" + token + ")....");
    }
    if (body) {
      push(msg, "#" + mod + ":" + reqUrl + " (" + ret + ", " + type + "/" + token + ").... body.len=", body ? t.json(body).length : -1);
    }
    var listview = {
      _id : token,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var callback = function(type, addedRenderer, name, callback) {
      /** @type {null} */
      var prev = null;
      switch(type) {
        case "LIST":
          break;
        case "GET":
          if ("0" === name && "last-id" === callback) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            prev = check;
          }
          if ("0" === name && "next-id" === callback) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            prev = move;
          }
          if ("0" === name && "create-id" === callback) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            prev = publish;
          }
          if ("0" === name && "delete-id" === callback) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            prev = watch;
          }
          if ("0" === name && "query" === callback) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            prev = next;
          }
      }
      return prev;
    }(mod, 0, token, reqUrl);
    if (!callback) {
      return next(null, log({
        MODE : mod
      }));
    }
    try {
      results.then(function(that) {
        /** @type {string} */
        var key = that._id;
        /** @type {string} */
        var type = that._type;
        var routes = that._param;
        /** @type {*} */
        var container = that._body;
        var context = that._ctx;
        return callback(type, key, routes, container, context);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = t.cleanup(value)), next(null, callback(200, value)), true;
      }).catch(function(err) {
        return 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? next(null, log(err.message)) : (debug(msg, "!!! callback@1-2 with err", err), next(null, cb(err.message || err))), false;
      });
    } catch (result) {
      next(result, cb(result.message));
    }
  };
  return create.do_get_last_id = check, create.do_get_next_id = move, create.do_get_create_id = publish, create.do_get_delete_id = watch, create;
};


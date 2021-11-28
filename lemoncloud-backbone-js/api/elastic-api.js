"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(e,r){if(!e)throw new Error("_$(global instance pool) is required!");var t=e._,l=e.U,a=e.ES;if(!t)throw new Error("$_ is required!");var E=l.NS(r||"ELST","yellow"),p=e.log,P=(e.inf,e.err);function y(e){return w(404,e)}function j(e){return w(503,e)}function w(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}var i=function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var i=e.queryStringParameters||{},n=e.pathParameters||{},o=decodeURIComponent(n.type||""),s=decodeURIComponent(n.id||""),u=(s||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",d=decodeURIComponent(n.cmd||""),c=!u&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[u],a=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!a&&p(E,"#"+c+":"+d+" ("+u+", "+o+"/"+s+")...."),a&&p(E,"#"+c+":"+d+" ("+u+", "+o+"/"+s+").... body.len=",a?l.json(a).length:-1);var f={_id:s,_type:o,_param:i,_body:a,_ctx:r},_=Promise.resolve(f),m=function(e,r,t,i){var n=null;switch(e){case"LIST":""===t&&""===i&&(n=S);break;case"GET":"0"===t&&"test-self"===i&&(n=I),""!==t&&""===i&&(n=g);break;case"PUT":""!==t&&""===i&&(n=T);break;case"POST":"0"===t&&"create-index"===i&&(n=b),"0"===t&&"delete-index"===i&&(n=h),""!==t&&"push"===i&&(n=q),""!==t&&""===i&&(n=v);break;case"DELETE":""!==t&&""===i&&(n=O)}return n}(c,0,s,d);if(!m)return t(null,y({MODE:c}));try{_.then(function(e){var r=e._id,t=e._type,i=e._param,n=e._body,o=e._ctx;return m(t,r,i,n,o)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=l.cleanup(e)),t(null,w(200,e)),!0}).catch(function(e){return 0<=(e&&e.message||"").indexOf("404 NOT FOUND")?t(null,y(e.message)):(P(E,"!!! callback@1-2 with err",e),t(null,j(e.message||e))),!1})}catch(e){t(e,j(e.message))}};function b(e,r,t,i,n){if(p(E,"do_get_create_index("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(r,0);var s=e,u=i||t;return p(E,"> options =",JSON.stringify(u)),a.do_create_index_type(s,"",u).then(function(e){return p(E,"> create-index :=",e),o.result=e,o})}function h(e,r,t,i,n){if(p(E,"do_get_delete_index("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(r,0);var s=e,u=i||t;return a.do_delete_index_type(s,"",u).then(function(e){return p(E,"> delete-index :=",e),o.result=e,o})}function v(r,e,t,i,n){if(p(E,"do_post_create_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));if(!i)return Promise.reject(new Error("$body is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=e,c=i;return a.do_create_item(s,u,d,c).then(function(e){return p(E,"> create-item["+r+"] :=",e),o.result=e,o})}function q(r,e,t,i,n){if(p(E,"do_post_push_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));if(!i)return Promise.reject(new Error("$body is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=i,c="0"===e?"":e;return a.do_push_item(s,u,d,c).then(function(e){return p(E,"> push-item["+r+"] :=",e),o.result=e,o})}function T(r,e,t,i,n){if(p(E,"do_put_update_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));if(!i)return Promise.reject(new Error("$body is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=e,c=i;return a.do_update_item(s,u,d,c).then(function(e){return p(E,"> update-item["+r+"] :=",e),o.result=e,o})}function g(r,e,t,i,n){if(p(E,"do_get_read_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=e,c=i;return a.do_get_item(s,u,d,c).then(function(e){return p(E,"> get-item["+r+"] :=",e),o.result=e,o})}function O(r,e,t,i,n){if(p(E,"do_delete_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=e;return a.do_delete_item(s,u,d).then(function(e){return p(E,"> delete-item["+r+"] :=",e),o.result=e,o})}function S(r,e,t,i,n){if(p(E,"do_search_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(e)return Promise.reject(new Error("ID is not required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=t;return delete d.$type,a.do_search_item(s,u,d).then(function(e){return p(E,"> search-item["+r+"] :=",e),o.result=e,o})}function I(e,r,t,i,n){if(p(E,"do_get_test_self("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};return o?(o._id=l.N(r,0),a.do_test_self(o).then(function(e){return p(E,"> test-self :=",e),o.result=e,o})):Promise.reject(new Error("node is required!"))}return i.do_get_create_index=b,i};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, data) {
  /**
   * @param {!Array} count
   * @return {?}
   */
  function f(count) {
    return next(404, count);
  }
  /**
   * @param {!Array} i
   * @return {?}
   */
  function handleError(i) {
    return next(503, i);
  }
  /**
   * @param {number} code
   * @param {!Array} message
   * @return {?}
   */
  function next(code, message) {
    return {
      statusCode : code,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(message)
    };
  }
  /**
   * @param {string} a
   * @param {string} b
   * @param {!Object} options
   * @param {!Object} value
   * @param {?} extra
   * @return {?}
   */
  function name(a, b, options, value, extra) {
    if (callback(msg, "do_get_create_index(" + a + "/" + b + ")...."), !a) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== b) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var o = options ? Object.assign({}, options) : {};
    if (!o) {
      return Promise.reject(new Error("node is required!"));
    }
    o._id = config.N(b, 0);
    /** @type {string} */
    var changes = a;
    var val = value || options;
    return callback(msg, "> options =", JSON.stringify(val)), self.do_create_index_type(changes, "", val).then(function(count) {
      return callback(msg, "> create-index :=", count), o.result = count, o;
    });
  }
  /**
   * @param {string} state
   * @param {string} i
   * @param {!Object} y
   * @param {!Object} x
   * @param {?} s
   * @return {?}
   */
  function h(state, i, y, x, s) {
    if (callback(msg, "do_get_delete_index(" + state + "/" + i + ")...."), !state) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== i) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var p = y ? Object.assign({}, y) : {};
    if (!p) {
      return Promise.reject(new Error("node is required!"));
    }
    p._id = config.N(i, 0);
    /** @type {string} */
    var queryString = state;
    var translate = x || y;
    return self.do_delete_index_type(queryString, "", translate).then(function(count) {
      return callback(msg, "> delete-index :=", count), p.result = count, p;
    });
  }
  /**
   * @param {string} a
   * @param {string} i
   * @param {boolean} info
   * @param {?} file
   * @param {?} empty
   * @return {?}
   */
  function load(a, i, info, file, empty) {
    if (callback(msg, "do_post_create_item(" + a + "/" + i + ")...."), !a) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!i) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!file) {
      return Promise.reject(new Error("$body is required!"));
    }
    /** @type {!Object} */
    var result = info ? Object.assign({}, info) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    result._id = config.N(i, 0);
    /** @type {string} */
    var changes = a;
    var u = result.$type || "";
    /** @type {string} */
    var start = i;
    var cmd = file;
    return self.do_create_item(changes, u, start, cmd).then(function(count) {
      return callback(msg, "> create-item[" + a + "] :=", count), result.result = count, result;
    });
  }
  /**
   * @param {string} f
   * @param {string} id
   * @param {boolean} info
   * @param {?} data
   * @param {?} callback
   * @return {?}
   */
  function transform(f, id, info, data, callback) {
    if (callback(msg, "do_post_push_item(" + f + "/" + id + ")...."), !f) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!id) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!data) {
      return Promise.reject(new Error("$body is required!"));
    }
    /** @type {!Object} */
    var result = info ? Object.assign({}, info) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    result._id = config.N(id, 0);
    /** @type {string} */
    var loaded = f;
    var u = result.$type || "";
    var d = data;
    var after = "0" === id ? "" : id;
    return self.do_push_item(loaded, u, d, after).then(function(count) {
      return callback(msg, "> push-item[" + f + "] :=", count), result.result = count, result;
    });
  }
  /**
   * @param {string} hash
   * @param {string} id
   * @param {boolean} fn
   * @param {?} options
   * @param {?} callback
   * @return {?}
   */
  function serialize(hash, id, fn, options, callback) {
    if (callback(msg, "do_put_update_item(" + hash + "/" + id + ")...."), !hash) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!id) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!options) {
      return Promise.reject(new Error("$body is required!"));
    }
    /** @type {!Object} */
    var res = fn ? Object.assign({}, fn) : {};
    if (!res) {
      return Promise.reject(new Error("node is required!"));
    }
    res._id = config.N(id, 0);
    /** @type {string} */
    var url = hash;
    var u = res.$type || "";
    /** @type {string} */
    var parentId = id;
    var cmd = options;
    return self.do_update_item(url, u, parentId, cmd).then(function(count) {
      return callback(msg, "> update-item[" + hash + "] :=", count), res.result = count, res;
    });
  }
  /**
   * @param {string} a
   * @param {string} i
   * @param {boolean} info
   * @param {?} cb
   * @param {?} time
   * @return {?}
   */
  function getValue(a, i, info, cb, time) {
    if (callback(msg, "do_get_read_item(" + a + "/" + i + ")...."), !a) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!i) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var result = info ? Object.assign({}, info) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    result._id = config.N(i, 0);
    /** @type {string} */
    var changes = a;
    var u = result.$type || "";
    /** @type {string} */
    var start = i;
    var end = cb;
    return self.do_get_item(changes, u, start, end).then(function(count) {
      return callback(msg, "> get-item[" + a + "] :=", count), result.result = count, result;
    });
  }
  /**
   * @param {string} event
   * @param {string} doc
   * @param {boolean} obj
   * @param {?} depth
   * @param {?} s
   * @return {?}
   */
  function traverse(event, doc, obj, depth, s) {
    if (callback(msg, "do_delete_item(" + event + "/" + doc + ")...."), !event) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!doc) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var options = obj ? Object.assign({}, obj) : {};
    if (!options) {
      return Promise.reject(new Error("node is required!"));
    }
    options._id = config.N(doc, 0);
    /** @type {string} */
    var moduleName = event;
    var u = options.$type || "";
    /** @type {string} */
    var end = doc;
    return self.do_delete_item(moduleName, u, end).then(function(stat) {
      return callback(msg, "> delete-item[" + event + "] :=", stat), options.result = stat, options;
    });
  }
  /**
   * @param {string} a
   * @param {string} doc
   * @param {boolean} data
   * @param {?} callback
   * @param {?} modelType
   * @return {?}
   */
  function initialize(a, doc, data, callback, modelType) {
    if (callback(msg, "do_search_item(" + a + "/" + doc + ")...."), !a) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (doc) {
      return Promise.reject(new Error("ID is not required!"));
    }
    /** @type {!Object} */
    var result = data ? Object.assign({}, data) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    result._id = config.N(doc, 0);
    /** @type {string} */
    var changes = a;
    var u = result.$type || "";
    /** @type {boolean} */
    var message = data;
    return delete message.$type, self.do_search_item(changes, u, message).then(function(count) {
      return callback(msg, "> search-item[" + a + "] :=", count), result.result = count, result;
    });
  }
  /**
   * @param {string} scheme
   * @param {string} file
   * @param {boolean} data
   * @param {?} status_param
   * @param {?} runJson
   * @return {?}
   */
  function success(scheme, file, data, status_param, runJson) {
    if (callback(msg, "do_get_test_self(" + scheme + "/" + file + ")...."), !scheme) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== file) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var result = data ? Object.assign({}, data) : {};
    return result ? (result._id = config.N(file, 0), self.do_test_self(result).then(function(count) {
      return callback(msg, "> test-self :=", count), result.result = count, result;
    })) : Promise.reject(new Error("node is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var config = opts.U;
  var self = opts.ES;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  var msg = config.NS(data || "ELST", "yellow");
  var callback = opts.log;
  var log = (opts.inf, opts.err);
  /**
   * @param {!Object} event
   * @param {!Node} ctx
   * @param {?} callback
   * @return {?}
   */
  var create = function(event, ctx, callback) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var type = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var y = decodeURIComponent(settings.id || "");
    var ret = (y || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
    /** @type {string} */
    var args = decodeURIComponent(settings.cmd || "");
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
      callback(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + y + ")....");
    }
    if (body) {
      callback(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + y + ").... body.len=", body ? config.json(body).length : -1);
    }
    var listview = {
      _id : y,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var r = function(method, addedRenderer, value, title) {
      /** @type {null} */
      var type = null;
      switch(method) {
        case "LIST":
          if ("" === value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = initialize;
          }
          break;
        case "GET":
          if ("0" === value && "test-self" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = success;
          }
          if ("" !== value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = getValue;
          }
          break;
        case "PUT":
          if ("" !== value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = serialize;
          }
          break;
        case "POST":
          if ("0" === value && "create-index" === title) {
            /** @type {function(string, string, !Object, !Object, ?): ?} */
            type = name;
          }
          if ("0" === value && "delete-index" === title) {
            /** @type {function(string, string, !Object, !Object, ?): ?} */
            type = h;
          }
          if ("" !== value && "push" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = transform;
          }
          if ("" !== value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = load;
          }
          break;
        case "DELETE":
          if ("" !== value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = traverse;
          }
      }
      return type;
    }(mode, 0, y, args);
    if (!r) {
      return callback(null, f({
        MODE : mode
      }));
    }
    try {
      results.then(function(that) {
        /** @type {string} */
        var id = that._id;
        /** @type {string} */
        var type = that._type;
        var e = that._param;
        /** @type {*} */
        var container = that._body;
        var num = that._ctx;
        return r(type, id, e, container, num);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = config.cleanup(value)), callback(null, next(200, value)), true;
      }).catch(function(err) {
        return 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? callback(null, f(err.message)) : (log(msg, "!!! callback@1-2 with err", err), callback(null, handleError(err.message || err))), false;
      });
    } catch (error) {
      callback(error, handleError(error.message));
    }
  };
  return create.do_get_create_index = name, create;
};


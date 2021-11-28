"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(e,r){if(!e)throw new Error("_$(global instance pool) is required!");var t=e._,l=e.U,a=e.ES6;if(!t)throw new Error("$_ is required!");if(!a)throw new Error("$ES6 is required!");var E=l.NS(r||"ES62","yellow"),p=e.log,P=(e.inf,e.err);function y(e){return w(404,e)}function j(e){return w(503,e)}function w(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}var i=function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var i=e.queryStringParameters||{},n=e.pathParameters||{},o=decodeURIComponent(n.type||""),s=decodeURIComponent(n.id||""),u=(s||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",d=decodeURIComponent(n.cmd||""),c=!u&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[u],a=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!a&&p(E,"#"+c+":"+d+" ("+u+", "+o+"/"+s+")...."),a&&p(E,"#"+c+":"+d+" ("+u+", "+o+"/"+s+").... body.len=",a?l.json(a).length:-1);var f={_id:s,_type:o,_param:i,_body:a,_ctx:r},_=Promise.resolve(f),m=function(e,r,t,i){var n=null;switch(e){case"LIST":""===t&&""===i&&(n=S);break;case"GET":"0"===t&&"test-self"===i&&(n=I),""!==t&&""===i&&(n=T);break;case"PUT":""!==t&&""===i&&(n=g);break;case"POST":"0"===t&&"create-index"===i&&(n=b),"0"===t&&"delete-index"===i&&(n=h),""!==t&&"push"===i&&(n=v),""!==t&&""===i&&(n=q);break;case"DELETE":""!==t&&""===i&&(n=O)}return n}(c,0,s,d);if(!m)return t(null,y({MODE:c}));try{_.then(function(e){var r=e._id,t=e._type,i=e._param,n=e._body,o=e._ctx;return m(t,r,i,n,o)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=l.cleanup(e)),t(null,w(200,e)),!0}).catch(function(e){return 0<=(e&&e.message||"").indexOf("404 NOT FOUND")?t(null,y(e.message)):(P(E,"!!! callback@1-2 with err",e),t(null,j(e.message||e))),!1})}catch(e){t(e,j(e.message))}};function b(e,r,t,i,n){if(p(E,"do_get_create_index("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(r,0);var s=e,u=i||t;return p(E,"> options =",JSON.stringify(u)),a.do_create_index_type(s,"",u).then(function(e){return p(E,"> create-index :=",e),o.result=e,o})}function h(e,r,t,i,n){if(p(E,"do_get_delete_index("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(r,0);var s=e,u=i||t;return a.do_delete_index_type(s,"",u).then(function(e){return p(E,"> delete-index :=",e),o.result=e,o})}function q(r,e,t,i,n){if(p(E,"do_post_create_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));if(!i)return Promise.reject(new Error("$body is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=e,c=i;return a.do_create_item(s,u,d,c).then(function(e){return p(E,"> create-item["+r+"] :=",e),o.result=e,o})}function v(r,e,t,i,n){if(p(E,"do_post_push_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));if(!i)return Promise.reject(new Error("$body is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=i,c="0"===e?"":e;return a.do_push_item(s,u,d,c).then(function(e){return p(E,"> push-item["+r+"] :=",e),o.result=e,o})}function g(r,e,t,i,n){if(p(E,"do_put_update_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));if(!i)return Promise.reject(new Error("$body is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=e,c=i;return a.do_update_item(s,u,d,c).then(function(e){return p(E,"> update-item["+r+"] :=",e),o.result=e,o})}function T(r,e,t,i,n){if(p(E,"do_get_read_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=e,c=i;return a.do_get_item(s,u,d,c).then(function(e){return p(E,"> get-item["+r+"] :=",e),o.result=e,o})}function O(r,e,t,i,n){if(p(E,"do_delete_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=e;return a.do_delete_item(s,u,d).then(function(e){return p(E,"> delete-item["+r+"] :=",e),o.result=e,o})}function S(r,e,t,i,n){if(p(E,"do_search_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(e)return Promise.reject(new Error("ID is not required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=l.N(e,0);var s=r,u=o.$type||"",d=t;return delete d.$type,a.do_search_item(s,u,d).then(function(e){return p(E,"> search-item["+r+"].took :=",e&&e.took||0,", hits =",e&&e.hits&&e.hits.total||0),o.result=e,o})}function I(e,r,t,i,n){if(p(E,"do_get_test_self("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};return o?(o._id=l.N(r,0),a.do_test_self(o).then(function(e){return p(E,"> test-self :=",e),o.result=e,o})):Promise.reject(new Error("node is required!"))}return i.do_get_create_index=b,i};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, overrides) {
  /**
   * @param {!Array} arg1
   * @return {?}
   */
  function f(arg1) {
    return fn(404, arg1);
  }
  /**
   * @param {!Array} translation
   * @return {?}
   */
  function error(translation) {
    return fn(503, translation);
  }
  /**
   * @param {number} i
   * @param {!Array} text
   * @return {?}
   */
  function fn(i, text) {
    return {
      statusCode : i,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(text)
    };
  }
  /**
   * @param {string} diff
   * @param {string} i
   * @param {!Object} options
   * @param {!Object} data
   * @param {?} namespaces
   * @return {?}
   */
  function update(diff, i, options, data, namespaces) {
    if (callback(msg, "do_get_create_index(" + diff + "/" + i + ")...."), !diff) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== i) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var o = options ? Object.assign({}, options) : {};
    if (!o) {
      return Promise.reject(new Error("node is required!"));
    }
    o._id = t.N(i, 0);
    /** @type {string} */
    var changes = diff;
    var body = data || options;
    return callback(msg, "> options =", JSON.stringify(body)), self.do_create_index_type(changes, "", body).then(function(count) {
      return callback(msg, "> create-index :=", count), o.result = count, o;
    });
  }
  /**
   * @param {string} a
   * @param {string} i
   * @param {!Object} y
   * @param {!Object} x
   * @param {?} s
   * @return {?}
   */
  function h(a, i, y, x, s) {
    if (callback(msg, "do_get_delete_index(" + a + "/" + i + ")...."), !a) {
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
    p._id = t.N(i, 0);
    /** @type {string} */
    var changes = a;
    var translate = x || y;
    return self.do_delete_index_type(changes, "", translate).then(function(count) {
      return callback(msg, "> delete-index :=", count), p.result = count, p;
    });
  }
  /**
   * @param {string} type
   * @param {string} url
   * @param {boolean} fn
   * @param {?} options
   * @param {?} transformEdgeInUrl
   * @return {?}
   */
  function transform(type, url, fn, options, transformEdgeInUrl) {
    if (callback(msg, "do_post_create_item(" + type + "/" + url + ")...."), !type) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!url) {
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
    res._id = t.N(url, 0);
    /** @type {string} */
    var ext = type;
    var u = res.$type || "";
    /** @type {string} */
    var address = url;
    var cmd = options;
    return self.do_create_item(ext, u, address, cmd).then(function(count) {
      return callback(msg, "> create-item[" + type + "] :=", count), res.result = count, res;
    });
  }
  /**
   * @param {string} name
   * @param {string} id
   * @param {boolean} info
   * @param {?} i
   * @param {?} s
   * @return {?}
   */
  function handleError(name, id, info, i, s) {
    if (callback(msg, "do_post_push_item(" + name + "/" + id + ")...."), !name) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!id) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!i) {
      return Promise.reject(new Error("$body is required!"));
    }
    /** @type {!Object} */
    var result = info ? Object.assign({}, info) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    result._id = t.N(id, 0);
    /** @type {string} */
    var prefs = name;
    var u = result.$type || "";
    var start = i;
    var after = "0" === id ? "" : id;
    return self.do_push_item(prefs, u, start, after).then(function(count) {
      return callback(msg, "> push-item[" + name + "] :=", count), result.result = count, result;
    });
  }
  /**
   * @param {string} value
   * @param {string} id
   * @param {boolean} fn
   * @param {?} options
   * @param {?} defaultValue
   * @return {?}
   */
  function getValue(value, id, fn, options, defaultValue) {
    if (callback(msg, "do_put_update_item(" + value + "/" + id + ")...."), !value) {
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
    res._id = t.N(id, 0);
    /** @type {string} */
    var address = value;
    var u = res.$type || "";
    /** @type {string} */
    var parentId = id;
    var cmd = options;
    return self.do_update_item(address, u, parentId, cmd).then(function(count) {
      return callback(msg, "> update-item[" + value + "] :=", count), res.result = count, res;
    });
  }
  /**
   * @param {string} path
   * @param {string} file
   * @param {boolean} options
   * @param {?} folder
   * @param {?} version
   * @return {?}
   */
  function traverse(path, file, options, folder, version) {
    if (callback(msg, "do_get_read_item(" + path + "/" + file + ")...."), !path) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!file) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var data = options ? Object.assign({}, options) : {};
    if (!data) {
      return Promise.reject(new Error("node is required!"));
    }
    data._id = t.N(file, 0);
    /** @type {string} */
    var actualPath = path;
    var u = data.$type || "";
    /** @type {string} */
    var token = file;
    var dir = folder;
    return self.do_get_item(actualPath, u, token, dir).then(function(count) {
      return callback(msg, "> get-item[" + path + "] :=", count), data.result = count, data;
    });
  }
  /**
   * @param {string} item
   * @param {string} message
   * @param {boolean} data
   * @param {?} callback
   * @param {?} where
   * @return {?}
   */
  function serialize(item, message, data, callback, where) {
    if (callback(msg, "do_delete_item(" + item + "/" + message + ")...."), !item) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!message) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var result = data ? Object.assign({}, data) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    result._id = t.N(message, 0);
    /** @type {string} */
    var handle = item;
    var u = result.$type || "";
    /** @type {string} */
    var body = message;
    return self.do_delete_item(handle, u, body).then(function(count) {
      return callback(msg, "> delete-item[" + item + "] :=", count), result.result = count, result;
    });
  }
  /**
   * @param {string} key
   * @param {string} name
   * @param {boolean} data
   * @param {?} initialWeights
   * @param {?} endlabel
   * @return {?}
   */
  function run(key, name, data, initialWeights, endlabel) {
    if (callback(msg, "do_search_item(" + key + "/" + name + ")...."), !key) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (name) {
      return Promise.reject(new Error("ID is not required!"));
    }
    /** @type {!Object} */
    var result = data ? Object.assign({}, data) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    result._id = t.N(name, 0);
    /** @type {string} */
    var paramName = key;
    var u = result.$type || "";
    /** @type {boolean} */
    var message = data;
    return delete message.$type, self.do_search_item(paramName, u, message).then(function(data) {
      return callback(msg, "> search-item[" + key + "].took :=", data && data.took || 0, ", hits =", data && data.hits && data.hits.total || 0), result.result = data, result;
    });
  }
  /**
   * @param {string} a
   * @param {string} b
   * @param {boolean} n
   * @param {?} username
   * @param {?} name
   * @return {?}
   */
  function timeout(a, b, n, username, name) {
    if (callback(msg, "do_get_test_self(" + a + "/" + b + ")...."), !a) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== b) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var o = n ? Object.assign({}, n) : {};
    return o ? (o._id = t.N(b, 0), self.do_test_self(o).then(function(count) {
      return callback(msg, "> test-self :=", count), o.result = count, o;
    })) : Promise.reject(new Error("node is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var t = opts.U;
  var self = opts.ES6;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  if (!self) {
    throw new Error("$ES6 is required!");
  }
  var msg = t.NS(overrides || "ES62", "yellow");
  var callback = opts.log;
  var log = (opts.inf, opts.err);
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
      callback(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + y + ").... body.len=", body ? t.json(body).length : -1);
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
            type = run;
          }
          break;
        case "GET":
          if ("0" === value && "test-self" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = timeout;
          }
          if ("" !== value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = traverse;
          }
          break;
        case "PUT":
          if ("" !== value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = getValue;
          }
          break;
        case "POST":
          if ("0" === value && "create-index" === title) {
            /** @type {function(string, string, !Object, !Object, ?): ?} */
            type = update;
          }
          if ("0" === value && "delete-index" === title) {
            /** @type {function(string, string, !Object, !Object, ?): ?} */
            type = h;
          }
          if ("" !== value && "push" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = handleError;
          }
          if ("" !== value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = transform;
          }
          break;
        case "DELETE":
          if ("" !== value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            type = serialize;
          }
      }
      return type;
    }(mode, 0, y, args);
    if (!r) {
      return cb(null, f({
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
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = t.cleanup(value)), cb(null, fn(200, value)), true;
      }).catch(function(err) {
        return 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? cb(null, f(err.message)) : (log(msg, "!!! callback@1-2 with err", err), cb(null, error(err.message || err))), false;
      });
    } catch (data) {
      cb(data, error(data.message));
    }
  };
  return create.do_get_create_index = update, create;
};


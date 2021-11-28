'use strict';
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
'use strict';
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
exports = module.exports = function(opts, operator) {
  /**
   * @param {!Array} name
   * @return {?}
   */
  function f(name) {
    return resolve(404, name);
  }
  /**
   * @param {!Array} i
   * @return {?}
   */
  function handleError(i) {
    return resolve(503, i);
  }
  /**
   * @param {number} value
   * @param {!Array} message
   * @return {?}
   */
  function resolve(value, message) {
    return {
      statusCode : value,
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
    o._id = self.N(b, 0);
    /** @type {string} */
    var selector = a;
    /** @type {!Object} */
    var val = value || options;
    return callback(msg, "> options =", JSON.stringify(val)), $.do_create_index_type(selector, "", val).then(function(count) {
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
    p._id = self.N(i, 0);
    /** @type {string} */
    var selector = a;
    /** @type {!Object} */
    var translate = x || y;
    return $.do_delete_index_type(selector, "", translate).then(function(count) {
      return callback(msg, "> delete-index :=", count), p.result = count, p;
    });
  }
  /**
   * @param {string} a
   * @param {string} b
   * @param {boolean} info
   * @param {?} file
   * @param {?} empty
   * @return {?}
   */
  function load(a, b, info, file, empty) {
    if (callback(msg, "do_post_create_item(" + a + "/" + b + ")...."), !a) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!b) {
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
    result._id = self.N(b, 0);
    /** @type {string} */
    var selector = a;
    var world50mPromise = result.$type || "";
    /** @type {string} */
    var def = b;
    var options = file;
    return $.do_create_item(selector, world50mPromise, def, options).then(function(count) {
      return callback(msg, "> create-item[" + a + "] :=", count), result.result = count, result;
    });
  }
  /**
   * @param {string} id
   * @param {string} name
   * @param {boolean} info
   * @param {?} options
   * @param {?} cb
   * @return {?}
   */
  function getValue(id, name, info, options, cb) {
    if (cb(msg, "do_post_push_item(" + id + "/" + name + ")...."), !id) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!name) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!options) {
      return Promise.reject(new Error("$body is required!"));
    }
    /** @type {!Object} */
    var result = info ? Object.assign({}, info) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    result._id = self.N(name, 0);
    /** @type {string} */
    var paramName = id;
    var world50mPromise = result.$type || "";
    var method = options;
    /** @type {string} */
    var text = "0" === name ? "" : name;
    return $.do_push_item(paramName, world50mPromise, method, text).then(function(count) {
      return cb(msg, "> push-item[" + id + "] :=", count), result.result = count, result;
    });
  }
  /**
   * @param {string} value
   * @param {string} record
   * @param {boolean} options
   * @param {?} node
   * @param {?} callback
   * @return {?}
   */
  function serialize(value, record, options, node, callback) {
    if (callback(msg, "do_put_update_item(" + value + "/" + record + ")...."), !value) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!record) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!node) {
      return Promise.reject(new Error("$body is required!"));
    }
    /** @type {!Object} */
    var data = options ? Object.assign({}, options) : {};
    if (!data) {
      return Promise.reject(new Error("node is required!"));
    }
    data._id = self.N(record, 0);
    /** @type {string} */
    var url = value;
    var world50mPromise = data.$type || "";
    /** @type {string} */
    var payload = record;
    var json = node;
    return $.do_update_item(url, world50mPromise, payload, json).then(function(count) {
      return callback(msg, "> update-item[" + value + "] :=", count), data.result = count, data;
    });
  }
  /**
   * @param {string} a
   * @param {string} i
   * @param {boolean} match
   * @param {?} cb
   * @param {?} time
   * @return {?}
   */
  function transform(a, i, match, cb, time) {
    if (callback(msg, "do_get_read_item(" + a + "/" + i + ")...."), !a) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!i) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var result = match ? Object.assign({}, match) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    result._id = self.N(i, 0);
    /** @type {string} */
    var selector = a;
    var world50mPromise = result.$type || "";
    /** @type {string} */
    var start = i;
    var e = cb;
    return $.do_get_item(selector, world50mPromise, start, e).then(function(count) {
      return callback(msg, "> get-item[" + a + "] :=", count), result.result = count, result;
    });
  }
  /**
   * @param {string} model
   * @param {string} doc
   * @param {boolean} obj
   * @param {?} s
   * @param {?} n
   * @return {?}
   */
  function traverse(model, doc, obj, s, n) {
    if (callback(msg, "do_delete_item(" + model + "/" + doc + ")...."), !model) {
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
    options._id = self.N(doc, 0);
    /** @type {string} */
    var ret = model;
    var world50mPromise = options.$type || "";
    /** @type {string} */
    var end = doc;
    return $.do_delete_item(ret, world50mPromise, end).then(function(stat) {
      return callback(msg, "> delete-item[" + model + "] :=", stat), options.result = stat, options;
    });
  }
  /**
   * @param {string} name
   * @param {string} url
   * @param {boolean} data
   * @param {?} callback
   * @param {?} modelType
   * @return {?}
   */
  function initialize(name, url, data, callback, modelType) {
    if (callback(msg, "do_search_item(" + name + "/" + url + ")...."), !name) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (url) {
      return Promise.reject(new Error("ID is not required!"));
    }
    /** @type {!Object} */
    var result = data ? Object.assign({}, data) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    result._id = self.N(url, 0);
    /** @type {string} */
    var selector = name;
    var world50mPromise = result.$type || "";
    /** @type {boolean} */
    var event = data;
    return delete event.$type, $.do_search_item(selector, world50mPromise, event).then(function(count) {
      return callback(msg, "> search-item[" + name + "] :=", count), result.result = count, result;
    });
  }
  /**
   * @param {string} app
   * @param {string} i
   * @param {boolean} data
   * @param {?} status_param
   * @param {?} runJson
   * @return {?}
   */
  function success(app, i, data, status_param, runJson) {
    if (callback(msg, "do_get_test_self(" + app + "/" + i + ")...."), !app) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== i) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var result = data ? Object.assign({}, data) : {};
    return result ? (result._id = self.N(i, 0), $.do_test_self(result).then(function(count) {
      return callback(msg, "> test-self :=", count), result.result = count, result;
    })) : Promise.reject(new Error("node is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var self = opts.U;
  var $ = opts.ES;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  var msg = self.NS(operator || "ELST", "yellow");
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
      callback(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + y + ").... body.len=", body ? self.json(body).length : -1);
    }
    var listview = {
      _id : y,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: !Node, _id: string, _param: ??, _type: string}>} */
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
            type = transform;
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
            type = getValue;
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
        var id = that._id;
        var type = that._type;
        var e = that._param;
        var container = that._body;
        var num = that._ctx;
        return r(type, id, e, container, num);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = self.cleanup(value)), callback(null, resolve(200, value)), true;
      }).catch(function(err) {
        return 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? callback(null, f(err.message)) : (log(msg, "!!! callback@1-2 with err", err), callback(null, handleError(err.message || err))), false;
      });
    } catch (error) {
      callback(error, handleError(error.message));
    }
  };
  return create.do_get_create_index = name, create;
};


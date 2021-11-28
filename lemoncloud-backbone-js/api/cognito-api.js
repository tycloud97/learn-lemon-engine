'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(p_or_v) {
  return typeof p_or_v;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, callback) {
  /**
   * @param {!Array} str
   * @return {?}
   */
  function map(str) {
    return replace(404, str);
  }
  /**
   * @param {!Array} sender
   * @return {?}
   */
  function next(sender) {
    return replace(503, sender);
  }
  /**
   * @param {number} code
   * @param {!Array} params
   * @return {?}
   */
  function replace(code, params) {
    return {
      statusCode : code,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(params)
    };
  }
  /**
   * @param {string} text
   * @param {string} context
   * @param {!Object} data
   * @param {?} el
   * @param {?} selector
   * @return {?}
   */
  function h(text, context, data, el, selector) {
    if (push(msg, "do_list_user(" + text + "/" + context + ")...."), !text) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    /** @type {!Object} */
    var options = Object.assign({}, data || {});
    if (!options) {
      return Promise.reject(new Error("node is required!"));
    }
    var element = self.N(options.limit, 1);
    var username = options.email;
    var undefined = options.name;
    var name = options.username;
    /** @type {string} */
    var size = void 0 !== username ? "email" : void 0 !== undefined ? "name" : void 0 !== name ? "username" : "";
    var token = data[size] || "";
    return settings.do_list_user(text, size, token, element).then(function(connection) {
      var element = connection.list || [];
      return push(msg, "> list-user[" + text + "/" + context + "].len :=", element.length), options.result = connection, options;
    });
  }
  /**
   * @param {string} e
   * @param {string} key
   * @param {number} options
   * @param {?} fn
   * @param {?} data
   * @return {?}
   */
  function track(e, key, options, fn, data) {
    if (push(msg, "do_get_user(" + e + "/" + key + ")...."), !e) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!key) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var comp = Object.assign({}, options || {});
    return comp ? settings.do_get_user(e, key).then(function(context) {
      return push(msg, "> get-user[" + e + "/" + key + "] :=", context), comp.result = context, comp;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} dir
   * @param {string} text
   * @param {number} obj
   * @param {?} pathString
   * @param {?} name
   * @return {?}
   */
  function parse(dir, text, obj, pathString, name) {
    if (push(msg, "do_get_enable_user(" + dir + "/" + text + ")...."), !dir) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!text) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var comp = Object.assign({}, obj || {});
    return comp ? settings.do_get_enable_user(dir, text).then(function(context) {
      return push(msg, "> enable-user[" + dir + "/" + text + "] :=", context), comp.result = context, comp;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} key
   * @param {string} name
   * @param {number} params
   * @param {?} fn
   * @param {?} macro_context
   * @return {?}
   */
  function define(key, name, params, fn, macro_context) {
    if (push(msg, "do_get_disable_user(" + key + "/" + name + ")...."), !key) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!name) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var comp = Object.assign({}, params || {});
    return comp ? settings.do_get_disable_user(key, name).then(function(context) {
      return push(msg, "> disable-user[" + key + "/" + name + "] :=", context), comp.result = context, comp;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} key
   * @param {string} value
   * @param {number} input
   * @param {?} fn
   * @param {?} n
   * @return {?}
   */
  function S(key, value, input, fn, n) {
    if (push(msg, "do_get_confirm_user(" + key + "/" + value + ")...."), !key) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!value) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var comp = Object.assign({}, input || {});
    return comp ? settings.do_get_confirm_user(key, value).then(function(context) {
      return push(msg, "> confirm-user[" + key + "/" + value + "] :=", context), comp.result = context, comp;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} operation
   * @param {string} key
   * @param {?} fileUrl
   * @param {number} options
   * @param {?} callsiteNames
   * @return {?}
   */
  function constructor(operation, key, fileUrl, options, callsiteNames) {
    if (push(msg, "do_update_user(" + operation + "/" + key + ")...."), !operation) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!key) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var req = Object.assign({}, options || {});
    return req ? settings.do_update_user(operation, key, req).then(function(context) {
      return push(msg, "> update-user[" + operation + "/" + key + "] :=", context), req.result = context, req;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} baseUrl
   * @param {string} frequency
   * @param {number} res
   * @param {?} query
   * @param {?} colorAttr
   * @return {?}
   */
  function init(baseUrl, frequency, res, query, colorAttr) {
    if (push(msg, "do_list_group(" + baseUrl + "/" + frequency + ")...."), !baseUrl) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("!" !== frequency) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var s = Object.assign({}, res || {});
    if (!s) {
      return Promise.reject(new Error("node is required!"));
    }
    var hosts = self.N(s.limit, 1);
    return settings.do_list_group(baseUrl, hosts).then(function(f) {
      push(msg, "> list-group[" + baseUrl + "/" + frequency + "] :=", f);
      f.list;
      return s.result = f, s;
    });
  }
  /**
   * @param {string} value
   * @param {string} key
   * @param {number} options
   * @param {?} geometry
   * @param {?} n
   * @return {?}
   */
  function v(value, key, options, geometry, n) {
    if (push(msg, "do_get_group(" + value + "/" + key + ")...."), !value) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!key.startsWith("!")) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!(key = key.substring(1))) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var comp = Object.assign({}, options || {});
    return comp ? settings.do_get_group(value, key).then(function(context) {
      return push(msg, "> get-group[" + value + "/" + key + "] :=", context), comp.result = context, comp;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} e
   * @param {string} title
   * @param {?} template
   * @param {number} l10n
   * @param {?} fn
   * @return {?}
   */
  function build(e, title, template, l10n, fn) {
    if (push(msg, "do_create_group(" + e + "/" + title + ")...."), !e) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!title.startsWith("!")) {
      return Promise.reject(new Error("ID is required!"));
    }
    title = "0" == (title = title.substring(1)) ? "" : title;
    /** @type {!Object} */
    var doc = Object.assign({}, l10n || {});
    if (!doc) {
      return Promise.reject(new Error("node is required!"));
    }
    var hosts = (title || doc.name || "").trim();
    if (!hosts) {
      return Promise.reject(new Error("name is required!"));
    }
    var token = (doc.description || "").trim();
    return settings.do_create_group(e, hosts, token).then(function(context) {
      return push(msg, "> create-group[" + e + "/" + title + "] :=", context), doc.result = context, doc;
    });
  }
  /**
   * @param {string} code
   * @param {string} data
   * @param {?} fn
   * @param {number} options
   * @param {?} date
   * @return {?}
   */
  function D(code, data, fn, options, date) {
    if (push(msg, "do_post_user_group(" + code + "/" + data + ")...."), !code) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!data.startsWith("!")) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!(data = data.substring(1))) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var ctx = Object.assign({}, options || {});
    if (!ctx) {
      return Promise.reject(new Error("node is required!"));
    }
    var token = (ctx.user || "").trim();
    return token ? settings.do_add_user_to_group(code, data, token).then(function(context) {
      return push(msg, "> add-user-group[" + code + "/" + data + "] :=", context), ctx.result = context, ctx;
    }) : Promise.reject(new Error("user is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var self = opts.U;
  var settings = opts.CS;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!settings) {
    throw new Error("$CS is required!");
  }
  var msg = self.NS(callback || "COGS", "yellow");
  var push = opts.log;
  var log = (opts.inf, opts.err);
  return function(event, ctx, callback) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var type = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var s = decodeURIComponent(settings.id || "");
    var ret = (s || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
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
      push(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + s + ")....");
    }
    if (body) {
      push(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + s + ").... body.len=", body ? self.json(body).length : -1);
    }
    var listview = {
      _id : s,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var r = function(method, addedRenderer, i, undefined) {
      /** @type {null} */
      var type = null;
      switch(method) {
        case "LIST":
          /** @type {function(string, string, !Object, ?, ?): ?} */
          type = h;
          break;
        case "GET":
          if ("0" !== i && "enable" === undefined) {
            /** @type {function(string, string, number, ?, ?): ?} */
            type = parse;
          } else {
            if ("0" !== i && "disable" === undefined) {
              /** @type {function(string, string, number, ?, ?): ?} */
              type = define;
            } else {
              if ("0" !== i && "confirm" === undefined) {
                /** @type {function(string, string, number, ?, ?): ?} */
                type = S;
              } else {
                if ("!" === i && "" === undefined) {
                  /** @type {function(string, string, number, ?, ?): ?} */
                  type = init;
                } else {
                  if (i.startsWith("!") && "" === undefined) {
                    /** @type {function(string, string, number, ?, ?): ?} */
                    type = v;
                  } else {
                    if ("0" !== i && "" === undefined) {
                      /** @type {function(string, string, number, ?, ?): ?} */
                      type = track;
                    }
                  }
                }
              }
            }
          }
          break;
        case "PUT":
          if (!i.startsWith("!")) {
            if ("0" !== i && "" === undefined) {
              /** @type {function(string, string, ?, number, ?): ?} */
              type = constructor;
            }
          }
          break;
        case "POST":
          if (i.startsWith("!") && "" === undefined) {
            /** @type {function(string, string, ?, number, ?): ?} */
            type = build;
          } else {
            if (i.startsWith("!") && "user" === undefined) {
              /** @type {function(string, string, ?, number, ?): ?} */
              type = D;
            }
          }
      }
      return type;
    }(mode, 0, s, args);
    if (!r) {
      return callback(null, map({
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
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = self.cleanup(value)), callback(null, replace(200, value)), true;
      }).catch(function(err) {
        return 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? callback(null, map(err.message)) : (log(msg, "!!! callback@1-2 with err", err), callback(null, next(err.message || err))), false;
      });
    } catch (e) {
      callback(e, next(e.message));
    }
  };
};
'use strict';
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(p_or_v) {
  return typeof p_or_v;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
exports = module.exports = function(opts, callback) {
  /**
   * @param {!Array} str
   * @return {?}
   */
  function map(str) {
    return replace(404, str);
  }
  /**
   * @param {!Array} sender
   * @return {?}
   */
  function next(sender) {
    return replace(503, sender);
  }
  /**
   * @param {number} code
   * @param {!Array} params
   * @return {?}
   */
  function replace(code, params) {
    return {
      statusCode : code,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(params)
    };
  }
  /**
   * @param {string} text
   * @param {string} context
   * @param {!Object} data
   * @param {?} fn
   * @param {?} selector
   * @return {?}
   */
  function init(text, context, data, fn, selector) {
    if (push(msg, "do_list_user(" + text + "/" + context + ")...."), !text) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    /** @type {!Object} */
    var options = Object.assign({}, data || {});
    if (!options) {
      return Promise.reject(new Error("node is required!"));
    }
    var customerGroupKey = self.N(options.limit, 1);
    var username = options.email;
    var undefined = options.name;
    var name = options.username;
    /** @type {string} */
    var roomName = void 0 !== username ? "email" : void 0 !== undefined ? "name" : void 0 !== name ? "username" : "";
    var token = data[roomName] || "";
    return console.do_list_user(text, roomName, token, customerGroupKey).then(function(connection) {
      var element = connection.list || [];
      return push(msg, "> list-user[" + text + "/" + context + "].len :=", element.length), options.result = connection, options;
    });
  }
  /**
   * @param {string} e
   * @param {string} key
   * @param {number} options
   * @param {?} fn
   * @param {?} data
   * @return {?}
   */
  function track(e, key, options, fn, data) {
    if (push(msg, "do_get_user(" + e + "/" + key + ")...."), !e) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!key) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var comp = Object.assign({}, options || {});
    return comp ? console.do_get_user(e, key).then(function(context) {
      return push(msg, "> get-user[" + e + "/" + key + "] :=", context), comp.result = context, comp;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} dir
   * @param {string} text
   * @param {number} obj
   * @param {?} pathString
   * @param {?} name
   * @return {?}
   */
  function parse(dir, text, obj, pathString, name) {
    if (push(msg, "do_get_enable_user(" + dir + "/" + text + ")...."), !dir) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!text) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var comp = Object.assign({}, obj || {});
    return comp ? console.do_get_enable_user(dir, text).then(function(context) {
      return push(msg, "> enable-user[" + dir + "/" + text + "] :=", context), comp.result = context, comp;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} name
   * @param {string} deps
   * @param {number} metadata
   * @param {?} fn
   * @param {?} macro_context
   * @return {?}
   */
  function define(name, deps, metadata, fn, macro_context) {
    if (push(msg, "do_get_disable_user(" + name + "/" + deps + ")...."), !name) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!deps) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var comp = Object.assign({}, metadata || {});
    return comp ? console.do_get_disable_user(name, deps).then(function(context) {
      return push(msg, "> disable-user[" + name + "/" + deps + "] :=", context), comp.result = context, comp;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} itemId
   * @param {string} event
   * @param {number} data
   * @param {?} fn
   * @param {?} n
   * @return {?}
   */
  function S(itemId, event, data, fn, n) {
    if (push(msg, "do_get_confirm_user(" + itemId + "/" + event + ")...."), !itemId) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!event) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var comp = Object.assign({}, data || {});
    return comp ? console.do_get_confirm_user(itemId, event).then(function(context) {
      return push(msg, "> confirm-user[" + itemId + "/" + event + "] :=", context), comp.result = context, comp;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} operation
   * @param {string} key
   * @param {?} fileUrl
   * @param {number} options
   * @param {?} callsiteNames
   * @return {?}
   */
  function constructor(operation, key, fileUrl, options, callsiteNames) {
    if (push(msg, "do_update_user(" + operation + "/" + key + ")...."), !operation) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!key) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var req = Object.assign({}, options || {});
    return req ? console.do_update_user(operation, key, req).then(function(context) {
      return push(msg, "> update-user[" + operation + "/" + key + "] :=", context), req.result = context, req;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} context
   * @param {string} tagName
   * @param {number} data
   * @param {?} state
   * @param {?} prev
   * @return {?}
   */
  function h(context, tagName, data, state, prev) {
    if (push(msg, "do_list_group(" + context + "/" + tagName + ")...."), !context) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("!" !== tagName) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var s = Object.assign({}, data || {});
    if (!s) {
      return Promise.reject(new Error("node is required!"));
    }
    var size_buffer = self.N(s.limit, 1);
    return console.do_list_group(context, size_buffer).then(function(f) {
      push(msg, "> list-group[" + context + "/" + tagName + "] :=", f);
      f.list;
      return s.result = f, s;
    });
  }
  /**
   * @param {string} key
   * @param {string} value
   * @param {number} options
   * @param {?} geometry
   * @param {?} n
   * @return {?}
   */
  function v(key, value, options, geometry, n) {
    if (push(msg, "do_get_group(" + key + "/" + value + ")...."), !key) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!value.startsWith("!")) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!(value = value.substring(1))) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var comp = Object.assign({}, options || {});
    return comp ? console.do_get_group(key, value).then(function(context) {
      return push(msg, "> get-group[" + key + "/" + value + "] :=", context), comp.result = context, comp;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} e
   * @param {string} title
   * @param {?} template
   * @param {number} l10n
   * @param {?} fn
   * @return {?}
   */
  function build(e, title, template, l10n, fn) {
    if (push(msg, "do_create_group(" + e + "/" + title + ")...."), !e) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!title.startsWith("!")) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {string} */
    title = "0" == (title = title.substring(1)) ? "" : title;
    /** @type {!Object} */
    var doc = Object.assign({}, l10n || {});
    if (!doc) {
      return Promise.reject(new Error("node is required!"));
    }
    var size_buffer = (title || doc.name || "").trim();
    if (!size_buffer) {
      return Promise.reject(new Error("name is required!"));
    }
    var token = (doc.description || "").trim();
    return console.do_create_group(e, size_buffer, token).then(function(context) {
      return push(msg, "> create-group[" + e + "/" + title + "] :=", context), doc.result = context, doc;
    });
  }
  /**
   * @param {string} fn
   * @param {string} data
   * @param {?} code
   * @param {number} options
   * @param {?} date
   * @return {?}
   */
  function D(fn, data, code, options, date) {
    if (push(msg, "do_post_user_group(" + fn + "/" + data + ")...."), !fn) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!data.startsWith("!")) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!(data = data.substring(1))) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var ctx = Object.assign({}, options || {});
    if (!ctx) {
      return Promise.reject(new Error("node is required!"));
    }
    var token = (ctx.user || "").trim();
    return token ? console.do_add_user_to_group(fn, data, token).then(function(context) {
      return push(msg, "> add-user-group[" + fn + "/" + data + "] :=", context), ctx.result = context, ctx;
    }) : Promise.reject(new Error("user is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var self = opts.U;
  var console = opts.CS;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!console) {
    throw new Error("$CS is required!");
  }
  var msg = self.NS(callback || "COGS", "yellow");
  var push = opts.log;
  var log = (opts.inf, opts.err);
  return function(event, ctx, callback) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var type = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var s = decodeURIComponent(settings.id || "");
    var ret = (s || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
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
      push(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + s + ")....");
    }
    if (body) {
      push(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + s + ").... body.len=", body ? self.json(body).length : -1);
    }
    var listview = {
      _id : s,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var r = function(method, addedRenderer, i, undefined) {
      /** @type {null} */
      var type = null;
      switch(method) {
        case "LIST":
          /** @type {function(string, string, !Object, ?, ?): ?} */
          type = init;
          break;
        case "GET":
          if ("0" !== i && "enable" === undefined) {
            /** @type {function(string, string, number, ?, ?): ?} */
            type = parse;
          } else {
            if ("0" !== i && "disable" === undefined) {
              /** @type {function(string, string, number, ?, ?): ?} */
              type = define;
            } else {
              if ("0" !== i && "confirm" === undefined) {
                /** @type {function(string, string, number, ?, ?): ?} */
                type = S;
              } else {
                if ("!" === i && "" === undefined) {
                  /** @type {function(string, string, number, ?, ?): ?} */
                  type = h;
                } else {
                  if (i.startsWith("!") && "" === undefined) {
                    /** @type {function(string, string, number, ?, ?): ?} */
                    type = v;
                  } else {
                    if ("0" !== i && "" === undefined) {
                      /** @type {function(string, string, number, ?, ?): ?} */
                      type = track;
                    }
                  }
                }
              }
            }
          }
          break;
        case "PUT":
          if (!i.startsWith("!")) {
            if ("0" !== i && "" === undefined) {
              /** @type {function(string, string, ?, number, ?): ?} */
              type = constructor;
            }
          }
          break;
        case "POST":
          if (i.startsWith("!") && "" === undefined) {
            /** @type {function(string, string, ?, number, ?): ?} */
            type = build;
          } else {
            if (i.startsWith("!") && "user" === undefined) {
              /** @type {function(string, string, ?, number, ?): ?} */
              type = D;
            }
          }
      }
      return type;
    }(mode, 0, s, args);
    if (!r) {
      return callback(null, map({
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
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = self.cleanup(value)), callback(null, replace(200, value)), true;
      }).catch(function(err) {
        return 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? callback(null, map(err.message)) : (log(msg, "!!! callback@1-2 with err", err), callback(null, next(err.message || err))), false;
      });
    } catch (e) {
      callback(e, next(e.message));
    }
  };
};


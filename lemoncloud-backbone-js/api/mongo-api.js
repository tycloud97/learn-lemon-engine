"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}exports=module.exports=function(e,r){if(!e)throw new Error("_$(global instance pool) is required!");var t=e._,_=e.U,m=e.GS;if(!t)throw new Error("$_ is required!");var E=_.NS(r||"MONG","yellow"),P=e.log,y=(e.inf,e.err);function b(e){return j(404,e)}function p(e){return j(503,e)}function j(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}var i=function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var i=e.queryStringParameters||{},n=e.pathParameters||{},o=decodeURIComponent(n.type||""),s=decodeURIComponent(n.id||""),d=(s||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",u=decodeURIComponent(n.cmd||""),a=!d&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[d],c=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!c&&P(E,"#"+a+":"+u+" ("+d+", "+o+"/"+s+")...."),c&&P(E,"#"+a+":"+u+" ("+d+", "+o+"/"+s+").... body.len=",c?_.json(c).length:-1);var l={_id:s,_type:o,_param:i,_body:c,_ctx:r},m=Promise.resolve(l),f=function(e,r,t,i){var n=null;switch(e){case"SEARCH":break;case"GET":"0"===t&&"create-table"===i&&(n=g),"0"===t&&"delete-table"===i&&(n=v),"0"===t&&"list-table"===i&&(n=w),"0"===t&&"stream"===i&&(n=N),"0"===t&&"test-self"===i&&(n=T),"0"!==t&&""===i&&(n=h);break;case"PUT":"0"!==t&&"increment"===i&&(n=S),"0"!==t&&""===i&&(n=I);break;case"POST":n=q;break;case"DELETE":"0"!==t&&""===i&&(n=O)}return n}(a,0,s,u);if(!f)return t(null,b({MODE:a}));try{m.then(function(e){var r=e._id,t=e._type,i=e._param,n=e._body,o=e._ctx;return f(t,r,i,n,o)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=_.cleanup(e)),t(null,j(200,e)),!0}).catch(function(e){return 0<=(e&&e.message||"").indexOf("404 NOT FOUND")?t(null,b(e.message)):(y(E,"!!! callback@1-2 with err",e),t(null,p(e.message||e))),!1})}catch(e){t(e,p(e.message))}};function g(e,r,t,i,n){if(P(E,"do_get_create_table("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=_.N(r,0);var s=o.idName||"id",d=o.idType||"Number";return"string"!=typeof s||s.length<1?Promise.reject(new Error("invalid idName:"+s)):"string"!=typeof d||d.length<1?Promise.reject(new Error("invalid idType:"+d)):m.do_create_table(e,s,d).then(function(e){return P(E,"> create-table :=",e),o.result=e,o})}function v(e,r,t,i,n){if(P(E,"do_get_delete_table("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};return o?(o._id=_.N(r,0),m.do_delete_table(e).then(function(e){return P(E,"> delete-table :=",e),o.result=e,o})):Promise.reject(new Error("node is required!"))}function w(e,r,t,i,n){if(P(E,"do_get_list_table("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=_.N(r,0);var s="#"===e?"":e,d=_.N(o.limit,0);return m.do_list_tables(s,d).then(function(e){return P(E,"> list-table :=",e),o.result=e,o})}function N(e,r,t,i,n){if(P(E,"do_get_read_stream("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};return o?(o._id=_.N(r,0),o.table=e,m.do_read_stream(o).then(function(e){return P(E,"> read-stream :=",e),e})):Promise.reject(new Error("node is required!"))}function T(e,r,t,i,n){if(P(E,"do_get_test_self("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var o=t?Object.assign({},t):{};return o?(o._id=_.N(r,0),m.do_test_self(t).then(function(e){return P(E,"> test-self :=",e),o.result=e,o})):Promise.reject(new Error("node is required!"))}function h(r,e,t,i,n){if(P(E,"do_get_read_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=_.N(e,0);var s=o.idName||"id",d=o.idType||"Number";if("string"!=typeof s||s.length<1)return Promise.reject(new Error("invalid idName:"+s));if("string"!=typeof d||d.length<1)return Promise.reject(new Error("invalid idType:"+d));var u=r,a="Number"===d&&_.N(e,0)||e;return m.do_get_item(u,_defineProperty({},s,a)).then(function(e){return P(E,"> get-item["+r+"] :=",e),o.result=e,o})}function q(r,e,t,i,n){if(P(E,"do_post_create_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));if(!i)return Promise.reject(new Error("$body is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=_.N(e,0);var s=o.idName||"id",d=o.idType||"Number";if("string"!=typeof s||s.length<1)return Promise.reject(new Error("invalid idName:"+s));if("string"!=typeof d||d.length<1)return Promise.reject(new Error("invalid idType:"+d));var u=r,a="Number"===d&&_.N(e,0)||e,c=i;return m.do_create_item(u,_defineProperty({},s,a),c).then(function(e){return P(E,"> create-item["+r+"] :=",e),o.result=e,o})}function O(r,e,t,i,n){if(P(E,"do_delete_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=_.N(e,0);var s=o.idName||"id",d=o.idType||"Number";if("string"!=typeof s||s.length<1)return Promise.reject(new Error("invalid idName:"+s));if("string"!=typeof d||d.length<1)return Promise.reject(new Error("invalid idType:"+d));var u=r,a="Number"===d&&_.N(e,0)||e;return m.do_delete_item(u,_defineProperty({},s,a)).then(function(e){return P(E,"> delete-item["+r+"] :=",e),o.result=e,o})}function I(r,e,t,i,n){if(P(E,"do_put_update_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=_.N(e,0);var s=o.idName||"id",d=o.idType||"Number";if("string"!=typeof s||s.length<1)return Promise.reject(new Error("invalid idName:"+s));if("string"!=typeof d||d.length<1)return Promise.reject(new Error("invalid idType:"+d));var u=r,a="Number"===d&&_.N(e,0)||e,c=i,l=i.$I||void 0;return delete i.$I,m.do_update_item(u,_defineProperty({},s,a),c,l).then(function(e){return P(E,"> update-item["+r+"] :=",e),o.result=e,o})}function S(r,e,t,i,n){if(P(E,"do_put_increment_item("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var o=t?Object.assign({},t):{};if(!o)return Promise.reject(new Error("node is required!"));o._id=_.N(e,0);var s=o.idName||"id",d=o.idType||"Number";if("string"!=typeof s||s.length<1)return Promise.reject(new Error("invalid idName:"+s));if("string"!=typeof d||d.length<1)return Promise.reject(new Error("invalid idType:"+d));var u=r,a="Number"===d&&_.N(e,0)||e,c=i,l=i.$I||void 0;return delete i.$I,m.do_increment_item(u,_defineProperty({},s,a),c,l).then(function(e){return P(E,"> increment-item["+r+"] :=",e),o.result=e,o})}return i.do_get_create_table=g,i};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {!Object} obj
 * @param {string} key
 * @param {!Object} value
 * @return {?}
 */
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value : value,
    enumerable : true,
    configurable : true,
    writable : true
  }) : obj[key] = value, obj;
}
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, callback) {
  /**
   * @param {!Array} callback
   * @return {?}
   */
  function require(callback) {
    return resolve(404, callback);
  }
  /**
   * @param {!Array} i
   * @return {?}
   */
  function done(i) {
    return resolve(503, i);
  }
  /**
   * @param {number} value
   * @param {!Array} object
   * @return {?}
   */
  function resolve(value, object) {
    return {
      statusCode : value,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(object)
    };
  }
  /**
   * @param {string} e
   * @param {string} url
   * @param {boolean} params
   * @param {?} id
   * @param {?} projectileType
   * @return {?}
   */
  function init(e, url, params, id, projectileType) {
    if (fn(msg, "do_get_create_table(" + e + "/" + url + ")...."), !e) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== url) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var options = params ? Object.assign({}, params) : {};
    if (!options) {
      return Promise.reject(new Error("node is required!"));
    }
    options._id = self.N(url, 0);
    var name = options.idName || "id";
    var html = options.idType || "Number";
    return "string" != typeof name || name.length < 1 ? Promise.reject(new Error("invalid idName:" + name)) : "string" != typeof html || html.length < 1 ? Promise.reject(new Error("invalid idType:" + html)) : util.do_create_table(e, name, html).then(function(callback) {
      return fn(msg, "> create-table :=", callback), options.result = callback, options;
    });
  }
  /**
   * @param {string} a
   * @param {string} b
   * @param {boolean} n
   * @param {?} i
   * @param {?} state
   * @return {?}
   */
  function h(a, b, n, i, state) {
    if (fn(msg, "do_get_delete_table(" + a + "/" + b + ")...."), !a) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== b) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var o = n ? Object.assign({}, n) : {};
    return o ? (o._id = self.N(b, 0), util.do_delete_table(a).then(function(e) {
      return fn(msg, "> delete-table :=", e), o.result = e, o;
    })) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} val
   * @param {string} url
   * @param {boolean} result
   * @param {?} i
   * @param {?} options
   * @return {?}
   */
  function fold(val, url, result, i, options) {
    if (fn(msg, "do_get_list_table(" + val + "/" + url + ")...."), !val) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== url) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var res = result ? Object.assign({}, result) : {};
    if (!res) {
      return Promise.reject(new Error("node is required!"));
    }
    res._id = self.N(url, 0);
    var value = "#" === val ? "" : val;
    var d = self.N(res.limit, 0);
    return util.do_list_tables(value, d).then(function(value) {
      return fn(msg, "> list-table :=", value), res.result = value, res;
    });
  }
  /**
   * @param {string} table
   * @param {string} name
   * @param {boolean} err
   * @param {?} type
   * @param {?} stack
   * @return {?}
   */
  function get(table, name, err, type, stack) {
    if (fn(msg, "do_get_read_stream(" + table + "/" + name + ")...."), !table) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== name) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var data = err ? Object.assign({}, err) : {};
    return data ? (data._id = self.N(name, 0), data.table = table, util.do_read_stream(data).then(function(res) {
      return fn(msg, "> read-stream :=", res), res;
    })) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} a
   * @param {string} b
   * @param {boolean} options
   * @param {?} fn
   * @param {?} d
   * @return {?}
   */
  function width(a, b, options, fn, d) {
    if (fn(msg, "do_get_test_self(" + a + "/" + b + ")...."), !a) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== b) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var o = options ? Object.assign({}, options) : {};
    return o ? (o._id = self.N(b, 0), util.do_test_self(options).then(function(e) {
      return fn(msg, "> test-self :=", e), o.result = e, o;
    })) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} feature
   * @param {string} id
   * @param {boolean} obj
   * @param {?} index
   * @param {?} column_changed
   * @return {?}
   */
  function save(feature, id, obj, index, column_changed) {
    if (fn(msg, "do_get_read_item(" + feature + "/" + id + ")...."), !feature) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!id) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var options = obj ? Object.assign({}, obj) : {};
    if (!options) {
      return Promise.reject(new Error("node is required!"));
    }
    options._id = self.N(id, 0);
    var key = options.idName || "id";
    var string = options.idType || "Number";
    if ("string" != typeof key || key.length < 1) {
      return Promise.reject(new Error("invalid idName:" + key));
    }
    if ("string" != typeof string || string.length < 1) {
      return Promise.reject(new Error("invalid idType:" + string));
    }
    /** @type {string} */
    var target = feature;
    var name = "Number" === string && self.N(id, 0) || id;
    return util.do_get_item(target, _defineProperty({}, key, name)).then(function(callback) {
      return fn(msg, "> get-item[" + feature + "] :=", callback), options.result = callback, options;
    });
  }
  /**
   * @param {string} username
   * @param {string} id
   * @param {boolean} params
   * @param {?} i
   * @param {?} elem
   * @return {?}
   */
  function next(username, id, params, i, elem) {
    if (fn(msg, "do_post_create_item(" + username + "/" + id + ")...."), !username) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!id) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!i) {
      return Promise.reject(new Error("$body is required!"));
    }
    /** @type {!Object} */
    var options = params ? Object.assign({}, params) : {};
    if (!options) {
      return Promise.reject(new Error("node is required!"));
    }
    options._id = self.N(id, 0);
    var key = options.idName || "id";
    var string = options.idType || "Number";
    if ("string" != typeof key || key.length < 1) {
      return Promise.reject(new Error("invalid idName:" + key));
    }
    if ("string" != typeof string || string.length < 1) {
      return Promise.reject(new Error("invalid idType:" + string));
    }
    /** @type {string} */
    var text = username;
    var name = "Number" === string && self.N(id, 0) || id;
    var start = i;
    return util.do_create_item(text, _defineProperty({}, key, name), start).then(function(callback) {
      return fn(msg, "> create-item[" + username + "] :=", callback), options.result = callback, options;
    });
  }
  /**
   * @param {string} area
   * @param {string} id
   * @param {boolean} params
   * @param {?} formData
   * @param {?} val
   * @return {?}
   */
  function update(area, id, params, formData, val) {
    if (fn(msg, "do_delete_item(" + area + "/" + id + ")...."), !area) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!id) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var options = params ? Object.assign({}, params) : {};
    if (!options) {
      return Promise.reject(new Error("node is required!"));
    }
    options._id = self.N(id, 0);
    var key = options.idName || "id";
    var string = options.idType || "Number";
    if ("string" != typeof key || key.length < 1) {
      return Promise.reject(new Error("invalid idName:" + key));
    }
    if ("string" != typeof string || string.length < 1) {
      return Promise.reject(new Error("invalid idType:" + string));
    }
    /** @type {string} */
    var selector = area;
    var name = "Number" === string && self.N(id, 0) || id;
    return util.do_delete_item(selector, _defineProperty({}, key, name)).then(function(callback) {
      return fn(msg, "> delete-item[" + area + "] :=", callback), options.result = callback, options;
    });
  }
  /**
   * @param {string} root
   * @param {string} file
   * @param {boolean} params
   * @param {?} data
   * @param {?} parent_el
   * @return {?}
   */
  function insert(root, file, params, data, parent_el) {
    if (fn(msg, "do_put_update_item(" + root + "/" + file + ")...."), !root) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!file) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var options = params ? Object.assign({}, params) : {};
    if (!options) {
      return Promise.reject(new Error("node is required!"));
    }
    options._id = self.N(file, 0);
    var key = options.idName || "id";
    var string = options.idType || "Number";
    if ("string" != typeof key || key.length < 1) {
      return Promise.reject(new Error("invalid idName:" + key));
    }
    if ("string" != typeof string || string.length < 1) {
      return Promise.reject(new Error("invalid idType:" + string));
    }
    /** @type {string} */
    var rootDir = root;
    var name = "Number" === string && self.N(file, 0) || file;
    var storageName = data;
    var refTable = data.$I || void 0;
    return delete data.$I, util.do_update_item(rootDir, _defineProperty({}, key, name), storageName, refTable).then(function(callback) {
      return fn(msg, "> update-item[" + root + "] :=", callback), options.result = callback, options;
    });
  }
  /**
   * @param {string} d
   * @param {string} i
   * @param {boolean} obj
   * @param {?} error
   * @param {?} css
   * @return {?}
   */
  function check(d, i, obj, error, css) {
    if (fn(msg, "do_put_increment_item(" + d + "/" + i + ")...."), !d) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!i) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var options = obj ? Object.assign({}, obj) : {};
    if (!options) {
      return Promise.reject(new Error("node is required!"));
    }
    options._id = self.N(i, 0);
    var key = options.idName || "id";
    var string = options.idType || "Number";
    if ("string" != typeof key || key.length < 1) {
      return Promise.reject(new Error("invalid idName:" + key));
    }
    if ("string" != typeof string || string.length < 1) {
      return Promise.reject(new Error("invalid idType:" + string));
    }
    /** @type {string} */
    var data = d;
    var name = "Number" === string && self.N(i, 0) || i;
    var id = error;
    var refTable = error.$I || void 0;
    return delete error.$I, util.do_increment_item(data, _defineProperty({}, key, name), id, refTable).then(function(callback) {
      return fn(msg, "> increment-item[" + d + "] :=", callback), options.result = callback, options;
    });
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var self = opts.U;
  var util = opts.GS;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  var msg = self.NS(callback || "MONG", "yellow");
  var fn = opts.log;
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
      fn(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + s + ")....");
    }
    if (body) {
      fn(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + s + ").... body.len=", body ? self.json(body).length : -1);
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
      var action = null;
      switch(method) {
        case "SEARCH":
          break;
        case "GET":
          if ("0" === i && "create-table" === undefined) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            action = init;
          }
          if ("0" === i && "delete-table" === undefined) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            action = h;
          }
          if ("0" === i && "list-table" === undefined) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            action = fold;
          }
          if ("0" === i && "stream" === undefined) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            action = get;
          }
          if ("0" === i && "test-self" === undefined) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            action = width;
          }
          if ("0" !== i && "" === undefined) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            action = save;
          }
          break;
        case "PUT":
          if ("0" !== i && "increment" === undefined) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            action = check;
          }
          if ("0" !== i && "" === undefined) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            action = insert;
          }
          break;
        case "POST":
          /** @type {function(string, string, boolean, ?, ?): ?} */
          action = next;
          break;
        case "DELETE":
          if ("0" !== i && "" === undefined) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            action = update;
          }
      }
      return action;
    }(mode, 0, s, args);
    if (!r) {
      return cb(null, require({
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
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = self.cleanup(value)), cb(null, resolve(200, value)), true;
      }).catch(function(err) {
        return 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? cb(null, require(err.message)) : (log(msg, "!!! callback@1-2 with err", err), cb(null, done(err.message || err))), false;
      });
    } catch (e) {
      cb(e, done(e.message));
    }
  };
  return create.do_get_create_table = init, create;
};


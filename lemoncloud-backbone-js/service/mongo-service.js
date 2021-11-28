"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(e,r){r=r||"GS";var a=e.U,t=e.aws,s=e._;if(!a)throw new Error("$U is required!");if(!t)throw new Error("$aws is required!");if(!s)throw new Error("$_ is required!");var f=a.NS(r,"magenta"),l=e.log,i=(e.inf,e.err),n={do_create_table:function(r,e,t){if(!r)return Promise.reject(new Error(f+"parameter:table is required"));e=e||"id",t=t||"Number";return l(f,"do_create_table("+r+").... payload=",{}),m().then(function(e){return e.db().createCollection(r).catch(function(e){return e&&(e.message||e.type),i(f,"> create-table.err =",e),"ignore"}).then(function(e){return l(f,"> create-table.res = ",e),{TableDescription:{TableName:r}}})})},do_delete_table:function(r){return r?(l(f,"- do_delete_table().... payload=",{TableName:r}),m().then(function(e){return e.db().dropCollection(r)}).then(function(e){return l(f,"> delete-table.res = ",e),{TableDescription:{TableName:r}}})):Promise.reject(new Error(f+"parameter:table is required"))}};n.do_list_tables=d,n.do_create_item=function(e,r,t){if(!e)return Promise.reject(new Error(f+"parameter:table is required"));if(!r)return Promise.reject(new Error(f+"parameter:id is required"));if(!t)return Promise.reject(new Error(f+"parameter:data is required"));if("object"!==(void 0===t?"undefined":_typeof(t)))return Promise.reject(new Error(f+"parameter:data must be object"));var n="object"===(void 0===r?"undefined":_typeof(r))?r:{id:a.N(r)};n.idType;delete n.idType,t=a.extend(t,n),t=c(t);Object.keys(n).pop();return l(f,"- do_create_item("+e+").... ,id=",n,", data=",a.json(t)),m().then(function(r){return r.db().collection(e).insertOne(t).then(function(e){return e.result}).then(function(e){return r.close(),e})}).catch(function(e){var r=e&&e.message||e;return i(f,"> create-item.err = ",r),Promise.reject(new Error(r))})},n.do_get_item=function(e,r){if(!e)return Promise.reject(new Error(f+"parameter:table is required"));if(!r)return Promise.reject(new Error(f+"parameter:id is required"));var t="object"===(void 0===r?"undefined":_typeof(r))?r:{id:a.N(r)};t.idType;delete t.idType;Object.keys(t).pop();return l(f,"- do_get_item("+e+").... id=",t),m().then(function(r){return r.db().collection(e).findOne(t).then(function(e){return l(f,"> node =",e),null===e?Promise.reject(new Error("404 NOT FOUND")):e}).then(function(e){return r.close(),e})})},n.do_delete_item=function(e,r){if(!e)return Promise.reject(new Error(f+"parameter:table is required"));if(!r)return Promise.reject(new Error(f+"parameter:id is required"));var t="object"===(void 0===r?"undefined":_typeof(r))?r:{id:a.N(r)};t.idType;delete t.idType;Object.keys(t).pop();return l(f,"- do_delete_item("+e+")...., id=",t),m().then(function(r){return r.db().collection(e).findAndRemove(t).then(function(e){return r.close(),e})})},n.do_update_item=function(e,r,t,n){if(!e)return Promise.reject(new Error(f+"parameter:table is required"));if(!r)return Promise.reject(new Error(f+"parameter:id is required"));if(!t)return Promise.reject(new Error(f+"parameter:data is required"));if("object"!==(void 0===t?"undefined":_typeof(t)))return Promise.reject(new Error(f+"parameter:data must be object"));var i="object"===(void 0===r?"undefined":_typeof(r))?r:{id:a.N(r)};i.idType;delete i.idType,l(f,"- do_update_item("+e+")...., id=",i,", data=",a.json(t));var o=s.reduce(t,function(e,r,t){return r=c(r),e[""+t]=r,e},{}),u=n&&s.reduce(n,function(e,r,t){return e[""+t]=r,e},{}),d={};o&&0<Object.keys(o).length&&(d.$set=o);u&&0<Object.keys(u).length&&(d.$inc=u);Object.keys(i).pop();return l(f,"> payload=",a.json(d)),m().then(function(r){return r.db().collection(e).updateOne(i,d).then(function(e){return e.result}).then(function(e){return r.close(),e})})},n.do_increment_item=function(e,r,t,n){if(!e)return Promise.reject(new Error(f+"parameter:table is required"));if(!r)return Promise.reject(new Error(f+"parameter:id is required"));if(!t)return Promise.reject(new Error(f+"parameter:data is required"));if("object"!==(void 0===t?"undefined":_typeof(t)))return Promise.reject(new Error(f+"parameter:data must be object"));var i="object"===(void 0===r?"undefined":_typeof(r))?r:{id:a.N(r)};i.idType;delete i.idType,l(f,"- do_increment_item("+e+")...., id=",i,", data=",a.json(t));var o=["created_at","updated_at","deleted_at"],u=n&&s.reduce(n,function(e,r,t){return e[""+t]=r,e},{})||{},d=s.reduce(t,function(e,r,t){return 0<=o.indexOf(t)?e[""+t]=r:u[""+t]=r,e},{}),c={};d&&0<Object.keys(d).length&&(c.$set=d);u&&0<Object.keys(u).length&&(c.$inc=u);Object.keys(i).pop();return l(f,"> payload=",a.json(c)),m().then(function(r){return r.db().collection(e).updateOne(i,c).then(function(e){return e.result}).then(function(e){return r.close(),e})})},n.do_test_self=function(e){l(f,"- do_test_self()... param=",e=e||{});var r=a.promise(e);return r=(r=r.then(function(){return d().then(function(e){return l(f,"> ListTables=",e),e})})).then(function(e){return e})},n.do_read_stream=function(e){return Promise.reject(new Error(f+":NOT SUPPORTED!"))},e(r,n);var o={region:a.env("MG_REGION",new Error(f+":MG_REGION is required!"))};a.env("MG_ENDPOINT")&&(o.endpoint=a.env("MG_ENDPOINT"));var u=require("mongodb").MongoClient,m=(require("assert"),function(){var e=o.endpoint;return e?u.connect(e):Promise.reject(new Error(f+":endpoint is required!"))}),c=function n(i){return""===i?null:i?Array.isArray(i)?i.map(n):"object"==(void 0===i?"undefined":_typeof(i))?Object.keys(i).reduce(function(e,r){var t=i[r];return e[r]=n(t),e},{}):i:i};function d(t,e){return l(f,"- do_list_table().... payload=",{Limit:e=e||100}),m().then(function(e){return e.db().collections().then(function(e){return t&&(e=e.reduce(function(e,r){return r.collectionName==t&&e.push(r),e},[])),{TableNames:e=e.map(function(e){return e.collectionName})}})})}return n};'use strict';
/** @type {function(number): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(num) {
  return typeof num;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {!Object} options
 * @param {string} key
 * @return {?}
 */
module.exports = function(options, key) {
  /**
   * @param {?} n
   * @param {number} guard
   * @return {?}
   */
  function test(n, guard) {
    return log(n, "- do_list_table().... payload=", {
      Limit : guard = guard || 100
    }), _WidgetClass().then(function(options) {
      return options.db().collections().then(function(e) {
        return n && (e = e.reduce(function(allSwitches, s) {
          return s.collectionName == n && allSwitches.push(s), allSwitches;
        }, [])), {
          TableNames : e = e.map(function(fileDescription) {
            return fileDescription.collectionName;
          })
        };
      });
    });
  }
  key = key || "GS";
  var api = options.U;
  var config = options.aws;
  var args = options._;
  if (!api) {
    throw new Error("$U is required!");
  }
  if (!config) {
    throw new Error("$aws is required!");
  }
  if (!args) {
    throw new Error("$_ is required!");
  }
  var n = api.NS(key, "magenta");
  var log = options.log;
  var equal = (options.inf, options.err);
  var self = {
    do_create_table : function(name, url, type) {
      if (!name) {
        return Promise.reject(new Error(n + "parameter:table is required"));
      }
      url = url || "id";
      type = type || "Number";
      return log(n, "do_create_table(" + name + ").... payload=", {}), _WidgetClass().then(function(options) {
        return options.db().createCollection(name).catch(function(e) {
          return e && (e.message || e.type), equal(n, "> create-table.err =", e), "ignore";
        }).then(function(type) {
          return log(n, "> create-table.res = ", type), {
            TableDescription : {
              TableName : name
            }
          };
        });
      });
    },
    do_delete_table : function(name) {
      return name ? (log(n, "- do_delete_table().... payload=", {
        TableName : name
      }), _WidgetClass().then(function(options) {
        return options.db().dropCollection(name);
      }).then(function(type) {
        return log(n, "> delete-table.res = ", type), {
          TableDescription : {
            TableName : name
          }
        };
      })) : Promise.reject(new Error(n + "parameter:table is required"));
    }
  };
  /** @type {function(?, number): ?} */
  self.do_list_tables = test;
  /**
   * @param {string} name
   * @param {number} url
   * @param {number} data
   * @return {?}
   */
  self.do_create_item = function(name, url, data) {
    if (!name) {
      return Promise.reject(new Error(n + "parameter:table is required"));
    }
    if (!url) {
      return Promise.reject(new Error(n + "parameter:id is required"));
    }
    if (!data) {
      return Promise.reject(new Error(n + "parameter:data is required"));
    }
    if ("object" !== (void 0 === data ? "undefined" : _typeof(data))) {
      return Promise.reject(new Error(n + "parameter:data must be object"));
    }
    var path = "object" === (void 0 === url ? "undefined" : _typeof(url)) ? url : {
      id : api.N(url)
    };
    path.idType;
    delete path.idType;
    data = api.extend(data, path);
    data = unescape_html(data);
    Object.keys(path).pop();
    return log(n, "- do_create_item(" + name + ").... ,id=", path, ", data=", api.json(data)), _WidgetClass().then(function(persistence) {
      return persistence.db().collection(name).insertOne(data).then(function(jptResponseObj) {
        return jptResponseObj.result;
      }).then(function(canCreateDiscussions) {
        return persistence.close(), canCreateDiscussions;
      });
    }).catch(function(error) {
      var msg = error && error.message || error;
      return equal(n, "> create-item.err = ", msg), Promise.reject(new Error(msg));
    });
  };
  /**
   * @param {string} name
   * @param {number} value
   * @return {?}
   */
  self.do_get_item = function(name, value) {
    if (!name) {
      return Promise.reject(new Error(n + "parameter:table is required"));
    }
    if (!value) {
      return Promise.reject(new Error(n + "parameter:id is required"));
    }
    var data = "object" === (void 0 === value ? "undefined" : _typeof(value)) ? value : {
      id : api.N(value)
    };
    data.idType;
    delete data.idType;
    Object.keys(data).pop();
    return log(n, "- do_get_item(" + name + ").... id=", data), _WidgetClass().then(function(persistence) {
      return persistence.db().collection(name).findOne(data).then(function(i) {
        return log(n, "> node =", i), null === i ? Promise.reject(new Error("404 NOT FOUND")) : i;
      }).then(function(canCreateDiscussions) {
        return persistence.close(), canCreateDiscussions;
      });
    });
  };
  /**
   * @param {string} typeName
   * @param {number} value
   * @return {?}
   */
  self.do_delete_item = function(typeName, value) {
    if (!typeName) {
      return Promise.reject(new Error(n + "parameter:table is required"));
    }
    if (!value) {
      return Promise.reject(new Error(n + "parameter:id is required"));
    }
    var data = "object" === (void 0 === value ? "undefined" : _typeof(value)) ? value : {
      id : api.N(value)
    };
    data.idType;
    delete data.idType;
    Object.keys(data).pop();
    return log(n, "- do_delete_item(" + typeName + ")...., id=", data), _WidgetClass().then(function(persistence) {
      return persistence.db().collection(typeName).findAndRemove(data).then(function(canCreateDiscussions) {
        return persistence.close(), canCreateDiscussions;
      });
    });
  };
  /**
   * @param {string} col
   * @param {number} index
   * @param {number} value
   * @param {string} options
   * @return {?}
   */
  self.do_update_item = function(col, index, value, options) {
    if (!col) {
      return Promise.reject(new Error(n + "parameter:table is required"));
    }
    if (!index) {
      return Promise.reject(new Error(n + "parameter:id is required"));
    }
    if (!value) {
      return Promise.reject(new Error(n + "parameter:data is required"));
    }
    if ("object" !== (void 0 === value ? "undefined" : _typeof(value))) {
      return Promise.reject(new Error(n + "parameter:data must be object"));
    }
    var i = "object" === (void 0 === index ? "undefined" : _typeof(index)) ? index : {
      id : api.N(index)
    };
    i.idType;
    delete i.idType;
    log(n, "- do_update_item(" + col + ")...., id=", i, ", data=", api.json(value));
    var set = args.reduce(value, function(users, data, i) {
      return data = unescape_html(data), users["" + i] = data, users;
    }, {});
    var key = options && args.reduce(options, function(a, l, b) {
      return a["" + b] = l, a;
    }, {});
    var data = {};
    if (set && 0 < Object.keys(set).length) {
      data.$set = set;
    }
    if (key && 0 < Object.keys(key).length) {
      data.$inc = key;
    }
    Object.keys(i).pop();
    return log(n, "> payload=", api.json(data)), _WidgetClass().then(function(persistence) {
      return persistence.db().collection(col).updateOne(i, data).then(function(jptResponseObj) {
        return jptResponseObj.result;
      }).then(function(canCreateDiscussions) {
        return persistence.close(), canCreateDiscussions;
      });
    });
  };
  /**
   * @param {string} col
   * @param {number} index
   * @param {number} value
   * @param {string} wrapper
   * @return {?}
   */
  self.do_increment_item = function(col, index, value, wrapper) {
    if (!col) {
      return Promise.reject(new Error(n + "parameter:table is required"));
    }
    if (!index) {
      return Promise.reject(new Error(n + "parameter:id is required"));
    }
    if (!value) {
      return Promise.reject(new Error(n + "parameter:data is required"));
    }
    if ("object" !== (void 0 === value ? "undefined" : _typeof(value))) {
      return Promise.reject(new Error(n + "parameter:data must be object"));
    }
    var i = "object" === (void 0 === index ? "undefined" : _typeof(index)) ? index : {
      id : api.N(index)
    };
    i.idType;
    delete i.idType;
    log(n, "- do_increment_item(" + col + ")...., id=", i, ", data=", api.json(value));
    /** @type {!Array} */
    var updKeys = ["created_at", "updated_at", "deleted_at"];
    var key = wrapper && args.reduce(wrapper, function(a, l, b) {
      return a["" + b] = l, a;
    }, {}) || {};
    var set = args.reduce(value, function(values, n, col) {
      return 0 <= updKeys.indexOf(col) ? values["" + col] = n : key["" + col] = n, values;
    }, {});
    var data = {};
    if (set && 0 < Object.keys(set).length) {
      data.$set = set;
    }
    if (key && 0 < Object.keys(key).length) {
      data.$inc = key;
    }
    Object.keys(i).pop();
    return log(n, "> payload=", api.json(data)), _WidgetClass().then(function(persistence) {
      return persistence.db().collection(col).updateOne(i, data).then(function(jptResponseObj) {
        return jptResponseObj.result;
      }).then(function(canCreateDiscussions) {
        return persistence.close(), canCreateDiscussions;
      });
    });
  };
  /**
   * @param {number} obj
   * @return {?}
   */
  self.do_test_self = function(obj) {
    log(n, "- do_test_self()... param=", obj = obj || {});
    var worker = api.promise(obj);
    return worker = (worker = worker.then(function() {
      return test().then(function(i) {
        return log(n, "> ListTables=", i), i;
      });
    })).then(function(canCreateDiscussions) {
      return canCreateDiscussions;
    });
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {?}
   */
  self.do_read_stream = function(canCreateDiscussions) {
    return Promise.reject(new Error(n + ":NOT SUPPORTED!"));
  };
  options(key, self);
  var input = {
    region : api.env("MG_REGION", new Error(n + ":MG_REGION is required!"))
  };
  if (api.env("MG_ENDPOINT")) {
    input.endpoint = api.env("MG_ENDPOINT");
  }
  var MongoClient = require("mongodb").MongoClient;
  /** @type {function(): ?} */
  var _WidgetClass = (require("assert"), function() {
    var url = input.endpoint;
    return url ? MongoClient.connect(url) : Promise.reject(new Error(n + ":endpoint is required!"));
  });
  /**
   * @param {?} value
   * @return {?}
   */
  var unescape_html = function result(value) {
    return "" === value ? null : value ? Array.isArray(value) ? value.map(result) : "object" == (void 0 === value ? "undefined" : _typeof(value)) ? Object.keys(value).reduce(function(list, key) {
      var data = value[key];
      return list[key] = result(data), list;
    }, {}) : value : value;
  };
  return self;
};


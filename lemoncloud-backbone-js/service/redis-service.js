"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_slicedToArray=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,i=!1,o=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&d.return&&d.return()}finally{if(i)throw o}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")};module.exports=function(e,r){r=r||"RS";var s=e.U,t=e.aws,n=e._;if(!s)throw new Error("$U is required!");if(!t)throw new Error("$aws is required!");if(!n)throw new Error("$_ is required!");var f=s.NS(r,"yellow"),a=e.log,c=e.inf,i=(e.err,{do_create_item:function(r,i,e,t){if(!r)return Promise.reject(new Error(f+"PKEY is required!"));if(!i)return Promise.reject(new Error(f+"id is required!"));if(!e)return Promise.reject(new Error(f+"item is required!"));if(!t&&a(f,"- do_create_item()...",", PKEY=",r,", id=",i,", item.len=",void 0===e?"undefined":_typeof(e),":",s.json(e).length),t&&a(f,"- do_create_item("+t+")...",", PKEY=",r,", id=",i,", item.len=",void 0===e?"undefined":_typeof(e),":",s.json(e).length),Array.isArray(r)){var o=m().pipeline(),u=Array.isArray(e)?e:[e];return r.forEach(function(e,r){var t=_(e,i),n=r<u.length?u[r]:u[u.length-1];n=n&&"object"===(void 0===n?"undefined":_typeof(n))?s.json(n):n,c(f,">> items["+r+"].set("+t+") :=",void 0===n?"undefined":_typeof(n),":",n),o=o.set(t,n)}),o.exec().then(function(e){return c(f,"> set("+r+"/"+i+") =",e),(e||[]).map(function(e){var r=_slicedToArray(e,2),t=r[0],n=r[1];return n=n&&"string"==typeof n&&n.startsWith("{")&&n.endsWith("}")?JSON.parse(n):n,t?{error:t.message||""+t}:n})})}var n=_(r,i);e=e&&"object"===(void 0===e?"undefined":_typeof(e))?s.json(e):e,c(f,"> set("+n+") =",void 0===e?"undefined":_typeof(e),":",e);var d=void 0===t||0===t?m().set(n,e):m().setex(n,s.N(t),e);return d=d.then(function(e){return a(f,"> set("+n+") =",void 0===e?"undefined":_typeof(e),":",s.json(e)),e})},do_get_item:function(t,n){if(!t)return Promise.reject(new Error(f+"PKEY is required!"));if(!n)return Promise.reject(new Error(f+"id is required!"));if(Array.isArray(t)){var i=m().pipeline();return t.forEach(function(e,r){var t=_(e,n);i=i.get(t)}),i.exec().then(function(e){return c(f,"> get("+t+"/"+n+") =",e),(e||[]).map(function(e){var r=_slicedToArray(e,2),t=r[0],n=r[1];return n=n&&"string"==typeof n&&n.startsWith("{")&&n.endsWith("}")?JSON.parse(n):n,t?{error:t.message||""+t}:n})})}var o=_(t,n);return m().get(o).then(function(e){if(a(f,"> get("+o+") =",void 0===e?"undefined":_typeof(e),": len=",e?s.json(e).length:"N/A"),null===e)return Promise.reject(new Error("404 NOT FOUND - "+t+"/"+n));if("object"==(void 0===(e=e&&"string"==typeof e&&e.startsWith("{")&&e.endsWith("}")?JSON.parse(e):e)?"undefined":_typeof(e)))a(f,">> item.id=",e.id||""," type=",e.type||""," name=",e.name||"",[e.created_at||0,e.updated_at||0,e.deleted_at||0]);else{var r=""+(e||"");a(f,">> item =",r.substring(0,20),20<r.length?"...":"")}return e})},do_delete_item:function(r,n){if(!r)return Promise.reject(new Error(f+"PKEY is required!"));if(!n)return Promise.reject(new Error(f+"id is required!"));if(a(f,"- do_delete_item()...",", PKEY=",r,", id=",n),Array.isArray(r)){var i=m().pipeline();return r.forEach(function(e,r){var t=_(e,n);i=i.del(t)}),i.exec().then(function(e){return c(f,"> del("+r+"/"+n+") =",e),(e||[]).map(function(e){var r=_slicedToArray(e,2),t=r[0],n=r[1];return n=n&&"string"==typeof n&&n.startsWith("{")&&n.endsWith("}")?JSON.parse(n):n,t?{error:t.message||""+t}:n})})}var t=_(r,n);return m().del(t,null).then(function(e){return a(f,"> del("+t+") =",void 0===e?"undefined":_typeof(e),":",s.json(e)),e})},do_update_item:function(e,r,t){if(!e)return Promise.reject(new Error(f+"PKEY is required!"));if(!r)return Promise.reject(new Error(f+"id is required!"));if(!t)return Promise.reject(new Error(f+"item is required!"));if(a(f,"do_update_item()...",", PKEY=",e,", id=",r,", item=",void 0===t?"undefined":_typeof(t),":",s.json(t)),t)return Promise.reject(new Error(f+"Not Supportable Yet!"));var n=_(e,r);return t=t&&"object"===(void 0===t?"undefined":_typeof(t))?JSON.stringify(t):t,c(f,"> put("+n+") =",void 0===t?"undefined":_typeof(t),":",t),m().set(n,t).then(function(e){return a(f,"> put("+n+") =",void 0===e?"undefined":_typeof(e),":",s.json(e)),e})},do_test_self:function(e){return a(f,"do_test_self()... param=",e=e||{}),s.promise(e).then(function(){var e="mykey";return a(f,"#get(mykey)..."),m().get(e).then(function(e){return a(f,"> mykey=",e),e})})}});e(r,i);s.env("EC_REGION",new Error(f+":EC_REGION is required!"));var o=s.env("EC_ENDPOINT",new Error(f+":EC_ENDPOINT is required!")),u=require("ioredis"),d=(o||"localhost:6379").split(":",2),y=_slicedToArray(d,2),l=y[0],p=new u(y[1]||6379,l||"localhost"),m=function(){if(!p)throw new Error("client is required!");return p},_=function(e,r){return e+"::"+r};return i};'use strict';
/** @type {function(!Object): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {?} arr
 * @param {number} i
 * @return {?}
 */
var _slicedToArray = function(arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  }
  if (Symbol.iterator in Object(arr)) {
    return function(set, groupNum) {
      /** @type {!Array} */
      var _arr = [];
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var i = false;
      var o = void 0;
      try {
        var _s;
        var _iterator3 = set[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (_s = _iterator3.next()).done) && (_arr.push(_s.value), !groupNum || _arr.length !== groupNum); _iteratorNormalCompletion3 = true) {
        }
      } catch (tObj) {
        /** @type {boolean} */
        i = true;
        o = tObj;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (i) {
            throw o;
          }
        }
      }
      return _arr;
    }(arr, i);
  }
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
/**
 * @param {!Object} req
 * @param {string} path
 * @return {?}
 */
module.exports = function(req, path) {
  path = path || "RS";
  var options = req.U;
  var config = req.aws;
  var conf = req._;
  if (!options) {
    throw new Error("$U is required!");
  }
  if (!config) {
    throw new Error("$aws is required!");
  }
  if (!conf) {
    throw new Error("$_ is required!");
  }
  var name = options.NS(path, "yellow");
  var log = req.log;
  var callback = req.inf;
  var query = (req.err, {
    do_create_item : function(message, url, value, item) {
      if (!message) {
        return Promise.reject(new Error(name + "PKEY is required!"));
      }
      if (!url) {
        return Promise.reject(new Error(name + "id is required!"));
      }
      if (!value) {
        return Promise.reject(new Error(name + "item is required!"));
      }
      if (!item && log(name, "- do_create_item()...", ", PKEY=", message, ", id=", url, ", item.len=", void 0 === value ? "undefined" : _typeof(value), ":", options.json(value).length), item && log(name, "- do_create_item(" + item + ")...", ", PKEY=", message, ", id=", url, ", item.len=", void 0 === value ? "undefined" : _typeof(value), ":", options.json(value).length), Array.isArray(message)) {
        var f = api().pipeline();
        var data = Array.isArray(value) ? value : [value];
        return message.forEach(function(key, i) {
          var filename = prompt(key, url);
          var value = i < data.length ? data[i] : data[data.length - 1];
          value = value && "object" === (void 0 === value ? "undefined" : _typeof(value)) ? options.json(value) : value;
          callback(name, ">> items[" + i + "].set(" + filename + ") :=", void 0 === value ? "undefined" : _typeof(value), ":", value);
          f = f.set(filename, value);
        }), f.exec().then(function(filters) {
          return callback(name, "> set(" + message + "/" + url + ") =", filters), (filters || []).map(function(actionsMapValue) {
            var _actionsMapValue = _slicedToArray(actionsMapValue, 2);
            var err = _actionsMapValue[0];
            var html = _actionsMapValue[1];
            return html = html && "string" == typeof html && html.startsWith("{") && html.endsWith("}") ? JSON.parse(html) : html, err ? {
              error : err.message || "" + err
            } : html;
          });
        });
      }
      var key = prompt(message, url);
      value = value && "object" === (void 0 === value ? "undefined" : _typeof(value)) ? options.json(value) : value;
      callback(name, "> set(" + key + ") =", void 0 === value ? "undefined" : _typeof(value), ":", value);
      var loadPropPromise = void 0 === item || 0 === item ? api().set(key, value) : api().setex(key, options.N(item), value);
      return loadPropPromise = loadPropPromise.then(function(value) {
        return log(name, "> set(" + key + ") =", void 0 === value ? "undefined" : _typeof(value), ":", options.json(value)), value;
      });
    },
    do_get_item : function(value, url) {
      if (!value) {
        return Promise.reject(new Error(name + "PKEY is required!"));
      }
      if (!url) {
        return Promise.reject(new Error(name + "id is required!"));
      }
      if (Array.isArray(value)) {
        var todo = api().pipeline();
        return value.forEach(function(value, canCreateDiscussions) {
          var t = prompt(value, url);
          todo = todo.get(t);
        }), todo.exec().then(function(filters) {
          return callback(name, "> get(" + value + "/" + url + ") =", filters), (filters || []).map(function(actionsMapValue) {
            var _actionsMapValue = _slicedToArray(actionsMapValue, 2);
            var err = _actionsMapValue[0];
            var html = _actionsMapValue[1];
            return html = html && "string" == typeof html && html.startsWith("{") && html.endsWith("}") ? JSON.parse(html) : html, err ? {
              error : err.message || "" + err
            } : html;
          });
        });
      }
      var keyword = prompt(value, url);
      return api().get(keyword).then(function(value) {
        if (log(name, "> get(" + keyword + ") =", void 0 === value ? "undefined" : _typeof(value), ": len=", value ? options.json(value).length : "N/A"), null === value) {
          return Promise.reject(new Error("404 NOT FOUND - " + value + "/" + url));
        }
        if ("object" == (void 0 === (value = value && "string" == typeof value && value.startsWith("{") && value.endsWith("}") ? JSON.parse(value) : value) ? "undefined" : _typeof(value))) {
          log(name, ">> item.id=", value.id || "", " type=", value.type || "", " name=", value.name || "", [value.created_at || 0, value.updated_at || 0, value.deleted_at || 0]);
        } else {
          /** @type {string} */
          var locHash = "" + (value || "");
          log(name, ">> item =", locHash.substring(0, 20), 20 < locHash.length ? "..." : "");
        }
        return value;
      });
    },
    do_delete_item : function(message, value) {
      if (!message) {
        return Promise.reject(new Error(name + "PKEY is required!"));
      }
      if (!value) {
        return Promise.reject(new Error(name + "id is required!"));
      }
      if (log(name, "- do_delete_item()...", ", PKEY=", message, ", id=", value), Array.isArray(message)) {
        var m = api().pipeline();
        return message.forEach(function(message, canCreateDiscussions) {
          var t = prompt(message, value);
          m = m.del(t);
        }), m.exec().then(function(filters) {
          return callback(name, "> del(" + message + "/" + value + ") =", filters), (filters || []).map(function(actionsMapValue) {
            var _actionsMapValue = _slicedToArray(actionsMapValue, 2);
            var err = _actionsMapValue[0];
            var html = _actionsMapValue[1];
            return html = html && "string" == typeof html && html.startsWith("{") && html.endsWith("}") ? JSON.parse(html) : html, err ? {
              error : err.message || "" + err
            } : html;
          });
        });
      }
      var t = prompt(message, value);
      return api().del(t, null).then(function(value) {
        return log(name, "> del(" + t + ") =", void 0 === value ? "undefined" : _typeof(value), ":", options.json(value)), value;
      });
    },
    do_update_item : function(message, data, value) {
      if (!message) {
        return Promise.reject(new Error(name + "PKEY is required!"));
      }
      if (!data) {
        return Promise.reject(new Error(name + "id is required!"));
      }
      if (!value) {
        return Promise.reject(new Error(name + "item is required!"));
      }
      if (log(name, "do_update_item()...", ", PKEY=", message, ", id=", data, ", item=", void 0 === value ? "undefined" : _typeof(value), ":", options.json(value)), value) {
        return Promise.reject(new Error(name + "Not Supportable Yet!"));
      }
      var response = prompt(message, data);
      return value = value && "object" === (void 0 === value ? "undefined" : _typeof(value)) ? JSON.stringify(value) : value, callback(name, "> put(" + response + ") =", void 0 === value ? "undefined" : _typeof(value), ":", value), api().set(response, value).then(function(value) {
        return log(name, "> put(" + response + ") =", void 0 === value ? "undefined" : _typeof(value), ":", options.json(value)), value;
      });
    },
    do_test_self : function(validate) {
      return log(name, "do_test_self()... param=", validate = validate || {}), options.promise(validate).then(function() {
        /** @type {string} */
        var key = "mykey";
        return log(name, "#get(mykey)..."), api().get(key).then(function(value) {
          return log(name, "> mykey=", value), value;
        });
      });
    }
  });
  req(path, query);
  options.env("EC_REGION", new Error(name + ":EC_REGION is required!"));
  var dayViewEnd = options.env("EC_ENDPOINT", new Error(name + ":EC_ENDPOINT is required!"));
  var Redis = require("ioredis");
  var _qualifiedName$split6 = (dayViewEnd || "localhost:6379").split(":", 2);
  var _qualifiedName$split62 = _slicedToArray(_qualifiedName$split6, 2);
  var host = _qualifiedName$split62[0];
  var redis = new Redis(_qualifiedName$split62[1] || 6379, host || "localhost");
  /**
   * @return {?}
   */
  var api = function() {
    if (!redis) {
      throw new Error("client is required!");
    }
    return redis;
  };
  /**
   * @param {?} name
   * @param {string} str
   * @return {?}
   */
  var prompt = function(name, str) {
    return name + "::" + str;
  };
  return query;
};


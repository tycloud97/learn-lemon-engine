"use strict";var _slicedToArray=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}module.exports=function(e,r){r=r||"ES6";var m=e.U,t=e.aws,l=e._;if(!m)throw new Error("$U is required!");if(!t)throw new Error("$aws is required!");if(!l)throw new Error("$_ is required!");var a=m.NS(r,"cyan"),d=e.log,u=(e.inf,e.err),n={};n.do_create_index_type=f,n.do_delete_index_type=function(e,r,t){if(!e)return Promise.reject(new Error(a+"index is required"));!r&&d(a,"- do_delete_index_type("+e+")...., options=",t),r&&d(a,"- do_delete_index_type("+e+", "+r+")...., options=",t);var n={index:e};r&&(n.type=r);return c.indices.delete(n).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};u(a,"delete-index error=",r.type||"",", reason=",r.reason||"");var t=r&&r.type||"";if("index_not_found_exception"==t)return Promise.reject(new Error("404 NOT FOUND - "+t));throw r})},n.do_create_item=p,n.do_push_item=function(e,r,t,n){if(!e)return Promise.reject(new Error(a+"parameter:index is required"));if(!r)return Promise.reject(new Error(a+"parameter:type is required"));if(!t)return Promise.reject(new Error(a+"parameter:data is required"));!r&&d(a,"- do_push_item("+e+")....",", data=",m.json(t)),r&&d(a,"- do_push_item("+e+"/"+r+")....",", data=",m.json(t));var o={index:e,body:t};r&&(o.type=r);n&&(o.id=n);return c.index(o).then(function(e){return d(a,"> pushed res =",e&&e.result||m.json(e)),n?"updated"===e.result:"created"===e.result}).catch(function(e){u(a,"!ERR =",e);var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};u(a,"push-item error=",r.type||"",", reason=",r.reason||"");var t=r&&r.type||"";return"NotFound"==t?Promise.reject(new Error("404 NOT FOUND - "+t)):Promise.reject(r)})},n.do_get_item=y,n.do_delete_item=h,n.do_update_item=_,n.do_search_item=function(e,r,t){if(!e)return Promise.reject(new Error(a+"parameter:index is required"));if(!t)return Promise.reject(new Error(a+"parameter:param is required"));!r&&d(a,"- do_search_item("+e+")....",", param=",m.json(t)),r&&d(a,"- do_search_item("+e+"/"+r+")....",", param=",m.json(t));var n={query:{query_string:{query:"_exists_:stock AND NOT _exists_:name AND stock:>1"}}},o=function(e){var u=null,a=null,d=-1,c=-1,f="",p="",y="",r=l.reduce(e,function(r,e,t){if(t.startsWith("_"))return r;if("$query"===t)u={query:"object"===(void 0===e?"undefined":_typeof(e))?e:JSON.parse(e)};else if("$limit"===t)c=m.N(e,0);else if("$page"===t)d=m.N(e,0);else if("$Q"===t)e&&("object"===(void 0===e?"undefined":_typeof(e))?u=e:"string"==typeof e&&e.startsWith("{")&&e.endsWith("}")?u=JSON.parse(e):"string"==typeof e&&r.push("("+e+")"));else if("$A"===t)f=(""+e).trim();else if("$O"===t)p=(""+e).trim();else if("$H"===t)y=(""+e).trim();else if("$source"===t)if("*"===e)a="*";else if(e&&e.indexOf&&e.indexOf(",")){var n=e.split(",")||[],o=[],i=[];n.forEach(function(e){(e=(e||"").trim())&&(e.startsWith("!")?i.push(e.substr(1)):o.push(e))}),a={includes:o,excludes:i}}else a=e;else if("$exist"===t||"$exists"===t){var s=e.split(",")||[];s.forEach(function(e){(e=(e||"").trim())&&(e.startsWith("!")?r.push("NOT _exists_:"+e.substr(1)):r.push("_exists_:"+e))})}else e&&"string"==typeof e&&(e.startsWith("(")&&e.endsWith(")")||(0<e.indexOf(" ")||0<e.indexOf("\n")||0<e.indexOf(":")||0<e.indexOf("^")?e='"'+(e=e.replace(/([\"\'])/gi,"\\$1"))+'"':0<e.indexOf(",")&&(e=e.split(",").map(function(e){return(e||"").trim()})))),t.startsWith("!")?e?Array.isArray(e)?e.forEach(function(e){e&&r.push("NOT "+t.substr(1)+":"+e)}):r.push("NOT "+t.substr(1)+":"+e):r.push("_exists_:"+t.substr(1)):t.startsWith("#")?(a=a||{includes:[],excludes:[]})&&a.includes&&a.includes.push(t.substr(1)):Array.isArray(e)?r.push("("+e.map(function(e){return t+":"+e}).join(" OR ")+")"):r.push(t+":"+e);return r},[]),t=u||r.length&&{query:{query_string:{query:r.join(" AND ")}}}||{};if(f){var n=f.split(",").reduce(function(e,r){if(r=(""+r).trim())if(0<r.indexOf(":")){var t=r.split(":",2),n=_slicedToArray(t,2),o=n[0],i=n[1];e[o]={terms:{field:o,size:parseInt(i)}}}else e[r]={terms:{field:r}};return e},{});t.aggs=n}if(p){var o=p.split(",").reduce(function(e,r){if(r=(""+r).trim()){var t=r,n=!0;r.startsWith("!")&&(t=r.slice(1),n=!1),t&&e.push(_defineProperty({},t,{order:n?"asc":"desc"}))}return e},[]);o.length&&(t.sort=o)}if(y){var i=y.split(",").reduce(function(e,r){return(r=(""+r).trim())&&(e[r]={type:"unified"}),e},{});t.highlight={},t.highlight.fields=i}return-1<c&&(t.size=c,-1<d&&(t.from=d*c)),null!==a&&(t._source=a),t};{n=o(t)}d(a,"> search("+e+"/"+r+") query = ",m.json(n));var i={index:e,type:r,body:n};return c.search(i).then(function(e){return e}).catch(function(e){var r=e.body&&e.body.error&&e.body.error.root_cause&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};throw u(a,"search-item error=",r&&r.type||"",", reason=",r&&r.reason||""),r})},n.do_test_self=function(e){d(a,"- do_test_self()... param=",e=e||{});var r=m.promise(e),t="test-v1",n="mytype",o=1000001,i={name:"test-me"},s={name:"test-you",age:1},u={age:2,nick:"N2"};r=r.then(function(){return d(a,"- create-index...."),f(t).then(function(e){return d(a,"> created-index =",e),e}).catch(function(e){return d(a,"> error=",e),e})});r=r.then(function(){return d(a,"- create-document("+t+")..."),p(t,n,o,i).then(function(e){return d(a,"> result =",e),e}).catch(function(e){return d(a,"> error =",e),e})});r=r.then(function(){return d(a,"- get-document("+t+")..."),y(t,n,o).then(function(e){return d(a,"> result =",e),e}).catch(function(e){return d(a,"> error =",e),e})});r=r.then(function(){return d(a,"- update-document("+t+")..."),d(a,"> document=",m.json(u)),_(t,n,o,u).then(function(e){return d(a,"> result =",e),e}).then(function(){return y(t,n,o).then(function(e){return d(a,"> updated-doc =",e),e})}).catch(function(e){return d(a,"> error =",e),e})});r=r.then(function(){return d(a,"- get-document("+t+")..."),y(t,n,o,s).then(function(e){return d(a,"> result =",e),e}).catch(function(e){return d(a,"> error =",e),e})});r=r.then(function(){return d(a,"- delete-document("+t+")..."),h(t,n,o).then(function(e){return d(a,"> result =",e),e}).then(function(){return y(t,n,o).then(function(e){return d(a,"> deleted-doc =",e),e})}).catch(function(e){return d(a,"> error =",e),e})});return r},e(r,n);var o={region:m.env("ES6_REGION",new Error(a+":ES6_REGION is required!")),endpoint:m.env("ES6_ENDPOINT",new Error(a+":ES6_ENDPOINT is required!"))},c=new(require("elasticsearch").Client)({host:o.endpoint});function f(e,r,t){if(!e)return Promise.reject(new Error(a+"index is required"));!r&&d(a,"- do_create_index_type("+e+")...., options=",t),r&&d(a,"- do_create_index_type("+e+", "+r+")...., options=",t);var n={};return t&&(n=m.extend(n,t)),c.indices.create({index:e,body:n}).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};throw u(a,"create-index error=",r.type||"",", reason=",r.reason||""),r})}function p(n,o,i,s){if(!n)return Promise.reject(new Error(a+"parameter:index is required"));if(!o)return Promise.reject(new Error(a+"parameter:type is required"));if(!i)return Promise.reject(new Error(a+"parameter:id is required"));if(!s)return Promise.reject(new Error(a+"parameter:data is required"));!o&&d(a,"- do_create_item("+n+")....",", id=",i,", data=",m.json(s)),o&&d(a,"- do_create_item("+n+"/"+o+")....",", id=",i,", data=",m.json(s));var e={index:n,id:i,body:s};return o&&(e.type=o),c.create(e).then(function(e){return d(a,"> created res =",e&&e.result||m.json(e)),"created"===e.result}).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};if("version_conflict_engine_exception"===r.type){d(a,"WARN! document already exists. so overwrite it");var t={index:n,type:o,id:i,body:{doc:s}};return c.update(t).then(function(e){return d(a,"> overwrite res =",e&&e.result||m.json(e)),"updated"===e.result})}throw u(a,"create-item error=",r.type||"",", reason=",r.reason||""),r})}function y(e,r,t,n){if(!e)return Promise.reject(new Error(a+"parameter:index is required"));if(!r)return Promise.reject(new Error(a+"parameter:type is required"));if(!t)return Promise.reject(new Error(a+"parameter:id is required"));d(a,"- do_get_item("+e+"/"+r+")....",", id=",t,", data=",m.json(n||""));var o={index:e,type:r,id:t};if(n){var i=[],s=Array.isArray(n);l.each(n,function(e,r){i.push(s?e:r)}),o._source=i}return c.get(o).then(function(e){return d(a,"> get res =",m.json(e)),e._source}).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};u(a,"get-item error=",r.type||"",", reason=",r.reason||"");var t=r&&r.type||"";if("NotFound"==t)return Promise.reject(new Error("404 NOT FOUND - "+t));throw r})}function h(e,r,t){if(!e)return Promise.reject(new Error(a+"parameter:index is required"));if(!r)return Promise.reject(new Error(a+"parameter:type is required"));if(!t)return Promise.reject(new Error(a+"parameter:id is required"));d(a,"- do_delete_item("+e+"/"+r+")....",", id=",t);var n={index:e,type:r,id:t};return c.delete(n).then(function(e){return d(a,"> delete res =",e&&e.result||m.json(e)),"deleted"===e.result}).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};u(a,"delete-item error=",r.type||"",", reason=",r.reason||"");var t=r&&r.type||"";if("NotFound"==t)return Promise.reject(new Error("404 NOT FOUND - "+t));throw r})}function _(e,r,t,n){if(!e)return Promise.reject(new Error(a+"parameter:index is required"));if(!r)return Promise.reject(new Error(a+"parameter:type is required"));if(!t)return Promise.reject(new Error(a+"parameter:id is required"));if(!n)return Promise.reject(new Error(a+"parameter:data is required"));d(a,"- do_update_item("+e+"/"+r+")....",", id=",t,", data=",m.json(n));var o={index:e,type:r,id:t,body:{doc:n}};return c.update(o).then(function(e){return d(a,"> update res =",e&&e.result||m.json(e)),"updated"===e.result||"noop"===e.result}).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};u(a,"update-item error=",r.type||"",", reason=",r.reason||"");var t=r&&r.type||"";if("NotFound"==t)return Promise.reject(new Error("404 NOT FOUND - "+t));if("document_missing_exception"==t)return Promise.reject(new Error("404 NOT FOUND - "+t));throw r})}return n};'use strict';
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
      var o = false;
      var i = void 0;
      try {
        var _s;
        var _iterator3 = set[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (_s = _iterator3.next()).done) && (_arr.push(_s.value), !groupNum || _arr.length !== groupNum); _iteratorNormalCompletion3 = true) {
        }
      } catch (contactCapacity) {
        /** @type {boolean} */
        o = true;
        i = contactCapacity;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (o) {
            throw i;
          }
        }
      }
      return _arr;
    }(arr, i);
  }
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
/** @type {function(string): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qline) {
  return typeof qline;
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
/**
 * @param {!Object} opts
 * @param {string} app
 * @return {?}
 */
module.exports = function(opts, app) {
  /**
   * @param {string} res
   * @param {string} options
   * @param {?} key
   * @return {?}
   */
  function validate(res, options, key) {
    if (!res) {
      return Promise.reject(new Error(name + "index is required"));
    }
    if (!options) {
      debug(name, "- do_create_index_type(" + res + ")...., options=", key);
    }
    if (options) {
      debug(name, "- do_create_index_type(" + res + ", " + options + ")...., options=", key);
    }
    var data = {};
    return key && (data = self.extend(data, key)), c.indices.create({
      index : res,
      body : data
    }).catch(function(result) {
      var value = result.body && result.body.error && (result.body.error.root_cause[0] || result.body.error) || {
        type : result.displayName || result.status,
        reason : result.message
      };
      throw callback(name, "create-index error=", value.type || "", ", reason=", value.reason || ""), value;
    });
  }
  /**
   * @param {string} res
   * @param {string} options
   * @param {number} type
   * @param {!Object} val
   * @return {?}
   */
  function login(res, options, type, val) {
    if (!res) {
      return Promise.reject(new Error(name + "parameter:index is required"));
    }
    if (!options) {
      return Promise.reject(new Error(name + "parameter:type is required"));
    }
    if (!type) {
      return Promise.reject(new Error(name + "parameter:id is required"));
    }
    if (!val) {
      return Promise.reject(new Error(name + "parameter:data is required"));
    }
    if (!options) {
      debug(name, "- do_create_item(" + res + ")....", ", id=", type, ", data=", self.json(val));
    }
    if (options) {
      debug(name, "- do_create_item(" + res + "/" + options + ")....", ", id=", type, ", data=", self.json(val));
    }
    var t = {
      index : res,
      id : type,
      body : val
    };
    return options && (t.type = options), c.create(t).then(function(data) {
      return debug(name, "> created res =", data && data.result || self.json(data)), "created" === data.result;
    }).catch(function(result) {
      var value = result.body && result.body.error && (result.body.error.root_cause[0] || result.body.error) || {
        type : result.displayName || result.status,
        reason : result.message
      };
      if ("version_conflict_engine_exception" === value.type) {
        debug(name, "WARN! document already exists. so overwrite it");
        var data = {
          index : res,
          type : options,
          id : type,
          body : {
            doc : val
          }
        };
        return c.update(data).then(function(data) {
          return debug(name, "> overwrite res =", data && data.result || self.json(data)), "updated" === data.result;
        });
      }
      throw callback(name, "create-item error=", value.type || "", ", reason=", value.reason || ""), value;
    });
  }
  /**
   * @param {string} res
   * @param {string} field
   * @param {number} callback
   * @param {string} data
   * @return {?}
   */
  function next(res, field, callback, data) {
    if (!res) {
      return Promise.reject(new Error(name + "parameter:index is required"));
    }
    if (!field) {
      return Promise.reject(new Error(name + "parameter:type is required"));
    }
    if (!callback) {
      return Promise.reject(new Error(name + "parameter:id is required"));
    }
    debug(name, "- do_get_item(" + res + "/" + field + ")....", ", id=", callback, ", data=", self.json(data || ""));
    var o = {
      index : res,
      type : field,
      id : callback
    };
    if (data) {
      /** @type {!Array} */
      var doc = [];
      /** @type {boolean} */
      var s = Array.isArray(data);
      files.each(data, function(a, p) {
        doc.push(s ? a : p);
      });
      /** @type {!Array} */
      o._source = doc;
    }
    return c.get(o).then(function(body) {
      return debug(name, "> get res =", self.json(body)), body._source;
    }).catch(function(result) {
      var parsed = result.body && result.body.error && (result.body.error.root_cause[0] || result.body.error) || {
        type : result.displayName || result.status,
        reason : result.message
      };
      callback(name, "get-item error=", parsed.type || "", ", reason=", parsed.reason || "");
      var t = parsed && parsed.type || "";
      if ("NotFound" == t) {
        return Promise.reject(new Error("404 NOT FOUND - " + t));
      }
      throw parsed;
    });
  }
  /**
   * @param {string} res
   * @param {string} str
   * @param {number} filename
   * @return {?}
   */
  function save(res, str, filename) {
    if (!res) {
      return Promise.reject(new Error(name + "parameter:index is required"));
    }
    if (!str) {
      return Promise.reject(new Error(name + "parameter:type is required"));
    }
    if (!filename) {
      return Promise.reject(new Error(name + "parameter:id is required"));
    }
    debug(name, "- do_delete_item(" + res + "/" + str + ")....", ", id=", filename);
    var walker = {
      index : res,
      type : str,
      id : filename
    };
    return c.delete(walker).then(function(data) {
      return debug(name, "> delete res =", data && data.result || self.json(data)), "deleted" === data.result;
    }).catch(function(result) {
      var parsed = result.body && result.body.error && (result.body.error.root_cause[0] || result.body.error) || {
        type : result.displayName || result.status,
        reason : result.message
      };
      callback(name, "delete-item error=", parsed.type || "", ", reason=", parsed.reason || "");
      var t = parsed && parsed.type || "";
      if ("NotFound" == t) {
        return Promise.reject(new Error("404 NOT FOUND - " + t));
      }
      throw parsed;
    });
  }
  /**
   * @param {string} k
   * @param {string} r
   * @param {number} obj
   * @param {!Object} body
   * @return {?}
   */
  function update(k, r, obj, body) {
    if (!k) {
      return Promise.reject(new Error(name + "parameter:index is required"));
    }
    if (!r) {
      return Promise.reject(new Error(name + "parameter:type is required"));
    }
    if (!obj) {
      return Promise.reject(new Error(name + "parameter:id is required"));
    }
    if (!body) {
      return Promise.reject(new Error(name + "parameter:data is required"));
    }
    debug(name, "- do_update_item(" + k + "/" + r + ")....", ", id=", obj, ", data=", self.json(body));
    var data = {
      index : k,
      type : r,
      id : obj,
      body : {
        doc : body
      }
    };
    return c.update(data).then(function(data) {
      return debug(name, "> update res =", data && data.result || self.json(data)), "updated" === data.result || "noop" === data.result;
    }).catch(function(result) {
      var parsed = result.body && result.body.error && (result.body.error.root_cause[0] || result.body.error) || {
        type : result.displayName || result.status,
        reason : result.message
      };
      callback(name, "update-item error=", parsed.type || "", ", reason=", parsed.reason || "");
      var t = parsed && parsed.type || "";
      if ("NotFound" == t) {
        return Promise.reject(new Error("404 NOT FOUND - " + t));
      }
      if ("document_missing_exception" == t) {
        return Promise.reject(new Error("404 NOT FOUND - " + t));
      }
      throw parsed;
    });
  }
  app = app || "ES6";
  var self = opts.U;
  var config = opts.aws;
  var files = opts._;
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!config) {
    throw new Error("$aws is required!");
  }
  if (!files) {
    throw new Error("$_ is required!");
  }
  var name = self.NS(app, "cyan");
  var debug = opts.log;
  var callback = (opts.inf, opts.err);
  var vm = {};
  /** @type {function(string, string, ?): ?} */
  vm.do_create_index_type = validate;
  /**
   * @param {string} res
   * @param {string} code
   * @param {?} password
   * @return {?}
   */
  vm.do_delete_index_type = function(res, code, password) {
    if (!res) {
      return Promise.reject(new Error(name + "index is required"));
    }
    if (!code) {
      debug(name, "- do_delete_index_type(" + res + ")...., options=", password);
    }
    if (code) {
      debug(name, "- do_delete_index_type(" + res + ", " + code + ")...., options=", password);
    }
    var query = {
      index : res
    };
    if (code) {
      /** @type {string} */
      query.type = code;
    }
    return c.indices.delete(query).catch(function(result) {
      var parsed = result.body && result.body.error && (result.body.error.root_cause[0] || result.body.error) || {
        type : result.displayName || result.status,
        reason : result.message
      };
      callback(name, "delete-index error=", parsed.type || "", ", reason=", parsed.reason || "");
      var t = parsed && parsed.type || "";
      if ("index_not_found_exception" == t) {
        return Promise.reject(new Error("404 NOT FOUND - " + t));
      }
      throw parsed;
    });
  };
  /** @type {function(string, string, number, !Object): ?} */
  vm.do_create_item = login;
  /**
   * @param {string} i
   * @param {string} elem
   * @param {!Array} key
   * @param {string} result
   * @return {?}
   */
  vm.do_push_item = function(i, elem, key, result) {
    if (!i) {
      return Promise.reject(new Error(name + "parameter:index is required"));
    }
    if (!elem) {
      return Promise.reject(new Error(name + "parameter:type is required"));
    }
    if (!key) {
      return Promise.reject(new Error(name + "parameter:data is required"));
    }
    if (!elem) {
      debug(name, "- do_push_item(" + i + ")....", ", data=", self.json(key));
    }
    if (elem) {
      debug(name, "- do_push_item(" + i + "/" + elem + ")....", ", data=", self.json(key));
    }
    var data = {
      index : i,
      body : key
    };
    if (elem) {
      /** @type {string} */
      data.type = elem;
    }
    if (result) {
      /** @type {string} */
      data.id = result;
    }
    return c.index(data).then(function(data) {
      return debug(name, "> pushed res =", data && data.result || self.json(data)), result ? "updated" === data.result : "created" === data.result;
    }).catch(function(result) {
      callback(name, "!ERR =", result);
      var e = result.body && result.body.error && (result.body.error.root_cause[0] || result.body.error) || {
        type : result.displayName || result.status,
        reason : result.message
      };
      callback(name, "push-item error=", e.type || "", ", reason=", e.reason || "");
      var string = e && e.type || "";
      return "NotFound" == string ? Promise.reject(new Error("404 NOT FOUND - " + string)) : Promise.reject(e);
    });
  };
  /** @type {function(string, string, number, string): ?} */
  vm.do_get_item = next;
  /** @type {function(string, string, number): ?} */
  vm.do_delete_item = save;
  /** @type {function(string, string, number, !Object): ?} */
  vm.do_update_item = update;
  /**
   * @param {string} result
   * @param {string} r
   * @param {?} key
   * @return {?}
   */
  vm.do_search_item = function(result, r, key) {
    if (!result) {
      return Promise.reject(new Error(name + "parameter:index is required"));
    }
    if (!key) {
      return Promise.reject(new Error(name + "parameter:param is required"));
    }
    if (!r) {
      debug(name, "- do_search_item(" + result + ")....", ", param=", self.json(key));
    }
    if (r) {
      debug(name, "- do_search_item(" + result + "/" + r + ")....", ", param=", self.json(key));
    }
    var config = {
      query : {
        query_string : {
          query : "_exists_:stock AND NOT _exists_:name AND stock:>1"
        }
      }
    };
    /**
     * @param {?} result
     * @return {?}
     */
    var init = function(result) {
      /** @type {null} */
      var body = null;
      /** @type {null} */
      var layer = null;
      /** @type {number} */
      var dx = -1;
      /** @type {number} */
      var size = -1;
      /** @type {string} */
      var errbuffer = "";
      /** @type {string} */
      var c = "";
      /** @type {string} */
      var projectFilterPatterns = "";
      var r = files.reduce(result, function(errors, value, name) {
        if (name.startsWith("_")) {
          return errors;
        }
        if ("$query" === name) {
          body = {
            query : "object" === (void 0 === value ? "undefined" : _typeof(value)) ? value : JSON.parse(value)
          };
        } else {
          if ("$limit" === name) {
            size = self.N(value, 0);
          } else {
            if ("$page" === name) {
              dx = self.N(value, 0);
            } else {
              if ("$Q" === name) {
                if (value) {
                  if ("object" === (void 0 === value ? "undefined" : _typeof(value))) {
                    /** @type {string} */
                    body = value;
                  } else {
                    if ("string" == typeof value && value.startsWith("{") && value.endsWith("}")) {
                      /** @type {*} */
                      body = JSON.parse(value);
                    } else {
                      if ("string" == typeof value) {
                        errors.push("(" + value + ")");
                      }
                    }
                  }
                }
              } else {
                if ("$A" === name) {
                  /** @type {string} */
                  errbuffer = ("" + value).trim();
                } else {
                  if ("$O" === name) {
                    /** @type {string} */
                    c = ("" + value).trim();
                  } else {
                    if ("$H" === name) {
                      /** @type {string} */
                      projectFilterPatterns = ("" + value).trim();
                    } else {
                      if ("$source" === name) {
                        if ("*" === value) {
                          /** @type {string} */
                          layer = "*";
                        } else {
                          if (value && value.indexOf && value.indexOf(",")) {
                            var pipelets = value.split(",") || [];
                            /** @type {!Array} */
                            var includes = [];
                            /** @type {!Array} */
                            var excludes = [];
                            pipelets.forEach(function(url) {
                              if (url = (url || "").trim()) {
                                if (url.startsWith("!")) {
                                  excludes.push(url.substr(1));
                                } else {
                                  includes.push(url);
                                }
                              }
                            });
                            layer = {
                              includes : includes,
                              excludes : excludes
                            };
                          } else {
                            /** @type {string} */
                            layer = value;
                          }
                        }
                      } else {
                        if ("$exist" === name || "$exists" === name) {
                          var pipelets = value.split(",") || [];
                          pipelets.forEach(function(name) {
                            if (name = (name || "").trim()) {
                              if (name.startsWith("!")) {
                                errors.push("NOT _exists_:" + name.substr(1));
                              } else {
                                errors.push("_exists_:" + name);
                              }
                            }
                          });
                        } else {
                          if (value && "string" == typeof value) {
                            if (!(value.startsWith("(") && value.endsWith(")"))) {
                              if (0 < value.indexOf(" ") || 0 < value.indexOf("\n") || 0 < value.indexOf(":") || 0 < value.indexOf("^")) {
                                /** @type {string} */
                                value = '"' + (value = value.replace(/(["'])/gi, "\\$1")) + '"';
                              } else {
                                if (0 < value.indexOf(",")) {
                                  /** @type {!Array<?>} */
                                  value = value.split(",").map(function(delimiter) {
                                    return (delimiter || "").trim();
                                  });
                                }
                              }
                            }
                          }
                          if (name.startsWith("!")) {
                            if (value) {
                              if (Array.isArray(value)) {
                                value.forEach(function(val) {
                                  if (val) {
                                    errors.push("NOT " + name.substr(1) + ":" + val);
                                  }
                                });
                              } else {
                                errors.push("NOT " + name.substr(1) + ":" + value);
                              }
                            } else {
                              errors.push("_exists_:" + name.substr(1));
                            }
                          } else {
                            if (name.startsWith("#")) {
                              if ((layer = layer || {
                                includes : [],
                                excludes : []
                              }) && layer.includes) {
                                layer.includes.push(name.substr(1));
                              }
                            } else {
                              if (Array.isArray(value)) {
                                errors.push("(" + value.map(function(major) {
                                  return name + ":" + major;
                                }).join(" OR ") + ")");
                              } else {
                                errors.push(name + ":" + value);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        return errors;
      }, []);
      var item = body || r.length && {
        query : {
          query_string : {
            query : r.join(" AND ")
          }
        }
      } || {};
      if (errbuffer) {
        var aggs = errbuffer.split(",").reduce(function(data, key) {
          if (key = ("" + key).trim()) {
            if (0 < key.indexOf(":")) {
              /** @type {!Array<string>} */
              var _qualifiedName$split6 = key.split(":", 2);
              var _qualifiedName$split62 = _slicedToArray(_qualifiedName$split6, 2);
              var fieldId = _qualifiedName$split62[0];
              var value = _qualifiedName$split62[1];
              data[fieldId] = {
                terms : {
                  field : fieldId,
                  size : parseInt(value)
                }
              };
            } else {
              data[key] = {
                terms : {
                  field : key
                }
              };
            }
          }
          return data;
        }, {});
        item.aggs = aggs;
      }
      if (c) {
        var order = c.split(",").reduce(function(_this, line) {
          if (line = ("" + line).trim()) {
            /** @type {string} */
            var type = line;
            /** @type {boolean} */
            var desc = true;
            if (line.startsWith("!")) {
              /** @type {string} */
              type = line.slice(1);
              /** @type {boolean} */
              desc = false;
            }
            if (type) {
              _this.push(_defineProperty({}, type, {
                order : desc ? "asc" : "desc"
              }));
            }
          }
          return _this;
        }, []);
        if (order.length) {
          item.sort = order;
        }
      }
      if (projectFilterPatterns) {
        var origFields = projectFilterPatterns.split(",").reduce(function(resource_object, name) {
          return (name = ("" + name).trim()) && (resource_object[name] = {
            type : "unified"
          }), resource_object;
        }, {});
        item.highlight = {};
        item.highlight.fields = origFields;
      }
      return -1 < size && (item.size = size, -1 < dx && (item.from = dx * size)), null !== layer && (item._source = layer), item;
    };
    {
      config = init(key);
    }
    debug(name, "> search(" + result + "/" + r + ") query = ", self.json(config));
    var expected = {
      index : result,
      type : r,
      body : config
    };
    return c.search(expected).then(function(canCreateDiscussions) {
      return canCreateDiscussions;
    }).catch(function(result) {
      var value = result.body && result.body.error && result.body.error.root_cause && (result.body.error.root_cause[0] || result.body.error) || {
        type : result.displayName || result.status,
        reason : result.message
      };
      throw callback(name, "search-item error=", value && value.type || "", ", reason=", value && value.reason || ""), value;
    });
  };
  /**
   * @param {number} obj
   * @return {?}
   */
  vm.do_test_self = function(obj) {
    debug(name, "- do_test_self()... param=", obj = obj || {});
    var r = self.promise(obj);
    /** @type {string} */
    var options = "test-v1";
    /** @type {string} */
    var res = "mytype";
    /** @type {number} */
    var callback = 1000001;
    var profile = {
      name : "test-me"
    };
    var body = {
      name : "test-you",
      age : 1
    };
    var data = {
      age : 2,
      nick : "N2"
    };
    r = r.then(function() {
      return debug(name, "- create-index...."), validate(options).then(function(value) {
        return debug(name, "> created-index =", value), value;
      }).catch(function(value) {
        return debug(name, "> error=", value), value;
      });
    });
    r = r.then(function() {
      return debug(name, "- create-document(" + options + ")..."), login(options, res, callback, profile).then(function(value) {
        return debug(name, "> result =", value), value;
      }).catch(function(value) {
        return debug(name, "> error =", value), value;
      });
    });
    r = r.then(function() {
      return debug(name, "- get-document(" + options + ")..."), next(options, res, callback).then(function(value) {
        return debug(name, "> result =", value), value;
      }).catch(function(value) {
        return debug(name, "> error =", value), value;
      });
    });
    r = r.then(function() {
      return debug(name, "- update-document(" + options + ")..."), debug(name, "> document=", self.json(data)), update(options, res, callback, data).then(function(value) {
        return debug(name, "> result =", value), value;
      }).then(function() {
        return next(options, res, callback).then(function(value) {
          return debug(name, "> updated-doc =", value), value;
        });
      }).catch(function(value) {
        return debug(name, "> error =", value), value;
      });
    });
    r = r.then(function() {
      return debug(name, "- get-document(" + options + ")..."), next(options, res, callback, body).then(function(value) {
        return debug(name, "> result =", value), value;
      }).catch(function(value) {
        return debug(name, "> error =", value), value;
      });
    });
    r = r.then(function() {
      return debug(name, "- delete-document(" + options + ")..."), save(options, res, callback).then(function(value) {
        return debug(name, "> result =", value), value;
      }).then(function() {
        return next(options, res, callback).then(function(value) {
          return debug(name, "> deleted-doc =", value), value;
        });
      }).catch(function(value) {
        return debug(name, "> error =", value), value;
      });
    });
    return r;
  };
  opts(app, vm);
  var options = {
    region : self.env("ES6_REGION", new Error(name + ":ES6_REGION is required!")),
    endpoint : self.env("ES6_ENDPOINT", new Error(name + ":ES6_ENDPOINT is required!"))
  };
  var c = new (require("elasticsearch").Client)({
    host : options.endpoint
  });
  return vm;
};


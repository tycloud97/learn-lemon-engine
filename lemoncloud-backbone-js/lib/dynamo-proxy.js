"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(t,i){i=i||"DS";var e=t.U,r=t._;if(!e)throw new Error("$U is required!");if(!r)throw new Error("$_ is required!");var s=e.NS(i,"magenta"),n=(t.log,t.inf,t.err,{do_create_table:function(e,r,t){if(!e)return Promise.reject(new Error(s+"parameter:table is required"));var i={idName:r,idType:t};return m().do_get(e,"0","create-table",i).then(function(e){return e.result})},do_delete_table:function(e){if(!e)return Promise.reject(new Error(s+"parameter:table is required"));var r=void 0;return m().do_get(e,"0","delete-table",r).then(function(e){return e.result})},do_list_tables:function(e,r){e=e||"#";var t={limit:r};return m().do_get(e,"0","list-table",t).then(function(e){return e.result})},do_create_item:function(e,r,t){if(!e)return Promise.reject(new Error(s+"parameter:table is required"));if(!r)return Promise.reject(new Error(s+"parameter:id is required"));if(!t)return Promise.reject(new Error(s+"parameter:data is required"));if("object"!==(void 0===t?"undefined":_typeof(t)))return Promise.reject(new Error(s+"parameter:data must be object"));var i={};if(r&&"object"===(void 0===r?"undefined":_typeof(r))){var n=r,o=n.idType;delete n.idType;var u=Object.keys(n);if(1!==u.length)return Promise.reject(new Error(s+":id is un-expected keys."));var d=u.pop()||"";r=n[d],i.idName=d,i.idType=o||("number"==typeof r?"Number":"String")}return m().do_post(e,r,void 0,i,t).then(function(e){return e.result})},do_get_item:function(e,r){if(!e)return Promise.reject(new Error(s+"parameter:table is required"));if(!r)return Promise.reject(new Error(s+"parameter:id is required"));var t={};if(r&&"object"===(void 0===r?"undefined":_typeof(r))){var i=r,n=i.idType;delete i.idType;var o=Object.keys(i);if(1!==o.length)return Promise.reject(new Error(s+":id is un-expected keys."));var u=o.pop()||"";r=i[u],t.idName=u,t.idType=n||("number"==typeof r?"Number":"String")}return m().do_get(e,r,void 0,t).then(function(e){return e.result})},do_delete_item:function(e,r){if(!e)return Promise.reject(new Error(s+"parameter:table is required"));if(!r)return Promise.reject(new Error(s+"parameter:id is required"));var t={};if(r&&"object"===(void 0===r?"undefined":_typeof(r))){var i=r,n=i.idType;delete i.idType;var o=Object.keys(i);if(1!==o.length)return Promise.reject(new Error(s+":id is un-expected keys."));var u=o.pop()||"";r=i[u],t.idName=u,t.idType=n||("number"==typeof r?"Number":"String")}return m().do_delete(e,r,void 0,t).then(function(e){return e.result})},do_update_item:function(e,r,t,i){if(!e)return Promise.reject(new Error(s+"parameter:table is required"));if(!r)return Promise.reject(new Error(s+"parameter:id is required"));if(!t)return Promise.reject(new Error(s+"parameter:data is required"));if("object"!==(void 0===t?"undefined":_typeof(t)))return Promise.reject(new Error(s+"parameter:data must be object"));var n={};if(r&&"object"===(void 0===r?"undefined":_typeof(r))){var o=r,u=o.idType;delete o.idType;var d=Object.keys(o);if(1!==d.length)return Promise.reject(new Error(s+":id is un-expected keys."));var a=d.pop()||"";r=o[a],n.idName=a,n.idType=u||("number"==typeof r?"Number":"String")}var f=t||{};i&&(f.$I=i);return m().do_put(e,r,void 0,n,f).then(function(e){return e.result})},do_increment_item:function(e,r,t,i){if(!e)return Promise.reject(new Error(s+"parameter:table is required"));if(!r)return Promise.reject(new Error(s+"parameter:id is required"));if(!t)return Promise.reject(new Error(s+"parameter:data is required"));if("object"!==(void 0===t?"undefined":_typeof(t)))return Promise.reject(new Error(s+"parameter:data must be object"));var n={};if(r&&"object"===(void 0===r?"undefined":_typeof(r))){var o=r,u=o.idType;delete o.idType;var d=Object.keys(o);if(1!==d.length)return Promise.reject(new Error(s+":id is un-expected keys."));var a=d.pop()||"";r=o[a],n.idName=a,n.idType=u||("number"==typeof r?"Number":"String")}var f=t||{};i&&(f.$I=i);return m().do_put(e,r,"increment",n,f).then(function(e){return e.result})},do_test_self:function(e){var r=e||{};return m().do_get("#","0","test-self",r).then(function(e){return e.result})},do_read_stream:function(e){var r=e||{},t=r.table;return delete r.table,m().do_get(t,"0","stream",r)}});t(i,n);var o=e.env("DS_ENDPOINT"),u=require("./http-proxy"),m=function(){if(!o)throw new Error("env:DS_ENDPOINT is required!");var e="X"+i,r=t(e);return r||u(t,e,o)};return n};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uuid) {
  return typeof uuid;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {!Object} p
 * @param {string} i
 * @return {?}
 */
module.exports = function(p, i) {
  i = i || "DS";
  var Y = p.U;
  var _ = p._;
  if (!Y) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var who = Y.NS(i, "magenta");
  var val = (p.log, p.inf, p.err, {
    do_create_table : function(deploymentVersionId, isSlidingUp, $cont) {
      if (!deploymentVersionId) {
        return Promise.reject(new Error(who + "parameter:table is required"));
      }
      var result = {
        idName : isSlidingUp,
        idType : $cont
      };
      return makeScrollBarDecorator().do_get(deploymentVersionId, "0", "create-table", result).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_delete_table : function(deploymentVersionId) {
      if (!deploymentVersionId) {
        return Promise.reject(new Error(who + "parameter:table is required"));
      }
      var customerGroupKey = void 0;
      return makeScrollBarDecorator().do_get(deploymentVersionId, "0", "delete-table", customerGroupKey).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_list_tables : function(word, limit) {
      word = word || "#";
      var queryParams = {
        limit : limit
      };
      return makeScrollBarDecorator().do_get(word, "0", "list-table", queryParams).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_create_item : function(descriptorUUID, value, body) {
      if (!descriptorUUID) {
        return Promise.reject(new Error(who + "parameter:table is required"));
      }
      if (!value) {
        return Promise.reject(new Error(who + "parameter:id is required"));
      }
      if (!body) {
        return Promise.reject(new Error(who + "parameter:data is required"));
      }
      if ("object" !== (void 0 === body ? "undefined" : _typeof(body))) {
        return Promise.reject(new Error(who + "parameter:data must be object"));
      }
      var options = {};
      if (value && "object" === (void 0 === value ? "undefined" : _typeof(value))) {
        /** @type {!Array} */
        var config = value;
        var type = config.idType;
        delete config.idType;
        /** @type {!Array<string>} */
        var deadPool = Object.keys(config);
        if (1 !== deadPool.length) {
          return Promise.reject(new Error(who + ":id is un-expected keys."));
        }
        /** @type {string} */
        var scope = deadPool.pop() || "";
        value = config[scope];
        /** @type {string} */
        options.idName = scope;
        options.idType = type || ("number" == typeof value ? "Number" : "String");
      }
      return makeScrollBarDecorator().do_post(descriptorUUID, value, void 0, options, body).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_get_item : function(descriptorUUID, value) {
      if (!descriptorUUID) {
        return Promise.reject(new Error(who + "parameter:table is required"));
      }
      if (!value) {
        return Promise.reject(new Error(who + "parameter:id is required"));
      }
      var options = {};
      if (value && "object" === (void 0 === value ? "undefined" : _typeof(value))) {
        /** @type {!Array} */
        var config = value;
        var type = config.idType;
        delete config.idType;
        /** @type {!Array<string>} */
        var deadPool = Object.keys(config);
        if (1 !== deadPool.length) {
          return Promise.reject(new Error(who + ":id is un-expected keys."));
        }
        /** @type {string} */
        var scope = deadPool.pop() || "";
        value = config[scope];
        /** @type {string} */
        options.idName = scope;
        options.idType = type || ("number" == typeof value ? "Number" : "String");
      }
      return makeScrollBarDecorator().do_get(descriptorUUID, value, void 0, options).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_delete_item : function(descriptorUUID, value) {
      if (!descriptorUUID) {
        return Promise.reject(new Error(who + "parameter:table is required"));
      }
      if (!value) {
        return Promise.reject(new Error(who + "parameter:id is required"));
      }
      var options = {};
      if (value && "object" === (void 0 === value ? "undefined" : _typeof(value))) {
        /** @type {!Array} */
        var config = value;
        var type = config.idType;
        delete config.idType;
        /** @type {!Array<string>} */
        var o = Object.keys(config);
        if (1 !== o.length) {
          return Promise.reject(new Error(who + ":id is un-expected keys."));
        }
        /** @type {string} */
        var scope = o.pop() || "";
        value = config[scope];
        /** @type {string} */
        options.idName = scope;
        options.idType = type || ("number" == typeof value ? "Number" : "String");
      }
      return makeScrollBarDecorator().do_delete(descriptorUUID, value, void 0, options).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_update_item : function(descriptorUUID, value, i, provider) {
      if (!descriptorUUID) {
        return Promise.reject(new Error(who + "parameter:table is required"));
      }
      if (!value) {
        return Promise.reject(new Error(who + "parameter:id is required"));
      }
      if (!i) {
        return Promise.reject(new Error(who + "parameter:data is required"));
      }
      if ("object" !== (void 0 === i ? "undefined" : _typeof(i))) {
        return Promise.reject(new Error(who + "parameter:data must be object"));
      }
      var options = {};
      if (value && "object" === (void 0 === value ? "undefined" : _typeof(value))) {
        /** @type {!Array} */
        var config = value;
        var type = config.idType;
        delete config.idType;
        /** @type {!Array<string>} */
        var deadPool = Object.keys(config);
        if (1 !== deadPool.length) {
          return Promise.reject(new Error(who + ":id is un-expected keys."));
        }
        /** @type {string} */
        var scope = deadPool.pop() || "";
        value = config[scope];
        /** @type {string} */
        options.idName = scope;
        options.idType = type || ("number" == typeof value ? "Number" : "String");
      }
      var replace = i || {};
      if (provider) {
        replace.$I = provider;
      }
      return makeScrollBarDecorator().do_put(descriptorUUID, value, void 0, options, replace).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_increment_item : function(descriptorUUID, value, i, provider) {
      if (!descriptorUUID) {
        return Promise.reject(new Error(who + "parameter:table is required"));
      }
      if (!value) {
        return Promise.reject(new Error(who + "parameter:id is required"));
      }
      if (!i) {
        return Promise.reject(new Error(who + "parameter:data is required"));
      }
      if ("object" !== (void 0 === i ? "undefined" : _typeof(i))) {
        return Promise.reject(new Error(who + "parameter:data must be object"));
      }
      var options = {};
      if (value && "object" === (void 0 === value ? "undefined" : _typeof(value))) {
        /** @type {!Array} */
        var config = value;
        var type = config.idType;
        delete config.idType;
        /** @type {!Array<string>} */
        var deadPool = Object.keys(config);
        if (1 !== deadPool.length) {
          return Promise.reject(new Error(who + ":id is un-expected keys."));
        }
        /** @type {string} */
        var scope = deadPool.pop() || "";
        value = config[scope];
        /** @type {string} */
        options.idName = scope;
        options.idType = type || ("number" == typeof value ? "Number" : "String");
      }
      var replace = i || {};
      if (provider) {
        replace.$I = provider;
      }
      return makeScrollBarDecorator().do_put(descriptorUUID, value, "increment", options, replace).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_test_self : function(ownerCount) {
      var owner_count = ownerCount || {};
      return makeScrollBarDecorator().do_get("#", "0", "test-self", owner_count).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_read_stream : function(canCreateDiscussions) {
      var gridOpts = canCreateDiscussions || {};
      var table = gridOpts.table;
      return delete gridOpts.table, makeScrollBarDecorator().do_get(table, "0", "stream", gridOpts);
    }
  });
  p(i, val);
  var was_new = Y.env("DS_ENDPOINT");
  var f = require("./http-proxy");
  /**
   * @return {?}
   */
  var makeScrollBarDecorator = function() {
    if (!was_new) {
      throw new Error("env:DS_ENDPOINT is required!");
    }
    var index = "X" + i;
    var r = p(index);
    return r || f(p, index, was_new);
  };
  return val;
};


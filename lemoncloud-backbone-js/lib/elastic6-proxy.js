"use strict";module.exports=function(t,i){i=i||"ES6";var r=t.U,e=t._;if(!r)throw new Error("$U is required!");if(!e)throw new Error("$_ is required!");var u=r.NS(i,"cyan"),n={},o=t.log;t.inf,t.err;n.do_create_index_type=function(r,e,t){if(!r)return Promise.reject(new Error(u+"index is required"));var i=Object.assign({},{});return d().do_post(r,"0","create-index",i,t).then(function(r){return r.result})},n.do_delete_index_type=function(r,e,t){if(!r)return Promise.reject(new Error(u+"index is required"));var i=Object.assign({},{});return d().do_post(r,"0","delete-index",i,t).then(function(r){return r.result})},n.do_create_item=function(r,e,t,i){if(!r)return Promise.reject(new Error(u+"parameter:index is required"));if(!e)return Promise.reject(new Error(u+"parameter:type is required"));if(!t)return Promise.reject(new Error(u+"parameter:id is required"));if(!i)return Promise.reject(new Error(u+"parameter:data is required"));var n=Object.assign({},{});return n.$type=e,d().do_post(r,t,void 0,n,i).then(function(r){return r.result})},n.do_push_item=function(r,e,t,i){if(!r)return Promise.reject(new Error(u+"parameter:index is required"));if(!e)return Promise.reject(new Error(u+"parameter:type is required"));if(!t)return Promise.reject(new Error(u+"parameter:data is required"));var n=Object.assign({},{});return n.$type=e,i=""===(i=i||"")?"0":"",d().do_post(r,i,"push",n,t).then(function(r){return r.result})},n.do_get_item=function(r,e,t,i){if(!r)return Promise.reject(new Error(u+"parameter:index is required"));if(!e)return Promise.reject(new Error(u+"parameter:type is required"));if(!t)return Promise.reject(new Error(u+"parameter:id is required"));var n=Object.assign({},{});return n.$type=e,d().do_get(r,t,void 0,n,i).then(function(r){return r.result})},n.do_delete_item=function(r,e,t){if(!r)return Promise.reject(new Error(u+"parameter:index is required"));if(!e)return Promise.reject(new Error(u+"parameter:type is required"));if(!t)return Promise.reject(new Error(u+"parameter:id is required"));var i=Object.assign({},{});return i.$type=e,d().do_delete(r,t,void 0,i).then(function(r){return r.result})},n.do_update_item=function(r,e,t,i){if(!r)return Promise.reject(new Error(u+"parameter:index is required"));if(!e)return Promise.reject(new Error(u+"parameter:type is required"));if(!t)return Promise.reject(new Error(u+"parameter:id is required"));if(!i)return Promise.reject(new Error(u+"parameter:data is required"));var n=Object.assign({},{});return n.$type=e,d().do_put(r,t,void 0,n,i).then(function(r){return r.result})},n.do_search_item=function(r,e,t){if(!r)return Promise.reject(new Error(u+"parameter:index is required"));if(!t)return Promise.reject(new Error(u+"parameter:param is required"));var i=Object.assign({},t||{});return i.$type=e,d().do_get(r,"",void 0,i).then(function(r){return r.result})},n.do_test_self=function(r){o(u,"- do_test_self()... param=",r=r||{});var e=Object.assign({},r||{});return d().do_get("#","0","test-self",e).then(function(r){return r.result})},t(i,n);var s=r.env("ES6_ENDPOINT"),a=require("./http-proxy"),d=function(){if(!s)throw new Error("env:ES6_ENDPOINT is required!");var r="X"+i,e=t(r);return e||a(t,r,s)};return n};'use strict';
/**
 * @param {!Object} p
 * @param {string} value
 * @return {?}
 */
module.exports = function(p, value) {
  value = value || "ES6";
  var constants = p.U;
  var _ = p._;
  if (!constants) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var x = constants.NS(value, "cyan");
  var val = {};
  var f = p.log;
  p.inf;
  p.err;
  /**
   * @param {?} courseId
   * @param {?} acceptStatement
   * @param {?} siteId
   * @return {?}
   */
  val.do_create_index_type = function(courseId, acceptStatement, siteId) {
    if (!courseId) {
      return Promise.reject(new Error(x + "index is required"));
    }
    /** @type {!Object} */
    var customerGroupKey = Object.assign({}, {});
    return makeScrollBarDecorator().do_post(courseId, "0", "create-index", customerGroupKey, siteId).then(function(jptResponseObj) {
      return jptResponseObj.result;
    });
  };
  /**
   * @param {?} courseId
   * @param {?} acceptStatement
   * @param {?} siteId
   * @return {?}
   */
  val.do_delete_index_type = function(courseId, acceptStatement, siteId) {
    if (!courseId) {
      return Promise.reject(new Error(x + "index is required"));
    }
    /** @type {!Object} */
    var customerGroupKey = Object.assign({}, {});
    return makeScrollBarDecorator().do_post(courseId, "0", "delete-index", customerGroupKey, siteId).then(function(jptResponseObj) {
      return jptResponseObj.result;
    });
  };
  /**
   * @param {?} driverId
   * @param {string} type
   * @param {?} name
   * @param {?} uuid
   * @return {?}
   */
  val.do_create_item = function(driverId, type, name, uuid) {
    if (!driverId) {
      return Promise.reject(new Error(x + "parameter:index is required"));
    }
    if (!type) {
      return Promise.reject(new Error(x + "parameter:type is required"));
    }
    if (!name) {
      return Promise.reject(new Error(x + "parameter:id is required"));
    }
    if (!uuid) {
      return Promise.reject(new Error(x + "parameter:data is required"));
    }
    /** @type {!Object} */
    var cache = Object.assign({}, {});
    return cache.$type = type, makeScrollBarDecorator().do_post(driverId, name, void 0, cache, uuid).then(function(jptResponseObj) {
      return jptResponseObj.result;
    });
  };
  /**
   * @param {?} driverId
   * @param {string} type
   * @param {?} ast
   * @param {string} name
   * @return {?}
   */
  val.do_push_item = function(driverId, type, ast, name) {
    if (!driverId) {
      return Promise.reject(new Error(x + "parameter:index is required"));
    }
    if (!type) {
      return Promise.reject(new Error(x + "parameter:type is required"));
    }
    if (!ast) {
      return Promise.reject(new Error(x + "parameter:data is required"));
    }
    /** @type {!Object} */
    var cache = Object.assign({}, {});
    return cache.$type = type, name = "" === (name = name || "") ? "0" : "", makeScrollBarDecorator().do_post(driverId, name, "push", cache, ast).then(function(jptResponseObj) {
      return jptResponseObj.result;
    });
  };
  /**
   * @param {?} driverId
   * @param {string} type
   * @param {?} name
   * @param {?} uuid
   * @return {?}
   */
  val.do_get_item = function(driverId, type, name, uuid) {
    if (!driverId) {
      return Promise.reject(new Error(x + "parameter:index is required"));
    }
    if (!type) {
      return Promise.reject(new Error(x + "parameter:type is required"));
    }
    if (!name) {
      return Promise.reject(new Error(x + "parameter:id is required"));
    }
    /** @type {!Object} */
    var cache = Object.assign({}, {});
    return cache.$type = type, makeScrollBarDecorator().do_get(driverId, name, void 0, cache, uuid).then(function(jptResponseObj) {
      return jptResponseObj.result;
    });
  };
  /**
   * @param {?} driverId
   * @param {string} type
   * @param {?} t
   * @return {?}
   */
  val.do_delete_item = function(driverId, type, t) {
    if (!driverId) {
      return Promise.reject(new Error(x + "parameter:index is required"));
    }
    if (!type) {
      return Promise.reject(new Error(x + "parameter:type is required"));
    }
    if (!t) {
      return Promise.reject(new Error(x + "parameter:id is required"));
    }
    /** @type {!Object} */
    var cache = Object.assign({}, {});
    return cache.$type = type, makeScrollBarDecorator().do_delete(driverId, t, void 0, cache).then(function(jptResponseObj) {
      return jptResponseObj.result;
    });
  };
  /**
   * @param {?} driverId
   * @param {string} type
   * @param {?} name
   * @param {?} uuid
   * @return {?}
   */
  val.do_update_item = function(driverId, type, name, uuid) {
    if (!driverId) {
      return Promise.reject(new Error(x + "parameter:index is required"));
    }
    if (!type) {
      return Promise.reject(new Error(x + "parameter:type is required"));
    }
    if (!name) {
      return Promise.reject(new Error(x + "parameter:id is required"));
    }
    if (!uuid) {
      return Promise.reject(new Error(x + "parameter:data is required"));
    }
    /** @type {!Object} */
    var cache = Object.assign({}, {});
    return cache.$type = type, makeScrollBarDecorator().do_put(driverId, name, void 0, cache, uuid).then(function(jptResponseObj) {
      return jptResponseObj.result;
    });
  };
  /**
   * @param {?} driverId
   * @param {string} type
   * @param {number} caps
   * @return {?}
   */
  val.do_search_item = function(driverId, type, caps) {
    if (!driverId) {
      return Promise.reject(new Error(x + "parameter:index is required"));
    }
    if (!caps) {
      return Promise.reject(new Error(x + "parameter:param is required"));
    }
    /** @type {!Object} */
    var cache = Object.assign({}, caps || {});
    return cache.$type = type, makeScrollBarDecorator().do_get(driverId, "", void 0, cache).then(function(jptResponseObj) {
      return jptResponseObj.result;
    });
  };
  /**
   * @param {number} types
   * @return {?}
   */
  val.do_test_self = function(types) {
    f(x, "- do_test_self()... param=", types = types || {});
    /** @type {!Object} */
    var customerGroupKey = Object.assign({}, types || {});
    return makeScrollBarDecorator().do_get("#", "0", "test-self", customerGroupKey).then(function(jptResponseObj) {
      return jptResponseObj.result;
    });
  };
  p(value, val);
  var event = constants.env("ES6_ENDPOINT");
  var extend = require("./http-proxy");
  /**
   * @return {?}
   */
  var makeScrollBarDecorator = function() {
    if (!event) {
      throw new Error("env:ES6_ENDPOINT is required!");
    }
    var key = "X" + value;
    var result = p(key);
    return result || extend(p, key, event);
  };
  return val;
};


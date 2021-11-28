"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};module.exports=function(o,t){t=t||"SE";var r=o.U,e=o._;if(!r)throw new Error("$U is required!");if(!e)throw new Error("$_ is required!");r.NS(t,"yellow"),o.log,o.inf,o.err;var n={do_send_email:function(r){return r?"object"!=(void 0===r?"undefined":_typeof(r))?Promise.reject("payload:object is required!"):f().do_post("email","0","send",void 0,r).then(function(r){return r.result}):Promise.reject("payload is required!")}};o(t,n);var i=r.env("SE_ENDPOINT"),u=require("./http-proxy"),f=function(){if(!i)throw new Error("env:SE_ENDPOINT is required!");var r="X"+t,e=o(r);return e||u(o,r,i)};return n};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {!Object} p
 * @param {string} value
 * @return {?}
 */
module.exports = function(p, value) {
  value = value || "SE";
  var self = p.U;
  var _ = p._;
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  self.NS(value, "yellow");
  p.log;
  p.inf;
  p.err;
  var val = {
    do_send_email : function(value) {
      return value ? "object" != (void 0 === value ? "undefined" : _typeof(value)) ? Promise.reject("payload:object is required!") : f().do_post("email", "0", "send", void 0, value).then(function(jptResponseObj) {
        return jptResponseObj.result;
      }) : Promise.reject("payload is required!");
    }
  };
  p(value, val);
  var alwaysDownload = self.env("SE_ENDPOINT");
  var isNaN = require("./http-proxy");
  /**
   * @return {?}
   */
  var f = function() {
    if (!alwaysDownload) {
      throw new Error("env:SE_ENDPOINT is required!");
    }
    var key = "X" + value;
    var v = p(key);
    return v || isNaN(p, key, alwaysDownload);
  };
  return val;
};


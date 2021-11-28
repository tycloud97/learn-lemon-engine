"use strict";module.exports=function(t,o){o=o||"S3";var e=t.U,r=t._;if(!e)throw new Error("$U is required!");if(!r)throw new Error("$_ is required!");var i=e.NS(o,"yellow"),n=t.log,u=(t.inf,t.err,{do_upload:function(e,r,t,o){return e?r?t?(o=o||"",c().do_post(e,"0","upload",void 0,{fileName:r,fileStream:t,contentType:o}).then(function(e){return e.result})):Promise.reject(new Error("filestream is required!")):Promise.reject(new Error("filename is required!")):Promise.reject(new Error("bucket is required!"))},do_get_object:function(e,r){return e?r?c().do_post(e,"0","get-object",void 0,{fileName:r}).then(function(e){return e.result}):Promise.reject(new Error("filename is required!")):Promise.reject(new Error("bucket is required!"))},do_test_self:function(e){n(i,"do_test_self()... param=",e=e||{});var r=Object.assign({},e||{});return c().do_get("#","0","test-self",r).then(function(e){return e.result})}});t(o,u);var s=e.env("S3_ENDPOINT"),f=require("./http-proxy"),c=function(){if(!s)throw new Error("env:S3_ENDPOINT is required!");var e="X"+o,r=t(e);return r||f(t,e,s)};return u};'use strict';
/**
 * @param {!Object} $
 * @param {string} rate
 * @return {?}
 */
module.exports = function($, rate) {
  rate = rate || "S3";
  var self = $.U;
  var _ = $._;
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var rates = self.NS(rate, "yellow");
  var callback = $.log;
  var template = ($.inf, $.err, {
    do_upload : function(files, entry, file, contentType) {
      return files ? entry ? file ? (contentType = contentType || "", hide().do_post(files, "0", "upload", void 0, {
        fileName : entry,
        fileStream : file,
        contentType : contentType
      }).then(function(jptResponseObj) {
        return jptResponseObj.result;
      })) : Promise.reject(new Error("filestream is required!")) : Promise.reject(new Error("filename is required!")) : Promise.reject(new Error("bucket is required!"));
    },
    do_get_object : function(f, url) {
      return f ? url ? hide().do_post(f, "0", "get-object", void 0, {
        fileName : url
      }).then(function(jptResponseObj) {
        return jptResponseObj.result;
      }) : Promise.reject(new Error("filename is required!")) : Promise.reject(new Error("bucket is required!"));
    },
    do_test_self : function(extra) {
      callback(rates, "do_test_self()... param=", extra = extra || {});
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, extra || {});
      return hide().do_get("#", "0", "test-self", customerGroupKey).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    }
  });
  $(rate, template);
  var next = self.env("S3_ENDPOINT");
  var random = require("./http-proxy");
  /**
   * @return {?}
   */
  var hide = function() {
    if (!next) {
      throw new Error("env:S3_ENDPOINT is required!");
    }
    var range = "X" + rate;
    var r = $(range);
    return r || random($, range, next);
  };
  return template;
};


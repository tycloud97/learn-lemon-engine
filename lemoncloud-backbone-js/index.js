"use strict";function initialize(r,e){var i=this;if(!r)throw new Error("$export is required.");if(!i)throw new Error("_$ is required.");if("function"!=typeof i)throw new Error("_$ should be function.");var o=i.log,s=i.inf,n=(i.err,i.environ("STAGE",""));n&&s("#STAGE =",n);var t={hostname:i.environ("HOSTNAME",new Error("evn:HOSTNAME is required")),database:i.environ("DATABASE",new Error("evn:DATABASE is required")),username:i.environ("USERNAME",new Error("evn:USERNAME is required")),password:i.environ("PASSWORD",new Error("evn:PASSWORD is required"))};o("#CONN.HOST =",t.hostname);var a=require("./lib/connection")(i),u=require("./lib/utilities")(i),c=a.connect(t),l=require("aws-sdk");i("C",a),i("U",u),i("R",c),i("aws",l),"proxy"!==n?(require("./service/mysql-service")(i,"MS"),require("./service/dynamo-service")(i,"DS"),require("./service/mongo-service")(i,"GS"),require("./service/redis-service")(i,"RS"),require("./service/elasticsearch-service")(i,"ES"),require("./service/elastic6-service")(i,"ES6"),require("./service/sqs-service")(i,"SS"),require("./service/sns-service")(i,"SN"),require("./service/ses-service")(i,"SE"),require("./service/web-service")(i,"WS"),require("./service/cognito-service")(i,"CS"),require("./service/lambda-service")(i,"LS"),require("./service/s3-service")(i,"S3"),require("./service/cron-service")(i,"CR")):(s("WARN! backbone proxy activated!"),require("./lib/mysql-proxy")(i,"MS"),require("./lib/dynamo-proxy")(i,"DS"),require("./lib/mongo-proxy")(i,"GS"),require("./lib/redis-proxy")(i,"RS"),require("./lib/elastic-proxy")(i,"ES"),require("./lib/elastic6-proxy")(i,"ES6"),require("./lib/sqs-proxy")(i,"SS"),require("./lib/sns-proxy")(i,"SN"),require("./lib/ses-proxy")(i,"SE"),require("./lib/web-proxy")(i,"WS"),require("./lib/cognito-proxy")(i,"CS"),require("./lib/lambda-proxy")(i,"LS"),require("./lib/s3-proxy")(i,"S3"),require("./lib/cron-proxy")(i,"CR"));var p=u.env("DD_ENDPOINT","");if(p.startsWith("#")){if("#mongo"!=p)throw new Error("unknown endpoint:"+p);i("DS",i.GS)}var v=require("./api/dynamo-api")(i),q=require("./api/mongo-api")(i),S=require("./api/elastic-api")(i),d=require("./api/elastic6-api")(i),y=require("./api/mysql-api")(i),f=require("./api/redis-api")(i),h=require("./api/sqs-api")(i),E=require("./api/sns-api")(i),b=require("./api/ses-api")(i),m=require("./api/web-api")(i),A=require("./api/cognito-api")(i),g=require("./api/lambda-api")(i),w=require("./api/protocol-api")(i),x=require("./api/s3-api")(i),_=require("./api/cron-api")(i);return Object.assign(r,{dynamo:v,mongo:q,elastic:S,elastic6:d,mysql:y,redis:f,sqs:h,sns:E,ses:b,web:m,cognito:A,lambda:g,protocol:w,s3:x,cron:_})}module.exports=function(r,s){r=r||new function(){};var e=(s=s||{}).name||"lemon",i=p("STAGE",""),o="local"===i||"express"===i||"1"===p("LC",""),n={thiz:console,log:console.log,error:console.error,auto_ts:o,auto_color:o},t=function(){var r=n.auto_ts&&!Array.isArray(arguments)&&Array.prototype.slice.call(arguments)||arguments;return n.auto_color?(r.unshift("[0m"),n.auto_ts&&r.unshift(l(),"L"),r.unshift("[32m")):n.auto_ts&&r.unshift(l(),"L"),n.log.apply(n.thiz,r)},a=function(){var r=n.auto_ts&&!Array.isArray(arguments)&&Array.prototype.slice.call(arguments)||arguments;return n.auto_color?(r.unshift(""),r.push("[0m"),n.auto_ts&&r.unshift(l(),"I"),r.unshift("[33m")):n.auto_ts&&r.unshift(l(),"I"),n.log.apply(n.thiz,r)},u=function(){var r=n.auto_ts&&!Array.isArray(arguments)&&Array.prototype.slice.call(arguments)||arguments;return n.auto_color?(r.unshift("[0m"),n.auto_ts&&r.unshift(l(),"E"),r.unshift("[31m")):n.auto_ts&&r.unshift(l(),"E"),n.error.apply(n.thiz,r)},c=function(r,e){for(var i in e){var o=e[i];void 0===o?delete r[i]:r[i]=o}return r};function l(r){var e=r||new Date,i=[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()],o=i[0],s=i[1],n=i[2],t=i[3],a=i[4],u=i[5];return(o<10?"0":"")+o+"-"+(s<10?"0":"")+s+"-"+(n<10?"0":"")+n+" "+(t<10?"0":"")+t+":"+(a<10?"0":"")+a+":"+(u<10?"0":"")+u}function p(r,e){var i=s.env||process&&process.env||{},o=i&&i[r]||void 0;if(e&&e instanceof Error&&void 0===o)throw e;return void 0===o?e:o}var v=function r(e,i){if(e){var o=r,s=void 0!==o[e]?o[e]:void 0;return void 0===i?s:void 0===s?(t("INFO! service["+e+"] registered"),o[e]=i):(u("WARN! service["+e+"] exists! so extends "),s=c(s=s||{},i=i||{}),o[e]=s)}};return v.STAGE=i,v.id=e,v.log=t,v.inf=a,v.err=u,v.extend=c,v.ts=l,v.environ=p,v.$console=n,v.toString=function(){return e||"$ROOT"},r._log=t,r._inf=a,r._err=u,r._$=v,(r[v.id]=v)("_",require("lodash/core")),initialize.apply(v,[r,s]),r};'use strict';
/**
 * @param {?} args
 * @param {?} quality
 * @return {?}
 */
function initialize(args, quality) {
  var callback = this;
  if (!args) {
    throw new Error("$export is required.");
  }
  if (!callback) {
    throw new Error("_$ is required.");
  }
  if ("function" != typeof callback) {
    throw new Error("_$ should be function.");
  }
  var log = callback.log;
  var func = callback.inf;
  var dom = (callback.err, callback.environ("STAGE", ""));
  if (dom) {
    func("#STAGE =", dom);
  }
  var params = {
    hostname : callback.environ("HOSTNAME", new Error("evn:HOSTNAME is required")),
    database : callback.environ("DATABASE", new Error("evn:DATABASE is required")),
    username : callback.environ("USERNAME", new Error("evn:USERNAME is required")),
    password : callback.environ("PASSWORD", new Error("evn:PASSWORD is required"))
  };
  log("#CONN.HOST =", params.hostname);
  var methods = require("./lib/connection")(callback);
  var el = require("./lib/utilities")(callback);
  var r = methods.connect(params);
  var aws = require("aws-sdk");
  callback("C", methods);
  callback("U", el);
  callback("R", r);
  callback("aws", aws);
  if ("proxy" !== dom) {
    require("./service/mysql-service")(callback, "MS");
    require("./service/dynamo-service")(callback, "DS");
    require("./service/mongo-service")(callback, "GS");
    require("./service/redis-service")(callback, "RS");
    require("./service/elasticsearch-service")(callback, "ES");
    require("./service/elastic6-service")(callback, "ES6");
    require("./service/sqs-service")(callback, "SS");
    require("./service/sns-service")(callback, "SN");
    require("./service/ses-service")(callback, "SE");
    require("./service/web-service")(callback, "WS");
    require("./service/cognito-service")(callback, "CS");
    require("./service/lambda-service")(callback, "LS");
    require("./service/s3-service")(callback, "S3");
    require("./service/cron-service")(callback, "CR");
  } else {
    func("WARN! backbone proxy activated!");
    require("./lib/mysql-proxy")(callback, "MS");
    require("./lib/dynamo-proxy")(callback, "DS");
    require("./lib/mongo-proxy")(callback, "GS");
    require("./lib/redis-proxy")(callback, "RS");
    require("./lib/elastic-proxy")(callback, "ES");
    require("./lib/elastic6-proxy")(callback, "ES6");
    require("./lib/sqs-proxy")(callback, "SS");
    require("./lib/sns-proxy")(callback, "SN");
    require("./lib/ses-proxy")(callback, "SE");
    require("./lib/web-proxy")(callback, "WS");
    require("./lib/cognito-proxy")(callback, "CS");
    require("./lib/lambda-proxy")(callback, "LS");
    require("./lib/s3-proxy")(callback, "S3");
    require("./lib/cron-proxy")(callback, "CR");
  }
  var protocol = el.env("DD_ENDPOINT", "");
  if (protocol.startsWith("#")) {
    if ("#mongo" != protocol) {
      throw new Error("unknown endpoint:" + protocol);
    }
    callback("DS", callback.GS);
  }
  var callbackTick = require("./api/dynamo-api")(callback);
  var mongo = require("./api/mongo-api")(callback);
  var elastic = require("./api/elastic-api")(callback);
  var changeFirstName = require("./api/elastic6-api")(callback);
  var dbConfig = require("./api/mysql-api")(callback);
  var options = require("./api/redis-api")(callback);
  var sqs = require("./api/sqs-api")(callback);
  var clbWrapper = require("./api/sns-api")(callback);
  var ses = require("./api/ses-api")(callback);
  var server = require("./api/web-api")(callback);
  var wrongfunc = require("./api/cognito-api")(callback);
  var lambda = require("./api/lambda-api")(callback);
  var p = require("./api/protocol-api")(callback);
  var s3 = require("./api/s3-api")(callback);
  var cron = require("./api/cron-api")(callback);
  return Object.assign(args, {
    dynamo : callbackTick,
    mongo : mongo,
    elastic : elastic,
    elastic6 : changeFirstName,
    mysql : dbConfig,
    redis : options,
    sqs : sqs,
    sns : clbWrapper,
    ses : ses,
    web : server,
    cognito : wrongfunc,
    lambda : lambda,
    protocol : p,
    s3 : s3,
    cron : cron
  });
}
/**
 * @param {!Object} self
 * @param {number} code
 * @return {?}
 */
module.exports = function(self, code) {
  /**
   * @param {!Date} date
   * @return {?}
   */
  function now(date) {
    var now = date || new Date;
    /** @type {!Array} */
    var d = [now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()];
    var month = d[0];
    var x = d[1];
    var num = d[2];
    var b = d[3];
    var r = d[4];
    var g = d[5];
    return (month < 10 ? "0" : "") + month + "-" + (x < 10 ? "0" : "") + x + "-" + (num < 10 ? "0" : "") + num + " " + (b < 10 ? "0" : "") + b + ":" + (r < 10 ? "0" : "") + r + ":" + (g < 10 ? "0" : "") + g;
  }
  /**
   * @param {string} id
   * @param {!Object} e
   * @return {?}
   */
  function p(id, e) {
    var bxConfig = code.env || process && process.env || {};
    var name = bxConfig && bxConfig[id] || void 0;
    if (e && e instanceof Error && void 0 === name) {
      throw e;
    }
    return void 0 === name ? e : name;
  }
  self = self || new function() {
  };
  var value = (code = code || {}).name || "lemon";
  var id = p("STAGE", "");
  /** @type {boolean} */
  var o = "local" === id || "express" === id || "1" === p("LC", "");
  var logger = {
    thiz : console,
    log : console.log,
    error : console.error,
    auto_ts : o,
    auto_color : o
  };
  /**
   * @return {?}
   */
  var log = function() {
    /** @type {(Arguments|Array<?>)} */
    var callArgs = logger.auto_ts && !Array.isArray(arguments) && Array.prototype.slice.call(arguments) || arguments;
    return logger.auto_color ? (callArgs.unshift("\u001b[0m"), logger.auto_ts && callArgs.unshift(now(), "L"), callArgs.unshift("\u001b[32m")) : logger.auto_ts && callArgs.unshift(now(), "L"), logger.log.apply(logger.thiz, callArgs);
  };
  /**
   * @return {?}
   */
  var s = function() {
    /** @type {(Arguments|Array<?>)} */
    var t = logger.auto_ts && !Array.isArray(arguments) && Array.prototype.slice.call(arguments) || arguments;
    return logger.auto_color ? (t.unshift(""), t.push("\u001b[0m"), logger.auto_ts && t.unshift(now(), "I"), t.unshift("\u001b[33m")) : logger.auto_ts && t.unshift(now(), "I"), logger.log.apply(logger.thiz, t);
  };
  /**
   * @return {?}
   */
  var error = function() {
    /** @type {(Arguments|Array<?>)} */
    var t = logger.auto_ts && !Array.isArray(arguments) && Array.prototype.slice.call(arguments) || arguments;
    return logger.auto_color ? (t.unshift("\u001b[0m"), logger.auto_ts && t.unshift(now(), "E"), t.unshift("\u001b[31m")) : logger.auto_ts && t.unshift(now(), "E"), logger.error.apply(logger.thiz, t);
  };
  /**
   * @param {!Object} rules
   * @param {!Object} data
   * @return {?}
   */
  var find = function(rules, data) {
    var i;
    for (i in data) {
      var rule = data[i];
      if (void 0 === rule) {
        delete rules[i];
      } else {
        rules[i] = rule;
      }
    }
    return rules;
  };
  /**
   * @param {string} id
   * @param {number} string
   * @return {?}
   */
  var options = function r(id, string) {
    if (id) {
      /** @type {function(string, number): ?} */
      var result = r;
      var style = void 0 !== result[id] ? result[id] : void 0;
      return void 0 === string ? style : void 0 === style ? (log("INFO! service[" + id + "] registered"), result[id] = string) : (error("WARN! service[" + id + "] exists! so extends "), style = find(style = style || {}, string = string || {}), result[id] = style);
    }
  };
  return options.STAGE = id, options.id = value, options.log = log, options.inf = s, options.err = error, options.extend = find, options.ts = now, options.environ = p, options.$console = logger, options.toString = function() {
    return value || "$ROOT";
  }, self._log = log, self._inf = s, self._err = error, self._$ = options, (self[options.id] = options)("_", require("lodash/core")), initialize.apply(options, [self, code]), self;
};


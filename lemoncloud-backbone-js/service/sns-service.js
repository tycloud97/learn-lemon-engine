"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},_slicedToArray=function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var t=[],n=!0,i=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(n=(s=u.next()).done)&&(t.push(s.value),!e||t.length!==e);n=!0);}catch(r){i=!0,o=r}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return t}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};module.exports=function(r,e){e=e||"SN";var n=r.U,o=r.aws,t=r._;if(!n)throw new Error("$U is required!");if(!o)throw new Error("$aws is required!");if(!t)throw new Error("$_ is required!");var s=r.log,u=(r.inf,r.err),a=n.NS(e,"magenta"),i={do_publish:function(r,e,t){if(!r)return Promise.reject("snsId is required!");if(!e)return Promise.reject("subject is required!");if(!t)return Promise.reject("payload is required!");r=l(r),t="object"==(void 0===t?"undefined":_typeof(t))?JSON.stringify(t):t;var i={TopicArn:r,Message:t};e&&(i.Subject=e);return s(a,"> params =",i),new Promise(function(t,n){c.publish(i,function(r,e){if(r)return n(r);t(e)})}).then(function(r){return s(a,"Sent message-id:",r&&r.MessageId||"#NOP"),r}).catch(function(r){throw u(a,"ERR! err=",r),r})},do_publish_sms:function(r,e,t){if(s(a,"do_publish_sms("+r+")...."),!r)return Promise.reject("phone is required!");if(!e)return Promise.reject("message is required!");var n=new o.SNS({region:"us-east-1"}),i={Message:"string"==typeof e?e:JSON.stringify(e),PhoneNumber:r};t&&(i.MessageAttributes={"AWS.SNS.SMS.SenderID":{DataType:"String",StringValue:t}});return s(a,"> params =",i),n.publish(i).promise().then(function(r){return s(a,"> sms.res =",r&&r.MessageId||"#NOP"),r}).catch(function(r){throw u(a,"> sms.err =",r),r})}};r(e,i);var f={region:n.env("SN_REGION",new Error(a+":SN_REGION is required!"))};s(a,"config=",f);var c=new o.SNS(f),l=function(r){var e=n.env("SN_CONFIG",new Error(a+":SN_CONFIG is required!"));if(e instanceof Error)throw e;var t=e.split(",").map(function(r){return r.trim()}).reduce(function(r,e){var t=e.split("=",2),n=_slicedToArray(t,2),i=n[0],o=n[1];return r[i]=o,r},{});if(r.startsWith("arn:"))return r;if(null==t[r])throw new Error(a+": unknown sns-pool id:"+r);return t[r]};return i};'use strict';
/** @type {function(string): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(unfilteredString) {
  return typeof unfilteredString;
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
 * @param {!Object} options
 * @param {string} app
 * @return {?}
 */
module.exports = function(options, app) {
  app = app || "SN";
  var api = options.U;
  var AWS = options.aws;
  var originalOptions = options._;
  if (!api) {
    throw new Error("$U is required!");
  }
  if (!AWS) {
    throw new Error("$aws is required!");
  }
  if (!originalOptions) {
    throw new Error("$_ is required!");
  }
  var cb = options.log;
  var g = (options.inf, options.err);
  var id = api.NS(app, "magenta");
  var argv = {
    do_publish : function(args, opts, str) {
      if (!args) {
        return Promise.reject("snsId is required!");
      }
      if (!opts) {
        return Promise.reject("subject is required!");
      }
      if (!str) {
        return Promise.reject("payload is required!");
      }
      args = parse(args);
      str = "object" == (void 0 === str ? "undefined" : _typeof(str)) ? JSON.stringify(str) : str;
      var params = {
        TopicArn : args,
        Message : str
      };
      if (opts) {
        /** @type {string} */
        params.Subject = opts;
      }
      return cb(id, "> params =", params), (new Promise(function(saveNotifs, obtainGETData) {
        sns.publish(params, function(val, notifications) {
          if (val) {
            return obtainGETData(val);
          }
          saveNotifs(notifications);
        });
      })).then(function(data) {
        return cb(id, "Sent message-id:", data && data.MessageId || "#NOP"), data;
      }).catch(function(n) {
        throw g(id, "ERR! err=", n), n;
      });
    },
    do_publish_sms : function(clickRepeater, e, value) {
      if (cb(id, "do_publish_sms(" + clickRepeater + ")...."), !clickRepeater) {
        return Promise.reject("phone is required!");
      }
      if (!e) {
        return Promise.reject("message is required!");
      }
      var rias = new AWS.SNS({
        region : "us-east-1"
      });
      var err = {
        Message : "string" == typeof e ? e : JSON.stringify(e),
        PhoneNumber : clickRepeater
      };
      if (value) {
        err.MessageAttributes = {
          "AWS.SNS.SMS.SenderID" : {
            DataType : "String",
            StringValue : value
          }
        };
      }
      return cb(id, "> params =", err), rias.publish(err).promise().then(function(data) {
        return cb(id, "> sms.res =", data && data.MessageId || "#NOP"), data;
      }).catch(function(n) {
        throw g(id, "> sms.err =", n), n;
      });
    }
  };
  options(app, argv);
  var p = {
    region : api.env("SN_REGION", new Error(id + ":SN_REGION is required!"))
  };
  cb(id, "config=", p);
  var sns = new AWS.SNS(p);
  /**
   * @param {string} value
   * @return {?}
   */
  var parse = function(value) {
    var dimension = api.env("SN_CONFIG", new Error(id + ":SN_CONFIG is required!"));
    if (dimension instanceof Error) {
      throw dimension;
    }
    var varWikidataTypes = dimension.split(",").map(function(commentToCheck) {
      return commentToCheck.trim();
    }).reduce(function(p, clusterShardData) {
      var _qualifiedName$split6 = clusterShardData.split("=", 2);
      var _qualifiedName$split62 = _slicedToArray(_qualifiedName$split6, 2);
      var script = _qualifiedName$split62[0];
      var typeface = _qualifiedName$split62[1];
      return p[script] = typeface, p;
    }, {});
    if (value.startsWith("arn:")) {
      return value;
    }
    if (null == varWikidataTypes[value]) {
      throw new Error(id + ": unknown sns-pool id:" + value);
    }
    return varWikidataTypes[value];
  };
  return argv;
};


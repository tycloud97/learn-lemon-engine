"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_slicedToArray=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],o=!0,n=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(t.push(s.value),!r||t.length!==r);o=!0);}catch(e){n=!0,i=e}finally{try{!o&&a.return&&a.return()}finally{if(n)throw i}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")};module.exports=function(e,r){r=r||"SE";var t=e.U,o=e.aws,n=e._;if(!t)throw new Error("$U is required!");if(!o)throw new Error("$aws is required!");if(!n)throw new Error("$_ is required!");var u=e.log,d=(e.inf,e.err),f=t.NS(r,"magenta"),i={do_send_email:function(e,r,t,o,n,i){if(n=n||"text/html",e&&"object"==(void 0===e?"undefined":_typeof(e))){var s=Object.assign({},e);e=s.from||"",r=s.to||r,t=s.subject||t,o=s.body||o,n=s.type||n,i=s.text||i}if(!e)return Promise.reject(new Error("from is required!"));if(!r)return Promise.reject(new Error("to is required!"));if(!t)return Promise.reject(new Error("subject is required!"));if(!o)return Promise.reject(new Error("body is required!"));if(!n)return Promise.reject(new Error("type is required!"));var a={Destination:{CcAddresses:[],ToAddresses:[]},Message:{Body:{Html:{Charset:"UTF-8",Data:""},Text:{Charset:"UTF-8",Data:""}},Subject:{Charset:"UTF-8",Data:"Test email"}},Source:"SENDER_EMAIL_ADDRESS",ReplyToAddresses:[]};a.Source=e,a.Destination.ToAddresses=r.split(",").map(function(e){return e.trim()}),a.Message.Subject.Data=t,a.Message.Body.Text.Data=i,n.endsWith("html")?a.Message.Body.Html.Data=o:a.Message.Body.Text.Data=o;a.Message.Body.Text.Data||delete a.Message.Body.Text;return u(f,"> params =",a),c.sendEmail(a).promise().then(function(e){return u(f,"Sent message-id:",e&&e.MessageId||"#NOP"),e}).catch(function(e){throw d(f,"ERR! err=",e),e})}};e(r,i);var s={region:t.env("SE_REGION",new Error(f+":SE_REGION is required!"))};u(f,"config=",s);var c=new o.SES(s);return i};'use strict';
/** @type {function(string): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(boundsMethod) {
  return typeof boundsMethod;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {?} arr
 * @param {undefined} i
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
      var n = false;
      var i = void 0;
      try {
        var _s;
        var _iterator3 = set[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (_s = _iterator3.next()).done) && (_arr.push(_s.value), !groupNum || _arr.length !== groupNum); _iteratorNormalCompletion3 = true) {
        }
      } catch (contactCapacity) {
        /** @type {boolean} */
        n = true;
        i = contactCapacity;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (n) {
            throw i;
          }
        }
      }
      return _arr;
    }(arr, i);
  }
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
/**
 * @param {!Object} opts
 * @param {string} app
 * @return {?}
 */
module.exports = function(opts, app) {
  app = app || "SE";
  var self = opts.U;
  var AWS = opts.aws;
  var generateArgs = opts._;
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!AWS) {
    throw new Error("$aws is required!");
  }
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  var fn = opts.log;
  var g = (opts.inf, opts.err);
  var x = self.NS(app, "magenta");
  var table = {
    do_send_email : function(value, total, start, text, type, data) {
      if (type = type || "text/html", value && "object" == (void 0 === value ? "undefined" : _typeof(value))) {
        /** @type {!Object} */
        var args = Object.assign({}, value);
        value = args.from || "";
        total = args.to || total;
        start = args.subject || start;
        text = args.body || text;
        type = args.type || type;
        data = args.text || data;
      }
      if (!value) {
        return Promise.reject(new Error("from is required!"));
      }
      if (!total) {
        return Promise.reject(new Error("to is required!"));
      }
      if (!start) {
        return Promise.reject(new Error("subject is required!"));
      }
      if (!text) {
        return Promise.reject(new Error("body is required!"));
      }
      if (!type) {
        return Promise.reject(new Error("type is required!"));
      }
      var params = {
        Destination : {
          CcAddresses : [],
          ToAddresses : []
        },
        Message : {
          Body : {
            Html : {
              Charset : "UTF-8",
              Data : ""
            },
            Text : {
              Charset : "UTF-8",
              Data : ""
            }
          },
          Subject : {
            Charset : "UTF-8",
            Data : "Test email"
          }
        },
        Source : "SENDER_EMAIL_ADDRESS",
        ReplyToAddresses : []
      };
      /** @type {string} */
      params.Source = value;
      params.Destination.ToAddresses = total.split(",").map(function(commentToCheck) {
        return commentToCheck.trim();
      });
      /** @type {!Object} */
      params.Message.Subject.Data = start;
      /** @type {!Object} */
      params.Message.Body.Text.Data = data;
      if (type.endsWith("html")) {
        /** @type {!Object} */
        params.Message.Body.Html.Data = text;
      } else {
        /** @type {!Object} */
        params.Message.Body.Text.Data = text;
      }
      if (!params.Message.Body.Text.Data) {
        delete params.Message.Body.Text;
      }
      return fn(x, "> params =", params), dialog.sendEmail(params).promise().then(function(res) {
        return fn(x, "Sent message-id:", res && res.MessageId || "#NOP"), res;
      }).catch(function(n) {
        throw g(x, "ERR! err=", n), n;
      });
    }
  };
  opts(app, table);
  var options = {
    region : self.env("SE_REGION", new Error(x + ":SE_REGION is required!"))
  };
  fn(x, "config=", options);
  var dialog = new AWS.SES(options);
  return table;
};


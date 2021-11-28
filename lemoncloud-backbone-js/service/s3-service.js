"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},_slicedToArray=function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var t=[],n=!0,o=!1,i=void 0;try{for(var u,f=r[Symbol.iterator]();!(n=(u=f.next()).done)&&(t.push(u.value),!e||t.length!==e);n=!0);}catch(r){o=!0,i=r}finally{try{!n&&f.return&&f.return()}finally{if(o)throw i}}return t}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};module.exports=function(r,e){e=e||"S3";var n=r.U,t=r.aws,o=r._;if(!n)throw new Error("$U is required!");if(!t)throw new Error("$aws is required!");if(!o)throw new Error("$_ is required!");var f=r.log,c=(r.inf,r.err),a=n.NS(e,"magenta"),i={do_upload:function(r,e,t,n,o){if(!r)return Promise.reject(new Error("bucket is required!"));if(!e)return Promise.reject(new Error("filename is required!"));if(!t)return Promise.reject(new Error("filestream is required!"));var i={Bucket:r=y(r),Key:e,Body:t},u={};n&&(i.ContentType=n);o&&"object"==(void 0===o?"undefined":_typeof(o))&&(u.tags=Object.keys(o).reduce(function(r,e){var t=o[e];return r.push({Key:e,Value:""+t}),r},[]));return new Promise(function(t,n){s.upload(i,u,function(r,e){if(r)return n(r);t(e)})}).then(function(r){return f(a,"data.key:",r&&r.Key||"#NOP"),r}).catch(function(r){throw c(a,"ERR! err=",r),r})},do_get_object:function(r,e){if(!r)return Promise.reject(new Error("bucket is required!"));if(!e)return Promise.reject(new Error("filename is required!"));var o={Bucket:r=y(r),Key:e};return new Promise(function(t,n){s.getObject(o,function(r,e){if(r)return n(r);t(e)})}).catch(function(r){throw c(a,"ERR! err=",r),r})}};r(e,i);var u={region:n.env("S3_REGION",new Error(a+":S3_REGION is required!"))};f(a,"config=",u);var s=new t.S3(u),y=function(r){var e=n.env("S3_CONFIG",new Error(a+":S3_CONFIG is required!"));if(e instanceof Error)throw e;var t=e.split(",").map(function(r){return r.trim()}).reduce(function(r,e){var t=e.split("=",2).map(function(r){return r.trim()}),n=_slicedToArray(t,2),o=n[0],i=n[1];return r[o]=i,r},{});if(null==t[r])throw new Error("404 NOT FOUND - id:"+r);return t[r]};return i};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(boundsMethod) {
  return typeof boundsMethod;
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
/**
 * @param {!Object} p
 * @param {string} n
 * @return {?}
 */
module.exports = function(p, n) {
  n = n || "S3";
  var Y = p.U;
  var AWS = p.aws;
  var _ = p._;
  if (!Y) {
    throw new Error("$U is required!");
  }
  if (!AWS) {
    throw new Error("$aws is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var debug = p.log;
  var g = (p.inf, p.err);
  var x = Y.NS(n, "magenta");
  var val = {
    do_upload : function(mutations, self, file, type, value) {
      if (!mutations) {
        return Promise.reject(new Error("bucket is required!"));
      }
      if (!self) {
        return Promise.reject(new Error("filename is required!"));
      }
      if (!file) {
        return Promise.reject(new Error("filestream is required!"));
      }
      var params = {
        Bucket : mutations = push(mutations),
        Key : self,
        Body : file
      };
      var settings = {};
      if (type) {
        /** @type {string} */
        params.ContentType = type;
      }
      if (value && "object" == (void 0 === value ? "undefined" : _typeof(value))) {
        settings.tags = Object.keys(value).reduce(function(array, name) {
          var element = value[name];
          return array.push({
            Key : name,
            Value : "" + element
          }), array;
        }, []);
      }
      return (new Promise(function(saveNotifs, obtainGETData) {
        client.upload(params, settings, function(val, notifications) {
          if (val) {
            return obtainGETData(val);
          }
          saveNotifs(notifications);
        });
      })).then(function(a) {
        return debug(x, "data.key:", a && a.Key || "#NOP"), a;
      }).catch(function(n) {
        throw g(x, "ERR! err=", n), n;
      });
    },
    do_get_object : function(mutations, target) {
      if (!mutations) {
        return Promise.reject(new Error("bucket is required!"));
      }
      if (!target) {
        return Promise.reject(new Error("filename is required!"));
      }
      var awsOptions = {
        Bucket : mutations = push(mutations),
        Key : target
      };
      return (new Promise(function(saveNotifs, obtainGETData) {
        client.getObject(awsOptions, function(val, notifications) {
          if (val) {
            return obtainGETData(val);
          }
          saveNotifs(notifications);
        });
      })).catch(function(n) {
        throw g(x, "ERR! err=", n), n;
      });
    }
  };
  p(n, val);
  var options = {
    region : Y.env("S3_REGION", new Error(x + ":S3_REGION is required!"))
  };
  debug(x, "config=", options);
  var client = new AWS.S3(options);
  /**
   * @param {string} list
   * @return {?}
   */
  var push = function(list) {
    var dimension = Y.env("S3_CONFIG", new Error(x + ":S3_CONFIG is required!"));
    if (dimension instanceof Error) {
      throw dimension;
    }
    var lib = dimension.split(",").map(function(commentToCheck) {
      return commentToCheck.trim();
    }).reduce(function(p, clusterShardData) {
      var _qualifiedName$split6 = clusterShardData.split("=", 2).map(function(commentToCheck) {
        return commentToCheck.trim();
      });
      var _qualifiedName$split62 = _slicedToArray(_qualifiedName$split6, 2);
      var script = _qualifiedName$split62[0];
      var typeface = _qualifiedName$split62[1];
      return p[script] = typeface, p;
    }, {});
    if (null == lib[list]) {
      throw new Error("404 NOT FOUND - id:" + list);
    }
    return lib[list];
  };
  return val;
};


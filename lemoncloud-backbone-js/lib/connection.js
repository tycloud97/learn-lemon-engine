"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(e){if(!e._)throw new Error("$_ is required!");var u=e.log,c=(e.inf,e.err,require("mysql"));if(!c)throw new Error("mysql is required!");var n={};function r(e){return function(n){var e=(n=n||{}).name||"mysql";u("mysql_pool("+e+") - with mysql ....");var o={getConnection:function(e){return e(null,c.createConnection({host:n.hostname||"localhost",port:n.port||3306,database:n.database||"",user:n.username||"",password:n.password||""}))}};function i(r){function t(o){if(!o)throw new Error("Database Connection Error ",n);function e(){o&&(o.release&&o.release(),o.end&&o.end(),o=null)}this.exec=function(e,n){return o?o.query(e,n):n?n("no-connection"):0},this.execAsync=function(e,n){return new Promise(function(r,t){if(!o)return t(new Error("no-connection!"));void 0===n?o.query(e,function(e,n){return e?t(e):r(n)}):o.query(e,n,function(e,n){return e?t(e):r(n)})})},this.release=e,this.end=e}o.getConnection(function(e,n){r(e,new t(n))})}function t(e){var n=new Promise(function(r,t){i(function(e,n){e?(n&&n.release(),t(e)):r(n)})});return e&&(n=n.then(function(n){return n&&n.exec&&n.execAsync&&(n._exec=n.exec,n.exec=n.execAsync),e(n).then(function(e){return n.release(),e},function(e){throw n.release(),e})})),n}var r={};return r.acquire=i,r.promise=t,r.promise_query=function(n,r){if("object"==(void 0===n?"undefined":_typeof(n))){var e=n;n=e.query,r=e.values}return t(function(e){return e.exec(n,r).catch(function(e){var n=e&&e.message||"";if(n.startsWith("ER_NO_SUCH_TABLE"))return Promise.reject(new Error("404 NOT FOUND - "+n));if(n.startsWith("ER_BAD_TABLE_ERROR"))return Promise.reject(new Error("404 NOT FOUND - "+n));throw e})})},r}(e=e||{})}return n.connect=function(e){return r(e)},n};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {!Object} result
 * @return {?}
 */
module.exports = function(result) {
  /**
   * @param {number} groupId
   * @return {?}
   */
  function execute(groupId) {
    return function(result) {
      /**
       * @param {!Function} cb
       * @return {undefined}
       */
      function query(cb) {
        /**
         * @param {!Object} f
         * @return {undefined}
         */
        function wrapper(f) {
          /**
           * @return {undefined}
           */
          function send() {
            if (f) {
              if (f.release) {
                f.release();
              }
              if (f.end) {
                f.end();
              }
              /** @type {null} */
              f = null;
            }
          }
          if (!f) {
            throw new Error("Database Connection Error ", result);
          }
          /**
           * @param {!Array} e
           * @param {!Array} p
           * @return {?}
           */
          this.exec = function(e, p) {
            return f ? f.query(e, p) : p ? p("no-connection") : 0;
          };
          /**
           * @param {!Array} opts
           * @param {!Array} args
           * @return {?}
           */
          this.execAsync = function(opts, args) {
            return new Promise(function(resolve, reject) {
              if (!f) {
                return reject(new Error("no-connection!"));
              }
              if (void 0 === args) {
                f.query(opts, function(err, data) {
                  return err ? reject(err) : resolve(data);
                });
              } else {
                f.query(opts, args, function(err, data) {
                  return err ? reject(err) : resolve(data);
                });
              }
            });
          };
          /** @type {function(): undefined} */
          this.release = send;
          /** @type {function(): undefined} */
          this.end = send;
        }
        redisState.getConnection(function(fallbackReleases, src) {
          cb(fallbackReleases, new wrapper(src));
        });
      }
      /**
       * @param {!Function} resolve
       * @return {?}
       */
      function run(resolve) {
        /** @type {!Promise} */
        var serializerPromise = new Promise(function(r, saveNotifs) {
          query(function(notifications, res) {
            if (notifications) {
              if (res) {
                res.release();
              }
              saveNotifs(notifications);
            } else {
              r(res);
            }
          });
        });
        return resolve && (serializerPromise = serializerPromise.then(function(result) {
          return result && result.exec && result.execAsync && (result._exec = result.exec, result.exec = result.execAsync), resolve(result).then(function(canCreateDiscussions) {
            return result.release(), canCreateDiscussions;
          }, function(canCreateDiscussions) {
            throw result.release(), canCreateDiscussions;
          });
        })), serializerPromise;
      }
      var envDialect = (result = result || {}).name || "mysql";
      log("mysql_pool(" + envDialect + ") - with mysql ....");
      var redisState = {
        getConnection : function(cb) {
          return cb(null, mysql.createConnection({
            host : result.hostname || "localhost",
            port : result.port || 3306,
            database : result.database || "",
            user : result.username || "",
            password : result.password || ""
          }));
        }
      };
      var p = {};
      return p.acquire = query, p.promise = run, p.promise_query = function(value, data) {
        if ("object" == (void 0 === value ? "undefined" : _typeof(value))) {
          /** @type {!Array} */
          var x = value;
          value = x.query;
          data = x.values;
        }
        return run(function(e) {
          return e.exec(value, data).catch(function(error) {
            var n = error && error.message || "";
            if (n.startsWith("ER_NO_SUCH_TABLE")) {
              return Promise.reject(new Error("404 NOT FOUND - " + n));
            }
            if (n.startsWith("ER_BAD_TABLE_ERROR")) {
              return Promise.reject(new Error("404 NOT FOUND - " + n));
            }
            throw error;
          });
        });
      }, p;
    }(groupId = groupId || {});
  }
  if (!result._) {
    throw new Error("$_ is required!");
  }
  var log = result.log;
  var mysql = (result.inf, result.err, require("mysql"));
  if (!mysql) {
    throw new Error("mysql is required!");
  }
  var reverEnv = {};
  return reverEnv.connect = function(groupId) {
    return execute(groupId);
  }, reverEnv;
};


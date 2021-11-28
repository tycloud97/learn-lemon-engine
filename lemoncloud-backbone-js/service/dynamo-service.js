"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(e,r){r=r||"DS";var u=e.U,t=e.aws,s=e._;if(!u)throw new Error("$U is required!");if(!t)throw new Error("$aws is required!");if(!s)throw new Error("$_ is required!");var d=u.NS(r,"magenta"),m=e.log,c=(e.inf,e.err),n={do_create_table:function(e,r,t){if(!e)return Promise.reject(new Error(d+"parameter:table is required"));var n={TableName:e,KeySchema:[{AttributeName:r=r||"id",KeyType:"HASH"}],AttributeDefinitions:[{AttributeName:r,AttributeType:(t=t||"Number").substring(0,1)}],ProvisionedThroughput:{ReadCapacityUnits:1,WriteCapacityUnits:1},StreamSpecification:{StreamEnabled:!0,StreamViewType:"NEW_AND_OLD_IMAGES"}};return m(d,"do_create_table("+e+").... payload=",n),a.createTable(n).promise().then(function(e){return m(d,"> res=",e),e}).catch(function(e){throw c(d,"> err="+e.code+" - "+e.message),e})},do_delete_table:function(e){if(!e)return Promise.reject(new Error(d+"parameter:table is required"));var r={TableName:e};return m(d,"- do_delete_table().... payload=",r),a.deleteTable(r).promise().then(function(e){return m(d,"> dynamodb.deleteTable.res=",u.json(e)),e}).catch(function(e){var r=e&&e.message||"";if(0<r.indexOf("not found:"))return Promise.reject(new Error("404 NOT FOUND - "+r));throw e})}};n.do_list_tables=l,n.do_create_item=function(e,r,t){if(!e)return Promise.reject(new Error(d+"parameter:table is required"));if(!r)return Promise.reject(new Error(d+"parameter:id is required"));if(!t)return Promise.reject(new Error(d+"parameter:data is required"));if("object"!==(void 0===t?"undefined":_typeof(t)))return Promise.reject(new Error(d+"parameter:data must be object"));var n="object"===(void 0===r?"undefined":_typeof(r))?r:{id:u.N(r)};n.idType;delete n.idType,t=u.extend(t,n),t=o(t);var i={TableName:e,Item:t};return m(d,"- do_create_item("+e+").... ,id=",n,", data=",u.json(t)),f.put(i).promise().then(function(e){return m(d,"> res=",u.json(e)),e=u.extend(n,e)}).catch(function(e){throw e})},n.do_get_item=function(e,r){if(!e)return Promise.reject(new Error(d+"parameter:table is required"));if(!r)return Promise.reject(new Error(d+"parameter:id is required"));var t="object"===(void 0===r?"undefined":_typeof(r))?r:{id:u.N(r)};t.idType;delete t.idType;var n={TableName:e,Key:t};return m(d,"- do_get_item("+e+").... id=",t),f.get(n).promise().then(function(e){return m(d,"> res=",e&&u.json(e)||e),void 0===e.Item?Promise.reject(new Error("404 NOT FOUND")):e.Item||{}}).catch(function(e){throw e})},n.do_delete_item=function(e,r){if(!e)return Promise.reject(new Error(d+"parameter:table is required"));if(!r)return Promise.reject(new Error(d+"parameter:id is required"));var t="object"===(void 0===r?"undefined":_typeof(r))?r:{id:u.N(r)};t.idType;delete t.idType;var n={TableName:e,Key:t};return m(d,"- do_delete_item("+e+")...., id=",t),f.delete(n).promise().then(function(e){return m(d,"> res=",u.json(e)),e=u.extend(t,e)}).catch(function(e){throw e})},n.do_update_item=h,n.do_increment_item=function(e,r,t,n){if(!e)return Promise.reject(new Error(d+"parameter:table is required"));if(!r)return Promise.reject(new Error(d+"parameter:id is required"));if(!t)return Promise.reject(new Error(d+"parameter:data is required"));if("object"!==(void 0===t?"undefined":_typeof(t)))return Promise.reject(new Error(d+"parameter:data must be object"));var i="object"===(void 0===r?"undefined":_typeof(r))?r:{id:u.N(r)};i.idType;delete i.idType,m(d,"- do_increment_item("+e+")...., id=",i,", data=",u.json(t));var a=["created_at","updated_at","deleted_at"],o=s.reduce(t,function(e,r,t){return 0<=a.indexOf(t)?(e.ExpressionAttributeNames["#"+t]=t,e.ExpressionAttributeValues[":"+t]=r,e.UpdateExpression.push("#"+t+" = :"+t),m(d,">> #"+t+" = :"+r)):(e.ExpressionAttributeNames["#"+t]=t,e.ExpressionAttributeValues[":"+t]=r,e.UpdateExpression.push("#"+t+" = #"+t+" + :"+t),m(d,">> #"+t+" = #"+t+" + :"+r)),e},{TableName:e,Key:i,UpdateExpression:[],ExpressionAttributeNames:{},ExpressionAttributeValues:{}});return b(o,n),o.UpdateExpression="SET "+o.UpdateExpression.join(", "),m(d,"> payload=",u.json(o)),f.update(o).promise().then(function(e){return m(d,"> res=",u.json(e)),e=u.extend(i,e)}).catch(function(e){throw e})},n.do_test_self=function(e){m(d,"- do_test_self()... param=",e=e||{});var r=u.promise(e);return r=(r=r.then(function(){return l().then(function(e){return m(d,"> ListTables=",e),e})})).then(function(e){return e})},n.do_read_stream=function(e){e=e||{},m(d,"- do_read_stream()... param=",u.json(e)),e.table=e.table||"TestTable";var r=u.promise(e);return r=(r=e.streams?r:r.then(function(r){var e={Limit:100,TableName:r.table||"TestTable"};return m(d,"- listStreams()...."),p.listStreams(e).promise().then(function(e){return m(d,"> list-streams res =",u.json(e)),r.streams=s.map(e.Streams,function(e,r){m(d,">> ["+r+"] stream=",u.json(e));var t={};return t.TableName=e.TableName,t.ExclusiveStartShardId=null,t.SequenceNumber=null,t.StreamArn=e.StreamArn,t}),r}).then(function(e){return e})})).then(function(i){if(!i.streams)return Promise.reject(new Error(d+"streams is required"));m(d,"- describe-streams() ... ");var e=s.map(i.streams,function(r,e){m(d,"> streams["+e+"] =",u.json(r));var t={StreamArn:r.StreamArn};return r.ExclusiveStartShardId&&(t.ExclusiveStartShardId=r.ExclusiveStartShardId),m(d,"-- describe-stream()... params=",u.json(t)),p.describeStream(t).promise().then(function(e){return r.shards=e.StreamDescription.Shards||[],r.shards.forEach(function(e,r){m(d,">> shards["+r+"] SequenceNumberRange=",e.SequenceNumberRange.StartingSequenceNumber,"~",e.SequenceNumberRange.EndingSequenceNumber)}),r}).then(function(t){if(!t.shards)return Promise.reject(new Error(d+"shards is required"));var a=function(e,t){var r=u.promise(e.shift());return r=e.reduce(function(e,r){return e.then(function(){return t(r)})},r.then(function(e){return t(e)}))},o=function(e){return e?(t.SequenceNumber=e.dynamodb.SequenceNumber,m(d,"!! stream.SequenceNumber=",t.SequenceNumber),i.on_process_record?(e.eventSourceARN=t.StreamArn,i.on_process_record(e)):e):Promise.resolve(e)},n=function n(i){if(!i)return Promise.resolve(i);var e={ShardIterator:i,Limit:1e3};return m(d,"----- get-records()... params=",u.json(e)),p.getRecords(e).promise().then(function(e){var r=e.Records||[],t=e.NextShardIterator;return m(d,">>>>> records.len=",r.length,", next-iterator=",t),r.length?a(r,o).then(function(e){return t?n(t):(m(d,"! finished iterator!"),e)}).then(function(){return i}):e})};return a(t.shards,function(e){return e?(m(d,"--- process-shard=",u.json(e)),Promise.resolve(e).then(function(r){if(r.SequenceNumberRange.EndingSequenceNumber)return m(d,">>> closed shard!!!!!"),t.ExclusiveStartShardId=r.ShardId,t.SequenceNumber=null,r;t.SequenceNumber&&t.SequenceNumber<r.SequenceNumberRange.StartingSequenceNumber&&(t.SequenceNumber=null);var e={ShardId:r.ShardId,StreamArn:t.StreamArn};return t.SequenceNumber?(e.SequenceNumber=t.SequenceNumber,e.ShardIteratorType="AFTER_SEQUENCE_NUMBER"):e.ShardIteratorType="TRIM_HORIZON",m(d,"---- get-shard-iterator()... params=",u.json(e)),p.getShardIterator(e).promise().then(function(e){var r=e.ShardIterator;return n(r)}).then(function(){return r}).catch(function(e){return c(d,">>>> get-shard-iterator err=",e),r})}).then(function(){return e})):Promise.resolve(e)})})});return Promise.all(e).then(function(e){return i})}).then(function(e){return e})},e(r,n);var i={region:u.env("DD_REGION",new Error(d+":DD_REGION is required!"))};u.env("DD_ENDPOINT")&&(i.endpoint=u.env("DD_ENDPOINT"));var a=new t.DynamoDB(i),f=new t.DynamoDB.DocumentClient(i),p=new t.DynamoDBStreams(i),o=function n(i){return""===i?null:i?Array.isArray(i)?i.map(n):"object"==(void 0===i?"undefined":_typeof(i))?Object.keys(i).reduce(function(e,r){var t=i[r];return e[r]=n(t),e},{}):i:i};function l(e,r){var n=e,t={Limit:r=r||100};return m(d,"- do_list_table().... payload=",t),a.listTables(t).promise().then(function(t){m(d,"> res=",u.json(t));var e=t.TableNames;if(n&&0<=e.indexOf(n)){var r={Limit:100,TableName:n};return m(d,"- listStreams()...."),p.listStreams(r).promise().then(function(e){var r=s.map(e.Streams,function(e,r){m(d,">> ["+r+"] stream=",u.json(e));var t={};return t.TableName=e.TableName,t.ExclusiveStartShardId=null,t.SequenceNumber=null,t.StreamArn=e.StreamArn,t});return t[n]={streams:r},t})}return t}).then(function(e){return m(d,"! list-tables res=",u.json(e)),e}).catch(function(e){throw c(d,"> err=",e),e})}var b=function(e,r){return r?e=s.reduce(r,function(e,r,t){return e.ExpressionAttributeNames["#"+t]=t,e.ExpressionAttributeValues[":"+t]=r,e.UpdateExpression.push("#"+t+" = #"+t+" + :"+t),m(d,">> #"+t+" = #"+t+" + :"+r),e},e):e};function h(e,r,t,n){if(!e)return Promise.reject(new Error(d+"parameter:table is required"));if(!r)return Promise.reject(new Error(d+"parameter:id is required"));if(!t)return Promise.reject(new Error(d+"parameter:data is required"));if("object"!==(void 0===t?"undefined":_typeof(t)))return Promise.reject(new Error(d+"parameter:data must be object"));var i="object"===(void 0===r?"undefined":_typeof(r))?r:{id:u.N(r)};i.idType;delete i.idType,m(d,"- do_update_item("+e+")...., id=",i,", data=",u.json(t));var a=s.reduce(t,function(e,r,t){return r=o(r),e.ExpressionAttributeNames["#"+t]=t,e.ExpressionAttributeValues[":"+t]=""===r?null:r,e.UpdateExpression.push("#"+t+" = :"+t),m(d,">> #"+t+" :=",void 0===r?"undefined":_typeof(r),u.json(r)),e},{TableName:e,Key:i,UpdateExpression:[],ExpressionAttributeNames:{},ExpressionAttributeValues:{}});return b(a,n),a.UpdateExpression="SET "+a.UpdateExpression.join(", "),m(d,"> payload=",u.json(a)),f.update(a).promise().then(function(e){return m(d,"> res=",u.json(e)),e=u.extend(i,e)}).catch(function(e){throw e})}return n};'use strict';
/** @type {function(number): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(string) {
  return typeof string;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {!Object} config
 * @param {string} app
 * @return {?}
 */
module.exports = function(config, app) {
  /**
   * @param {string} to
   * @param {number} unit
   * @return {?}
   */
  function start(to, unit) {
    /** @type {string} */
    var name = to;
    var params = {
      Limit : unit = unit || 100
    };
    return debug(x, "- do_list_table().... payload=", params), client.listTables(params).promise().then(function(result) {
      debug(x, "> res=", that.json(result));
      var e = result.TableNames;
      if (name && 0 <= e.indexOf(name)) {
        var params = {
          Limit : 100,
          TableName : name
        };
        return debug(x, "- listStreams()...."), dynamodbstreams.listStreams(params).promise().then(function(data) {
          var streams = _.map(data.Streams, function(result, canCreateDiscussions) {
            debug(x, ">> [" + canCreateDiscussions + "] stream=", that.json(result));
            var params = {};
            return params.TableName = result.TableName, params.ExclusiveStartShardId = null, params.SequenceNumber = null, params.StreamArn = result.StreamArn, params;
          });
          return result[name] = {
            streams : streams
          }, result;
        });
      }
      return result;
    }).then(function(a) {
      return debug(x, "! list-tables res=", that.json(a)), a;
    }).catch(function(n) {
      throw g(x, "> err=", n), n;
    });
  }
  /**
   * @param {string} name
   * @param {number} value
   * @param {number} obj
   * @param {?} def
   * @return {?}
   */
  function create(name, value, obj, def) {
    if (!name) {
      return Promise.reject(new Error(x + "parameter:table is required"));
    }
    if (!value) {
      return Promise.reject(new Error(x + "parameter:id is required"));
    }
    if (!obj) {
      return Promise.reject(new Error(x + "parameter:data is required"));
    }
    if ("object" !== (void 0 === obj ? "undefined" : _typeof(obj))) {
      return Promise.reject(new Error(x + "parameter:data must be object"));
    }
    var data = "object" === (void 0 === value ? "undefined" : _typeof(value)) ? value : {
      id : that.N(value)
    };
    data.idType;
    delete data.idType;
    debug(x, "- do_update_item(" + name + ")...., id=", data, ", data=", that.json(obj));
    var result = _.reduce(obj, function(params, key, n) {
      return key = getValidKey(key), params.ExpressionAttributeNames["#" + n] = n, params.ExpressionAttributeValues[":" + n] = "" === key ? null : key, params.UpdateExpression.push("#" + n + " = :" + n), debug(x, ">> #" + n + " :=", void 0 === key ? "undefined" : _typeof(key), that.json(key)), params;
    }, {
      TableName : name,
      Key : data,
      UpdateExpression : [],
      ExpressionAttributeNames : {},
      ExpressionAttributeValues : {}
    });
    return extend(result, def), result.UpdateExpression = "SET " + result.UpdateExpression.join(", "), debug(x, "> payload=", that.json(result)), f.update(result).promise().then(function(a) {
      return debug(x, "> res=", that.json(a)), a = that.extend(data, a);
    }).catch(function(canCreateDiscussions) {
      throw canCreateDiscussions;
    });
  }
  app = app || "DS";
  var that = config.U;
  var AWS = config.aws;
  var _ = config._;
  if (!that) {
    throw new Error("$U is required!");
  }
  if (!AWS) {
    throw new Error("$aws is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var x = that.NS(app, "magenta");
  var debug = config.log;
  var g = (config.inf, config.err);
  var data = {
    do_create_table : function(name, attr, type) {
      if (!name) {
        return Promise.reject(new Error(x + "parameter:table is required"));
      }
      var params = {
        TableName : name,
        KeySchema : [{
          AttributeName : attr = attr || "id",
          KeyType : "HASH"
        }],
        AttributeDefinitions : [{
          AttributeName : attr,
          AttributeType : (type = type || "Number").substring(0, 1)
        }],
        ProvisionedThroughput : {
          ReadCapacityUnits : 1,
          WriteCapacityUnits : 1
        },
        StreamSpecification : {
          StreamEnabled : true,
          StreamViewType : "NEW_AND_OLD_IMAGES"
        }
      };
      return debug(x, "do_create_table(" + name + ").... payload=", params), client.createTable(params).promise().then(function(a) {
        return debug(x, "> res=", a), a;
      }).catch(function(a) {
        throw g(x, "> err=" + a.code + " - " + a.message), a;
      });
    },
    do_delete_table : function(dynamoDBTableName) {
      if (!dynamoDBTableName) {
        return Promise.reject(new Error(x + "parameter:table is required"));
      }
      var params = {
        TableName : dynamoDBTableName
      };
      return debug(x, "- do_delete_table().... payload=", params), client.deleteTable(params).promise().then(function(a) {
        return debug(x, "> dynamodb.deleteTable.res=", that.json(a)), a;
      }).catch(function(error) {
        var r = error && error.message || "";
        if (0 < r.indexOf("not found:")) {
          return Promise.reject(new Error("404 NOT FOUND - " + r));
        }
        throw error;
      });
    }
  };
  /** @type {function(string, number): ?} */
  data.do_list_tables = start;
  /**
   * @param {string} name
   * @param {number} value
   * @param {number} key
   * @return {?}
   */
  data.do_create_item = function(name, value, key) {
    if (!name) {
      return Promise.reject(new Error(x + "parameter:table is required"));
    }
    if (!value) {
      return Promise.reject(new Error(x + "parameter:id is required"));
    }
    if (!key) {
      return Promise.reject(new Error(x + "parameter:data is required"));
    }
    if ("object" !== (void 0 === key ? "undefined" : _typeof(key))) {
      return Promise.reject(new Error(x + "parameter:data must be object"));
    }
    var data = "object" === (void 0 === value ? "undefined" : _typeof(value)) ? value : {
      id : that.N(value)
    };
    data.idType;
    delete data.idType;
    key = that.extend(key, data);
    key = getValidKey(key);
    var params = {
      TableName : name,
      Item : key
    };
    return debug(x, "- do_create_item(" + name + ").... ,id=", data, ", data=", that.json(key)), f.put(params).promise().then(function(a) {
      return debug(x, "> res=", that.json(a)), a = that.extend(data, a);
    }).catch(function(canCreateDiscussions) {
      throw canCreateDiscussions;
    });
  };
  /**
   * @param {string} name
   * @param {number} value
   * @return {?}
   */
  data.do_get_item = function(name, value) {
    if (!name) {
      return Promise.reject(new Error(x + "parameter:table is required"));
    }
    if (!value) {
      return Promise.reject(new Error(x + "parameter:id is required"));
    }
    var data = "object" === (void 0 === value ? "undefined" : _typeof(value)) ? value : {
      id : that.N(value)
    };
    data.idType;
    delete data.idType;
    var params = {
      TableName : name,
      Key : data
    };
    return debug(x, "- do_get_item(" + name + ").... id=", data), f.get(params).promise().then(function(found) {
      return debug(x, "> res=", found && that.json(found) || found), void 0 === found.Item ? Promise.reject(new Error("404 NOT FOUND")) : found.Item || {};
    }).catch(function(canCreateDiscussions) {
      throw canCreateDiscussions;
    });
  };
  /**
   * @param {string} name
   * @param {number} value
   * @return {?}
   */
  data.do_delete_item = function(name, value) {
    if (!name) {
      return Promise.reject(new Error(x + "parameter:table is required"));
    }
    if (!value) {
      return Promise.reject(new Error(x + "parameter:id is required"));
    }
    var data = "object" === (void 0 === value ? "undefined" : _typeof(value)) ? value : {
      id : that.N(value)
    };
    data.idType;
    delete data.idType;
    var params = {
      TableName : name,
      Key : data
    };
    return debug(x, "- do_delete_item(" + name + ")...., id=", data), f.delete(params).promise().then(function(a) {
      return debug(x, "> res=", that.json(a)), a = that.extend(data, a);
    }).catch(function(canCreateDiscussions) {
      throw canCreateDiscussions;
    });
  };
  /** @type {function(string, number, number, ?): ?} */
  data.do_update_item = create;
  /**
   * @param {string} name
   * @param {number} value
   * @param {number} string
   * @param {?} codec
   * @return {?}
   */
  data.do_increment_item = function(name, value, string, codec) {
    if (!name) {
      return Promise.reject(new Error(x + "parameter:table is required"));
    }
    if (!value) {
      return Promise.reject(new Error(x + "parameter:id is required"));
    }
    if (!string) {
      return Promise.reject(new Error(x + "parameter:data is required"));
    }
    if ("object" !== (void 0 === string ? "undefined" : _typeof(string))) {
      return Promise.reject(new Error(x + "parameter:data must be object"));
    }
    var data = "object" === (void 0 === value ? "undefined" : _typeof(value)) ? value : {
      id : that.N(value)
    };
    data.idType;
    delete data.idType;
    debug(x, "- do_increment_item(" + name + ")...., id=", data, ", data=", that.json(string));
    /** @type {!Array} */
    var returnedKeys = ["created_at", "updated_at", "deleted_at"];
    var result = _.reduce(string, function($this, type, v) {
      return 0 <= returnedKeys.indexOf(v) ? ($this.ExpressionAttributeNames["#" + v] = v, $this.ExpressionAttributeValues[":" + v] = type, $this.UpdateExpression.push("#" + v + " = :" + v), debug(x, ">> #" + v + " = :" + type)) : ($this.ExpressionAttributeNames["#" + v] = v, $this.ExpressionAttributeValues[":" + v] = type, $this.UpdateExpression.push("#" + v + " = #" + v + " + :" + v), debug(x, ">> #" + v + " = #" + v + " + :" + type)), $this;
    }, {
      TableName : name,
      Key : data,
      UpdateExpression : [],
      ExpressionAttributeNames : {},
      ExpressionAttributeValues : {}
    });
    return extend(result, codec), result.UpdateExpression = "SET " + result.UpdateExpression.join(", "), debug(x, "> payload=", that.json(result)), f.update(result).promise().then(function(a) {
      return debug(x, "> res=", that.json(a)), a = that.extend(data, a);
    }).catch(function(canCreateDiscussions) {
      throw canCreateDiscussions;
    });
  };
  /**
   * @param {number} obj
   * @return {?}
   */
  data.do_test_self = function(obj) {
    debug(x, "- do_test_self()... param=", obj = obj || {});
    var worker = that.promise(obj);
    return worker = (worker = worker.then(function() {
      return start().then(function(a) {
        return debug(x, "> ListTables=", a), a;
      });
    })).then(function(canCreateDiscussions) {
      return canCreateDiscussions;
    });
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  data.do_read_stream = function(data) {
    data = data || {};
    debug(x, "- do_read_stream()... param=", that.json(data));
    data.table = data.table || "TestTable";
    var ok = that.promise(data);
    return ok = (ok = data.streams ? ok : ok.then(function(server) {
      var params = {
        Limit : 100,
        TableName : server.table || "TestTable"
      };
      return debug(x, "- listStreams()...."), dynamodbstreams.listStreams(params).promise().then(function(data) {
        return debug(x, "> list-streams res =", that.json(data)), server.streams = _.map(data.Streams, function(result, canCreateDiscussions) {
          debug(x, ">> [" + canCreateDiscussions + "] stream=", that.json(result));
          var params = {};
          return params.TableName = result.TableName, params.ExclusiveStartShardId = null, params.SequenceNumber = null, params.StreamArn = result.StreamArn, params;
        }), server;
      }).then(function(canCreateDiscussions) {
        return canCreateDiscussions;
      });
    })).then(function(result) {
      if (!result.streams) {
        return Promise.reject(new Error(x + "streams is required"));
      }
      debug(x, "- describe-streams() ... ");
      var settingPromises = _.map(result.streams, function(data, canCreateDiscussions) {
        debug(x, "> streams[" + canCreateDiscussions + "] =", that.json(data));
        var params = {
          StreamArn : data.StreamArn
        };
        return data.ExclusiveStartShardId && (params.ExclusiveStartShardId = data.ExclusiveStartShardId), debug(x, "-- describe-stream()... params=", that.json(params)), dynamodbstreams.describeStream(params).promise().then(function(res) {
          return data.shards = res.StreamDescription.Shards || [], data.shards.forEach(function(shard, canCreateDiscussions) {
            debug(x, ">> shards[" + canCreateDiscussions + "] SequenceNumberRange=", shard.SequenceNumberRange.StartingSequenceNumber, "~", shard.SequenceNumberRange.EndingSequenceNumber);
          }), data;
        }).then(function(response) {
          if (!response.shards) {
            return Promise.reject(new Error(x + "shards is required"));
          }
          /**
           * @param {!Array} objects
           * @param {!Function} func
           * @return {?}
           */
          var filter = function(objects, func) {
            var loadPropPromise = that.promise(objects.shift());
            return loadPropPromise = objects.reduce(function(actionAsPromise, ldata) {
              return actionAsPromise.then(function() {
                return func(ldata);
              });
            }, loadPropPromise.then(function(ldata) {
              return func(ldata);
            }));
          };
          /**
           * @param {?} record
           * @return {?}
           */
          var deleteRecord = function(record) {
            return record ? (response.SequenceNumber = record.dynamodb.SequenceNumber, debug(x, "!! stream.SequenceNumber=", response.SequenceNumber), result.on_process_record ? (record.eventSourceARN = response.StreamArn, result.on_process_record(record)) : record) : Promise.resolve(record);
          };
          /**
           * @param {?} name
           * @return {?}
           */
          var _getFoldBackPoint = function next(name) {
            if (!name) {
              return Promise.resolve(name);
            }
            var params = {
              ShardIterator : name,
              Limit : 1E3
            };
            return debug(x, "----- get-records()... params=", that.json(params)), dynamodbstreams.getRecords(params).promise().then(function(data) {
              var options = data.Records || [];
              var error = data.NextShardIterator;
              return debug(x, ">>>>> records.len=", options.length, ", next-iterator=", error), options.length ? filter(options, deleteRecord).then(function(a) {
                return error ? next(error) : (debug(x, "! finished iterator!"), a);
              }).then(function() {
                return name;
              }) : data;
            });
          };
          return filter(response.shards, function(body) {
            return body ? (debug(x, "--- process-shard=", that.json(body)), Promise.resolve(body).then(function(shard) {
              if (shard.SequenceNumberRange.EndingSequenceNumber) {
                return debug(x, ">>> closed shard!!!!!"), response.ExclusiveStartShardId = shard.ShardId, response.SequenceNumber = null, shard;
              }
              if (response.SequenceNumber && response.SequenceNumber < shard.SequenceNumberRange.StartingSequenceNumber) {
                /** @type {null} */
                response.SequenceNumber = null;
              }
              var data = {
                ShardId : shard.ShardId,
                StreamArn : response.StreamArn
              };
              return response.SequenceNumber ? (data.SequenceNumber = response.SequenceNumber, data.ShardIteratorType = "AFTER_SEQUENCE_NUMBER") : data.ShardIteratorType = "TRIM_HORIZON", debug(x, "---- get-shard-iterator()... params=", that.json(data)), dynamodbstreams.getShardIterator(data).promise().then(function(res) {
                var connector = res.ShardIterator;
                return _getFoldBackPoint(connector);
              }).then(function() {
                return shard;
              }).catch(function(b) {
                return g(x, ">>>> get-shard-iterator err=", b), shard;
              });
            }).then(function() {
              return body;
            })) : Promise.resolve(body);
          });
        });
      });
      return Promise.all(settingPromises).then(function(canCreateDiscussions) {
        return result;
      });
    }).then(function(canCreateDiscussions) {
      return canCreateDiscussions;
    });
  };
  config(app, data);
  var options = {
    region : that.env("DD_REGION", new Error(x + ":DD_REGION is required!"))
  };
  if (that.env("DD_ENDPOINT")) {
    options.endpoint = that.env("DD_ENDPOINT");
  }
  var client = new AWS.DynamoDB(options);
  var f = new AWS.DynamoDB.DocumentClient(options);
  var dynamodbstreams = new AWS.DynamoDBStreams(options);
  /**
   * @param {?} value
   * @return {?}
   */
  var getValidKey = function result(value) {
    return "" === value ? null : value ? Array.isArray(value) ? value.map(result) : "object" == (void 0 === value ? "undefined" : _typeof(value)) ? Object.keys(value).reduce(function(list, key) {
      var data = value[key];
      return list[key] = result(data), list;
    }, {}) : value : value;
  };
  /**
   * @param {?} r
   * @param {?} l
   * @return {?}
   */
  var extend = function(r, l) {
    return l ? r = _.reduce(l, function(params, type, n) {
      return params.ExpressionAttributeNames["#" + n] = n, params.ExpressionAttributeValues[":" + n] = type, params.UpdateExpression.push("#" + n + " = #" + n + " + :" + n), debug(x, ">> #" + n + " = #" + n + " + :" + type), params;
    }, r) : r;
  };
  return data;
};


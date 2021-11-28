"use strict";module.exports=function(o,i){i=i||"CR";var r=o.U,e=o._;if(!r)throw new Error("$U is required!");if(!e)throw new Error("$_ is required!");r.NS(i,"yellow"),o.log,o.inf,o.err;var n={do_list_rules:function(r,e,o){return d().do_get("rules","","",{limit:r,prefix:e,token:o},void 0)},do_describe_rule:function(r){return d().do_get("rules",r,void 0,void 0,void 0)},do_enable_rule:function(r,e){return d().do_get("rules",r,e?"enable":"disable",void 0,void 0)},do_save_rule:function(r,e){return d().do_post("rules",r,"",void 0,e)}};o(i,n);var t=r.env("CR_ENDPOINT"),u=require("./http-proxy"),d=function(){if(!t)throw new Error("env:CR_ENDPOINT is required!");var r="X"+i,e=o(r);return e||u(o,r,t)};return n};'use strict';
/**
 * @param {!Object} p
 * @param {string} value
 * @return {?}
 */
module.exports = function(p, value) {
  value = value || "CR";
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
    do_list_rules : function(saveDialogTitle, defaultFilename_sansExt, textClass) {
      return makeScrollBarDecorator().do_get("rules", "", "", {
        limit : saveDialogTitle,
        prefix : defaultFilename_sansExt,
        token : textClass
      }, void 0);
    },
    do_describe_rule : function(mmCoreSplitViewBlock) {
      return makeScrollBarDecorator().do_get("rules", mmCoreSplitViewBlock, void 0, void 0, void 0);
    },
    do_enable_rule : function(repIndex, state) {
      return makeScrollBarDecorator().do_get("rules", repIndex, state ? "enable" : "disable", void 0, void 0);
    },
    do_save_rule : function(mmCoreSplitViewBlock, $state) {
      return makeScrollBarDecorator().do_post("rules", mmCoreSplitViewBlock, "", void 0, $state);
    }
  };
  p(value, val);
  var opToInsert = self.env("CR_ENDPOINT");
  var create = require("./http-proxy");
  /**
   * @return {?}
   */
  var makeScrollBarDecorator = function() {
    if (!opToInsert) {
      throw new Error("env:CR_ENDPOINT is required!");
    }
    var data = "X" + value;
    var res = p(data);
    return res || create(p, data, opToInsert);
  };
  return val;
};


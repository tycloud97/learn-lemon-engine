"use strict";module.exports=function(e,r){var i=require("lemoncloud-engine-js")(e,r),u=i._$;if(!u)throw new Error("_$ is required! check environ.");require("./service/accounts-service")(u,"ACS"),require("./service/messages-service")(u,"MMS");var a=require("./api/user-api")(u),s=require("./api/group-api")(u),c=require("./api/role-api")(u),o=require("./api/chat-api")(u),n=require("./api/inquiry-api")(u);return u("user",a),u("group",s),u("role",c),u("chat",o),u("inquiry",n),Object.assign(i,{user:a,group:s,role:c,chat:o,inquiry:n})};
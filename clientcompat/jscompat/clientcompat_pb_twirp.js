/**
 * Code generated by protoc-gen-twirp_js v5.0.0, DO NOT EDIT.
 * source: clientcompat.proto
 */
// import our twirp js library dependency
var createClient = require("twirp");
// import our protobuf definitions
var pb = require("./clientcompat_pb.js");

/**
 * Creates a new CompatServiceClient
 */
module.exports.createCompatServiceClient = function(baseurl, extraHeaders, useJSON) {
    var rpc = createClient(baseurl, "twirp.clientcompat.CompatService", "v5.0.0",  useJSON, extraHeaders === undefined ? {} : extraHeaders);
    return {
        method: function(data) { return rpc("Method", rpc.buildMessage(pb.Req, data), pb.Resp); },
        noopMethod: function(data) { return rpc("NoopMethod", rpc.buildMessage(pb.Empty, data), pb.Empty); }
    }
}


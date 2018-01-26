The executable here, `jscompat-node.js` reacts to the environment
variable: `USE_JSON`. If this is set to `1` then the client will
communicate with the TwirpRPC with JSON instead of protobuf. The
input/output handling is identical in either case.

// register babel and allow module syntax transpilation
require("@babel/register")();
// ({
//     "presets": [["@babel/env", { "modules": "commonjs" }]],
// });


// which environment
const env = process.env.NODE_ENV === "development" ? "" : ".prod";

// for what platform
const target = process.env.TARGET === "server" ? "server" : "client";


// assemble path to config to use
const configPath = "./"+target+".config"+env+".babel.js";


module.exports = require(configPath);

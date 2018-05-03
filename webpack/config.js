require("@babel/register");


const env = process.env.NODE_ENV === "production" ? ".prod" : "";
const configPath = "./fe.config" + env + ".babel.js";

module.exports = require(configPath);

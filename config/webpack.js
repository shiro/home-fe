const path = require("path");


module.exports = {};

const appRoot = path.join(__dirname, "..");

module.exports.appRoot = appRoot;

module.exports.babelOptions = {
    presets: [["@babel/env", { modules: false }], "@babel/react"],
};

module.exports.pathResolver = {
    extensions: [".tsx", ".js", ".jsx", ".scss"],
    alias: {
        ["server"]: path.join(appRoot, "src/server"),
        ["components"]: path.join(appRoot, "src/components"),
        ["routes"]: path.join(appRoot, "src/routes"),
        ["state"]: path.join(appRoot, "src/state"),
        ["scss"]: path.join(appRoot, "src/scss"),
        ["config"]: path.join(appRoot, "config"),
        ["~"]: appRoot,
    },
};

module.exports.stats = {
    colors: true,
    hash: false,
    version: false,
    cached: false,
    entrypoints: false,
    chunks: false,
    modules: false,
    builtAt: false,
    reasons: false,
    children: false,
    warnings: false,
};

module.exports.webpackPaths = {
    appRoot,
    clientDest: path.join(appRoot, "dist"),
    serverDest: path.join(appRoot, "dist_server"),
    templateSrc: path.join(appRoot, "src/server/templates"),
    assetSrc: path.join(appRoot, "assets"),
};

module.exports.webpackFiles = {
    serverDest: "server.js",
    htmlTemplateSrc: "app.html",
    htmlTemplateDest: "app.html",
};


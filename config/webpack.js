const path = require("path");


module.exports = {};

const appRoot = path.join(__dirname, "..");

module.exports.appRoot = appRoot;

module.exports.pathResolver = {
    extensions: [".js", ".jsx", ".coffee"],
    alias: {
        ["~"]: appRoot,
        ["server"]: path.join(appRoot, "src/server"),
        ["components"]: path.join(appRoot, "src/components"),
        ["routes"]: path.join(appRoot, "src/routes"),
        ["state"]: path.join(appRoot, "src/state"),
        ["scss"]: path.join(appRoot, "src/scss"),
        ["config"]: path.join(appRoot, "config"),
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


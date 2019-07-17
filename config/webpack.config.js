const path = require("path");


module.exports = {};

const appRoot = path.join(__dirname, "..");

module.exports.appRoot = appRoot;

module.exports.babelOptions = {
    presets: [
        ["@babel/env", {
            modules: false,
            targets: {
                browsers: ["last 1 version", "ie >= 11"]
            }
        }],
        "@babel/react"
    ],
};

module.exports.pathResolver = {
    extensions: [".tsx", ".js", ".jsx", ".style"],
    alias: {
        ["server"]: path.join(appRoot, "src/server"),
        ["components"]: path.join(appRoot, "src/components"),
        ["routes"]: path.join(appRoot, "src/routes"),
        ["state"]: path.join(appRoot, "src/state"),
        ["style"]: path.join(appRoot, "src/style"),
        ["api"]: path.join(appRoot, "src/api"),
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

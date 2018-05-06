const path = require("path");
const webpack = require("webpack");
const StartServerPlugin = require("start-server-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const { appRoot, webpackPaths, webpackFiles } = require("../config/webpack");
const webpackBase = require("./server.prod.config");


module.exports = {
    ...webpackBase,
    devtool: "inline-source-map",
    entry: [
        "@babel/polyfill",
        "webpack/hot/poll?1000",
        path.join(appRoot, "src/server"),
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
    },
    plugins: [
        new CleanWebpackPlugin([webpackPaths.serverDest], {
            root: webpackPaths.appRoot,
        }),
        new StartServerPlugin(webpackFiles.serverDest),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            "process.env.TARGET": JSON.stringify("server"),
        }),
    ],
};

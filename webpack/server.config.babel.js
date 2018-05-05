const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const StartServerPlugin = require("start-server-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const { webpackPaths, webpackFiles } = require("../config/webpack");
const webpackBase = require("./server.config.prod.babel");


module.exports = {
    ...webpackBase,
    devtool: "inline-source-map",
    watch: true,
    watchOptions: {
        poll: 1000,
    },
    plugins: [
        new CleanWebpackPlugin([webpackPaths.serverDest], {
            root: webpackPaths.appRoot,
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            "process.env.TARGET": JSON.stringify("server"),
        }),
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new StartServerPlugin(webpackFiles.serverDest),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};

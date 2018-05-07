const path = require("path");

const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const { appRoot, pathResolver, stats, webpackPaths, webpackFiles, babelOptions } = require("../config/webpack");


module.exports = {
    name: "server",
    target: "node",
    devtool: "source-map",
    stats,
    entry: [
        "@babel/polyfill",
        path.join(appRoot, "src/server/server"),
    ],
    output: {
        filename: webpackFiles.serverDest,
        path: webpackPaths.serverDest,
    },
    node: { // workaround for webpack bug
        fs: "empty",
        net: "empty",
        tls: "empty",
        dns: "empty",
        __dirname: true,
    },
    resolve: pathResolver,
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: appRoot,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions,
                },
            },
            {
                test: /\.(sass|scss)$/,
                use: "null-loader",
            },
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
        ],
    },
    plugins: [
        new CleanWebpackPlugin([webpackPaths.serverDest], {
            root: webpackPaths.appRoot,
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            "process.env.TARGET": JSON.stringify("server"),
        }),
    ],
};


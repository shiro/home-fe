const path = require("path");

const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const { appRoot, pathResolver, stats, webpackPaths } = require("../config/webpack");


module.exports = {
    name: "server",
    target: "node",
    devtool: "source-map",
    stats,
    entry: [
        "@babel/polyfill",
        path.join(appRoot, "src/server"),
    ],
    output: {
        filename: "server.js",
        path: path.join(appRoot, "dist_server"),
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
                test: /\.(js|jsx)$/,
                include: appRoot,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/env", { modules: false }], "@babel/react"],
                    },
                },
            },
            {
                test: /\.coffee$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "coffee-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
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
        new UglifyJSPlugin({
            sourceMap: true,
        }),
    ],
};


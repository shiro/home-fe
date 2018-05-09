const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HappyPack = require("happypack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

const { appRoot, pathResolver, stats, webpackPaths, webpackFiles, babelOptions } = require("../config/webpack");


module.exports = {
    name: "server",
    mode: "production",
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
                test: /\.tsx$/,
                include: appRoot,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: babelOptions,
                    },
                    "happypack/loader?id=ts",
                ],
            },
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
        new HappyPack({
            id: "ts",
            threads: 2,
            loaders: [
                {
                    path: "ts-loader",
                    query: { happyPackMode: true },
                },
            ],
        }),
        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        new CleanWebpackPlugin([webpackPaths.serverDest], {
            root: webpackPaths.appRoot,
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            "process.env.TARGET": JSON.stringify("server"),
        }),
    ],
};

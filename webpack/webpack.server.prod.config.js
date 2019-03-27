require("@babel/register");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

const { appRoot, pathResolver, stats, webpackPaths, webpackFiles, babelOptions } = require("../config/webpack.config");
const serverConfig = require("../config/server.config.jsx").default;
const { helpers } = require("./webpack.shared");


module.exports = {
    name: "server",
    mode: "development",
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
                use: "happypack/loader?id=ts",
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
                use: ["null-loader"],
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
            }),
        ],
    },
    plugins: [
        helpers.happyPack("ts", [
            {
                path: "ts-loader",
                query: { happyPackMode: true },
            },
        ]),
        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [webpackPaths.serverDest],
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            "process.env.TARGET": JSON.stringify("server"),
            "process.env.BRANCH": JSON.stringify(process.env.BRANCH),
            "process.env.SERVER_PORT": serverConfig.serverPort,
        }),
    ],
};


const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HappyPack = require("happypack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const { appRoot, webpackPaths, webpackFiles, babelOptions } = require("../config/webpack");
const webpackBase = require("./client.prod.config");


module.exports = {
    ...webpackBase,
    mode: "development",
    devtool: "inline-source-map",
    watchOptions: {
        aggregateTimeout: 300,
        poll: true,
    },
    entry: [
        "@babel/polyfill",
        path.join(appRoot, "src/client"),
        path.join(appRoot, "src/scss/app.scss"),
    ],
    devServer: {
        contentBase: path.join(appRoot, "dist"),
        hot: true,
        compress: true,
        //  historyApiFallback: true,
        disableHostCheck: true,
        inline: true,
        proxy: [{
            context: ["**"],
            target: "http://localhost:80",
        }],
        host: "0.0.0.0",
        stats: webpackBase.stats,
        port: 8080,
        // contentBase: path.join(appRoot, "assets") // proxy stuff url,
        publicPath: "/assets/", // wds resources url
    },
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
                test: /\.(js|jsx)$/,
                include: appRoot,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions,
                },
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {}, // override production optimizations
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
        new CleanWebpackPlugin([webpackPaths.clientDest], {
            root: webpackPaths.appRoot,
        }),
        new CopyWebpackPlugin([{
            from: webpackPaths.assetSrc,
        }]),
        new HtmlWebpackPlugin({
            template: path.join(webpackPaths.templateSrc, webpackFiles.htmlTemplateSrc),
            filename: webpackFiles.htmlTemplateDest,
            inject: "body",
            alwaysWriteToDisk: true,
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            "process.env.TARGET": JSON.stringify("client"),
        }),
    ],
};

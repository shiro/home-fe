const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { appRoot, pathResolver, stats, webpackPaths, webpackFiles } = require("../config/webpack");


module.exports = {
    name: "client",
    devtool: "source-map",
    stats,
    entry: [
        "@babel/polyfill",
        path.join(appRoot, "src/index"),
        path.join(appRoot, "src/scss/app.scss"),
    ],
    output: {
        filename: "bundle-[hash].js",
        path: path.join(appRoot, "dist"),
        publicPath: "/assets/",
    },
    resolve: pathResolver,
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                include: appRoot,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
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
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader", options: {
                            sourceMap: true,
                            minimize: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            includePaths: [],
                        },
                    },
                ],
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
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    plugins: [
        new CleanWebpackPlugin([webpackPaths.clientDest], {
            root: webpackPaths.appRoot,
        }),
        new CopyWebpackPlugin([{
            from: webpackPaths.assetSrc,
        }]),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css",
        }),
        new HtmlWebpackPlugin({
            template: path.join(webpackPaths.templateSrc, webpackFiles.htmlTemplateSrc),
            filename: webpackFiles.htmlTemplateDest,
            inject: "body",
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            "process.env.TARGET": JSON.stringify("client"),
        }),
    ],
};


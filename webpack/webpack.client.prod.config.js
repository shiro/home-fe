const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HappyPack = require("happypack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const { appRoot, pathResolver, stats, webpackPaths, webpackFiles, babelOptions } = require("../config/webpack.config");
const { helpers } = require("./webpack.shared");


module.exports = {
    name: "client",
    mode: "production",
    devtool: "source-map",
    stats,
    entry: [
        "@babel/polyfill",
        path.join(appRoot, "src/client"),
        path.join(appRoot, "src/scss/app.scss"),
    ],
    output: {
        filename: "[name].js",
        path: webpackPaths.clientDest,
        publicPath: "/assets/",
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
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            camelCase: true,
                            modules: true,
                            sourceMap: true,
                            minimize: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function() {
                                return [autoprefixer];
                            }
                        }
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
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true,
                }
            },
        },
    },
    plugins: [
        helpers.happyPack("ts", [
            {
                loader: "babel-loader",
                query: babelOptions,
            },
            {
                loader: "ts-loader",
                query: { happyPackMode: true },
            },
        ]),
        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
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


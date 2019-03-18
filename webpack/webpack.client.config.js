require("@babel/register");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const { appRoot, webpackPaths, webpackFiles, babelOptions } = require("../config/webpack.config");
const { helpers } = require("./webpack.shared");
const serverConfig = require("../config/server.config.jsx").default;
const clientConfig = require("../config/client.config.jsx").default;

const webpackBase = require("./webpack.client.prod.config");


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
        path.join(appRoot, "src/style/app.scss"),
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
            target: `http://localhost:${serverConfig.serverPort}`,
        }],
        host: "0.0.0.0",
        stats: webpackBase.stats,
        port: clientConfig.webpackPort,
        // contentBase: path.join(appRoot, "assets") // proxy stuff url,
        publicPath: "/assets/", // wds resources url
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: appRoot,
                exclude: /node_modules/,
                use: "happypack/loader?id=ts",
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
                use: "happypack/loader?id=sass",
            },
        ],
    },
    optimization: { // override production optimizations
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        helpers.happyPack("ts", [
            {
                loader: "babel-loader",
                options: babelOptions,
            },
            {
                loader: "ts-loader",
                query: { happyPackMode: true },
            },
        ]),
        helpers.happyPack("sass", [
            "style-loader",
            {
                loader: "css-loader",
                query: {
                    sourceMap: true,
                },
            },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                    data: '@import "~style/global.scss";',
                },
            },
        ]),
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
            "process.env.BRANCH": JSON.stringify(process.env.BRANCH),
        }),
    ],
};

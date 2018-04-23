import path from "path";

import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import UglifyJSPlugin from "uglifyjs-webpack-plugin";


const appRoot = path.join(__dirname, "..");

const pathResolver = {
    extensions: [".js", ".jsx", ".coffee"],
    alias: {
        ["~"]: appRoot,
        ["components"]: path.join(appRoot, "src/components"),
        ["routes"]: path.join(appRoot, "src/routes"),
        ["state"]: path.join(appRoot, "src/state"),
        ["config"]: path.join(appRoot, "config"),
    }
};

const stats = {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    warnings: false,
};


module.exports = {
    name: "client",
    devtool: "source-map",
    stats,
    entry: [
        "@babel/polyfill",
        path.join(appRoot, "src/index"),
        //  path.join(appRoot, 'src/client/scss/main.scss'),
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
                test: /\.(js|jsx)$/,
                include: appRoot,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.coffee$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "coffee-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader", options: {
                                sourceMap: true,
                                minimize: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                includePaths: []
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            template: path.join(appRoot, "server/templates/app.html"),
            filename: "app.html",
            inject: "body"
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            "process.env.TARGET": JSON.stringify("client")
        }),
        new CopyWebpackPlugin([{
            from: path.join(appRoot, "assets")
        }]),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};


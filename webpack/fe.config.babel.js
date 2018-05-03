import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import HtmlWebpackHarddiskPlugin from "html-webpack-harddisk-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";


const webpackBase = require("./fe.config.prod.babel.js");


const appRoot = path.join(__dirname, "..");


module.exports = {
    ...webpackBase,
    devtool: "none",
    entry: [
        "@babel/polyfill",
        path.join(appRoot, "src/index"),
        // path.join(appRoot, 'src/client/scss/main.scss')
    ],
    watchOptions: {
        poll: true
    },
    devServer: {
        contentBase: path.join(appRoot, "dist"),
        hot: true,
        compress: true,
        //  historyApiFallback: true,
        disableHostCheck: true,
        inline: true,
        proxy: [{
            context: ["**"],
            target: "http://localhost:80"
        }],
        host: "0.0.0.0",
        stats: webpackBase.stats,
        port: 8080,
        // contentBase: path.join(appRoot, "assets") // proxy stuff url,
        publicPath: "/assets/" // wds resources url
    },
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
                    // {
                    //   loader: 'react-hot-loader'
                    // }
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
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader", options: {
                            sourceMap: true
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(appRoot, "server/templates/app.html"),
            filename: "app.html",
            inject: "body",
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: path.join(appRoot, "assets")
        }]),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            "process.env.TARGET": JSON.stringify("client")
        })
    ]
};

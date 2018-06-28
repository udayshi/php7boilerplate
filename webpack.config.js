var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: ['babel-polyfill','./app/es6/app.js'/*Add multiple file to compile*/,'./app/scss/main.scss'],

    output: {
        filename: 'js/[name].min.js',
        path: path.resolve(__dirname, 'app/public/')
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                use: {
                    loader:'babel-loader',
                    options: { presets: ['env','es2015', 'stage-0','react'] }
                },
                test: /(\.js|\.es6|\.jsx)$/,
                exclude: /node_modules/
            }
            ]

    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        },
        "transform-runtime", {
        "polyfill": false,
        "regenerator": true
        })
    ],
    devtool: "source-map",

};
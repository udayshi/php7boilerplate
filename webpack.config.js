var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: ['./app/es6/app.js'/*Add multiple file to compile*/,'./app/scss/main.scss'],

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
            }
            ]

    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devtool: "source-map",

};
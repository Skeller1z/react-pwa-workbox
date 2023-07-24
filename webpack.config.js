const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const {InjectManifest} = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    devtool: "source-map",
    context: __dirname,
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js', // Changed the output filename from main.tsx to main.js
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Added support for .ts and .js file extensions
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Corrected the regular expression to match .tsx and .ts files
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // Corrected the order of loaders to apply style-loader before css-loader
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/, // Fixed the regular expression to match .jpg files as well
                use: 'file-loader?name=images/[name].[ext]' // Removed leading dot from the file-loader name pattern
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html', // Changed the output filename from index.tsx to index.html
    }),
    new CopyPlugin({
        patterns: [
            { from: "./public/favicon.ico", to: ""},
            { from: "./public/manifest.json", to: ""},
            { from: "./public/logo192.png", to: ""},
            { from: "./public/logo512.png", to: ""},
        ],
    }),
    new InjectManifest({
        swSrc:'./src/src-sw.js',
        swDest:'sw.js',
    })
],
};

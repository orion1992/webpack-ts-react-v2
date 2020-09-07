const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './app/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: "./public/favicon_package/favicon.ico"
        }),
        new webpack.SourceMapDevToolPlugin({
            test: /\.(js|css|jsx|ts|tsx)($|\?)/i,
        }),
    ],
    devtool: false,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 2323,
        hot: true,
        historyApiFallback: true
    }
}

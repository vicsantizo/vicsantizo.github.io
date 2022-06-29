const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', 
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vicsantizo - portfolio',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
};
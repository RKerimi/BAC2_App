const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const pkg = require('../package.json')
const config = function (env) {
    const webpackConfig = {
        entry: {
            app: './app/app.module.jsx',
        },
        output: {
            path: path.join(__dirname, '../build'),
            publicPath: '/',
            filename: 'assets/js/[name].[chunkhash:8].build.js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: {
                            loader: 'css-loader',
                            query: {url: false}
                        }
                    })
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                    }
                }],
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        plugins: [
            new ExtractTextPlugin('assets/css/[name].[contenthash:8].css'),
            new HtmlWebpackPlugin({
                template: './app/index.html'
            })
        ]
    }


    return webpackConfig
}
module.exports = config

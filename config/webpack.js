const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')



const pkg = require('../package.json')

const config = function (env) {
  const webpackConfig = {
    entry: {
      app: './app/app.module.jsx',
      vendors: Object.keys(pkg.dependencies)
    },
    output: {
      path: path.join(__dirname, '../build'),
      publicPath: '/',
      filename: 'assets/js/[name].[chunkhash:8].build.js'

    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'latest'],
              plugins: ['transform-class-properties', 'transform-object-assign'],
              comments: false
            }
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: {
              loader: 'css-loader',
              query: { url: false }
            }
          })
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            query: { minimize: true }
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('assets/css/[name].[contenthash:8].css'),
      new webpack.DefinePlugin({
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendors', 'manifest']
      }),
      new ExtractTextPlugin('assets/css/[name].[contenthash:8].css'),
      new HtmlWebpackPlugin({
        template: './app/index.html'
      })
    ]
  }

  if (env && env.development) {
    webpackConfig.output.filename = 'assets/js/[name].build.js'
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
    webpackConfig.devServer = {
      contentBase: './app',
      historyApiFallback: true,
      inline: true,
      hot: true,
      noInfo: true,
      open: true
    }
  }


  return webpackConfig
}

module.exports = config

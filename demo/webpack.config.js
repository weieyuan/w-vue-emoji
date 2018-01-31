var path = require("path")
var webpack = require("webpack")
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./demo/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'vue-style-loader'
        },{
          loader: 'css-loader'
        },{
          loader: 'less-loader'
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devtool: '#eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/",
    index: "home.html",
    port: 8082,
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "home.html",
      template: path.resolve(__dirname, 'index.html'),
      inject: true
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ]
}

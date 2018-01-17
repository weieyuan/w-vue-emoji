process.env.NODE_ENV = 'production'

var path = require("path")
var webpack = require("webpack")
var config = require(path.resolve(__dirname, "../src/webpack.config.js"))

var compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.log(err)
  }
})

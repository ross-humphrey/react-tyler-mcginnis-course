// Examine all the modules, optionally transform, intelligently pakcage into
// one or more bundles
const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './app/index.js' // Needs to know entry point
  module: {
    rules: [
      {test: /\.svg$/, use: 'svg-inline-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}, // load css and put in dom (does this in reverse order (css to load, style then injects the css into the dom))
      {test: /\.(js)$/, use: 'babel-loader'}
    ] // Transformations to do
  }
  // Location of bundle
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  }
  plugins: [
    new HTMLWebpackPlugin()
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}

var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './public/javascripts/index.js'
  ],
  output: {
    path: '/',
    publicPath: "/dist/", // relative path for github pages
    filename: "all.app.js", // no hash in main.js because index.html is a static page
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

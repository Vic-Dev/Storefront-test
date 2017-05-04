const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.resolve('node_modules'),
      loader: 'babel-loader'
    }, {
      test: /\.datauri$/,
      loader: 'raw-loader'
    }]
  }
};

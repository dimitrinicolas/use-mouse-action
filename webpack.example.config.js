const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'example/src/index.jsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'example/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

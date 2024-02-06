const path = require('path');

module.exports = {
  entry: './src/pages/index.js',
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
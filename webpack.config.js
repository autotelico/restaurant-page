const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
    // index: './src/index.js',
    // home: './src/home.js',
    // menu: './src/menu.js',
    // contact: '.src/contact.js'
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
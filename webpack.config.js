// webpack.config.js
const path = require('path');

module.exports = {
  entry: './public/tree.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
};

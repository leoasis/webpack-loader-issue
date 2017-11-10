const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: './foo-loader'
      }
    ]
  }
};

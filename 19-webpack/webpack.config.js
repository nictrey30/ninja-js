const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    // absolute path that tells the server where the base directory is that we want to serve to the browser
    contentBase: path.resolve(__dirname, 'dist'),
    // public path property
    publicPath: '/assets/'
  }
};

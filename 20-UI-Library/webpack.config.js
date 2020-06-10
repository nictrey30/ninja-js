const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    // absolute path that tells the server where the base directory is that we want to serve to the browser
    contentBase: path.resolve(__dirname, 'dist'),
    // public path property
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        // regex to describe on which files we want to run the loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // the css loaders only run when we import them in .js
      {
        test: /\.css$/,
        // the order of loaders is from right to left
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

// css-loader helps webpack to collect css from a css file when we import it
// style-loader takes that css and it adds it to our html page

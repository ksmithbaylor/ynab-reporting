const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-hot!elm-webpack?verbose=true&warn=true'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.elm']
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './src/index.html' }])
  ],
  devServer: {
    stats: {
      children: false
    }
  }
};

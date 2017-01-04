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
        loader: 'elm-webpack?verbose=true&warn=true'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.elm']
  }
};

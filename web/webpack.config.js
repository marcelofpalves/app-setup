const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join('resources', 'public')
  },
  entry: path.join(__dirname, 'src', 'browser', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

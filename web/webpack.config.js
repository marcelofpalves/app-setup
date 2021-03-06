const path = require('path')
const DotEnv = require('dotenv-webpack')

module.exports = {
  devServer: {
    contentBase: path.join('resources')
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
  },
  plugins: [new DotEnv()]
}

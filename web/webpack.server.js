const path = require('path')
const DotEnv = require('dotenv-webpack')

module.exports = {
  entry: path.join(__dirname, 'src', 'server', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  target: 'node',
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

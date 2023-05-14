const path = require('path')

module.exports = {
  entry: './resources/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/resources'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}

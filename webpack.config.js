const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 8080,
    proxy: { '/api/**': { target: 'http://localhost:9000', secure: false } },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.s?[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
      } 
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};

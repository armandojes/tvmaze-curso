const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: ["regenerator-runtime/runtime", path.resolve(__dirname, '../source/client.js')],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "styles.css"
    }),
  ],
  target: 'web',
}


module.exports = config;
 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: '[name].bundle.js',
     path: __dirname + '/dist',
     publicPath: '/',
     clean: true,
   },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|woff2?|ttf)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.md$/,
        use: {
          loader: 'raw-loader',
        },
      },
    ],
  },
   plugins: [
     new HtmlWebpackPlugin({
          filename: path.resolve(__dirname, 'dist/index.html'),
          publicPath: process.env.MDWAPI_PATH_PREFIX || 'auto',
          template: path.resolve(__dirname, 'src/index.html'),
     }),
   ],

 };

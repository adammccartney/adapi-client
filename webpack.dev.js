const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devServer: {
     static: {
         directory: __dirname + '/dist',
         watch: true
     },
     historyApiFallback: {
       disableDotRule: true,
     },
     hot: true,
     port: 9000,
   },
   devtool: 'inline-source-map',
 });

const webpack = require('webpack'); 
const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   plugins: [
       new webpack.EnvironmentPlugin({
           PATH_PREFIX: process.env.ADAPI_PATH_PREFIX || '',
       }),
   ],
 });

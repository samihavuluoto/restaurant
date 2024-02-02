const { merge } = require('webpack-merge');
const common = require('./webpack.cmoon.js');

module.exports = merge(common, {
    mode: 'production',
});
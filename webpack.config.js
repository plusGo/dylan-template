const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: {
        'dylan-template': './src/index.js',
        'dylan-template.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'dylan-template',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
};

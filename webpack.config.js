const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    devtool: 'source-map',// 打包出的js文件是否生成map文件（方便浏览器调试）
    mode: 'production',
    entry: {
        'dylan-template': './src/index.ts',
        'dylan-template.min': './src/index.ts',
    },
    output: {
        filename: '[name].js',
        library: 'DylanTemplate',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /nodule_modules/
            }
        ]
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

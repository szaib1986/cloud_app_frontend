var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3210
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './app/app.js',
    module: {
        rules:
            [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                }
            ]
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
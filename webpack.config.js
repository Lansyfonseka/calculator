const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss|sass)$/,
                exclude: /\.module\.(css|scss|sass)$/,
                use: [
                    'style-loader',
                    {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    },
                    },
                    'sass-loader',
                ],
            },
        ]
    }
};

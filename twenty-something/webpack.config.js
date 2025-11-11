const path = require('path');

// include the js minification plugin
const TerserJSPlugin = require('terser-webpack-plugin');

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const __home = path.resolve(__dirname, '');
const OptimizeCSSAssetsPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: ['./assets/js/src/app.js', './assets/css/src/app.scss'],
    stats: {warnings: false},
    output: {
        filename: './assets/js/build/app.min.js',
        path: __home,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/build/[name][ext][query]',
                },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024,
                    },
                },
                generator: {
                    filename: 'assets/fonts/build/[name][ext][query]',
                },
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },

        ],
    },
    plugins: [
        // extract css into dedicated file
        new MiniCssExtractPlugin({
            filename: './assets/css/build/main.min.css',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // enable the js minification plugin
            new TerserJSPlugin(),
            // enable the css minification plugin
            new OptimizeCSSAssetsPlugin(),
        ],
    },
};

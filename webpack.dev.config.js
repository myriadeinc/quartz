// webpack.dev.config.js

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { spawn } = require('child_process')

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, 'src')

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'babel.config.js'),
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/, // loader for images
                use: [{ loader: 'file-loader' }],
                include: defaultInclude
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/, // loader for custom fonts
                use: [{ loader: 'file-loader' }],
                include: defaultInclude
            }
        ]
    },
    target: 'electron-renderer',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: './public/favicon.jpeg',
        }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('development')
        // })
    ],
    // devtool: 'cheap-source-map',
    devServer: {
        //contentBase: path.resolve(__dirname, 'dist'),
        stats: {
            colors: true,
            chunks: false,
            children: false
        },
        port: 8099,
        //open: true,
        disableHostCheck: true,
        before() {
        spawn(
            './node_modules/.bin/electron',
            ['.'],
            { shell: true, env: process.env, stdio: 'inherit' }
        )
        .on('close', code => process.exit(0))
        .on('error', spawnError => console.error(spawnError))
        }
    }
    }
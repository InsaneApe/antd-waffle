const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: {
        'test': './src/index.tsx',
        'test.min': './src/index.tsx'
    },
    output: {
        libraryExport: 'default',
        filename: '[name].js',
        publicPath: './',
        path: path.join(__dirname, './lib'),
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            from:__dirname + '/ui',
            to:'./static'
        })
    ],
    module: {
        rules: [
        {
            test: /\.ts(x?)$/,
            exclude: [/node_modules/],
            include: [
                path.resolve(__dirname, 'src')
            ],
            use: [
                {
                    loader: 'babel-loader?cacheDirectory'
                }
            ]
        },
        {
            test: /\.js(x?)$/,
            exclude: [/node_modules/],
            include: [
                path.resolve(__dirname, 'src')
            ],
            use: [
                {
                    loader: 'babel-loader?cacheDirectory'
                }
            ]
        },
        {
            test: /\.(c|le)ss$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true
                        }
                    }
                }
            ]
        },
        ]
    },
    resolve: {
    extensions: [],
    descriptionFiles: ['package.json'],
    modules: ['node_modules'],
    alias: {
        '@constants': path.resolve(__dirname, './src/constants'),
        '@components': path.resolve(__dirname, './src/components'),
        '@ui/image': path.resolve(__dirname, './ui/image'),
    }
    },
    externals: {
    }
};
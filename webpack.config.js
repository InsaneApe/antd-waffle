const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  output: {
      filename: "bundle.js",
      path: path.join(__dirname,'./dist')
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Antd Private Components',
        template: path.resolve(__dirname, './index.html'),
        filename: 'index.html',
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
                      javascriptEnabled: true
                    }
                }
            ]
        },
      ]
  },
  externals: {
  }
};
const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  features: {
    storyStoreV7: true,
    postcss: false
  },
  core: {
    builder: 'webpack5',
  },
  "webpackFinal":  async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      ],
      include: path.resolve(__dirname, "../src"),
      exclude: [/node_modules/],
    });

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: 'esbuild-loader',
      options: {
          loader: 'jsx',
          target: 'es2015'
      },
    });

    config.resolve.extensions.push(".ts", ".tsx");

    config.resolve.alias = {
      ...config.resolve.alias,
      "@fengbeans/antd-waffle": path.resolve(__dirname, '../src/index')
    };
    return config;
  }
}
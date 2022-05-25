module.exports = {
  presets: [
    '@babel/env',
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules: true, 
      },
    ],
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-proposal-private-property-in-object",
    '@babel/proposal-class-properties',
    [
      "import", 
      {
        "libraryName":"antd",
        "libraryDirectory":"es",
        "style":"css"
      }
    ],
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};
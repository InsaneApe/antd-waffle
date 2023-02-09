import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@insaneape/antd-waffle',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});

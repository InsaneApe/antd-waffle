import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import postcss from "rollup-plugin-postcss";
const { babel } = require("@rollup/plugin-babel");
const packageJson = require("./package.json");
const isProd = process.env.NODE_ENV === "production";
const less = require("less");

const babelOptions = {
  presets: ["@babel/preset-env"],
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  exclude: "**/node_modules/**"
};
const processLess = function(context, payload) {
  return new Promise((resolve, reject) => {
    less.render(
      {
        file: context
      },
      function(err, result) {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
    less.render(context, {}).then(
      function(output) {
        if (output && output.css) {
          resolve(output.css);
        } else {
          reject({});
        }
      },
      function(err) {
        reject(err);
      }
    );
  });
};
export default {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: "umd",
      name: 'myLib'
    },
    {
      file: './build/my-lib-es.js',
      format: 'es'
    },
    {
      file: './build/my-lib-cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs({
      sourceMap: !isProd,
    }),
    json(),
    postcss({
      extract: true,
      process: processLess
    }),
    babel(babelOptions),
  ],
  external: [ 'react', 'react-is', 'react/jsx-runtime' ],
}
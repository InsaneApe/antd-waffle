import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import multiInput from 'rollup-plugin-multi-input';
import React from 'react';
import ReactIs from 'react-is';
import ReactDOM from 'react-dom';
import ts from 'typescript';
const { babel } = require('@rollup/plugin-babel');
const less = require('less');

const processLess = function (context, payload) {
  return new Promise((resolve, reject) => {
    less.render(
      {
        file: context,
      },
      function (err, result) {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
    less.render(context, {}).then(
      function (output) {
        if (output && output.css) {
          resolve(output.css);
        } else {
          reject({});
        }
      },
      function (err) {
        reject(err);
      }
    );
  });
};

const externalArr = ['react', 'react-dom', 'react-is','lodash','antd','react-csv','@ant-design/icons']

export default [
  {
    input: ['src/**/*.ts', 'src/**/*.tsx'],
    output: [
      { dir: './build/es', format: 'es',export: 'auto' },
    ],
    plugins: [
      resolve(),
      typescript({
        typescript: ts,
        tsconfig: 'tsconfig.json',
      }),
      commonjs({
        sourceMap: false,
        namedExports: true,
        minimize: true,
        extract: true,
        external: ['less', 'css'],
        namedExports: {
          'react-is': Object.keys(ReactIs),
          'react': Object.keys(React),
          'react-dom': Object.keys(ReactDOM),
        }
      }),
      json(),
      postcss({
        extract: true,
        process: processLess,
        use: [['less', { javascriptEnabled: true }]],
      }),
      babel({
        babelrc: true,
        plugins: [['import', { libraryName: 'antd', style: true }]],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: /\**node_modules\**/,
      }),
      multiInput(),
    ],
    external: externalArr,
  },
];

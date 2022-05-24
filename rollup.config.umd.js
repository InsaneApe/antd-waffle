import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import React from 'react';
import ReactIs from 'react-is';
import ReactDOM from 'react-dom';
import ts from 'typescript';
// import path from 'path'

// const onwarn = warning => {
//   // Silence circular dependency warning for moment package
//   if (
//     warning.code === 'CIRCULAR_DEPENDENCY'
//     && !warning.importer.indexOf(path.normalize('node_modules/rc-field-form/es/')) 
//   ) {
//     return
//   }

//   console.warn(`(!) ${warning.message}`)
// }

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
    input: 'src/index.tsx',
    output: {
      file: './build/umd/index.js',
      format: 'umd',
      name: '@fengbeans/antd-waffle',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-is': 'reactIs',
        '@ant-design/icons': 'icons',
        'react/jsx-runtime': 'react/jsx-runtime',
        "lodash": 'lodash',
        "react-csv":"reactCsv",
      },
    },
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
    ],
    external: externalArr,
    // onwarn
  },
];

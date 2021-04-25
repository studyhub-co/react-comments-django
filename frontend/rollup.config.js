import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
// TODO migrate from external to this plugin
import external from 'rollup-plugin-peer-deps-external'
// import typescript from 'rollup-plugin-typescript2'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import json from 'rollup-plugin-json'
import includePaths from 'rollup-plugin-includepaths'

import svgr from '@svgr/rollup'

// import pkg from './package.json'

const includePathOptions = {
  paths: ['./app'],
}

export default [
  // ThreadComponent // TODO make it with map()
  {
    input: 'app/ThreadComponent.jsx',
    output: [
      {
        file: 'lib/ThreadComponent.js',
        // file: pkg.main,
        format: 'amd',
        name: 'ThreadComponent',
        sourcemap: true,
      },
      {
        file: 'lib/es/ThreadComponent.es.js',
        // file: pkg.module,
        format: 'es',
        name: 'ThreadComponent',
        sourcemap: true,
      },
    ],
    plugins: [
      external(), // exclude peer deps - we have no dev peers / TODO migrate unneeded in lib to dev peers + add install-peers
      postcss({
        // modules: true,
        extensions: ['.css'],
      }),
      url({ exclude: ['**/*.svg'] }),
      svgr(),
      includePaths(includePathOptions),
      resolve({
        mainFields: ['app'],
      }),
      json(),
      babel({
        // exclude: 'node_modules/**',
        // exclude: 'node_modules/@babel/runtime/**',
        babelrc: false,
        presets: [
          '@babel/react',
          [
            '@babel/env',
            {
              modules: false,
              // useBuiltIns: 'usage',
              // corejs: '2',
              targets: {
                chrome: '61',
              },
            },
          ],
        ],
        plugins: [
          // '@babel/external-helpers',
          [
            '@babel/transform-runtime',
            {
              // corejs: 2,
              corejs: false,
              helpers: true,
              regenerator: false,
              useESModules: true,
            },
          ],
          '@babel/proposal-object-rest-spread',
        ],
        runtimeHelpers: true,
      }),
      commonjs({
        namedExports: {
          // 'node_modules/@babel/runtime/helpers/typeof.js': ['default'],
          // 'node_modules/@babel/runtime-corejs2/core-js/object/assign.js': [
          //   'default',
          // ],
        },
        exclude: [
          'node_modules/**',
          // 'node_modules/react/**',
          // 'node_modules/react-dom/**',
          // 'node_modules/react-bootstrap/**',
          // 'node_modules/@react-bootstrap/**',
        ],
        // include: [
        //   'node_modules/prop-types/**',
        //   'node_modules/create-react-class/**', // adding the module with that "default not exported by" message to this includes list, made that message go away
        // ],
      }),
      copy({
        targets: [{ src: 'app/ThreadComponent.d.ts', dest: 'lib' }],
      }),
      // generate wrong d.ts for react components in js
      // typescript({
      //   rollupCommonJSResolveHack: false,
      //   clean: true,
      // }),
    ],
    external: [
      'react',
      'react-dom',
      'react-is',
      'prop-types',
      'lodash',
      'react-helmet',
      'react-infinite-scroller',
      'hoist-non-react-statics',
      'remark-math',
      'react-mathjax2',
      'react-markdown',
      'redux-saga',
      'react-redux',
      'react-intl',
      'create-react-context',
      'react-router',
      'immer',
      'redux',
      'react-moment',
      'moment',
      'invariant',
      'js-cookie',
      'reselect',
      'connected-react-router',
      'styled-components',
      'showdown',
      'showdown-katex',
      'react-mde',
      // TODO this version of rollup do not support regex, need to upgrade
      // 'react-bootstrap/*',
      'react-overlays',
      'react-bootstrap/Dropdown',
      'react-bootstrap/Button',
      'react-bootstrap/Container',
      'react-bootstrap/Row',
      'react-bootstrap/Col',
      'react-bootstrap/ListGroup',
      'react-bootstrap/Form',
      'react-bootstrap/Breadcrumb',
      'intl-messageformat',
      'intl-relativeformat',
      '@react-bootstrap',
      // '@babel/polyfill',
      // '@babel/runtime-corejs2/core-js/object/',
      // '@babel/runtime',
    ],
  },
  // ThreadsListComponent
  {
    input: 'app/TopicsListComponent.jsx',
    output: [
      {
        // file: 'lib/TopicsListComponent.js',
        dir: 'lib/',
        // file: pkg.main,
        format: 'amd',
        name: 'TopicsListComponent',
        sourcemap: true,
      },
      {
        dir: 'lib/es/',
        // file: 'lib/TopicsListComponent.es.js',
        // file: pkg.module,
        format: 'es',
        name: 'TopicsListComponent.es',
        sourcemap: true,
      },
    ],
    plugins: [
      external(), // exclude peer deps - we have no dev peers / TODO migrate unneeded in lib to dev peers + add install-peers
      postcss({
        // modules: true,
        extensions: ['.css'],
      }),
      url({ exclude: ['**/*.svg'] }),
      svgr(),
      includePaths(includePathOptions),
      resolve({ mainFields: ['app'] }),
      json(),
      babel({
        babelrc: false,
        presets: [
          '@babel/react',
          [
            '@babel/env',
            {
              modules: false,
              // useBuiltIns: 'usage',
              // corejs: '2',
              targets: {
                chrome: '61',
              },
            },
          ],
        ],
        plugins: [
          // '@babel/external-helpers',
          [
            '@babel/transform-runtime',
            {
              // corejs: 2,
              corejs: false,
              helpers: true,
              regenerator: false,
              useESModules: true,
            },
          ],
          '@babel/proposal-object-rest-spread',
        ],
        runtimeHelpers: true,
      }),
      commonjs({
        namedExports: {
          // 'node_modules/@babel/runtime/helpers/typeof.js': ['default'],
          // 'node_modules/@babel/runtime-corejs2/core-js/object/assign.js': [
          //   'default',
          // ],
        },
        exclude: ['node_modules/**'],
      }),
      copy({
        targets: [{ src: 'app/TopicsListComponent.d.ts', dest: 'lib' }],
      }),
      // generate wrong d.ts for react components in js
      // typescript({
      //   rollupCommonJSResolveHack: false,
      //   clean: true,
      // }),
    ],
    external: [
      'react',
      'react-dom',
      'react-is',
      'prop-types',
      'lodash',
      'react-helmet',
      'react-infinite-scroller',
      'hoist-non-react-statics',
      'remark-math',
      'react-mathjax2',
      'react-markdown',
      'redux-saga',
      'react-redux',
      'react-intl',
      'create-react-context',
      'connected-react-router',
      'react-router',
      'immer',
      'redux',
      'react-moment',
      'moment',
      'invariant',
      'js-cookie',
      'reselect',
      'styled-components',
      'showdown',
      'showdown-katex',
      'react-mde',
      // 'react-bootstrap/*',
      'react-overlays',
      'react-bootstrap/Dropdown',
      'react-bootstrap/Button',
      'react-bootstrap/Container',
      'react-bootstrap/Row',
      'react-bootstrap/Col',
      'react-bootstrap/ListGroup',
      'react-bootstrap/Form',
      'react-bootstrap/Breadcrumb',
      'intl-messageformat',
      'intl-relativeformat',
      '@react-bootstrap',
      // '@babel/polyfill',
      // '@babel/runtime-corejs2/core-js/object/',
      // '@babel/runtime',
    ],
  },
]

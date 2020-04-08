import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

import serve from 'rollup-plugin-serve'

const isLocal = process.env.LOCAL

const host = process.env.CRAWLER_HOST || 'localhost'
const port = process.env.CRAWLER_PORT || 9000

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    name: 'main',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true,
    }),
    commonjs(),
    isLocal && serve({
      open: false,
      verbose: false,
      contentBase: ['public', 'dist'],
      host,
      port,
    }),
  ],
}

import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const baseName = path.join('lib', 'toc')

export default [
  {
    input: 'src/toc.js',
    output: [
      {
        file: `${baseName}.js`,
        format: 'cjs',
        strict: true,
        sourcemap: true,
        exports: 'auto'
      }
    ],
    external: ['extend', 'inkdrop'],
    plugins: [nodeResolve()]
  }
]

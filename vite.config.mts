/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { globbySync } from 'globby';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pkg from './package.json';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({ include: ['lib'], exclude: ['lib/**/*.stories.{js,jsx,ts,tsx}'] }),
    react(),
    tsconfigPaths()
  ],
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: globbySync('lib/index.ts'),
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs')
    },
    rollupOptions: {
      input: ['lib/index.ts'],
      external: [
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
        'react/jsx-runtime'
      ],
      output: [
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'lib',
          exports: 'named',
          entryFileNames: '[name].cjs',
          banner: (x) =>
            ['index.cjs'].includes(x.fileName)
              ? ''
              : `'use client';`
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'lib',
          exports: 'named',
          entryFileNames: '[name].mjs',
          banner: (x) =>
            ['index.mjs'].includes(x.fileName)
              ? ''
              : `'use client';`
        }
      ]
    }
  }
});
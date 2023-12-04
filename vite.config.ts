import react from '@vitejs/plugin-react';
import banner2 from 'rollup-plugin-banner2';
import { PluginPure } from 'rollup-plugin-pure';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import packageJson from './package.json';

const PURE_CALLS = [
  'cloneElement',
  'createContext',
  'createElement',
  'createFactory',
  'createRef',
  'forwardRef',
  'isValidElement',
  'memo',
  'lazy',
];

// @ts-ignore
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ include: ['lib'], exclude: ['lib/**/*.stories.{js,jsx,ts,tsx}'] }),
    // @ts-expect-error rollup-plugin-pure needs to update vite plugin types
    PluginPure({
      functions: PURE_CALLS,
      sourcemap: true,
      exclude: [/node_modules/],
    }),
  ],
  build: {
    rollupOptions: {
      plugins: [
        // @ts-expect-error rollup-plugin-banner-2 needs to update vite plugin types
        banner2((chunk) => {
          const useClient = `"use client"\n\n`;
          const hooks = ['useState', 'useEffect', 'useRef', 'useContext'];
          const { importedBindings } = chunk;

          if (Object.keys(importedBindings).length > 0) {
            if (
              importedBindings.react &&
              importedBindings.react.filter((value) => hooks.includes(value))
            ) {
              return useClient;
            }
          }

          return ``;
        }),
      ],
      preserveEntrySignatures: 'strict',
      input: ['lib/index.ts'],
      output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'lib',
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`;
        },
      },
      external: [
        ...Object.keys(packageJson.dependencies || {}),
        ...Object.keys(packageJson.peerDependencies || {}),
        'react/jsx-runtime',
      ],
    },
    sourcemap: true,
    minify: false,
  },
});

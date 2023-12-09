import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  target: 'es2019',
  external: ['react'],
  entry: ['lib/index.ts', '!lib/**/*.stories.{ts,tsx}'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  treeshake: true,
  skipNodeModulesBundle: true,
});

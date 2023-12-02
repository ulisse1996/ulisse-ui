import type { StorybookConfig } from '@storybook/react-vite';

import packageJson from '../package.json';

const config: StorybookConfig = {
  stories: ['../lib/**/*.mdx', '../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (c) => {
    return {
      ...c,
      build: {
        rollupOptions: {
          external: [
            ...Object.keys(packageJson.dependencies || {}),
            ...Object.keys(packageJson.peerDependencies || {}),
            'react/jsx-runtime',
          ],
        },
      },
    };
  },
};
export default config;

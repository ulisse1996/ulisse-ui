import type { StorybookConfig } from '@storybook/react-vite';
import * as path from 'path';

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
  viteFinal: (c) => {
    return {
      ...c,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: '@',
            replacement: path.resolve(__dirname, '../lib'),
          },
        ],
      },
    };
  },
};
export default config;

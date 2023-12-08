import type { Meta, StoryObj } from '@storybook/react';

import { Dropzone } from '@/dropzone';

const meta: Meta<typeof Dropzone> = {
  component: Dropzone,
  title: 'Form/Dropzone',
};

type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {
  args: {
    label: `Drop your files here`,
    id: 'drop-files',
    subTitle: `We accept all files`,
  },
};

export const WithSpecificFiles: Story = {
  args: {
    label: `Drop your files here`,
    id: 'drop-files',
    subTitle: `We accept only png`,
    accept: `image/png`,
  },
};

export default meta;

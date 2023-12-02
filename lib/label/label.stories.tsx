import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@/label';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Form/Label',
};

type Story = StoryObj<typeof Label>;

export default meta;

export const Default: Story = {
  args: {
    children: 'My Label',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { Tags } from '@/tags';

const meta: Meta<typeof Tags> = {
  component: Tags,
  title: 'Form/Tags',
};

type Story = StoryObj<typeof Tags>;

export const Default: Story = {
  args: {
    label: 'Filters',
    id: 'filters',
    clearLabel: `Clear all`,
  },
};

export default meta;

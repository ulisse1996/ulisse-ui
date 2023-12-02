import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '@/chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Components/Chip',
};

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'Hotel',
    size: 'md',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'destructive'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

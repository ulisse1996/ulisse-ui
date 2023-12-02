import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '@/spinner';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Components/Spinner',
};

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    className: 'text-black',
    isLoading: true,
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@/textarea/';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Form/Textarea',
};

type Story = StoryObj<typeof Textarea>;

export default meta;

export const Default: Story = {
  args: {
    label: 'My Area',
    id: 'area',
  },
};

export const Disabled: Story = {
  args: {
    label: 'My Area',
    id: 'area',
    disabled: true,
  },
};

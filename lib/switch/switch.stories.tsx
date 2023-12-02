import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@/switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Form/Switch',
};

type Story = StoryObj<typeof Switch>;

export const WithLabel: Story = {
  args: {},
  render: () => {
    return <Switch label="My Switch" id="my-switch" />;
  },
};

export const WithoutLabel: Story = {
  args: {},
  render: () => {
    return <Switch aria-label="My Switch" />;
  },
};

export const Disabled: Story = {
  args: {},
  render: () => {
    return <Switch disabled label="My Switch" id="my-switch" />;
  },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import { InputPin } from '@/input';

const meta: Meta<typeof InputPin> = {
  component: InputPin,
  title: 'Form/Input Pin',
};

type Story = StoryObj<typeof InputPin>;

export const WithLabel: Story = {
  args: {
    type: 'numeric',
  },
  render: (props) => {
    return <InputPin {...props} length={5} label="My Input" id="test-input" />;
  },
};

export const WithoutLabel: Story = {
  render: () => {
    return <InputPin length={5} aria-label="My Input" />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <InputPin
        length={5}
        placeholder="Insert some text"
        label="My Input"
        id="test-input"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <InputPin
        length={3}
        disabled
        placeholder="Insert some text"
        label="My Input"
        id="test-input"
      />
    );
  },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import { InputNumber } from '@/input';

const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
  title: 'Form/Input Number',
};

type Story = StoryObj<typeof InputNumber>;

export const WithLabel: Story = {
  render: () => {
    return <InputNumber label="My Input" id="test-input" />;
  },
};

export const WithPercentFormat: Story = {
  render: () => {
    return (
      <InputNumber
        maxValue={100}
        minValue={0}
        formatOptions={{
          style: 'percent',
        }}
        label="My Input"
        id="test-input"
      />
    );
  },
};

export const WithCurrencyFormat: Story = {
  render: () => {
    return (
      <InputNumber
        min={10}
        max={15}
        formatOptions={{
          style: 'currency',
          currency: `EUR`,
        }}
        label="My Input"
        id="test-input"
      />
    );
  },
};

export const WithoutLabel: Story = {
  render: () => {
    return <InputNumber />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <InputNumber
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
      <InputNumber
        disabled
        placeholder="Insert some text"
        label="My Input"
        id="test-input"
      />
    );
  },
};

export default meta;

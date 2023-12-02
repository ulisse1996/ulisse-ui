import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Slider } from '@/slider';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Form/Slider',
};

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => {
    return <Slider label="My Slider" />;
  },
};

export const MultiSlider: Story = {
  render: () => {
    const [value, setValue] = useState([25, 75]);
    return (
      <Slider
        min={25}
        max={75}
        value={value}
        onValueChange={setValue}
        minStepsBetweenThumbs={1}
        label="My Slider"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return <Slider disabled label="My Slider" />;
  },
};

export default meta;

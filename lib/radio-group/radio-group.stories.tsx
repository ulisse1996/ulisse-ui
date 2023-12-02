import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { RadioGroup, RadioGroupItem } from '@/radio-group';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'Form/Radio Group',
};

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue="first">
        <RadioGroupItem value="first">First</RadioGroupItem>
        <RadioGroupItem value="second">Second</RadioGroupItem>
        <RadioGroupItem value="third">Third</RadioGroupItem>
      </RadioGroup>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <RadioGroup id="group" label="My Group" defaultValue="first">
        <RadioGroupItem value="first">First</RadioGroupItem>
        <RadioGroupItem value="second">Second</RadioGroupItem>
        <RadioGroupItem value="third">Third</RadioGroupItem>
      </RadioGroup>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState(`second`);
    return (
      <div className="flex flex-col gap-8">
        <p>Selected: {selected}</p>
        <RadioGroup value={selected} onValueChange={setSelected}>
          <RadioGroupItem value="first">First</RadioGroupItem>
          <RadioGroupItem value="second">Second</RadioGroupItem>
          <RadioGroupItem value="third">Third</RadioGroupItem>
        </RadioGroup>
      </div>
    );
  },
};

export default meta;

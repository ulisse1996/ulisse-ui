import { Time } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InputTime } from '@/input';

const meta: Meta<typeof InputTime> = {
  component: InputTime,
  title: 'Form/Input Time',
};

type Story = StoryObj<typeof InputTime>;

export const WithLabel: Story = {
  render: () => {
    return <InputTime label="My Input" id="test-input" />;
  },
};

export const WithoutLabel: Story = {
  render: () => {
    return <InputTime />;
  },
};

export const Controlled: Story = {
  render: () => {
    const [time, setTime] = useState<Time>(new Time(10, 15));
    return (
      <div className="flex flex-col gap-4">
        <p>{time.toString()}</p>
        <InputTime
          hourCycle={24}
          value={time}
          onChange={setTime}
          label="My Input"
          id="test-input"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <InputTime
        disabled
        placeholder="Insert some text"
        label="My Input"
        id="test-input"
      />
    );
  },
};

export default meta;

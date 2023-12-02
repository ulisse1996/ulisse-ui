import type { CalendarDate } from '@internationalized/date';
import { parseDate } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InputDate } from '@/input';

const meta: Meta<typeof InputDate> = {
  component: InputDate,
  title: 'Form/Input Date',
};

type Story = StoryObj<typeof InputDate>;

export const WithLabel: Story = {
  render: () => {
    return <InputDate label="My Input" id="test-input" />;
  },
};

export const WithoutLabel: Story = {
  render: () => {
    return <InputDate />;
  },
};

export const Controlled: Story = {
  render: () => {
    const [date, setDate] = useState<CalendarDate>(parseDate('2023-10-10'));
    return (
      <div className="flex flex-col gap-4">
        <p>{date.toString()}</p>
        <InputDate
          hourCycle={24}
          value={date}
          onChange={setDate}
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
      <InputDate
        disabled
        placeholder="Insert some text"
        label="My Input"
        id="test-input"
      />
    );
  },
};

export default meta;

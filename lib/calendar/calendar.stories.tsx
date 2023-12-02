import { CalendarDate, parseDate } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '@/button';

import { Calendar } from './calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Components/Calendar',
};

type StoryCalendar = typeof Calendar & { date?: string };

type Story = StoryObj<StoryCalendar>;

export const Default: Story = {
  render: () => {
    const date = new Date();
    return (
      <div className="flex justify-center">
        <Calendar
          defaultValue={
            new CalendarDate(
              date.getFullYear(),
              date.getMonth() + 1,
              date.getDate(),
            )
          }
        />
      </div>
    );
  },
};

export const ControlledDate: Story = {
  render: () => {
    const [date, setDate] = useState(parseDate('2023-12-05'));

    const handlePlus = () => {
      setDate((prev) => prev.add({ days: 1 }));
    };

    const handleSub = () => {
      setDate((prev) => prev.subtract({ days: 1 }));
    };

    return (
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <Button onClick={handleSub}>-</Button>
          <Button onClick={handlePlus}>+</Button>
        </div>
        <div className="flex justify-center">
          <Calendar value={date} onChange={(d) => setDate(d)} />
        </div>
      </div>
    );
  },
};

export const InRange: Story = {
  render: () => {
    return (
      <div className="flex justify-center">
        <Calendar
          maxValue={new CalendarDate(2023, 12, 28)}
          minValue={new CalendarDate(2023, 12, 15)}
          defaultValue={new CalendarDate(2023, 12, 17)}
        />
      </div>
    );
  },
};

export default meta;

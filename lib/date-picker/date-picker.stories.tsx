import type { CalendarDate } from '@internationalized/date';
import { useDateFormatter } from '@react-aria/i18n';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { DatePicker } from '@/date-picker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Form/Date Picker',
};

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    id: `my-date`,
    label: `Date`,
  },
  render: (props) => {
    const [date, setDate] = useState<CalendarDate>();
    return (
      <DatePicker<CalendarDate>
        {...props}
        onDateChange={setDate}
        value={date}
      />
    );
  },
};

export const WithCustomFormatter: Story = {
  args: {
    id: `my-date`,
    label: `Date`,
  },
  render: (props) => {
    const formatter = useDateFormatter({
      dateStyle: 'full',
    });
    const [date, setDate] = useState<CalendarDate>();

    const format = (d?: CalendarDate | null) => {
      if (!d) {
        return ``;
      }

      return formatter.format(d.toDate(formatter.resolvedOptions().timeZone));
    };

    return (
      <DatePicker<CalendarDate>
        {...props}
        onDateChange={setDate}
        value={date}
        formatFn={format}
      />
    );
  },
};

export default meta;

import type { CalendarDate } from '@internationalized/date';
import { useDateFormatter } from '@react-aria/i18n';
import type { RangeValue } from '@react-types/shared';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { RangeDatePicker } from '@/date-picker';

const meta: Meta<typeof RangeDatePicker> = {
  component: RangeDatePicker,
  title: 'Form/Range Picker',
};

type Story = StoryObj<typeof RangeDatePicker>;

export const Default: Story = {
  args: {
    id: `my-ranges`,
    label: `Ranges`,
  },
  render: (props) => {
    const [date, setDate] = useState<RangeValue<CalendarDate>>();
    return (
      <RangeDatePicker<CalendarDate>
        {...props}
        onRangeChange={setDate}
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
    const [date, setDate] = useState<RangeValue<CalendarDate>>();

    const format = (d?: RangeValue<CalendarDate> | null) => {
      if (!d) {
        return ``;
      }

      const { start, end } = d;

      return `${formatter.format(
        start.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone),
      )} - ${formatter.format(
        end.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone),
      )}`;
    };

    return (
      <RangeDatePicker<CalendarDate>
        {...props}
        onRangeChange={setDate}
        value={date}
        formatFn={format}
      />
    );
  },
};

export default meta;

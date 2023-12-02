import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, today } from '@internationalized/date';
import { useDateFormatter } from '@react-aria/i18n';
import type { RangeValue } from '@react-types/shared';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { RangeCalendar } from '@/calendar/range-calendar';

const meta: Meta<typeof RangeCalendar> = {
  component: RangeCalendar,
  title: 'Components/Range Calendar',
};

type StoryCalendar = typeof RangeCalendar & { date?: string };

type Story = StoryObj<StoryCalendar>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex justify-center">
        <RangeCalendar
          defaultValue={{
            start: today(getLocalTimeZone()),
            end: today(getLocalTimeZone()).add({ weeks: 1 }),
          }}
        />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const formatter = useDateFormatter();
    const [range, setRange] = useState<RangeValue<CalendarDate>>();

    return (
      <div className="flex flex-col items-center gap-10">
        <p>
          Start{' '}
          {range?.start &&
            formatter.format(range.start.toDate(getLocalTimeZone()))}{' '}
          - End{' '}
          {range?.end && formatter.format(range.end.toDate(getLocalTimeZone()))}
        </p>
        <div className="flex justify-center">
          <RangeCalendar value={range} onChange={setRange} />
        </div>
      </div>
    );
  },
};

export default meta;

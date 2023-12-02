import { createCalendar } from '@internationalized/date';
import type { AriaCalendarProps, DateValue } from '@react-aria/calendar';
import { useCalendar } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { useCalendarState } from '@react-stately/calendar';
import type {
  ForwardedRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';
import { forwardRef } from 'react';

import { Button } from '@/button';
import { CalendarGrid } from '@/calendar/internal/calendar-grid';
import { removeInvalidProps } from '@/utils';

type CustomDivAttributes = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange' | 'defaultValue'
>;

interface CalendarProps<T extends DateValue>
  extends CustomDivAttributes,
    AriaCalendarProps<T> {}

function InternalCalendar<T extends DateValue>(
  { ...props }: CalendarProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { locale } = useLocale();
  const state = useCalendarState({ ...props, locale, createCalendar });
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state);

  return (
    <div ref={ref} {...calendarProps}>
      <div className="flex flex-row items-center justify-between gap-2">
        <Button
          className="h-7 rounded-md bg-transparent px-2 text-primary hover:bg-primary/50 hover:text-primary-foreground"
          {...removeInvalidProps(prevButtonProps)}
          onClick={state.focusPreviousPage}
        >
          &lt;
        </Button>
        <h2 className="flex-1 items-center text-center text-xl font-bold">
          {title}
        </h2>
        <Button
          className="h-7 rounded-md bg-transparent px-2 text-primary hover:bg-primary/50 hover:text-primary-foreground"
          {...removeInvalidProps(nextButtonProps)}
          onClick={state.focusNextPage}
        >
          &gt;
        </Button>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}

const Calendar = forwardRef(InternalCalendar) as <T extends DateValue>(
  props: CalendarProps<T> & { ref?: ForwardedRef<HTMLDivElement> },
) => ReturnType<typeof InternalCalendar>;

(Calendar as ForwardRefExoticComponent<CalendarProps<any>>).displayName =
  'Calendar';

export { Calendar, type CalendarProps };

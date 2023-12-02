import { createCalendar } from '@internationalized/date';
import type { AriaRangeCalendarProps, DateValue } from '@react-aria/calendar';
import { useRangeCalendar } from '@react-aria/calendar';
import { useDateFormatter, useLocale } from '@react-aria/i18n';
import { useObjectRef } from '@react-aria/utils';
import type { RangeCalendarState } from '@react-stately/calendar';
import { useRangeCalendarState } from '@react-stately/calendar';
import type { AriaButtonProps } from '@react-types/button';
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

interface RangeCalendarProps<T extends DateValue>
  extends CustomDivAttributes,
    AriaRangeCalendarProps<T> {}

interface CalendarHeaderProps {
  prevButtonProps: AriaButtonProps;
  nextButtonProps: AriaButtonProps;
  state: RangeCalendarState;
}

function CalendarHeader({
  prevButtonProps,
  nextButtonProps,
  state,
}: CalendarHeaderProps) {
  const monthDateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    timeZone: state.timeZone,
  });

  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <Button
        className="h-7 rounded-md bg-transparent px-2 text-primary hover:bg-primary/50 hover:text-primary-foreground"
        {...removeInvalidProps(prevButtonProps)}
        onClick={state.focusPreviousPage}
      >
        &lt;
      </Button>
      <h2
        aria-hidden
        className="flex-1 items-center text-center text-xl font-bold"
      >
        {monthDateFormatter.format(
          state.visibleRange.start.toDate(state.timeZone),
        )}
      </h2>
      <h2
        aria-hidden
        className="flex-1 items-center text-center text-xl font-bold"
      >
        {monthDateFormatter.format(
          state.visibleRange.start.add({ months: 1 }).toDate(state.timeZone),
        )}
      </h2>
      <Button
        className="h-7 rounded-md bg-transparent px-2 text-primary hover:bg-primary/50 hover:text-primary-foreground"
        {...removeInvalidProps(nextButtonProps)}
        onClick={state.focusNextPage}
      >
        &gt;
      </Button>
    </div>
  );
}

function InternalRangeCalendar<T extends DateValue>(
  { ...props }: RangeCalendarProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 2 },
    locale,
    createCalendar,
  });

  const divRef = useObjectRef(ref);

  const { calendarProps, prevButtonProps, nextButtonProps } = useRangeCalendar(
    props,
    state,
    divRef,
  );

  return (
    <div ref={divRef} {...calendarProps}>
      <CalendarHeader
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
        state={state}
      />
      <div className="grid w-fit grid-rows-2 gap-8 md:grid-cols-2">
        <CalendarGrid state={state} />
        <CalendarGrid state={state} offset={{ months: 1 }} />
      </div>
    </div>
  );
}

const RangeCalendar = forwardRef(InternalRangeCalendar) as <
  T extends DateValue,
>(
  props: RangeCalendarProps<T> & { ref?: ForwardedRef<HTMLDivElement> },
) => ReturnType<typeof InternalRangeCalendar>;

(
  RangeCalendar as ForwardRefExoticComponent<RangeCalendarProps<any>>
).displayName = 'RangeCalendar';

export { RangeCalendar, type RangeCalendarProps };

import type { CalendarDate } from '@internationalized/date';
import { isSameMonth } from '@internationalized/date';
import type { AriaCalendarCellProps } from '@react-aria/calendar';
import { useCalendarCell } from '@react-aria/calendar';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import type {
  CalendarState,
  RangeCalendarState,
} from '@react-stately/calendar';
import { useRef } from 'react';

import { useCellDetails } from '@/calendar/internal/use-cell-details';
import { cn } from '@/utils';

interface CalendarCellProps extends AriaCalendarCellProps {
  state: CalendarState | RangeCalendarState;
  currentMonth: CalendarDate;
}

function CalendarCell({ state, date, currentMonth }: CalendarCellProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const calendarCell = useCalendarCell({ date }, state as any, ref);

  const { focusProps, isFocusVisible } = useFocusRing();

  const isOutsideMonth = !isSameMonth(currentMonth, date);
  const { className, component } = useCellDetails(
    state,
    calendarCell,
    date,
    isFocusVisible,
  );

  return (
    <td
      {...calendarCell.cellProps}
      className={cn('py-0.5 relative', isFocusVisible ? 'z-10' : 'z-0')}
    >
      <button
        type="button"
        {...mergeProps(calendarCell.buttonProps, focusProps)}
        ref={ref}
        hidden={isOutsideMonth}
        className={className}
      >
        {component}
      </button>
    </td>
  );
}

export { CalendarCell, type CalendarCellProps };

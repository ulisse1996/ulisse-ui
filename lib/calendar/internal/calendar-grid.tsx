import type { DateDuration } from '@internationalized/date';
import { endOfMonth, getWeeksInMonth } from '@internationalized/date';
import type { AriaCalendarGridProps } from '@react-aria/calendar';
import { useCalendarGrid } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import type {
  CalendarState,
  RangeCalendarState,
} from '@react-stately/calendar';

import { CalendarCell } from '@/calendar/internal/calendar-cell';

interface CalendarGridProps extends AriaCalendarGridProps {
  state: CalendarState | RangeCalendarState;
  offset?: DateDuration;
}

function CalendarGrid({ state, offset = {} }: CalendarGridProps) {
  const { locale } = useLocale();
  const startDate = state.visibleRange.start.add(offset);
  const endDate = endOfMonth(startDate);
  const { gridProps, headerProps, weekDays } = useCalendarGrid(
    { startDate, endDate },
    state,
  );

  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  const paddingCell = 'highlightedRange' in state ? 0 : undefined;

  return (
    <table {...gridProps} cellPadding={paddingCell} className="w-full">
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th className="text-muted-foreground" key={index}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex} className="text-center">
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                    currentMonth={startDate}
                  />
                ) : (
                  <td key={i}>{` `}</td>
                ),
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { CalendarGrid, type CalendarGridProps };

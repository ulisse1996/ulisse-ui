import type { CalendarDate } from '@internationalized/date';
import type { AriaCalendarCellProps } from '@react-aria/calendar';
import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
interface CalendarCellProps extends AriaCalendarCellProps {
    state: CalendarState | RangeCalendarState;
    currentMonth: CalendarDate;
}
declare function CalendarCell({ state, date, currentMonth }: CalendarCellProps): import("react/jsx-runtime").JSX.Element;
export { CalendarCell, type CalendarCellProps };

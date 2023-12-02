import type { DateDuration } from '@internationalized/date';
import type { AriaCalendarGridProps } from '@react-aria/calendar';
import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
interface CalendarGridProps extends AriaCalendarGridProps {
    state: CalendarState | RangeCalendarState;
    offset?: DateDuration;
}
declare function CalendarGrid({ state, offset }: CalendarGridProps): import("react/jsx-runtime").JSX.Element;
export { CalendarGrid, type CalendarGridProps };

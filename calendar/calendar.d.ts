import type { AriaCalendarProps, DateValue } from '@react-aria/calendar';
import type { ForwardedRef, HTMLAttributes } from 'react';
type CustomDivAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>;
interface CalendarProps<T extends DateValue> extends CustomDivAttributes, AriaCalendarProps<T> {
}
declare function InternalCalendar<T extends DateValue>({ ...props }: CalendarProps<T>, ref: ForwardedRef<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare const Calendar: <T extends DateValue>(props: CalendarProps<T> & {
    ref?: ForwardedRef<HTMLDivElement> | undefined;
}) => ReturnType<typeof InternalCalendar>;
export { Calendar, type CalendarProps };

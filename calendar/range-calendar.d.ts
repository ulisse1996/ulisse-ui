import type { AriaRangeCalendarProps, DateValue } from '@react-aria/calendar';
import type { ForwardedRef, HTMLAttributes } from 'react';
type CustomDivAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>;
interface RangeCalendarProps<T extends DateValue> extends CustomDivAttributes, AriaRangeCalendarProps<T> {
}
declare function InternalRangeCalendar<T extends DateValue>({ ...props }: RangeCalendarProps<T>, ref: ForwardedRef<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare const RangeCalendar: <T extends DateValue>(props: RangeCalendarProps<T> & {
    ref?: ForwardedRef<HTMLDivElement> | undefined;
}) => ReturnType<typeof InternalRangeCalendar>;
export { RangeCalendar, type RangeCalendarProps };

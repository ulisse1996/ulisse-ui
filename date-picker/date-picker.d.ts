import type { AriaCalendarProps, DateValue } from '@react-aria/calendar';
import type { ForwardedRef, HTMLAttributes } from 'react';
type CustomInputAttributes = Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'defaultValue'>;
type FormatFn<T extends DateValue> = (date?: T | null) => string;
interface DatePickerProps<T extends DateValue> extends CustomInputAttributes, Omit<AriaCalendarProps<T>, 'defaultValue'> {
    onDateChange?: (date: T) => void;
    formatFn?: FormatFn<T>;
    label?: string;
}
declare function InternalDatePicker<T extends DateValue>({ value, onDateChange, formatFn, ...props }: DatePickerProps<T>, ref: ForwardedRef<HTMLInputElement>): import("react/jsx-runtime").JSX.Element;
declare const DatePicker: <T extends DateValue>(props: DatePickerProps<T> & {
    ref?: ForwardedRef<HTMLInputElement> | undefined;
}) => ReturnType<typeof InternalDatePicker>;
export { DatePicker, type DatePickerProps };

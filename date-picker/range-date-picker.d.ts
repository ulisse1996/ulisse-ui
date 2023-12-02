import type { AriaRangeCalendarProps, DateValue } from '@react-aria/calendar';
import type { RangeValue } from '@react-types/shared';
import type { ForwardedRef, HTMLAttributes } from 'react';
type CustomInputAttributes = Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'defaultValue'>;
type FormatFn<T extends DateValue> = (range?: RangeValue<T> | null) => string;
interface RangeDatePickerProps<T extends DateValue> extends CustomInputAttributes, Omit<AriaRangeCalendarProps<T>, 'defaultValue'> {
    onRangeChange?: (range: RangeValue<T>) => void;
    formatFn?: FormatFn<T>;
    label?: string;
}
declare function InternalRangeDatePicker<T extends DateValue>({ value, onRangeChange, formatFn, ...props }: RangeDatePickerProps<T>, ref: ForwardedRef<HTMLInputElement>): import("react/jsx-runtime").JSX.Element;
declare const RangeDatePicker: <T extends DateValue>(props: RangeDatePickerProps<T> & {
    ref?: ForwardedRef<HTMLInputElement> | undefined;
}) => ReturnType<typeof InternalRangeDatePicker>;
export { RangeDatePicker, type RangeDatePickerProps };

import type { TimeValue } from '@react-aria/datepicker';
import type { TimePickerProps } from '@react-types/datepicker';
import type { ForwardedRef, HTMLAttributes } from 'react';
type InputTimeProps<T extends TimeValue> = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & TimePickerProps<T> & {
    disabled?: boolean;
    label?: string;
};
declare function InternalInputTime<T extends TimeValue>({ ...props }: InputTimeProps<T>, ref: ForwardedRef<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare const InputTime: <T extends TimeValue>(props: any) => ReturnType<typeof InternalInputTime>;
export { InputTime, type InputTimeProps };

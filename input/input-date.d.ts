import type { DateValue } from '@react-aria/calendar';
import type { AriaDateFieldProps } from '@react-aria/datepicker';
import type { ForwardedRef, HTMLAttributes } from 'react';
type InputDateProps<T extends DateValue> = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & AriaDateFieldProps<T> & {
    disabled?: boolean;
    label?: string;
};
declare function InternalInputDate<T extends DateValue>({ ...props }: InputDateProps<T>, ref: ForwardedRef<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare const InputDate: <T extends DateValue>(props: Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & AriaDateFieldProps<T> & {
    disabled?: boolean | undefined;
    label?: string | undefined;
} & {
    ref?: ForwardedRef<HTMLDivElement> | undefined;
}) => ReturnType<typeof InternalInputDate>;
export { InputDate, type InputDateProps };

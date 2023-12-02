import type { InputHTMLAttributes, ReactNode } from 'react';
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    rightComponent?: ReactNode;
    leftComponent?: ReactNode;
};
declare const Input: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    label?: string | undefined;
    rightComponent?: ReactNode;
    leftComponent?: ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export { Input, type InputProps };

import type { AriaNumberFieldProps } from '@react-aria/numberfield';
import type { InputProps } from './input';
type InputNumberProps = Omit<InputProps, 'type'> & AriaNumberFieldProps;
declare const InputNumber: import("react").ForwardRefExoticComponent<Omit<InputProps, "type"> & AriaNumberFieldProps & import("react").RefAttributes<HTMLInputElement>>;
export { InputNumber, type InputNumberProps };

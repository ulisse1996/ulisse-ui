import type { PinInputProps } from '@ark-ui/react';
interface InputPinProps extends PinInputProps {
    label?: string;
    length: number;
}
declare const InputPin: import("react").ForwardRefExoticComponent<InputPinProps & import("react").RefAttributes<HTMLInputElement>>;
export { InputPin, type InputPinProps };

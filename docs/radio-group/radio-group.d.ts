import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
interface RadioGroupProps extends RadioGroupPrimitive.RadioGroupProps {
    label?: string;
}
interface RadioGroupItemProps extends RadioGroupPrimitive.RadioGroupItemProps {
}
declare const RadioGroup: import("react").ForwardRefExoticComponent<RadioGroupProps & import("react").RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: import("react").ForwardRefExoticComponent<RadioGroupItemProps & import("react").RefAttributes<HTMLButtonElement>>;
export { RadioGroup, RadioGroupItem, type RadioGroupItemProps, type RadioGroupProps, };

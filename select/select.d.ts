import * as SelectPrimitive from '@radix-ui/react-select';
interface SelectProps extends SelectPrimitive.SelectProps {
}
interface SelectGroupProps extends SelectPrimitive.SelectGroupProps {
}
interface SelectValueProps extends SelectPrimitive.SelectValueProps {
}
interface SelectSeparatorProps extends SelectPrimitive.SelectSeparatorProps {
}
interface SelectItemProps extends SelectPrimitive.SelectItemProps {
}
interface SelectLabelProps extends SelectPrimitive.SelectLabelProps {
}
interface SelectContentProps extends SelectPrimitive.SelectContentProps {
}
interface SelectTriggerProps extends SelectPrimitive.SelectTriggerProps {
    label?: string;
}
interface SelectScrollUpProps extends SelectPrimitive.SelectScrollUpButtonProps {
}
interface SelectScrollDownProps extends SelectPrimitive.SelectScrollDownButtonProps {
}
declare const Select: import("react").FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: import("react").ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & import("react").RefAttributes<HTMLDivElement>>;
declare const SelectValue: import("react").ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & import("react").RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: import("react").ForwardRefExoticComponent<SelectTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: import("react").ForwardRefExoticComponent<SelectScrollUpProps & import("react").RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: import("react").ForwardRefExoticComponent<SelectScrollDownProps & import("react").RefAttributes<HTMLDivElement>>;
declare const SelectContent: import("react").ForwardRefExoticComponent<SelectContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare const SelectLabel: import("react").ForwardRefExoticComponent<SelectLabelProps & import("react").RefAttributes<HTMLDivElement>>;
declare const SelectItem: import("react").ForwardRefExoticComponent<SelectItemProps & import("react").RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: import("react").ForwardRefExoticComponent<SelectSeparatorProps & import("react").RefAttributes<HTMLDivElement>>;
export { Select, SelectContent, type SelectContentProps, SelectGroup, type SelectGroupProps, SelectItem, type SelectItemProps, SelectLabel, type SelectLabelProps, type SelectProps, SelectScrollDownButton, type SelectScrollDownProps, SelectScrollUpButton, type SelectScrollUpProps, SelectSeparator, type SelectSeparatorProps, SelectTrigger, type SelectTriggerProps, SelectValue, type SelectValueProps, };

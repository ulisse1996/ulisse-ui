import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { ComponentPropsWithoutRef } from 'react';
interface PopoverProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
}
interface PopoverTriggerProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {
}
interface PopoverContentProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
}
declare const Popover: import("react").FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: import("react").ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: import("react").ForwardRefExoticComponent<PopoverContentProps & import("react").RefAttributes<HTMLDivElement>>;
export { Popover, PopoverContent, type PopoverContentProps, type PopoverProps, PopoverTrigger, type PopoverTriggerProps, };

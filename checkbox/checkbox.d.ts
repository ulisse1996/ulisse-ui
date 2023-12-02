import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { ComponentPropsWithoutRef } from 'react';
interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    label?: string;
}
declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLButtonElement>>;
export { Checkbox, type CheckboxProps };

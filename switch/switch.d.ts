import * as SwitchPrimitives from '@radix-ui/react-switch';
import type { ComponentPropsWithoutRef } from 'react';
import type { WithRequiredProperty } from '../utils';
type SwitchWithLabel = WithRequiredProperty<ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, 'id'> & {
    label: string;
};
type SwitchProps = SwitchWithLabel | ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;
declare const Switch: import("react").ForwardRefExoticComponent<SwitchProps & import("react").RefAttributes<HTMLButtonElement>>;
export { Switch, type SwitchProps };

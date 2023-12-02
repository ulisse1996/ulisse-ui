import * as LabelPrimitive from '@radix-ui/react-label';
import type { ComponentPropsWithoutRef } from 'react';
type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;
declare const Label: import("react").ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & import("react").RefAttributes<HTMLLabelElement>, "ref"> & import("react").RefAttributes<HTMLLabelElement>>;
export { Label, type LabelProps };

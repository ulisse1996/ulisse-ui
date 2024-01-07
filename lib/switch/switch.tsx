import * as SwitchPrimitives from '@radix-ui/react-switch';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import { forwardRef } from 'react';

import { Label } from '@/label';
import type { WithRequiredProperty } from '@/utils';
import { cn } from '@/utils';

type SwitchWithLabel = WithRequiredProperty<
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
  'id'
> & {
  label: string;
};

type SwitchProps =
  | SwitchWithLabel
  | ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;

const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, id, ...props }, ref) => {
  const withLabel = 'label' in props;
  return (
    <div className="flex items-center space-x-2">
      <SwitchPrimitives.Root
        id={id}
        className={cn(
          'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-muted/40 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted/40',
          className,
        )}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
          )}
        />
      </SwitchPrimitives.Root>
      {withLabel && <Label htmlFor={id}>{props.label}</Label>}
    </div>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch, type SwitchProps };

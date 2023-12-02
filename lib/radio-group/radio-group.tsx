import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import type { ElementRef } from 'react';
import { forwardRef } from 'react';

import { Label } from '@/label';
import { cn } from '@/utils';

interface RadioGroupProps extends RadioGroupPrimitive.RadioGroupProps {
  label?: string;
}

interface RadioGroupItemProps extends RadioGroupPrimitive.RadioGroupItemProps {}

const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => {
  const { id, label } = props;
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {label && <Label htmlFor={id}>{label}</Label>}
      <RadioGroupPrimitive.Root
        className={cn('grid gap-2', className)}
        {...props}
        ref={ref}
      />
    </div>
  );
});
RadioGroup.displayName = 'RadioGroup';

const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, id, children, ...props }, ref) => {
  return (
    <div className="flex flex-row gap-1.5">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={id}
        className={cn(
          'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {children && <Label htmlFor={id}>{children}</Label>}
    </div>
  );
});
RadioGroupItem.displayName = 'RadioGroupItem';

export {
  RadioGroup,
  RadioGroupItem,
  type RadioGroupItemProps,
  type RadioGroupProps,
};

import * as SliderPrimitive from '@radix-ui/react-slider';
import type { ElementRef } from 'react';
import { forwardRef } from 'react';

import { Label } from '@/label';
import { cn } from '@/utils';

interface SliderProps extends SliderPrimitive.SliderProps {
  label?: string;
}

const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, defaultValue, value, id, label, ...props }, ref) => {
    const thumbs =
      defaultValue || value ? (defaultValue || value || []).length : 1;
    return (
      <div className="grid w-full max-w-sm items-center gap-2.5">
        {label && <Label htmlFor={id}>{label}</Label>}
        <SliderPrimitive.Root
          value={value}
          defaultValue={defaultValue}
          id={id}
          ref={ref}
          className={cn(
            'relative flex w-full touch-none select-none items-center',
            className,
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          {[...Array(thumbs)].map((_, index) => (
            <SliderPrimitive.Thumb
              key={index}
              className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            />
          ))}
        </SliderPrimitive.Root>
      </div>
    );
  },
);

Slider.displayName = `Slider`;

export { Slider, type SliderProps };

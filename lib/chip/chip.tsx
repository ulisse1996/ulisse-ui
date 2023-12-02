import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const chipVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

interface ChipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    VariantProps<typeof chipVariants> {}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(chipVariants({ className, variant, size }))}
      />
    );
  },
);

Chip.displayName = 'Chip';

export { Chip, type ChipProps };

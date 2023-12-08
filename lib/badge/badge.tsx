import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const badgeVariants = cva(
  'absolute z-[1] h-3.5 w-3.5 rounded-full border-2 border-white',
  {
    variants: {
      variant: {
        success: 'bg-success text-success-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  },
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <span
        {...props}
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
      />
    );
  },
);

Badge.displayName = 'Badge';

export { Badge, type BadgeProps };

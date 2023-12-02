import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { Spinner } from '@/spinner';
import { cn } from '@/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 active:scale-75 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        'outline-primary': 'border-2 border-primary bg-background text-primary',
        'outline-secondary':
          'border-2 border-secondary bg-background text-secondary',
        'outline-destructive':
          'border-2 border-destructive bg-background text-destructive',
        flat: 'border-2 border-gray-200 bg-gray-200 text-black',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

const spinnerColorsMap = {
  primary: 'text-primary-foreground',
  secondary: 'text-secondary-foreground',
  destructive: 'text-destructive-foreground',
  'outline-primary': 'text-primary',
  'outline-secondary': 'text-secondary',
  'outline-destructive': 'text-destructive',
  flat: 'text-black',
};

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, disabled, isLoading, variant, children, size, ...props },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;

    const spinnerColor = variant ? spinnerColorsMap[variant] : undefined;

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isDisabled}
        {...props}
      >
        {isLoading && (
          <Spinner isLoading={isLoading} className={spinnerColor} />
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, type ButtonProps, buttonVariants };

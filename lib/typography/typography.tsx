import { cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small'] as const;

type TypographyProps = ComponentProps<(typeof elements)[number]> & {
  variant: (typeof elements)[number];
};

const variants = cva('', {
  variants: {
    variant: {
      h1: 'text-5xl font-bold',
      h2: 'text-4xl font-bold',
      h3: 'text-3xl font-bold',
      h4: 'text-2xl font-bold',
      h5: 'text-xl font-bold',
      h6: 'text-base font-bold',
      p: 'text-base',
      small: 'text-sm font-light',
    },
  },
});

const Typography = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(({ variant, className, ...props }, ref) => {
  const Component = variant;
  return (
    <Component
      {...props}
      ref={ref}
      className={cn(variants({ variant, className }))}
    />
  );
});

export { Typography, type TypographyProps };

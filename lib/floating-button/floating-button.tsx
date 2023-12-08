import { forwardRef } from 'react';

import type { ButtonProps } from '@/button';
import { Button } from '@/button';
import { cn } from '@/utils';

interface FloatingButtonProps extends ButtonProps {
  side?: 'left' | 'right';
}

const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
  ({ side = 'right', className, ...props }, ref) => {
    return (
      <Button
        className={cn(
          'absolute fixed',
          {
            'left-8 bottom-8': side === 'left',
            'right-8 bottom-8': side === 'right',
          },
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

FloatingButton.displayName = 'FloatingButton';

export { FloatingButton, type FloatingButtonProps };

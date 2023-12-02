import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { Label } from '@/label';
import { cn } from '@/utils';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  rightComponent?: ReactNode;
  leftComponent?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      disabled,
      label,
      rightComponent,
      leftComponent,
      type,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        {label && <Label htmlFor={id}>{label}</Label>}
        <div className="relative">
          <input
            data-input={type}
            type={type}
            className={cn(
              'data-[input=file]:border-0 data-[input=file]:px-0 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 hover:file:bg-primary/90 file:rounded-xl file:px-3 file:text-primary-foreground file:bg-primary file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            disabled={disabled}
            id={id}
            ref={ref}
            {...props}
          />
          {leftComponent && (
            <div
              className={cn('absolute left-2 top-2', {
                'opacity-50': disabled,
              })}
            >
              {leftComponent}
            </div>
          )}
          {rightComponent && (
            <div
              className={cn('absolute right-2 top-2', {
                'opacity-50': disabled,
              })}
            >
              {rightComponent}
            </div>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input, type InputProps };

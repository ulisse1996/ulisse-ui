import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';

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
    const [paddingLeft, setPaddingLeft] = useState<number | undefined>();
    const [paddingRight, setPaddingRight] = useState<number | undefined>();
    const rightItemRef = useRef<HTMLDivElement>(null);
    const leftItemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (rightItemRef.current) {
        const { width } = rightItemRef.current.getBoundingClientRect();
        setPaddingRight(width + 10);
      }
      if (leftItemRef.current) {
        const { width } = leftItemRef.current.getBoundingClientRect();
        setPaddingLeft(width + 10);
      }
    }, []);

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        {label && <Label htmlFor={id}>{label}</Label>}
        <div className="relative">
          <input
            style={{
              paddingLeft,
              paddingRight,
            }}
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
              ref={leftItemRef}
              className={cn(
                'absolute left-2 top-0 h-full items-center inline-flex',
                {
                  'opacity-50': disabled,
                },
              )}
            >
              {leftComponent}
            </div>
          )}
          {rightComponent && (
            <div
              ref={rightItemRef}
              className={cn(
                'absolute right-2 top-0 h-full items-center inline-flex',
                {
                  'opacity-50': disabled,
                },
              )}
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

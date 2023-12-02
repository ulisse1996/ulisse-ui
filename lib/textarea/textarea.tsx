import type { TextareaHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { Label } from '@/label';
import type { WithRequiredProperty } from '@/types';
import { cn } from '@/utils';

interface TextareaWithLabel
  extends WithRequiredProperty<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'id'
  > {
  label: string;
}

type TextareaProps =
  | TextareaHTMLAttributes<HTMLTextAreaElement>
  | TextareaWithLabel;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, className, ...props }, ref) => {
    const withLabel = 'label' in props;
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        {withLabel && <Label htmlFor={id}>{props.label}</Label>}
        <textarea
          id={id}
          className={cn(
            'focus:ring-primary flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea, type TextareaProps };

import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { itemVariants } from '@/menu/menu';
import { cn } from '@/utils';

interface ListProps extends HTMLAttributes<HTMLDetailsElement> {}

interface ListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const List = forwardRef<HTMLDetailsElement, ListProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        className={cn('flex gap-1 p-2 flex-col', className)}
        {...props}
        ref={ref}
      />
    );
  },
);

List.displayName = 'List';

const ListItem = forwardRef<HTMLButtonElement, ListItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        type="button"
        tabIndex={0}
        className={cn(
          'disabled:pointer-events-none disabled:opacity-50',
          itemVariants({ variant: 'default' }),
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

ListItem.displayName = 'ListItem';

export { List, ListItem, type ListItemProps, type ListProps };

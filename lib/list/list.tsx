import type {
  ButtonHTMLAttributes,
  ElementType,
  ForwardedRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';
import { forwardRef } from 'react';

import { itemVariants } from '@/menu/menu';
import type { PolymorphicProps } from '@/utils';
import { cn } from '@/utils';

interface ListProps extends HTMLAttributes<HTMLDetailsElement> {}

type ListItemProps<E extends ElementType = 'button'> = PolymorphicProps<E> &
  ButtonHTMLAttributes<HTMLButtonElement>;

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

function InternalListItem<T extends ElementType = 'button'>(
  { className, as, ...props }: ListItemProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const Comp = as || 'button';
  return (
    <Comp
      type={as === 'button' ? 'button' : undefined}
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
}

const ListItem = forwardRef(InternalListItem) as <T extends ElementType>(
  props: ListItemProps<T> & { ref?: ForwardedRef<HTMLButtonElement> },
) => ReturnType<typeof InternalListItem>;

(ListItem as ForwardRefExoticComponent<ListItemProps<any>>).displayName =
  'ListItem';

export { List, ListItem, type ListItemProps, type ListProps };

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { ChevronRight } from 'lucide-react';
import type { ElementRef } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils';

interface MenuProps extends DropdownMenuProps {}

interface MenuTriggerProps extends DropdownMenu.DropdownMenuTriggerProps {}

interface MenuSubTriggerProps extends DropdownMenu.MenuSubTriggerProps {}

interface MenuContentProps extends DropdownMenu.MenuContentProps {}

interface MenuSubContentProps extends DropdownMenu.MenuSubContentProps {}

interface MenuItemProps
  extends DropdownMenu.MenuItemProps,
    VariantProps<typeof itemVariants> {}

interface MenuSeparatorProps extends DropdownMenu.MenuSeparatorProps {}

interface MenuSubProps extends DropdownMenu.DropdownMenuSubProps {}

const MenuSub = DropdownMenu.Sub;
const Menu = DropdownMenu.Root;

const itemVariants = cva(
  'relative flex cursor-default select-none items-center gap-1 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  {
    variants: {
      variant: {
        default:
          'hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground',
        destructive:
          'text-destructive focus:bg-destructive focus:text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const MenuTrigger = forwardRef<
  ElementRef<typeof DropdownMenu.Trigger>,
  MenuTriggerProps
>(({ className, ...props }, ref) => (
  <DropdownMenu.Trigger
    ref={ref}
    className={cn('flex cursor-pointer select-none items-center', className)}
    {...props}
  />
));
MenuTrigger.displayName = 'MenuTrigger';

const MenuSubTrigger = forwardRef<
  ElementRef<typeof DropdownMenu.SubTrigger>,
  MenuSubTriggerProps
>(({ className, children, ...props }, ref) => (
  <DropdownMenu.SubTrigger
    ref={ref}
    className={cn(
      'relative flex gap-1 cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none focus:bg-secondary focus:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenu.SubTrigger>
));
MenuSubTrigger.displayName = 'MenuSubTrigger';

const MenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenu.Separator>,
  MenuSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <DropdownMenu.Separator
      ref={ref}
      className={cn('my-1 h-px mx-0.5 bg-muted', className)}
      {...props}
    />
  );
});

const MenuItem = forwardRef<
  ElementRef<typeof DropdownMenu.Item>,
  MenuItemProps
>(({ className, variant, ...props }, ref) => {
  return (
    <DropdownMenu.Item
      ref={ref}
      className={cn(itemVariants({ className, variant }))}
      {...props}
    />
  );
});

MenuItem.displayName = 'MenuItem';

const MenuContent = forwardRef<
  ElementRef<typeof DropdownMenu.Content>,
  MenuContentProps
>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => {
    return (
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-card-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
          )}
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          {...props}
        />
      </DropdownMenu.Portal>
    );
  },
);

MenuContent.displayName = 'MenuContent';

const MenuSubContent = forwardRef<
  ElementRef<typeof DropdownMenu.SubContent>,
  MenuSubContentProps
>(({ className, ...props }, ref) => {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.SubContent
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-card-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        ref={ref}
        {...props}
      />
    </DropdownMenu.Portal>
  );
});

MenuSubContent.displayName = 'MenuSubContent';

export {
  Menu,
  MenuContent,
  type MenuContentProps,
  MenuItem,
  type MenuItemProps,
  type MenuProps,
  MenuSeparator,
  type MenuSeparatorProps,
  MenuSub,
  MenuSubContent,
  type MenuSubContentProps,
  type MenuSubProps,
  MenuSubTrigger,
  type MenuSubTriggerProps,
  MenuTrigger,
  type MenuTriggerProps,
};

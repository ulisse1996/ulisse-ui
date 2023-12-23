import type { ComponentProps, ElementRef, HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/utils';

type SheetProps = ComponentProps<typeof DrawerPrimitive.Root>;
type SheetTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;
type SheetCloseProps = ComponentProps<typeof DrawerPrimitive.Close>;
type SheetOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>;
type SheetFooterProps = HTMLAttributes<HTMLDivElement>;
type SheetHeaderProps = HTMLAttributes<HTMLDivElement>;
type SheetDescriptionProps = ComponentProps<typeof DrawerPrimitive.Description>;
type SheetTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;
type SheetContentProps = ComponentProps<typeof DrawerPrimitive.Content>;
type SheetPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>;

const Sheet = ({ shouldScaleBackground = true, ...props }: SheetProps) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Sheet.displayName = 'Sheet';

const SheetTrigger: React.ForwardRefExoticComponent<SheetTriggerProps> =
  DrawerPrimitive.Trigger;
SheetTrigger.displayName = 'SheetTrigger';

const SheetPortal: React.FC<SheetPortalProps> = DrawerPrimitive.Portal;
SheetPortal.displayName = 'SheetPortal';

const SheetClose: React.ForwardRefExoticComponent<SheetCloseProps> =
  DrawerPrimitive.Close;
SheetClose.displayName = 'SheetClose';

const SheetOverlay = forwardRef<
  ElementRef<typeof DrawerPrimitive.Overlay>,
  SheetOverlayProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
SheetOverlay.displayName = `SheetOverlay`;

const SheetContent = forwardRef<
  ElementRef<typeof DrawerPrimitive.Content>,
  SheetContentProps
>(({ className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-1 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = 'SheetContent';

const SheetHeader = ({ className, ...props }: SheetHeaderProps) => (
  <div
    className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className, ...props }: SheetFooterProps) => (
  <div
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = forwardRef<
  ElementRef<typeof DrawerPrimitive.Title>,
  SheetTitleProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
SheetTitle.displayName = 'SheetTitle';

const SheetDescription = forwardRef<
  ElementRef<typeof DrawerPrimitive.Description>,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
SheetDescription.displayName = 'SheetDescription';

export {
  Sheet,
  SheetClose,
  type SheetCloseProps,
  SheetContent,
  type SheetContentProps,
  SheetDescription,
  type SheetDescriptionProps,
  type SheetFooterProps,
  SheetHeader,
  type SheetHeaderProps,
  SheetOverlay,
  type SheetOverlayProps,
  SheetPortal,
  type SheetPortalProps,
  type SheetProps,
  SheetTitle,
  type SheetTitleProps,
  SheetTrigger,
  type SheetTriggerProps,
};

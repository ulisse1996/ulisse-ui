import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type { VariantProps } from 'class-variance-authority';
import type { ElementRef, ReactNode } from 'react';
import { forwardRef } from 'react';

import { buttonVariants } from '@/button/button';
import { cn } from '@/utils';

interface AlertDialogProps extends AlertDialogPrimitive.AlertDialogProps {}

interface AlertDialogTriggerProps
  extends AlertDialogPrimitive.AlertDialogTriggerProps {}

interface AlertDialogContentProps
  extends AlertDialogPrimitive.AlertDialogContentProps {
  header: ReactNode;
  description: ReactNode;
}

interface AlertDialogActionProps
  extends AlertDialogPrimitive.AlertDialogActionProps,
    VariantProps<typeof buttonVariants> {}

interface AlertDialogCancelProps
  extends AlertDialogPrimitive.AlertDialogCancelProps,
    VariantProps<typeof buttonVariants> {}

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogContent = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.AlertDialogContent>,
  AlertDialogContentProps
>(({ className, header, children, description, ...props }, ref) => (
  <AlertDialogPrimitive.AlertDialogPortal>
    <AlertDialogPrimitive.AlertDialogOverlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className,
      )}
      {...props}
    >
      <AlertDialogPrimitive.Title
        className={cn('text-lg font-semibold', className)}
      >
        {header}
      </AlertDialogPrimitive.Title>
      <AlertDialogPrimitive.Description
        className={cn('text-sm text-muted-foreground', className)}
      >
        {description}
      </AlertDialogPrimitive.Description>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        {children}
      </div>
    </AlertDialogPrimitive.Content>
  </AlertDialogPrimitive.AlertDialogPortal>
));

AlertDialogContent.displayName = 'DialogContent';

const AlertDialogAction = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(({ className, variant, size, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants({ className, variant, size }), className)}
    {...props}
  />
));
AlertDialogAction.displayName = 'DialogAction';

const AlertDialogCancel = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelProps
>(({ className, variant = 'flat', size, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ className, variant, size }),
      'mt-2 sm:mt-0',
      className,
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = 'DialogCancel';

export {
  AlertDialog,
  AlertDialogAction,
  type AlertDialogActionProps,
  AlertDialogCancel,
  type AlertDialogCancelProps,
  AlertDialogContent,
  type AlertDialogContentProps,
  type AlertDialogProps,
  AlertDialogTrigger,
  type AlertDialogTriggerProps,
};

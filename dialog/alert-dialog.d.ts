import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { buttonVariants } from '../button/button';
interface AlertDialogProps extends AlertDialogPrimitive.AlertDialogProps {
}
interface AlertDialogTriggerProps extends AlertDialogPrimitive.AlertDialogTriggerProps {
}
interface AlertDialogContentProps extends AlertDialogPrimitive.AlertDialogContentProps {
    header: ReactNode;
    description: ReactNode;
}
interface AlertDialogActionProps extends AlertDialogPrimitive.AlertDialogActionProps, VariantProps<typeof buttonVariants> {
}
interface AlertDialogCancelProps extends AlertDialogPrimitive.AlertDialogCancelProps, VariantProps<typeof buttonVariants> {
}
declare const AlertDialog: import("react").FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: import("react").ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const AlertDialogContent: import("react").ForwardRefExoticComponent<AlertDialogContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare const AlertDialogAction: import("react").ForwardRefExoticComponent<AlertDialogActionProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: import("react").ForwardRefExoticComponent<AlertDialogCancelProps & import("react").RefAttributes<HTMLButtonElement>>;
export { AlertDialog, AlertDialogAction, type AlertDialogActionProps, AlertDialogCancel, type AlertDialogCancelProps, AlertDialogContent, type AlertDialogContentProps, type AlertDialogProps, AlertDialogTrigger, type AlertDialogTriggerProps, };

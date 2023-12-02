import * as DialogPrimitive from '@radix-ui/react-dialog';
import type { HTMLAttributes } from 'react';
interface DialogContentProps extends DialogPrimitive.DialogContentProps {
}
interface DialogProps extends DialogPrimitive.DialogProps {
}
interface DialogTriggerProps extends DialogPrimitive.DialogTriggerProps {
}
interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
}
declare const Dialog: import("react").FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const DialogContent: import("react").ForwardRefExoticComponent<DialogContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare const DialogFooter: {
    ({ className, ...props }: DialogFooterProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Dialog, DialogContent, type DialogContentProps, DialogFooter, type DialogFooterProps, type DialogProps, DialogTrigger, type DialogTriggerProps, };

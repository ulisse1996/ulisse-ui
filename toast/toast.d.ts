import * as ToastPrimitives from '@radix-ui/react-toast';
import { type VariantProps } from 'class-variance-authority';
import type { ReactElement } from 'react';
declare const toastVariants: (props?: ({
    variant?: "default" | "warning" | "destructive" | "success" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface ToastViewportProps extends ToastPrimitives.ToastViewportProps {
}
interface ToastProps extends ToastPrimitives.ToastProps, VariantProps<typeof toastVariants> {
}
interface ToastProviderProps extends ToastPrimitives.ToastProviderProps {
}
interface ToastActionProps extends ToastPrimitives.ToastActionProps {
}
interface ToastCloseProps extends ToastPrimitives.ToastCloseProps {
}
interface ToastTitleProps extends ToastPrimitives.ToastTitleProps {
}
interface ToastDescriptionProps extends ToastPrimitives.ToastDescriptionProps {
}
declare const ToastProvider: import("react").FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: import("react").ForwardRefExoticComponent<ToastViewportProps & import("react").RefAttributes<HTMLOListElement>>;
declare const Toast: import("react").ForwardRefExoticComponent<ToastProps & import("react").RefAttributes<HTMLLIElement>>;
declare const ToastAction: import("react").ForwardRefExoticComponent<ToastActionProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const ToastClose: import("react").ForwardRefExoticComponent<ToastCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: import("react").ForwardRefExoticComponent<ToastTitleProps & import("react").RefAttributes<HTMLDivElement>>;
declare const ToastDescription: import("react").ForwardRefExoticComponent<ToastDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
type ToastActionElement = ReactElement<typeof ToastAction>;
export { Toast, ToastAction, type ToastActionElement, type ToastActionProps, ToastClose, type ToastCloseProps, ToastDescription, type ToastDescriptionProps, type ToastProps, ToastProvider, type ToastProviderProps, ToastTitle, type ToastTitleProps, ToastViewport, type ToastViewportProps, };

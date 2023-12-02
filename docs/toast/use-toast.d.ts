import type { ReactNode } from 'react';
import type { ToastActionElement, ToastProps } from '../toast/toast';
type ToasterToast = ToastProps & {
    id: string;
    title?: ReactNode;
    description?: ReactNode;
    action?: ToastActionElement;
};
type Toast = Omit<ToasterToast, 'id'>;
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (toastProps: ToasterToast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};
export { toast, useToast };

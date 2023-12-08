import * as SheetPrimitive from '@radix-ui/react-dialog';
import { type VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react';
interface SheetProps extends SheetPrimitive.DialogProps {
}
interface SheetTriggerProps extends SheetPrimitive.DialogTriggerProps {
}
interface SheetCloseProps extends SheetPrimitive.DialogCloseProps {
}
interface SheetOverlayProps extends SheetPrimitive.DialogOverlayProps {
}
interface SheetFooterProps extends HTMLAttributes<HTMLDivElement> {
}
interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {
}
interface SheetDescriptionProps extends SheetPrimitive.DialogDescriptionProps {
}
interface SheetTitleProps extends SheetPrimitive.DialogTitleProps {
}
declare const Sheet: import("react").FC<SheetPrimitive.DialogProps>;
declare const SheetTrigger: import("react").ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const SheetClose: import("react").ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const SheetOverlay: import("react").ForwardRefExoticComponent<SheetOverlayProps & import("react").RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "left" | "right" | "bottom" | "top" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface SheetContentProps extends ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: import("react").ForwardRefExoticComponent<SheetContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: SheetHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: SheetFooterProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SheetTitle: import("react").ForwardRefExoticComponent<SheetTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: import("react").ForwardRefExoticComponent<SheetDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
export { Sheet, SheetClose, type SheetCloseProps, SheetContent, type SheetContentProps, SheetDescription, type SheetDescriptionProps, SheetFooter, type SheetFooterProps, SheetHeader, type SheetHeaderProps, SheetOverlay, type SheetOverlayProps, type SheetProps, SheetTitle, type SheetTitleProps, SheetTrigger, type SheetTriggerProps, };

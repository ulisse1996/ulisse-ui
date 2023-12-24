import * as DrawerPrimitive from '@radix-ui/react-dialog';
import { type VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react';
interface DrawerProps extends DrawerPrimitive.DialogProps {
}
interface DrawerTriggerProps extends DrawerPrimitive.DialogTriggerProps {
}
interface DrawerCloseProps extends DrawerPrimitive.DialogCloseProps {
}
interface DrawerOverlayProps extends DrawerPrimitive.DialogOverlayProps {
}
interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {
}
interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
}
interface DrawerDescriptionProps extends DrawerPrimitive.DialogDescriptionProps {
}
interface DrawerTitleProps extends DrawerPrimitive.DialogTitleProps {
}
declare const Drawer: import("react").FC<DrawerPrimitive.DialogProps>;
declare const DrawerTrigger: import("react").ForwardRefExoticComponent<DrawerPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const DrawerClose: import("react").ForwardRefExoticComponent<DrawerPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const DrawerOverlay: import("react").ForwardRefExoticComponent<DrawerOverlayProps & import("react").RefAttributes<HTMLDivElement>>;
declare const DrawerVariants: (props?: ({
    side?: "left" | "right" | "bottom" | "top" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface DrawerContentProps extends ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>, VariantProps<typeof DrawerVariants> {
}
declare const DrawerContent: import("react").ForwardRefExoticComponent<DrawerContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare const DrawerHeader: {
    ({ className, ...props }: DrawerHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DrawerFooter: {
    ({ className, ...props }: DrawerFooterProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DrawerTitle: import("react").ForwardRefExoticComponent<DrawerTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: import("react").ForwardRefExoticComponent<DrawerDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
export { Drawer, DrawerClose, type DrawerCloseProps, DrawerContent, type DrawerContentProps, DrawerDescription, type DrawerDescriptionProps, DrawerFooter, type DrawerFooterProps, DrawerHeader, type DrawerHeaderProps, DrawerOverlay, type DrawerOverlayProps, type DrawerProps, DrawerTitle, type DrawerTitleProps, DrawerTrigger, type DrawerTriggerProps, };

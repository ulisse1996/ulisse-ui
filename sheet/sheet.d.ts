import type { ComponentProps, HTMLAttributes } from 'react';
import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
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
declare const Sheet: {
    ({ shouldScaleBackground, ...props }: SheetProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SheetTrigger: React.ForwardRefExoticComponent<SheetTriggerProps>;
declare const SheetPortal: React.FC<SheetPortalProps>;
declare const SheetClose: React.ForwardRefExoticComponent<SheetCloseProps>;
declare const SheetOverlay: React.ForwardRefExoticComponent<Omit<Omit<import("@radix-ui/react-dialog").DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SheetContent: React.ForwardRefExoticComponent<Omit<Omit<import("@radix-ui/react-dialog").DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    onAnimationEnd?: ((open: boolean) => void) | undefined;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: SheetHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SheetTitle: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { Sheet, SheetClose, type SheetCloseProps, SheetContent, type SheetContentProps, SheetDescription, type SheetDescriptionProps, type SheetFooterProps, SheetHeader, type SheetHeaderProps, SheetOverlay, type SheetOverlayProps, SheetPortal, type SheetPortalProps, type SheetProps, SheetTitle, type SheetTitleProps, SheetTrigger, type SheetTriggerProps, };

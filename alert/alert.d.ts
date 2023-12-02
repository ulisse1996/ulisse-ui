import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
interface AlertProps extends HTMLAttributes<HTMLDivElement> {
}
interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {
}
interface AlertDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
}
declare const Alert: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "secondary" | "warning" | "destructive" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & import("react").RefAttributes<HTMLDivElement>>;
declare const AlertTitle: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & import("react").RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
export { Alert, AlertDescription, type AlertDescriptionProps, type AlertProps, AlertTitle, type AlertTitleProps, };

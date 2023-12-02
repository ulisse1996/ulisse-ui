import type { HTMLAttributes } from 'react';
interface CardProps extends HTMLAttributes<HTMLDivElement> {
}
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
}
interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
}
interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
}
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
}
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
}
declare const Card: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
declare const CardHeader: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
declare const CardTitle: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & import("react").RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
declare const CardContent: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
declare const CardFooter: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export { Card, CardContent, type CardContentProps, CardDescription, type CardDescriptionProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, CardTitle, type CardTitleProps, };

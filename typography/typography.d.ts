import type { ComponentProps } from 'react';
declare const elements: readonly ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small"];
type TypographyProps = ComponentProps<(typeof elements)[number]> & {
    variant: (typeof elements)[number];
};
declare const Typography: import("react").ForwardRefExoticComponent<(Omit<import("react").ClassAttributes<HTMLHeadingElement> & import("react").HTMLAttributes<HTMLHeadingElement> & {
    variant: (typeof elements)[number];
}, "ref"> | Omit<import("react").ClassAttributes<HTMLElement> & import("react").HTMLAttributes<HTMLElement> & {
    variant: (typeof elements)[number];
}, "ref"> | Omit<import("react").ClassAttributes<HTMLParagraphElement> & import("react").HTMLAttributes<HTMLParagraphElement> & {
    variant: (typeof elements)[number];
}, "ref">) & import("react").RefAttributes<HTMLHeadingElement | HTMLParagraphElement>>;
export { Typography, type TypographyProps };

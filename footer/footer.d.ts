import type { ElementType, HTMLAttributes } from 'react';
import type { PolymorphicProps } from '../types';
interface FooterProps extends HTMLAttributes<HTMLDetailsElement> {
}
type FooterLinkProps<T extends ElementType = typeof defaultElement> = PolymorphicProps<T>;
interface FooterLinksProps extends HTMLAttributes<HTMLUListElement> {
}
interface FooterRightsProps extends HTMLAttributes<HTMLParagraphElement> {
}
interface FooterElementProps extends HTMLAttributes<HTMLDivElement> {
}
declare const defaultElement = "a";
declare function FooterRights(props: FooterRightsProps): import("react/jsx-runtime").JSX.Element;
declare function FooterLink<T extends ElementType = typeof defaultElement>({ as, className, ...props }: FooterLinkProps<T>): import("react/jsx-runtime").JSX.Element;
declare function FooterLinks({ className, ...props }: FooterLinksProps): import("react/jsx-runtime").JSX.Element;
declare function FooterElement({ className, ...props }: FooterElementProps): import("react/jsx-runtime").JSX.Element;
declare const Footer: import("react").ForwardRefExoticComponent<FooterProps & import("react").RefAttributes<HTMLDetailsElement>>;
export { Footer, FooterElement, type FooterElementProps, FooterLink, type FooterLinkProps, FooterLinks, type FooterLinksProps, type FooterProps, FooterRights, type FooterRightsProps, };

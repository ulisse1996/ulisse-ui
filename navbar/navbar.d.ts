import type { ElementType, HTMLAttributes } from 'react';
import type { PolymorphicProps } from '../utils';
interface NavbarProps extends HTMLAttributes<HTMLDetailsElement> {
}
type NavbarLinkProps<T extends ElementType = typeof defaultElement> = PolymorphicProps<T>;
interface NavbarLinksProps extends HTMLAttributes<HTMLUListElement> {
}
interface NavbarMobileProps extends HTMLAttributes<HTMLDivElement> {
}
interface NavbarDesktopProps extends HTMLAttributes<HTMLDivElement> {
}
declare const defaultElement = "a";
declare function NavbarMobile(props: NavbarMobileProps): import("react/jsx-runtime").JSX.Element;
declare function NavbarDesktop(props: NavbarMobileProps): import("react/jsx-runtime").JSX.Element;
declare function NavbarLink<T extends ElementType = typeof defaultElement>({ as, className, ...props }: NavbarLinkProps<T>): import("react/jsx-runtime").JSX.Element;
declare function NavbarLinks({ className, ...props }: NavbarLinksProps): import("react/jsx-runtime").JSX.Element;
declare const Navbar: import("react").ForwardRefExoticComponent<NavbarProps & import("react").RefAttributes<HTMLDetailsElement>>;
export { Navbar, NavbarDesktop, type NavbarDesktopProps, NavbarLink, type NavbarLinkProps, NavbarLinks, type NavbarLinksProps, NavbarMobile, type NavbarMobileProps, type NavbarProps, };

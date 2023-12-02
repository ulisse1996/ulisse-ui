import type { AnchorHTMLAttributes, DetailedHTMLProps, OlHTMLAttributes, ReactElement, ReactNode } from 'react';
interface BreadcrumbProps extends Omit<DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, 'children'> {
    disabled?: boolean;
    children: ReactElement<BreadcrumbItemProps> | ReactElement<BreadcrumbItemProps>[];
}
type BreadcrumbItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    last?: boolean;
    children: ReactNode;
    separator?: ReactNode;
    disabled?: boolean;
    index?: number;
};
declare const Breadcrumb: import("react").ForwardRefExoticComponent<Omit<BreadcrumbProps, "ref"> & import("react").RefAttributes<HTMLOListElement>>;
declare function BreadcrumbItem({ children, last, className, separator, disabled, index, ...props }: BreadcrumbItemProps): import("react/jsx-runtime").JSX.Element;
export { Breadcrumb, BreadcrumbItem, type BreadcrumbItemProps, type BreadcrumbProps, };

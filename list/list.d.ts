import type { ButtonHTMLAttributes, ElementType, ForwardedRef, ForwardRefExoticComponent, HTMLAttributes } from 'react';
import type { PolymorphicProps } from '../utils';
interface ListProps extends HTMLAttributes<HTMLDetailsElement> {
}
type ListItemProps<E extends ElementType = 'button'> = PolymorphicProps<E> & ButtonHTMLAttributes<HTMLButtonElement>;
declare const List: ForwardRefExoticComponent<ListProps & import("react").RefAttributes<HTMLDetailsElement>>;
declare function InternalListItem<T extends ElementType = 'button'>({ className, as, ...props }: ListItemProps<T>, ref: ForwardedRef<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
declare const ListItem: <T extends ElementType>(props: import("react").PropsWithoutRef<import("react").ComponentProps<T>> & {
    as?: T | undefined;
} & {
    children?: import("react").ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & {
    ref?: ForwardedRef<HTMLButtonElement> | undefined;
}) => ReturnType<typeof InternalListItem>;
export { List, ListItem, type ListItemProps, type ListProps };

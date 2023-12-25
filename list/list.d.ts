import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';
interface ListProps extends HTMLAttributes<HTMLDetailsElement> {
}
interface ListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const List: import("react").ForwardRefExoticComponent<ListProps & import("react").RefAttributes<HTMLDetailsElement>>;
declare const ListItem: import("react").ForwardRefExoticComponent<ListItemProps & import("react").RefAttributes<HTMLButtonElement>>;
export { List, ListItem, type ListItemProps, type ListProps };

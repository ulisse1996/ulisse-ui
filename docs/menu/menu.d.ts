import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import type { VariantProps } from 'class-variance-authority';
interface MenuProps extends DropdownMenuProps {
}
interface MenuTriggerProps extends DropdownMenu.DropdownMenuTriggerProps {
}
interface MenuSubTriggerProps extends DropdownMenu.MenuSubTriggerProps {
}
interface MenuContentProps extends DropdownMenu.MenuContentProps {
}
interface MenuSubContentProps extends DropdownMenu.MenuSubContentProps {
}
interface MenuItemProps extends DropdownMenu.MenuItemProps, VariantProps<typeof itemVariants> {
}
interface MenuSeparatorProps extends DropdownMenu.MenuSeparatorProps {
}
interface MenuSubProps extends DropdownMenu.DropdownMenuSubProps {
}
declare const MenuSub: import("react").FC<DropdownMenu.DropdownMenuSubProps>;
declare const Menu: import("react").FC<DropdownMenuProps>;
declare const itemVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const MenuTrigger: import("react").ForwardRefExoticComponent<MenuTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const MenuSubTrigger: import("react").ForwardRefExoticComponent<MenuSubTriggerProps & import("react").RefAttributes<HTMLDivElement>>;
declare const MenuSeparator: import("react").ForwardRefExoticComponent<MenuSeparatorProps & import("react").RefAttributes<HTMLDivElement>>;
declare const MenuItem: import("react").ForwardRefExoticComponent<MenuItemProps & import("react").RefAttributes<HTMLDivElement>>;
declare const MenuContent: import("react").ForwardRefExoticComponent<MenuContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare const MenuSubContent: import("react").ForwardRefExoticComponent<MenuSubContentProps & import("react").RefAttributes<HTMLDivElement>>;
export { Menu, MenuContent, type MenuContentProps, MenuItem, type MenuItemProps, type MenuProps, MenuSeparator, type MenuSeparatorProps, MenuSub, MenuSubContent, type MenuSubContentProps, type MenuSubProps, MenuSubTrigger, type MenuSubTriggerProps, MenuTrigger, type MenuTriggerProps, };

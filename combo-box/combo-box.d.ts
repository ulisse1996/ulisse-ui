import type { ReactNode } from 'react';
import type { InputProps } from '../input';
interface Item {
    key: string;
    value: string;
    label: ReactNode;
}
interface ComboBoxProps extends Omit<InputProps, 'children' | 'onSelect' | `value` | `defaultValue`> {
    items: Item[];
    onSelect?: (item: Item) => void;
    value?: string;
    defaultValue?: string;
    emptyLabel?: ReactNode;
    filterFn?: (items: Item[], value?: string) => Item[];
}
declare function contains(items: Item[], value?: string): Item[];
declare function start(items: Item[], value?: string): Item[];
declare const ComboBox: import("react").ForwardRefExoticComponent<ComboBoxProps & import("react").RefAttributes<HTMLInputElement>>;
export { ComboBox, type ComboBoxProps, contains, type Item, start };

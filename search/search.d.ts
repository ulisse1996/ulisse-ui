import type { SearchFieldProps as InternalSearchFieldProps } from '@react-stately/searchfield';
import type { HTMLAttributes, ReactNode } from 'react';
import type { InputProps } from '../input';
type LimitedInputProps = Omit<InputProps, 'onChange' | `defaultValue` | `onBlur` | `onFocus` | `onKeyUp` | `onKeyDown` | `onSubmit` | `value`>;
interface SearchFieldProps extends LimitedInputProps, Omit<InternalSearchFieldProps, 'label'> {
    label?: string;
    loading?: boolean;
    empty?: ReactNode;
}
interface SearchItemProps extends HTMLAttributes<HTMLLIElement> {
    onSelect: () => void;
}
declare const SearchItem: import("react").ForwardRefExoticComponent<SearchItemProps & import("react").RefAttributes<HTMLLIElement>>;
declare const SearchField: import("react").ForwardRefExoticComponent<SearchFieldProps & import("react").RefAttributes<HTMLInputElement>>;
export { SearchField, type SearchFieldProps, SearchItem, type SearchItemProps };

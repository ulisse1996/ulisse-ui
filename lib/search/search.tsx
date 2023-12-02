import { useSearchField } from '@react-aria/searchfield';
import { useObjectRef } from '@react-aria/utils';
import type { SearchFieldProps as InternalSearchFieldProps } from '@react-stately/searchfield';
import { useSearchFieldState } from '@react-stately/searchfield';
import type { HTMLAttributes, ReactNode } from 'react';
import { Children, forwardRef, useEffect, useState } from 'react';

import type { InputProps } from '@/input';
import { Input } from '@/input';
import { Label } from '@/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/popover';
import { Spinner } from '@/spinner';
import { cn } from '@/utils';

type LimitedInputProps = Omit<
  InputProps,
  | 'onChange'
  | `defaultValue`
  | `onBlur`
  | `onFocus`
  | `onKeyUp`
  | `onKeyDown`
  | `onSubmit`
  | `value`
>;

interface SearchFieldProps
  extends LimitedInputProps,
    Omit<InternalSearchFieldProps, 'label'> {
  label?: string;
  loading?: boolean;
  empty?: ReactNode;
}

interface SearchItemProps extends HTMLAttributes<HTMLLIElement> {
  onSelect: () => void;
}

const SearchItem = forwardRef<HTMLLIElement, SearchItemProps>(
  ({ className, onSelect, ...props }, ref) => {
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        onClick={onSelect}
        onKeyUp={onSelect}
        onKeyDown={onSelect}
        {...props}
        ref={ref}
        className={cn(
          'relative flex cursor-default select-none items-center gap-1 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground',
          className,
        )}
      />
    );
  },
);

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ loading, empty, children, label, ...props }, ref) => {
    const { id } = props;
    const state = useSearchFieldState(props);
    const inputRef = useObjectRef(ref);
    const { labelProps, inputProps } = useSearchField(
      { ...props, 'aria-label': label },
      state,
      inputRef,
    );
    const [open, setOpen] = useState(false);

    useEffect(() => {
      if (state.value) {
        setOpen(true);
      }
    }, [state.value]);

    const childrenLength = Children.count(children);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            {label && (
              <Label {...labelProps} htmlFor={id}>
                {label}
              </Label>
            )}
            <Input {...inputProps} ref={inputRef} />
          </div>
        </PopoverTrigger>
        <PopoverContent onOpenAutoFocus={(e) => e.preventDefault()}>
          {loading && (
            <div className="flex flex-col items-center">
              <Spinner isLoading className="text-primary" />
            </div>
          )}
          {!loading && childrenLength === 0 && empty}
          {!loading && <ul>{children}</ul>}
        </PopoverContent>
      </Popover>
    );
  },
);

SearchField.displayName = 'SearchField';

export { SearchField, type SearchFieldProps, SearchItem, type SearchItemProps };

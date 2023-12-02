import type { FocusEvent, ReactNode } from 'react';
import { forwardRef, useState } from 'react';

import type { InputProps } from '@/input';
import { Input } from '@/input';
import { Label } from '@/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/popover';
import { cn } from '@/utils';

interface Item {
  key: string;
  value: string;
  label: ReactNode;
}

interface ComboBoxProps
  extends Omit<InputProps, 'children' | 'onSelect' | `value` | `defaultValue`> {
  items: Item[];
  onSelect?: (item: Item) => void;
  value?: string;
  defaultValue?: string;
  emptyLabel?: ReactNode;
  filterFn?: (items: Item[], value?: string) => Item[];
}

function contains(items: Item[], value?: string) {
  if (!value) {
    return items;
  }

  return items.filter((el) =>
    el.value.toLowerCase().includes(value.toLowerCase()),
  );
}

function start(items: Item[], value?: string) {
  if (!value) {
    return items;
  }

  return items.filter((el) =>
    el.value.toLowerCase().startsWith(value.toLowerCase()),
  );
}

const ComboBox = forwardRef<HTMLInputElement, ComboBoxProps>(
  (
    { label, filterFn = contains, emptyLabel, onSelect, items, ...props },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const { id, value, defaultValue } = props;
    const [innerValue, setInnerValue] = useState<string>(
      value || defaultValue || ``,
    );

    const values = filterFn(items, innerValue);

    const handleSelect = (item: Item) => {
      if (onSelect) {
        onSelect(item);
        setInnerValue(item.value);
      }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (open) {
        // Don't check blur if input is blurred for popover selection
        return;
      }
      const current = e.target.value;
      if (!items.find((el) => el.value === current)) {
        e.target.value = ``;
      }
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            {label && <Label htmlFor={id}>{label}</Label>}
            <Input
              {...props}
              onBlur={handleBlur}
              value={innerValue}
              onChange={(e) => setInnerValue(e.target.value)}
              ref={ref}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent onOpenAutoFocus={(e) => e.preventDefault()}>
          {values.length === 0 && emptyLabel && emptyLabel}
          {values.map((el) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              key={el.key}
              onFocus={() => setOpen(true)}
              onClick={() => handleSelect(el)}
              onKeyUp={() => handleSelect(el)}
              onKeyDown={() => handleSelect(el)}
              className={cn(
                'relative flex cursor-default select-none items-center gap-1 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground',
              )}
            >
              {el.label}
            </li>
          ))}
        </PopoverContent>
      </Popover>
    );
  },
);

export { ComboBox, type ComboBoxProps, contains, type Item, start };

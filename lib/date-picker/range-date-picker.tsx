import { toCalendarDate } from '@internationalized/date';
import type { AriaRangeCalendarProps, DateValue } from '@react-aria/calendar';
import type { DateFormatter } from '@react-aria/i18n';
import { useDateFormatter } from '@react-aria/i18n';
import type { RangeValue } from '@react-types/shared';
import { CalendarDays } from 'lucide-react';
import type {
  ForwardedRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';
import { forwardRef, useState } from 'react';

import { RangeCalendar } from '@/calendar';
import { Input } from '@/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/popover';

type CustomInputAttributes = Omit<
  HTMLAttributes<HTMLInputElement>,
  'onChange' | 'defaultValue'
>;

type FormatFn<T extends DateValue> = (range?: RangeValue<T> | null) => string;

interface RangeDatePickerProps<T extends DateValue>
  extends CustomInputAttributes,
    Omit<AriaRangeCalendarProps<T>, 'defaultValue'> {
  onRangeChange?: (range: RangeValue<T>) => void;
  formatFn?: FormatFn<T>;
  label?: string;
}

function standardFormat<T extends DateValue>(
  formatter: DateFormatter,
  range?: RangeValue<T> | null,
) {
  if (!range) {
    return ``;
  }

  const start = toCalendarDate(range.start);
  const end = toCalendarDate(range.end);

  return `${formatter.format(
    start.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone),
  )} - ${formatter.format(
    end.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone),
  )}`;
}

function InternalRangeDatePicker<T extends DateValue>(
  { value, onRangeChange, formatFn, ...props }: RangeDatePickerProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const formatter = useDateFormatter();
  const finalFormatFn = formatFn || ((d) => standardFormat(formatter, d));
  const [inputValue, setInputValue] = useState(finalFormatFn(value));

  const handleChange = (date: RangeValue<DateValue>) => {
    const t = date as RangeValue<T>;
    setInputValue(finalFormatFn(t));
    if (onRangeChange) {
      onRangeChange(t);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Input
          leftComponent={<CalendarDays />}
          ref={ref}
          {...props}
          value={inputValue}
          onChange={() => {}}
          className="pl-10"
        />
      </PopoverTrigger>
      <PopoverContent className="w-full md:h-96">
        <RangeCalendar {...props} value={value} onChange={handleChange} />
      </PopoverContent>
    </Popover>
  );
}

const RangeDatePicker = forwardRef(InternalRangeDatePicker) as <
  T extends DateValue,
>(
  props: RangeDatePickerProps<T> & { ref?: ForwardedRef<HTMLInputElement> },
) => ReturnType<typeof InternalRangeDatePicker>;

(
  RangeDatePicker as ForwardRefExoticComponent<RangeDatePickerProps<any>>
).displayName = 'RangeDatePicker';

export { RangeDatePicker, type RangeDatePickerProps };

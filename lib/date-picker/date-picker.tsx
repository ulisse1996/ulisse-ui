import { toCalendarDate } from '@internationalized/date';
import type { AriaCalendarProps, DateValue } from '@react-aria/calendar';
import type { DateFormatter } from '@react-aria/i18n';
import { useDateFormatter } from '@react-aria/i18n';
import { CalendarDays } from 'lucide-react';
import type {
  ForwardedRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';
import { forwardRef, useState } from 'react';

import { Calendar } from '@/calendar';
import { Input } from '@/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/popover';

type CustomInputAttributes = Omit<
  HTMLAttributes<HTMLInputElement>,
  'onChange' | 'defaultValue'
>;

type FormatFn<T extends DateValue> = (date?: T | null) => string;

interface DatePickerProps<T extends DateValue>
  extends CustomInputAttributes,
    Omit<AriaCalendarProps<T>, 'defaultValue'> {
  onDateChange?: (date: T) => void;
  formatFn?: FormatFn<T>;
  label?: string;
}

function standardFormat<T extends DateValue>(
  formatter: DateFormatter,
  date?: T | null,
) {
  if (!date) {
    return ``;
  }

  const calendarDate = toCalendarDate(date);

  return formatter.format(
    calendarDate.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone),
  );
}

function InternalDatePicker<T extends DateValue>(
  { value, onDateChange, formatFn, ...props }: DatePickerProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const formatter = useDateFormatter();
  const finalFormatFn = formatFn || ((d) => standardFormat(formatter, d));
  const [inputValue, setInputValue] = useState(finalFormatFn(value));

  const handleChange = (date: DateValue) => {
    const t = date as T;
    setInputValue(finalFormatFn(t));
    if (onDateChange) {
      onDateChange(t);
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
      <PopoverContent className="min-w-fit">
        <Calendar {...props} value={value} onChange={handleChange} />
      </PopoverContent>
    </Popover>
  );
}

const DatePicker = forwardRef(InternalDatePicker) as <T extends DateValue>(
  props: DatePickerProps<T> & { ref?: ForwardedRef<HTMLInputElement> },
) => ReturnType<typeof InternalDatePicker>;

(DatePicker as ForwardRefExoticComponent<DatePickerProps<any>>).displayName =
  'DatePicker';

export { DatePicker, type DatePickerProps };

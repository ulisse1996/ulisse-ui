import { createCalendar } from '@internationalized/date';
import type { DateValue } from '@react-aria/calendar';
import type { AriaDateFieldProps } from '@react-aria/datepicker';
import { useDateField } from '@react-aria/datepicker';
import { useLocale } from '@react-aria/i18n';
import { useObjectRef } from '@react-aria/utils';
import { useDateFieldState } from '@react-stately/datepicker';
import type {
  ForwardedRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';
import { forwardRef } from 'react';

import { DateSegment } from '@/input/internal/date-segment';
import { Label } from '@/label';

type InputDateProps<T extends DateValue> = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange'
> &
  AriaDateFieldProps<T> & {
    disabled?: boolean;
    label?: string;
  };

function InternalInputDate<T extends DateValue>(
  { ...props }: InputDateProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { id, disabled, label } = props;
  const { locale } = useLocale();
  const divRef = useObjectRef(ref);
  const state = useDateFieldState({
    ...{ ...props, disabled, isDisabled: disabled },
    locale,
    createCalendar,
  });
  const { labelProps, fieldProps } = useDateField(
    { ...props, isDisabled: disabled },
    state,
    divRef,
  );

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {label && (
        <Label {...labelProps} htmlFor={id}>
          {props.label}
        </Label>
      )}
      <div
        {...fieldProps}
        id={id}
        ref={ref}
        className="border-input flex h-10 w-fit rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:rounded-xl file:border-0 file:bg-primary file:px-3 file:text-sm file:font-medium file:text-primary-foreground placeholder:text-muted-foreground hover:file:bg-primary/90 focus:ring-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </div>
    </div>
  );
}

const InputDate = forwardRef(InternalInputDate) as <T extends DateValue>(
  props: InputDateProps<T> & { ref?: ForwardedRef<HTMLDivElement> },
) => ReturnType<typeof InternalInputDate>;

(InputDate as ForwardRefExoticComponent<InputDateProps<any>>).displayName =
  'InputDate';

export { InputDate, type InputDateProps };

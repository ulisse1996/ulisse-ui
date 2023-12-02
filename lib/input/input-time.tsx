import type { TimeValue } from '@react-aria/datepicker';
import { useTimeField } from '@react-aria/datepicker';
import { useLocale } from '@react-aria/i18n';
import { useObjectRef } from '@react-aria/utils';
import { useTimeFieldState } from '@react-stately/datepicker';
import type { TimePickerProps } from '@react-types/datepicker';
import type {
  ForwardedRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';
import { forwardRef } from 'react';

import { DateSegment } from '@/input/internal/date-segment';
import { Label } from '@/label';

type InputTimeProps<T extends TimeValue> = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange'
> &
  TimePickerProps<T> & {
    disabled?: boolean;
    label?: string;
  };

function InternalInputTime<T extends TimeValue>(
  { ...props }: InputTimeProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { id, disabled, label } = props;
  const { locale } = useLocale();
  const state = useTimeFieldState({ ...props, isDisabled: disabled, locale });
  const divRef = useObjectRef(ref);
  const { labelProps, fieldProps } = useTimeField<T>(props, state, divRef);

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

const InputTime = forwardRef(InternalInputTime) as <T extends TimeValue>(
  props: InputTimeProps<T> & { ref?: ForwardedRef<HTMLDivElement> },
) => ReturnType<typeof InternalInputTime>;

(InputTime as ForwardRefExoticComponent<InputTimeProps<any>>).displayName =
  'InputTime';

export { InputTime, type InputTimeProps };

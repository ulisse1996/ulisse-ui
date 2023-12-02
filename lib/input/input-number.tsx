import { useLocale } from '@react-aria/i18n';
import type { AriaNumberFieldProps } from '@react-aria/numberfield';
import { useNumberField } from '@react-aria/numberfield';
import { useObjectRef } from '@react-aria/utils';
import { useNumberFieldState } from '@react-stately/numberfield';
import { forwardRef } from 'react';

import type { InputProps } from './input';
import { Input } from './input';

type InputNumberProps = Omit<InputProps, 'type'> & AriaNumberFieldProps;

function safeDivideNumber(
  number: number | string | undefined,
  divider: number,
): number | undefined {
  if (typeof number === `undefined`) {
    return undefined;
  }
  const n = Number(number);
  if (Number.isNaN(n)) {
    return undefined;
  }
  return n / divider;
}

function handleMaxMin({
  min,
  max,
  minValue,
  maxValue,
  formatOptions,
}: {
  min?: number | string;
  max?: number | string;
  minValue?: number | string;
  maxValue?: number | string;
  formatOptions?: Intl.NumberFormatOptions;
}) {
  let selectedMin = minValue;
  let selectedMax = maxValue;
  if (typeof selectedMin === `undefined`) {
    selectedMin = min;
  }
  if (typeof selectedMax === `undefined`) {
    selectedMax = max;
  }
  if (!formatOptions) {
    return [Number(selectedMin), Number(selectedMax)];
  }
  if (formatOptions.style === 'percent') {
    return [
      safeDivideNumber(selectedMin, 100),
      safeDivideNumber(selectedMax, 100),
    ];
  }
  return [Number(selectedMin), Number(selectedMax)];
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  ({ disabled, label, ...props }, ref) => {
    const { locale } = useLocale();
    const [min, max] = handleMaxMin({ ...props });
    const state = useNumberFieldState({
      ...props,
      minValue: min,
      maxValue: max,
      locale,
    });
    const inputRef = useObjectRef(ref);
    const { groupProps, inputProps } = useNumberField(props, state, inputRef);

    return (
      <div
        className="grid w-full max-w-sm items-center gap-1.5"
        {...groupProps}
      >
        <Input
          type="number"
          ref={inputRef}
          {...inputProps}
          label={label}
          disabled={disabled}
        />
      </div>
    );
  },
);

InputNumber.displayName = 'InputNumber';

export { InputNumber, type InputNumberProps };

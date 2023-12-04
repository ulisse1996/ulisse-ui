import type { PinInputInput, PinInputProps } from '@ark-ui/react';
import { PinInput } from '@ark-ui/react';
import type { ElementRef } from 'react';
import { forwardRef } from 'react';

import { Label } from '@/label';

interface InputPinProps extends PinInputProps {
  label?: string;
  length: number;
}

const InputPin = forwardRef<ElementRef<typeof PinInputInput>, InputPinProps>(
  ({ label, length, ...props }, ref) => {
    const { id } = props;
    return (
      <PinInput.Root
        ref={ref}
        blurOnComplete
        otp
        {...props}
        className="grid w-full max-w-sm items-center gap-1.5"
      >
        {label && <Label htmlFor={id}>{label}</Label>}
        <PinInput.Control className="flex flex-row gap-1">
          {[...Array(length).keys()].map((idKey, index) => (
            <PinInput.Input
              className="border-input flex h-10 w-10 rounded-md border bg-background px-3 py-2 text-center text-sm ring-offset-background file:rounded-xl file:border-0 file:bg-primary file:px-3 file:text-sm file:font-medium file:text-primary-foreground placeholder:text-muted-foreground hover:file:bg-primary/90 focus:ring-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              key={idKey}
              index={index}
            />
          ))}
        </PinInput.Control>
      </PinInput.Root>
    );
  },
);

InputPin.displayName = 'InputPin';

export { InputPin, type InputPinProps };

import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const INVALID_PROPS = [
  'onPressStart',
  'onPressEnd',
  'excludeFromTabOrder',
  'preventFocusOnPress',
  'allowFocusWhenDisabled',
  'isDisabled',
  `onPress`,
  `onFocusChange`,
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeInvalidProps(props: Record<string, any>) {
  const all = { ...props };
  for (const key of Object.keys(all)) {
    if (INVALID_PROPS.includes(key)) {
      delete all[key];
    }
  }

  return all;
}

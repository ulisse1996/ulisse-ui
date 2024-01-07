import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';
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

type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

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

export { type PolymorphicProps, type WithRequiredProperty };

import type { ClassValue } from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
type PolymorphicAsProp<E extends ElementType> = {
    as?: E;
};
type PolymorphicProps<E extends ElementType> = PropsWithChildren<ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>>;
type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
    [Property in Key]-?: Type[Property];
};
export declare function cn(...inputs: ClassValue[]): string;
export declare function removeInvalidProps(props: Record<string, any>): {
    [x: string]: any;
};
export { type PolymorphicProps, type WithRequiredProperty };

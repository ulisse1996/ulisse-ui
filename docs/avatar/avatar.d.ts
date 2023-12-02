import type { VariantProps } from 'class-variance-authority';
import type { ElementType } from 'react';
import type { PolymorphicProps } from '../types';
declare const defaultElement = "img";
declare const avatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type AvatarProps<E extends ElementType = typeof defaultElement> = PolymorphicProps<E> & VariantProps<typeof avatarVariants> & {
    alt: string;
};
declare const Avatar: import("react").ForwardRefExoticComponent<Omit<AvatarProps<ElementType>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
export { Avatar, type AvatarProps };

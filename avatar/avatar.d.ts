import type { VariantProps } from 'class-variance-authority';
import type { ElementType, ForwardedRef } from 'react';
import type { PolymorphicProps } from '../utils';
declare const defaultElement = "img";
declare const avatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type AvatarProps<E extends ElementType = typeof defaultElement> = PolymorphicProps<E> & VariantProps<typeof avatarVariants> & {
    alt: string;
    fallbackClassName?: string;
};
declare function InternalAvatar<T extends ElementType = typeof defaultElement>({ as, src, size, className, alt, fallbackClassName, ...props }: AvatarProps<T>, ref: ForwardedRef<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
declare const Avatar: <T extends ElementType>(props: import("react").PropsWithoutRef<import("react").ComponentProps<T>> & {
    as?: T | undefined;
} & {
    children?: import("react").ReactNode;
} & VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & {
    alt: string;
    fallbackClassName?: string | undefined;
} & {
    ref?: ForwardedRef<HTMLSpanElement> | undefined;
}) => ReturnType<typeof InternalAvatar>;
export { Avatar, type AvatarProps };

import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
declare const badgeVariants: (props?: ({
    variant?: "destructive" | "success" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare const Badge: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLSpanElement>>;
export { Badge, type BadgeProps };

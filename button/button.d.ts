import type { VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
declare const buttonVariants: (props?: ({
    variant?: "secondary" | "destructive" | "primary" | "outline-primary" | "outline-secondary" | "outline-destructive" | "flat" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { Button, type ButtonProps, buttonVariants };

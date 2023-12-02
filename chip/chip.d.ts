import type { VariantProps } from 'class-variance-authority';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
declare const chipVariants: (props?: ({
    variant?: "secondary" | "destructive" | "primary" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface ChipProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantProps<typeof chipVariants> {
}
declare const Chip: import("react").ForwardRefExoticComponent<Omit<ChipProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export { Chip, type ChipProps };

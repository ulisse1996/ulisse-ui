import type { VariantProps } from 'class-variance-authority';
import type { SVGAttributes } from 'react';
declare const spinnerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface SpinnerProps extends SVGAttributes<SVGSVGElement>, VariantProps<typeof spinnerVariants> {
    isLoading: boolean;
}
declare const Spinner: import("react").ForwardRefExoticComponent<SpinnerProps & import("react").RefAttributes<SVGSVGElement>>;
export { Spinner, type SpinnerProps };

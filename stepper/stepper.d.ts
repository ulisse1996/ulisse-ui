import type { HTMLAttributes } from 'react';
type StepperProps = HTMLAttributes<HTMLUListElement> & {
    orientation?: 'horizontal' | 'vertical';
    step: number;
};
type StepperItemProps = HTMLAttributes<HTMLLIElement> & {
    index?: number;
    last?: boolean;
};
declare const Stepper: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLUListElement> & {
    orientation?: "horizontal" | "vertical" | undefined;
    step: number;
} & import("react").RefAttributes<HTMLUListElement>>;
declare const StepperItem: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLLIElement> & {
    index?: number | undefined;
    last?: boolean | undefined;
} & import("react").RefAttributes<HTMLLIElement>>;
export { Stepper, StepperItem, type StepperItemProps, type StepperProps };

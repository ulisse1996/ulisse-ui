import type { ButtonProps } from '../button';
interface FloatingButtonProps extends ButtonProps {
    side?: 'left' | 'right';
}
declare const FloatingButton: import("react").ForwardRefExoticComponent<FloatingButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { FloatingButton, type FloatingButtonProps };

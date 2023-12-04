import type { RatingGroupProps } from '@ark-ui/react';
import type { ReactNode } from 'react';
interface RatingProps extends RatingGroupProps {
    label?: string;
    halfIcon?: ReactNode;
    fullIcon?: ReactNode;
    emptyIcon?: ReactNode;
}
declare const Rating: import("react").ForwardRefExoticComponent<RatingProps & import("react").RefAttributes<HTMLDivElement>>;
export { Rating, type RatingProps };

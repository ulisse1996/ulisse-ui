import type { HTMLAttributes, ReactElement } from 'react';
interface CarouselProps extends HTMLAttributes<HTMLOListElement> {
    children: ReactElement<CarouselSlideProps> | ReactElement<CarouselSlideProps>[];
}
interface CarouselSlideProps extends HTMLAttributes<HTMLLIElement> {
    isSnapPoint?: boolean;
}
declare const CarouselSlide: import("react").ForwardRefExoticComponent<CarouselSlideProps & import("react").RefAttributes<HTMLLIElement>>;
declare const Carousel: import("react").ForwardRefExoticComponent<CarouselProps & import("react").RefAttributes<HTMLDivElement>>;
export { Carousel, type CarouselProps, CarouselSlide, type CarouselSlideProps };

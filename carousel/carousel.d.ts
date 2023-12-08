import type { CarouselItemProps } from '@ark-ui/react';
import type { ReactElement } from 'react';
import type { SwiperProps, SwiperSlideProps } from 'swiper/swiper-react';
interface CarouselProps extends Omit<SwiperProps, 'children'> {
    children?: ReactElement<CarouselSlideProps> | ReactElement<CarouselSlideProps>[];
}
interface CarouselSlideProps extends SwiperSlideProps {
}
declare function CarouselItem(props: CarouselItemProps): import("react/jsx-runtime").JSX.Element;
declare const Carousel: import("react").ForwardRefExoticComponent<CarouselProps & import("react").RefAttributes<import("swiper/react").SwiperRef>>;
export { Carousel, CarouselItem, type CarouselItemProps, type CarouselProps };

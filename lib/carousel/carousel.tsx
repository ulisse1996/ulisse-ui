import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css';

import type { CarouselItemProps } from '@ark-ui/react';
import type { ElementRef, ReactElement } from 'react';
import { Children, forwardRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperProps, SwiperSlideProps } from 'swiper/swiper-react';

interface CarouselProps extends Omit<SwiperProps, 'children'> {
  children?:
    | ReactElement<CarouselSlideProps>
    | ReactElement<CarouselSlideProps>[];
}

interface CarouselSlideProps extends SwiperSlideProps {}

function CarouselItem(props: CarouselItemProps) {
  return <SwiperSlide {...props} />;
}

const Carousel = forwardRef<ElementRef<typeof Swiper>, CarouselProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Swiper
        ref={ref}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        {...props}
        className={className}
      >
        {Children.map(children, (child, index) => (
          <SwiperSlide key={index} {...child?.props} />
        ))}
      </Swiper>
    );
  },
);

Carousel.displayName = 'Carousel';

export { Carousel, CarouselItem, type CarouselItemProps, type CarouselProps };

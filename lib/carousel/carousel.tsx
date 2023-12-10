import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HTMLAttributes, ReactElement } from 'react';
import { Children, cloneElement, forwardRef } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

import { cn } from '@/utils';

interface CarouselProps extends HTMLAttributes<HTMLOListElement> {
  children:
    | ReactElement<CarouselSlideProps>
    | ReactElement<CarouselSlideProps>[];
}

interface CarouselSlideProps extends HTMLAttributes<HTMLLIElement> {
  isSnapPoint?: boolean;
}

const CarouselSlide = forwardRef<HTMLLIElement, CarouselSlideProps>(
  ({ className, isSnapPoint, ...props }, ref) => {
    return (
      <li
        {...props}
        className={cn(
          'h-[250px] w-[250px] flex-shrink-0',
          { 'snap-start': isSnapPoint },
          className,
        )}
        ref={ref}
      />
    );
  },
);

CarouselSlide.displayName = 'CarouselSlide';

function Dots({
  activePage,
  onClick,
  pages,
}: {
  activePage: number;
  onClick: (index: number) => void;
  pages: number[][];
}) {
  return (
    <div
      className="mt-2 flex flex-wrap items-center justify-center"
      aria-hidden
    >
      {pages.map((_, i) => (
        <button
          aria-label={`Slide ${i + 1}`}
          type="button"
          key={i}
          className={cn('m-1 h-3 w-3 bg-gray-300 rounded-full', {
            'bg-primary': activePage === i,
          })}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, className, ...props }, ref) => {
    const {
      scrollRef,
      pages,
      activePageIndex,
      prev,
      next,
      goTo,
      snapPointIndexes,
    } = useSnapCarousel();
    return (
      <div ref={ref} className="relative">
        <ol
          {...props}
          className={cn(
            'relative flex overflow-auto snap-x snap-mandatory',
            className,
          )}
          ref={scrollRef}
        >
          {Children.map(children, (item, i) =>
            cloneElement(item, {
              ...item.props,
              isSnapPoint: snapPointIndexes.has(i),
            }),
          )}
        </ol>
        <button
          aria-label="next"
          type="button"
          className={cn(
            'h-6 w-6 rounded-full shadow-lg bg-card absolute top-1/2 left-2 -translate-y-1/2',
            {
              'opacity-30 cursor-not-allowed': activePageIndex <= 0,
            },
          )}
          onClick={() => prev()}
        >
          <ChevronLeft />
        </button>
        <Dots
          activePage={activePageIndex}
          onClick={(index) => goTo(index)}
          pages={pages}
        />
        <button
          aria-label="previous"
          type="button"
          className={cn(
            'h-6 w-6 rounded-full shadow-lg bg-card absolute top-1/2 right-2 -translate-y-1/2',
            {
              'opacity-30 cursor-not-allowed':
                activePageIndex === pages.length - 1,
            },
          )}
          onClick={() => next()}
        >
          <ChevronRight />
        </button>
      </div>
    );
  },
);

Carousel.displayName = 'Carousel';

export { Carousel, type CarouselProps, CarouselSlide, type CarouselSlideProps };

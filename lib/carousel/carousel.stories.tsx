import type { Meta, StoryObj } from '@storybook/react';

import { Carousel, CarouselSlide } from '@/carousel/carousel';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'Components/Carousel',
};

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => {
    return (
      <Carousel className="h-full w-full">
        {[...Array(10).keys()].map((el) => (
          <CarouselSlide className="h-[350px] w-full" key={el}>
            <img
              src={`https://source.unsplash.com/random/1280x720/?fruit&${el}`}
              alt={`${el}`}
            />
          </CarouselSlide>
        ))}
      </Carousel>
    );
  },
};

export const LotOfSlides: Story = {
  render: () => {
    return (
      <Carousel className="h-full w-full">
        {[...Array(40).keys()].map((el) => (
          <CarouselSlide className="w-full sm:h-[250px] md:h-[350px]" key={el}>
            <img
              className="w-full object-contain sm:h-full"
              src={`https://source.unsplash.com/random/1280x720/?fruit&${el}`}
              alt={`${el}`}
            />
          </CarouselSlide>
        ))}
      </Carousel>
    );
  },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import { Carousel, CarouselItem } from '@/carousel/carousel';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'Components/Carousel',
};

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => {
    return (
      <Carousel className="h-full w-full" slidesPerView={1}>
        {[...Array(10).keys()].map((el) => (
          <CarouselItem index={el} key={el}>
            <img
              src={`https://source.unsplash.com/random/1280x720/?fruit&${el}`}
              alt={`${el}`}
            />
          </CarouselItem>
        ))}
      </Carousel>
    );
  },
};

export default meta;

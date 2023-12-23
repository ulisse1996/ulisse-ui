import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '@unpic/react';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/sheet';

const meta: Meta<typeof Sheet> = {
  component: Sheet,
  title: 'Components/Sheet',
};

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="items-center">
          <SheetHeader>
            <SheetTitle>{`I'm a simple Sheet`}</SheetTitle>
          </SheetHeader>
          <Image
            src="https://source.unsplash.com/random/1280x720/?cat"
            alt="Fruit"
            layout="constrained"
            width={600}
            height={600}
            className="h-48 w-48 rounded-md"
          />
        </SheetContent>
      </Sheet>
    );
  },
};

export const WithScaledBackground: Story = {
  render: () => {
    return (
      <Sheet shouldScaleBackground>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="h-[96%]">
          <SheetHeader>
            <SheetTitle>{`I'm a simple Sheet`}</SheetTitle>
          </SheetHeader>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src="https://source.unsplash.com/random/1280x720/?cat"
              alt="Fruit"
              layout="constrained"
              width={600}
              height={600}
              className="h-96 w-96 rounded-md"
            />
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const WithSnapPoints: Story = {
  render: () => {
    const [snap, setSnap] = useState<number | string | null>('148px');

    return (
      <Sheet
        shouldScaleBackground
        snapPoints={['148px', '355px', 1]}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
      >
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="h-[96%]">
          <SheetHeader>
            <SheetTitle>{`I'm a simple Sheet`}</SheetTitle>
          </SheetHeader>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src="https://source.unsplash.com/random/1280x720/?cat"
              alt="Fruit"
              layout="constrained"
              width={600}
              height={600}
              className="h-96 w-96 rounded-md"
            />
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export default meta;

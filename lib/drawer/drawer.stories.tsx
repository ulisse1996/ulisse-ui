import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '@unpic/react';
import { Menu } from 'lucide-react';

import { Button } from '@/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/drawer';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Components/Drawer',
};

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="items-center" side="right">
          <DrawerHeader>
            <DrawerTitle>{`I'm a simple Drawer`}</DrawerTitle>
          </DrawerHeader>
          <Image
            src="https://source.unsplash.com/random/1280x720/?cat"
            alt="Fruit"
            layout="constrained"
            width={600}
            height={600}
            className="h-48 w-48 rounded-md"
          />
        </DrawerContent>
      </Drawer>
    );
  },
};

export const Left: Story = {
  render: () => {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="items-center" side="left">
          <DrawerHeader>
            <DrawerTitle>{`I'm a simple Drawer`}</DrawerTitle>
          </DrawerHeader>
          <Image
            src="https://source.unsplash.com/random/1280x720/?cat"
            alt="Fruit"
            layout="constrained"
            width={600}
            height={600}
            className="h-48 w-48 rounded-md"
          />
        </DrawerContent>
      </Drawer>
    );
  },
};

export default meta;

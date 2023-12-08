import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '@unpic/react';
import { Menu } from 'lucide-react';

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
  title: 'Components/Drawer',
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
        <SheetContent className="items-center" side="right">
          <SheetHeader>
            <SheetTitle>{`I'm a simple Drawer`}</SheetTitle>
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

export default meta;

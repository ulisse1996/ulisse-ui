import type { Meta, StoryObj } from '@storybook/react';

import { Popover, PopoverContent, PopoverTrigger } from './popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'Components/Popover',
};

type Story = StoryObj<typeof Popover>;

export const Standard: Story = {
  render: () => {
    return (
      <div className="mt-8 flex items-center justify-center">
        <Popover>
          <PopoverTrigger>
            <h2>Click me</h2>
          </PopoverTrigger>
          <PopoverContent>{`Hey I'm open now !`}</PopoverContent>
        </Popover>
      </div>
    );
  },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/Tooltip',
};

type Story = StoryObj<typeof TooltipContent>;

export default meta;

export const Default: Story = {
  render: () => {
    return (
      <div className="m-12">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="underline">Hover me</TooltipTrigger>
            <TooltipContent>{`I'm a tooltip`}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  },
};

export const FixedSide: Story = {
  args: {
    side: 'left',
  },
  argTypes: {
    side: {
      options: ['left', 'right', 'bottom', 'top'],
      control: { type: 'radio' },
    },
  },
  render: ({ side }) => {
    return (
      <div className="m-24">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="underline">Hover me</TooltipTrigger>
            <TooltipContent side={side}>{`I'm a tooltip`}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  },
};

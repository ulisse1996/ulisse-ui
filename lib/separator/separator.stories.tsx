import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from '@/separator';

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: 'Components/Separator',
};

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-2">
        <p>Text 1</p>
        <Separator />
        <div className="flex flex-row gap-2">
          <p>Text 2</p>
          <Separator orientation="vertical" className="h-auto" />
          <p>Text 3</p>
        </div>
      </div>
    );
  },
};

export default meta;

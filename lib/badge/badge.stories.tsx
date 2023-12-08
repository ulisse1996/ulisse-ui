import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@/avatar';
import { Badge } from '@/badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'success',
  },
  argTypes: {
    variant: {
      options: ['success', 'destructive'],
      control: { type: 'radio' },
    },
  },
  render: (props) => {
    return (
      <div className="relative">
        <Avatar className="rounded-md" alt="test" />
        <Badge {...props} className="-top-1 left-12" />
      </div>
    );
  },
};

export const Rounded: Story = {
  args: {
    variant: 'success',
  },
  argTypes: {
    variant: {
      options: ['success', 'destructive'],
      control: { type: 'radio' },
    },
  },
  render: (props) => {
    return (
      <div className="relative">
        <Avatar
          alt="cat"
          src="https://randompicturegenerator.com/img/cat-generator/g37b82da0af399ee430f5787f93289fa6bf0cee78a334568707574b938b0c2dd44c1e6505904a70b5cb55dbb1f3116639_640.jpg"
        />
        <Badge {...props} className="left-10 top-0.5" />
      </div>
    );
  },
};

export default meta;

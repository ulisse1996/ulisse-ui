import type { Meta, StoryObj } from '@storybook/react';
import { Phone } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};

type Story = StoryObj<typeof Button>;

const options = [
  'primary',
  'secondary',
  'destructive',
  'outline-primary',
  'outline-secondary',
  'outline-destructive',
  'flat',
] as const;

const BaseStory: Story = {
  args: {
    children: `Click me`,
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: {
      options,
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'icon'],
      control: { type: 'radio' },
    },
  },
  render: (props) => {
    return (
      <div className="flex flex-row gap-2">
        <Button {...props} />
      </div>
    );
  },
};

export const SimpleButton: Story = {
  ...BaseStory,
};

export const Disabled: Story = {
  ...BaseStory,
  args: {
    ...BaseStory.args,
    disabled: true,
  },
};

export const Loading: Story = {
  ...BaseStory,
  args: {
    ...BaseStory.args,
  },
  render: (props) => {
    const [isLoading, setLoading] = useState(false);
    return (
      <div className="flex flex-row gap-4">
        <Button
          onClick={() => setLoading(true)}
          {...props}
          isLoading={isLoading}
        />
        <Button onClick={() => setLoading((prev) => !prev)}>
          {`${!isLoading ? `Start` : `Stop`} loading`}
        </Button>
      </div>
    );
  },
};

export const Icon: Story = {
  ...BaseStory,
  args: {
    ...BaseStory.args,
    size: 'icon',
    children: <Phone size={24} />,
  },
};

export default meta;

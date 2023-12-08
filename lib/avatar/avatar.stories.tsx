import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '@unpic/react';

import { Avatar } from '@/avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Components/Avatar',
};

type Story = StoryObj<typeof Avatar>;

const standardArgs: Story = {
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

export const WithImage: Story = {
  ...standardArgs,
  render: (props) => {
    return (
      <Avatar
        src="https://randompicturegenerator.com/img/cat-generator/g37b82da0af399ee430f5787f93289fa6bf0cee78a334568707574b938b0c2dd44c1e6505904a70b5cb55dbb1f3116639_640.jpg"
        {...props}
        alt="test"
      />
    );
  },
};

export const WithFallback: Story = {
  ...standardArgs,
  render: (props) => {
    return <Avatar {...props} alt="test" />;
  },
};

export const WithFailedImage: Story = {
  ...standardArgs,
  render: (props) => {
    return <Avatar src="bad-url" {...props} alt="test" />;
  },
};

export const WithUnpic: Story = {
  ...standardArgs,
  render: (props) => {
    return (
      <Avatar
        as={Image}
        layout="constrained"
        width={400}
        height={300}
        src="https://cdn.shopify.com/static/sample-images/bath.jpeg"
        {...props}
        alt="test"
      />
    );
  },
};

export const CustomSize: Story = {
  ...standardArgs,
  render: (props) => {
    return (
      <Avatar
        as={Image}
        src="https://cdn.shopify.com/static/sample-images/bath.jpeg"
        className="h-24 w-24"
        {...props}
        layout="constrained"
        width={400}
        height={300}
        alt="test"
      />
    );
  },
};

export default meta;

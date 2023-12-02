import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDays, EuroIcon } from 'lucide-react';

import { Input } from '@/input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Form/Input',
};

type Story = StoryObj<typeof Input>;

export const WithLabel: Story = {
  args: {
    type: 'email',
  },
  render: (props) => {
    return <Input {...props} label="My Input" id="test-input" />;
  },
};

export const WithoutLabel: Story = {
  render: () => {
    return <Input aria-label="My Input" />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <Input placeholder="Insert some text" label="My Input" id="test-input" />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Input
        disabled
        placeholder="Insert some text"
        label="My Input"
        id="test-input"
      />
    );
  },
};

export const WithLeftIcon: Story = {
  render: () => {
    return (
      <Input
        leftComponent={<CalendarDays />}
        disabled
        placeholder="Insert some text"
        label="My Input"
        id="test-input"
        className="pl-10"
      />
    );
  },
};

export const WithRightIcon: Story = {
  render: () => {
    return (
      <Input
        rightComponent={<EuroIcon />}
        disabled
        placeholder="Insert some text"
        label="My Input"
        id="test-input"
        className="pr-10"
      />
    );
  },
};

export const FileInput: Story = {
  args: {
    type: 'file',
  },
  render: (props) => {
    return <Input {...props} label="My Input" id="test-input" />;
  },
};

export default meta;

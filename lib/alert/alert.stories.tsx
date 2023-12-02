import type { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertDescription, AlertTitle } from '@/alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Components/Alert',
};

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'warning', 'destructive'],
      control: { type: 'radio' },
    },
  },
  render: (props) => {
    return (
      <Alert {...props}>
        <AlertTitle>{`I'm a title`}</AlertTitle>
        <AlertDescription>{`I'm a big description for alert`}</AlertDescription>
      </Alert>
    );
  },
};

export default meta;

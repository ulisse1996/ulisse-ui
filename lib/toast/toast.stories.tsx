import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/button';
import { Toast, Toaster, useToast } from '@/toast';

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'Components/Toast',
};

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'warning', 'destructive', 'success'],
      control: { type: 'radio' },
    },
  },
  render: ({ variant }) => {
    const { toast } = useToast();

    const createToast = () => {
      toast({
        title: faker.finance.accountName(),
        description: 'Seems you found a long toast here !',
        variant,
      });
    };

    return (
      <>
        <Button onClick={createToast}>Create Toast</Button>
        <Toaster />
      </>
    );
  },
};

export default meta;

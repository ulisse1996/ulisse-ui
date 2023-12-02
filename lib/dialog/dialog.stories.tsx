import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/button';
import { Dialog, DialogContent, DialogTrigger } from '@/dialog';
import { Input } from '@/input';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Components/Dialog',
};

type Story = StoryObj<typeof DialogContent>;

export const Default: Story = {
  args: {},
  render: ({ ...props }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Sign In</Button>
        </DialogTrigger>
        <DialogContent
          {...props}
          className="flex flex-col items-center gap-4 py-4"
        >
          <h3 className="text-lg font-semibold">Login</h3>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Button>Sign In</Button>
        </DialogContent>
      </Dialog>
    );
  },
};

export default meta;

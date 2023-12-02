import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/dialog';

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: 'Components/Alert Dialog',
};

type Story = StoryObj<typeof AlertDialogContent>;

export const Default: Story = {
  args: {
    header: `Please review our changes`,
    description: faker.lorem.paragraph(3),
  },
  render: ({ header, description, ...props }) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Click me to open dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent
          {...props}
          header={header}
          description={description}
        >
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};

export const Destructive: Story = {
  args: {
    header: `Delete folder`,
    description:
      'Are you sure you want to delete "Documents"? All contents will be permanently destroyed.',
  },
  render: ({ header, description, ...props }) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent
          {...props}
          header={header}
          description={description}
        >
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Confirm</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};

export default meta;

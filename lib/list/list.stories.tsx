import type { Meta, StoryObj } from '@storybook/react';
import { Check } from 'lucide-react';

import { Card } from '@/card';
import { List, ListItem } from '@/list';

const meta: Meta<typeof List> = {
  component: List,
  title: 'Components/List',
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => {
    return (
      <Card className="w-48">
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
      </Card>
    );
  },
};

export const WithIcon: Story = {
  render: () => {
    return (
      <Card className="w-48">
        <List>
          <ListItem className="items-center justify-between">
            Item 1
            <Check />
          </ListItem>
          <ListItem className="justify-between">
            Item 2 <Check />
          </ListItem>
          <ListItem disabled className="justify-between">
            Item 3 <Check />
          </ListItem>
        </List>
      </Card>
    );
  },
};

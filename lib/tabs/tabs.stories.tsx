import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Components/Tabs',
};

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    return (
      <Tabs defaultValue="first">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="first">First</TabsTrigger>
          <TabsTrigger value="second">Second</TabsTrigger>
        </TabsList>
        <TabsContent value="first">
          <h3 className="text-lg font-semibold">First content</h3>
          <p>{faker.lorem.paragraph(3)}</p>
        </TabsContent>
        <TabsContent value="second">
          <h3 className="text-lg font-semibold">Second content</h3>
          <p>{faker.lorem.paragraph(3)}</p>
        </TabsContent>
      </Tabs>
    );
  },
};

export default meta;

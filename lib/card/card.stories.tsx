import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '@unpic/react';

import { Button } from '@/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
};

type Story = StoryObj<typeof Card>;

export default meta;

export const Default: Story = {
  render: () => {
    return (
      <div className="p-24">
        <Card>
          <CardHeader>
            <CardTitle>My Card Title</CardTitle>
            <CardDescription>Subtitle card</CardDescription>
          </CardHeader>
          <CardContent>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`}
          </CardContent>
          <CardFooter>
            <Button>Click me pls</Button>
          </CardFooter>
        </Card>
      </div>
    );
  },
};

export const ProductCard: Story = {
  render: () => {
    return (
      <div className="p-24">
        <Card>
          <Image
            className="mb-6 rounded-t-lg border-t"
            layout="constrained"
            width={600}
            height={400}
            src="https://cdn.shopify.com/static/sample-images/bath.jpeg"
          />
          <CardContent>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`}
          </CardContent>
          <CardFooter>
            <Button>Click me pls</Button>
          </CardFooter>
        </Card>
      </div>
    );
  },
};

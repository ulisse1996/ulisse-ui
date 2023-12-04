import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Rating } from '@/rating';

const meta: Meta<typeof Rating> = {
  component: Rating,
  title: 'Components/Rating',
};

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    count: 5,
    label: 'Rating',
    id: 'rating',
    value: 2,
  },
};

export const WithHalf: Story = {
  args: {
    allowHalf: true,
    count: 5,
    label: 'Rating',
    id: 'rating',
    value: 2.5,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    allowHalf: true,
    count: 5,
    label: 'Rating',
    id: 'rating',
    value: 2.5,
  },
};

export const Controlled: Story = {
  args: {
    count: 5,
    label: 'Rating',
    id: 'rating',
    value: 2,
  },
  render: (props) => {
    const [stars, setStars] = useState(3);
    return (
      <Rating
        {...props}
        value={stars}
        defaultValue={stars}
        onValueChange={(e) => setStars(e.value)}
      />
    );
  },
};

export default meta;

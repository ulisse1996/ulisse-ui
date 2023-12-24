import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Components/Typography',
};

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="p">Paragraph</Typography>
        <Typography variant="small">Small</Typography>
        <Typography variant="p" className="font-bold">
          Custom With Bold
        </Typography>
      </>
    );
  },
};

export default meta;

import type { CheckedState } from '@radix-ui/react-checkbox';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Checkbox } from '@/checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Form/Checkbox',
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    'aria-label': 'My Checkbox',
  },
};

export const WithLabel: Story = {
  args: {
    id: 'check',
    label: `My Checkbox`,
  },
};

export const Controlled: Story = {
  args: {
    id: 'check',
    label: `My Checkbox`,
  },
  render: (props) => {
    const [checked, setChecked] = useState<CheckedState>(false);
    return (
      <Checkbox {...props} checked={checked} onCheckedChange={setChecked} />
    );
  },
};

export const Disabled: Story = {
  args: {
    id: 'check',
    label: `My Checkbox`,
    disabled: true,
  },
};

export default meta;

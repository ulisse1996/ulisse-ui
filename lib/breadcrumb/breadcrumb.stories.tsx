import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb, BreadcrumbItem } from '@/breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  title: 'Components/Breadcrumb',
};

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => {
    return (
      <Breadcrumb>
        <BreadcrumbItem href="#">First Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Second Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Last Path</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Breadcrumb disabled>
        <BreadcrumbItem href="#">First Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Second Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Last Path</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};

export default meta;

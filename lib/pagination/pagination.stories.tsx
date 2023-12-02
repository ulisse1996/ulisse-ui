import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Pagination } from '@/pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Components/Pagination',
};

type Story = StoryObj<typeof Pagination>;

export const LessThanMaxPages: Story = {
  args: {
    currentPage: 3,
    pageSize: 5,
    total: 11,
    maxPages: 8,
  },
  render: (props) => {
    const [page, setPage] = useState(props.currentPage);

    const handlePageChange = (p: number) => {
      setPage(p);
    };

    return (
      <Pagination
        {...props}
        onPageChange={handlePageChange}
        currentPage={page}
      />
    );
  },
};

export const Default: Story = {
  args: {
    currentPage: 1,
    pageSize: 5,
    total: 50,
    maxPages: 8,
  },
  render: (props) => {
    const [page, setPage] = useState(props.currentPage);

    const handlePageChange = (p: number) => {
      setPage(p);
    };

    return (
      <Pagination
        {...props}
        onPageChange={handlePageChange}
        currentPage={page}
      />
    );
  },
};

export const LotsOfPages: Story = {
  args: {
    currentPage: 1,
    pageSize: 5,
    total: 500,
    maxPages: 8,
  },
  render: (props) => {
    const [page, setPage] = useState(props.currentPage);

    const handlePageChange = (p: number) => {
      setPage(p);
    };

    return (
      <Pagination
        {...props}
        onPageChange={handlePageChange}
        currentPage={page}
      />
    );
  },
};

export default meta;

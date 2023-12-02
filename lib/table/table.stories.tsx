import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Pagination } from '@/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/table';

interface Product {
  id: number;
  name: string;
  description: string;
  payedAmount: {
    currency: string;
    amount: number;
  };
}

const data: Product[] = [...Array(10)].map((_) => {
  const price = faker.commerce.price();
  return {
    id: faker.number.int(),
    name: faker.commerce.productName(),
    payedAmount: {
      currency: `$`,
      amount: Number(price),
    },
    description: faker.commerce.productDescription(),
  };
});

const paginatedData: Product[] = [...Array(100)].map((_) => {
  const price = faker.commerce.price();
  return {
    id: faker.number.int(),
    name: faker.commerce.productName(),
    payedAmount: {
      currency: `$`,
      amount: Number(price),
    },
    description: faker.commerce.productDescription(),
  };
});

const currency = `$`;
const total = data.reduce((curr, el) => {
  return curr + el.payedAmount.amount;
}, 0);
const totalPaginated = paginatedData.reduce((curr, el) => {
  return curr + el.payedAmount.amount;
}, 0);

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Components/Table',
};

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">{`${product.payedAmount.currency} ${product.payedAmount.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{`${currency} ${total}`}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

export const Paginated: Story = {
  render: () => {
    const [page, setPage] = useState(1);

    const pageData = paginatedData.slice((page - 1) * 8, page * 8);

    return (
      <div className="flex flex-col gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageData.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell className="text-right">{`${product.payedAmount.currency} ${product.payedAmount.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{`${currency}${totalPaginated}`}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex justify-end">
          <Pagination
            onPageChange={setPage}
            currentPage={page}
            total={paginatedData.length}
            pageSize={8}
            maxPages={8}
          />
        </div>
      </div>
    );
  },
};

export default meta;

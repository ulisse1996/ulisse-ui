import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Form/Select',
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {[...Array(10)].map(() => {
              const fruit = faker.color.human();
              return (
                <SelectItem key={fruit} value={fruit}>
                  {fruit}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <Select>
        <SelectTrigger id="color" label="Color" className="w-[180px]">
          <SelectValue placeholder="Select a color" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Colors</SelectLabel>
            {[...Array(4)].map(() => {
              const fruit = faker.color.human();
              return (
                <SelectItem key={fruit} value={fruit}>
                  {fruit}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
};

export const LongList: Story = {
  render: () => {
    return (
      <Select>
        <SelectTrigger id="color" label="Color" className="w-[180px]">
          <SelectValue placeholder="Select a color" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Names</SelectLabel>
            {[...Array(200)].map(() => {
              const name = faker.person.firstName();
              return (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
};

export default meta;

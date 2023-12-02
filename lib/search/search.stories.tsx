import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import { SearchField, useSearch } from '@/search';
import { SearchItem } from '@/search/search';

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  title: 'Form/Search',
};

interface Item {
  id: number;
  value: string;
}

type Story = StoryObj<typeof SearchField>;

function fetcher(): Promise<Item[]> {
  return Promise.resolve(
    [...Array(5)].map((_, i) => {
      return {
        id: i,
        value: faker.location.city(),
      };
    }),
  );
}

export const Default: Story = {
  args: {
    label: `Search flights`,
  },
  render: (props) => {
    const { query, results, search, isLoading } = useSearch<Item>({
      fetcher,
      delay: 3000,
      minChars: 3,
    });

    const handleSelection = (el: Item) => {
      search(el.value, true);
    };

    return (
      <SearchField
        {...props}
        id="search-flight"
        value={query}
        onChange={(q) => search(q)}
        loading={isLoading}
        empty="Please Enter 3 chars to start search"
      >
        {(results || []).map((el) => (
          <SearchItem key={el.id} onSelect={() => handleSelection(el)}>
            {el.value}
          </SearchItem>
        ))}
      </SearchField>
    );
  },
};

export default meta;

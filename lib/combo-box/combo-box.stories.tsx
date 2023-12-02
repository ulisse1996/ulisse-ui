import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import type { Item } from '@/combo-box';
import { ComboBox, start } from '@/combo-box';

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  title: 'Form/Combo Box',
};

type Story = StoryObj<typeof ComboBox>;

const items: Item[] = [...Array(100)].map((_, i) => {
  const name = faker.person.firstName();
  return {
    key: `${i}`,
    value: name,
    label: (
      <p>
        {faker.internet.emoji()} {name}
      </p>
    ),
  };
});

export const Default: Story = {
  render: () => {
    return <ComboBox label="My Combobox" id="combo" items={items} />;
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(``);
    return (
      <ComboBox
        filterFn={start}
        emptyLabel="Can't find valid option"
        value={value}
        onSelect={(item) => setValue(item.value)}
        label="My Combobox"
        id="combo"
        items={items}
      />
    );
  },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';
import {
  Camera,
  Dumbbell,
  Hotel,
  MenuIcon,
  Pencil,
  Settings,
  Trash2,
} from 'lucide-react';

import { Button } from '@/button';
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from '@/menu';

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: 'Components/Menu',
};

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => {
    return (
      <div className="p-12">
        <Menu>
          <MenuTrigger asChild>
            <Button variant="outline-primary" size="icon">
              <MenuIcon />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem>
              <Hotel size={16} />
              Hotel
            </MenuItem>
            <MenuItem disabled>
              <Camera size={16} />
              Item 2
            </MenuItem>
            <MenuItem>
              <Dumbbell size={16} />
              Item 3
            </MenuItem>
            <MenuSeparator />
            <MenuItem variant="destructive">
              <Trash2 size={16} />
              Delete
            </MenuItem>
          </MenuContent>
        </Menu>
      </div>
    );
  },
};

export const WithSubContent: Story = {
  render: () => {
    return (
      <div className="p-12">
        <Menu>
          <MenuTrigger asChild>
            <Button variant="outline-primary" size="icon">
              <MenuIcon />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem>
              <Hotel size={16} />
              Hotel
            </MenuItem>
            <MenuItem disabled>
              <Camera size={16} />
              Images
            </MenuItem>
            <MenuSub>
              <MenuSubTrigger>
                <Settings size={16} />
                Settings
                <MenuSubContent>
                  <MenuItem>
                    <Pencil size={16} />
                    Setting 1
                  </MenuItem>
                  <MenuItem>Setting 2</MenuItem>
                </MenuSubContent>
              </MenuSubTrigger>
            </MenuSub>
            <MenuSeparator />
            <MenuItem variant="destructive">
              <Trash2 size={16} />
              Delete
            </MenuItem>
          </MenuContent>
        </Menu>
      </div>
    );
  },
};

export default meta;

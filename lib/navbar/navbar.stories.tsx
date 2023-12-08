import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '@unpic/react';
import { Cat, Menu } from 'lucide-react';
import React from 'react';

import { Avatar } from '@/avatar';
import { Button } from '@/button';
import {
  Navbar,
  NavbarDesktop,
  NavbarLink,
  NavbarLinks,
  NavbarMobile,
} from '@/navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Layout/Navbar',
};

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => {
    return (
      <Navbar>
        <div className="flex flex-row items-center gap-2">
          <Cat />
          <h1 className="text-lg uppercase">Ulisse UI</h1>
        </div>
        <NavbarDesktop>
          <NavbarLinks className="hidden lg:flex">
            <NavbarLink href="#">Home</NavbarLink>
            <NavbarLink href="#">About</NavbarLink>
            <NavbarLink href="#">Privacy</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarLinks>
        </NavbarDesktop>
        <NavbarMobile>
          <Button variant="flat">
            <Menu />
          </Button>
        </NavbarMobile>
      </Navbar>
    );
  },
};

export const WithAvatar: Story = {
  render: () => {
    return (
      <Navbar className="bg-primary text-primary-foreground">
        <div className="flex flex-row items-center gap-2">
          <Cat />
          <h1 className="text-lg uppercase">Ulisse UI</h1>
        </div>
        <Avatar
          as={Image}
          layout="constrained"
          width={400}
          height={300}
          src="https://cdn.shopify.com/static/sample-images/bath.jpeg"
          alt="test"
          size="sm"
        />
      </Navbar>
    );
  },
};

export const Fixed: Story = {
  render: () => {
    return (
      <div>
        <Navbar className="sticky left-0 top-0 bg-primary text-primary-foreground">
          <div className="flex flex-row items-center gap-2">
            <Cat />
            <h1 className="text-lg uppercase">Ulisse UI</h1>
          </div>
          <Avatar
            as={Image}
            layout="constrained"
            width={400}
            height={300}
            src="https://cdn.shopify.com/static/sample-images/bath.jpeg"
            alt="test"
            size="sm"
          />
        </Navbar>
        <p>{faker.lorem.paragraph(300)}</p>
      </div>
    );
  },
};

export default meta;

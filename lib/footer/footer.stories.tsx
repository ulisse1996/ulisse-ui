import type { Meta, StoryObj } from '@storybook/react';
import { Cat } from 'lucide-react';

import {
  Footer,
  FooterElement,
  FooterLink,
  FooterLinks,
  FooterRights,
} from '@/footer';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Layout/Footer',
};

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => {
    return (
      <Footer>
        <FooterElement className="justify-between">
          <div className="flex flex-row items-center gap-2">
            <Cat />
            <h1 className="text-lg uppercase">Ulisse UI</h1>
          </div>
          <FooterLinks>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinks>
        </FooterElement>
        <FooterElement className="justify-center">
          <FooterRights>© 2023 Ulisse UI. All Rights Reserved</FooterRights>
        </FooterElement>
      </Footer>
    );
  },
};

export const OnlyLogo: Story = {
  render: () => {
    return (
      <Footer>
        <FooterElement>
          <div className="flex flex-row items-center gap-2">
            <Cat />
            <h1 className="text-lg uppercase">Ulisse UI</h1>
          </div>
        </FooterElement>
      </Footer>
    );
  },
};

export const OnlyLinks: Story = {
  render: () => {
    return (
      <Footer>
        <FooterElement className="justify-center">
          <FooterLinks>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinks>
        </FooterElement>
      </Footer>
    );
  },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';
import { ArrowUp, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

import { FloatingButton } from '@/floating-button/';
import { cn } from '@/utils';

const meta: Meta<typeof FloatingButton> = {
  component: FloatingButton,
  title: 'Components/Floating Button',
};

type Story = StoryObj<typeof FloatingButton>;

const options = [
  'primary',
  'secondary',
  'destructive',
  'outline-primary',
  'outline-secondary',
  'outline-destructive',
  'flat',
] as const;

const BaseStory: Story = {
  args: {
    children: `Click me`,
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: {
      options,
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'icon'],
      control: { type: 'radio' },
    },
  },
  render: (props) => {
    return (
      <div className="flex flex-row gap-2">
        <FloatingButton {...props} />
      </div>
    );
  },
};

export const SimpleButton: Story = {
  ...BaseStory,
};

export const LeftFloating: Story = {
  ...BaseStory,
  args: {
    ...BaseStory.args,
    side: 'left',
  },
};

export const Disabled: Story = {
  ...BaseStory,
  args: {
    ...BaseStory.args,
    disabled: true,
  },
};

export const Loading: Story = {
  ...BaseStory,
  args: {
    ...BaseStory.args,
  },
  render: (props) => {
    const [isLoading, setLoading] = useState(false);
    return (
      <div className="flex flex-row gap-4">
        <FloatingButton
          onClick={() => setLoading(true)}
          {...props}
          isLoading={isLoading}
        />
        <FloatingButton
          className="right-40"
          onClick={() => setLoading((prev) => !prev)}
        >
          {`${!isLoading ? `Start` : `Stop`} loading`}
        </FloatingButton>
      </div>
    );
  },
};

export const Icon: Story = {
  ...BaseStory,
  args: {
    ...BaseStory.args,
    size: 'icon',
    children: <Phone size={24} />,
  },
};

export const BackToTop: Story = {
  render: () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        setScrolled(
          document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300,
        );
      };

      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, []);

    return (
      <div className="h-[200vh]">
        <p>Scroll to bottom to show back to top</p>
        <FloatingButton
          className={cn({ hidden: !scrolled })}
          variant="flat"
          size="icon"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          <ArrowUp />
        </FloatingButton>
      </div>
    );
  },
};

export default meta;

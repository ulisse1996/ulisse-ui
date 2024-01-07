import type { ElementType, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import type { PolymorphicProps } from '@/utils';
import { cn } from '@/utils';

interface FooterProps extends HTMLAttributes<HTMLDetailsElement> {}

type FooterLinkProps<T extends ElementType = typeof defaultElement> =
  PolymorphicProps<T>;

interface FooterLinksProps extends HTMLAttributes<HTMLUListElement> {}

interface FooterRightsProps extends HTMLAttributes<HTMLParagraphElement> {}

interface FooterElementProps extends HTMLAttributes<HTMLDivElement> {}

const defaultElement = 'a';

function FooterRights(props: FooterRightsProps) {
  return (
    <div className="mt-4 flex w-full flex-col gap-4">
      <div className="border-[1px] border-gray-500" />
      <p {...props} className={cn('text-center', props.className)} />
    </div>
  );
}

function FooterLink<T extends ElementType = typeof defaultElement>({
  as,
  className,
  ...props
}: FooterLinkProps<T>) {
  const Comp = as || 'a';
  return (
    <li>
      <Comp {...props} className={cn('hover:text-primary', className)} />
    </li>
  );
}

function FooterLinks({ className, ...props }: FooterLinksProps) {
  return (
    <ul
      {...props}
      className={cn(
        'flex flex-wrap gap-4 items-center text-sm font-medium text-card-foreground',
        className,
      )}
    />
  );
}

function FooterElement({ className, ...props }: FooterElementProps) {
  return <div {...props} className={cn('flex flex-row w-full', className)} />;
}

const Footer = forwardRef<HTMLDetailsElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        {...props}
        className={cn('bg-card w-full shadow-md p-4', className)}
        ref={ref}
      />
    );
  },
);

Footer.displayName = 'Footer';

export {
  Footer,
  FooterElement,
  type FooterElementProps,
  FooterLink,
  type FooterLinkProps,
  FooterLinks,
  type FooterLinksProps,
  type FooterProps,
  FooterRights,
  type FooterRightsProps,
};

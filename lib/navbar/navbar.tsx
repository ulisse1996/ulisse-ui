import type { ElementType, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import type { PolymorphicProps } from '@/utils';
import { cn } from '@/utils';

interface NavbarProps extends HTMLAttributes<HTMLDetailsElement> {}

type NavbarLinkProps<T extends ElementType = typeof defaultElement> =
  PolymorphicProps<T>;

interface NavbarLinksProps extends HTMLAttributes<HTMLUListElement> {}

interface NavbarMobileProps extends HTMLAttributes<HTMLDivElement> {}

interface NavbarDesktopProps extends HTMLAttributes<HTMLDivElement> {}

const defaultElement = 'a';

function NavbarMobile(props: NavbarMobileProps) {
  return <div {...props} className={cn('flex lg:hidden', props.className)} />;
}

function NavbarDesktop(props: NavbarMobileProps) {
  return <div {...props} className={cn('lg:flex hidden', props.className)} />;
}

function NavbarLink<T extends ElementType = typeof defaultElement>({
  as,
  className,
  ...props
}: NavbarLinkProps<T>) {
  const Comp = as || 'a';
  return (
    <li>
      <Comp {...props} className={cn('hover:text-primary', className)} />
    </li>
  );
}

function NavbarLinks({ className, ...props }: NavbarLinksProps) {
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

const Navbar = forwardRef<HTMLDetailsElement, NavbarProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        {...props}
        ref={ref}
        className={cn(
          'bg-card shadow-md flex flex-row justify-between items-center gap-2 p-4 w-full',
          className,
        )}
      />
    );
  },
);

Navbar.displayName = 'Navbar';

export {
  Navbar,
  NavbarDesktop,
  type NavbarDesktopProps,
  NavbarLink,
  type NavbarLinkProps,
  NavbarLinks,
  type NavbarLinksProps,
  NavbarMobile,
  type NavbarMobileProps,
  type NavbarProps,
};

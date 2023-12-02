import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  KeyboardEvent,
  MouseEvent,
  OlHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
import { Children, cloneElement, forwardRef } from 'react';

import { cn } from '@/utils';

interface BreadcrumbProps
  extends Omit<
    DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>,
    'children'
  > {
  disabled?: boolean;
  children:
    | ReactElement<BreadcrumbItemProps>
    | ReactElement<BreadcrumbItemProps>[];
}

type BreadcrumbItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  last?: boolean;
  children: ReactNode;
  separator?: ReactNode;
  disabled?: boolean;
  index?: number;
};

const Breadcrumb = forwardRef<HTMLOListElement, BreadcrumbProps>(
  ({ children, disabled, className, ...props }, ref) => {
    const childCount = Children.count(children);

    return (
      <nav>
        <ol
          ref={ref}
          className={cn('flex flex-row gap-1', className)}
          {...props}
        >
          {Children.map(children, (child, i) =>
            cloneElement(child, {
              last: i === childCount - 1,
              disabled,
              index: i + 1,
            }),
          )}
        </ol>
      </nav>
    );
  },
);

function BreadcrumbItem({
  children,
  last,
  className,
  separator,
  disabled,
  index,
  ...props
}: BreadcrumbItemProps) {
  const itemSeparator = separator || (
    <span aria-hidden="true" style={{ padding: '0 5px' }}>
      ›
    </span>
  );

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  const handlePressUp = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (props.onKeyUp) {
      props.onKeyUp(e);
    }
  };

  const handlePressDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
  };

  return (
    <li>
      <a
        role="link"
        tabIndex={index || 0}
        onKeyUp={handlePressUp}
        onKeyDown={handlePressDown}
        onClick={handleClick}
        {...props}
        className={cn(
          'text-primary',
          { 'font-bold': last, underline: !last },
          disabled && 'cursor-not-allowed no-underline',
          disabled && !last && 'text-muted',
          className,
        )}
      >
        {children}
      </a>
      {!last && itemSeparator}
    </li>
  );
}

Breadcrumb.displayName = 'Breadcrumb';

export {
  Breadcrumb,
  BreadcrumbItem,
  type BreadcrumbItemProps,
  type BreadcrumbProps,
};

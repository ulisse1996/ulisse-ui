import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils';

interface TimelineProps extends HTMLAttributes<HTMLOListElement> {}

interface TimelineItemProps extends HTMLAttributes<HTMLLIElement> {
  icon?: ReactNode;
}

const Timeline = forwardRef<HTMLOListElement, TimelineProps>(
  ({ className, ...props }, ref) => {
    return (
      <ol
        className={cn('relative flex flex-col', className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Timeline.displayName = 'Timeline';

const TimelineItem = forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ className, children, icon, ...props }, ref) => {
    return (
      <li
        className={cn(
          'pb-10 px-4 py-2 h-full w-full border-l-4 border-secondary',
          className,
        )}
        ref={ref}
        {...props}
      >
        {icon || (
          <div className="absolute -start-1.5 mt-1.5 h-4 w-4 rounded-full border border-white bg-primary" />
        )}
        {children}
      </li>
    );
  },
);

TimelineItem.displayName = 'TimelineItem';

export { Timeline, TimelineItem, type TimelineItemProps, type TimelineProps };

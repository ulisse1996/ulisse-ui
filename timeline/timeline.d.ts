import type { HTMLAttributes, ReactNode } from 'react';
interface TimelineProps extends HTMLAttributes<HTMLOListElement> {
}
interface TimelineItemProps extends HTMLAttributes<HTMLLIElement> {
    icon?: ReactNode;
}
declare const Timeline: import("react").ForwardRefExoticComponent<TimelineProps & import("react").RefAttributes<HTMLOListElement>>;
declare const TimelineItem: import("react").ForwardRefExoticComponent<TimelineItemProps & import("react").RefAttributes<HTMLLIElement>>;
export { Timeline, TimelineItem, type TimelineItemProps, type TimelineProps };

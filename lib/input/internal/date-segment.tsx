import { useDateSegment } from '@react-aria/datepicker';
import type {
  DateFieldState,
  DateSegment as AriaDateSegment,
  TimeFieldState,
} from '@react-stately/datepicker';
import { useRef } from 'react';

import { cn } from '@/utils';

interface DateSegmentProps {
  segment: AriaDateSegment;
  state: TimeFieldState | DateFieldState;
}

function DateSegment({ segment, state }: DateSegmentProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        minWidth:
          segment.maxValue != null
            ? `${String(segment.maxValue).length}ch`
            : undefined,
      }}
      className={cn(
        'group box-content rounded-sm px-0.5 text-right tabular-nums outline-none focus:bg-primary focus:text-primary-foreground',
        !segment.isEditable && 'text-gray-500 opacity-50',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'block w-full text-center italic text-gray-500 group-focus:text-white pointer-events-none',
          !segment.isPlaceholder && 'hidden',
          !segment.isPlaceholder && 'h-0',
        )}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? '' : segment.text}
    </div>
  );
}

export { DateSegment, type DateSegmentProps };

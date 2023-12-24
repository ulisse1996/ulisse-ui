import type { HTMLAttributes } from 'react';
import {
  Children,
  cloneElement,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

import { cn } from '@/utils';

type StepperProps = HTMLAttributes<HTMLUListElement> & {
  orientation?: 'horizontal' | 'vertical';
  step: number;
};

type StepperItemProps = HTMLAttributes<HTMLLIElement> & {
  index?: number;
  last?: boolean;
};

const Stepper = forwardRef<HTMLUListElement, StepperProps>(
  (
    { step, className, children, orientation = 'horizontal', ...props },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [stepSize, setStepSize] = useState(0);
    const lastIndex = Children.count(children) - 1;

    const completeStyle =
      orientation === 'horizontal'
        ? {
            width: step === 0 ? 0 : `${stepSize}px`,
          }
        : {
            height: step === 0 ? 0 : `${stepSize}px`,
          };

    useEffect(() => {
      if (containerRef.current && step !== 0) {
        if (step === lastIndex) {
          const { width, height } =
            containerRef.current.getBoundingClientRect();
          if (orientation === `vertical`) {
            setStepSize(height);
          } else {
            setStepSize(width);
          }
        } else {
          let element = containerRef.current.querySelector(
            `[data-step='${step}']`,
          );
          if (!element) {
            // Workaround for asChild that remove custom data attribute
            const allElements = containerRef.current.querySelectorAll('li');
            if (allElements) {
              element = allElements.item(step);
            }
          }

          if (!element) {
            return;
          }

          const { x, y, height, width } = element.getBoundingClientRect();
          if (orientation === `vertical`) {
            setStepSize(y + height / 10);
          } else {
            setStepSize(x + width / 10);
          }
        }
      }
    }, [step, orientation]);

    return (
      <div
        ref={containerRef}
        className="relative flex h-full w-full items-center justify-between"
      >
        <div
          className={cn('absolute left-0 bg-gray-300', {
            'top-2/4 h-0.5 w-full -translate-y-2/4':
              orientation === 'horizontal',
            'h-full top-0 w-0.5 left-5': orientation === 'vertical',
          })}
        />
        <div
          style={completeStyle}
          className={cn(
            'absolute left-0 bg-primary transition-all duration-700',
            {
              'top-2/4 h-0.5 w-full -translate-y-2/4':
                orientation === 'horizontal',
              'h-full top-0 w-0.5 left-5': orientation === 'vertical',
            },
          )}
        />
        <ul
          role="navigation"
          data-orientation={orientation}
          className={cn(
            'flex justify-between group',
            orientation === `vertical` ? 'flex-col h-full' : 'flex-row w-full',
            className,
          )}
          {...props}
          ref={ref}
        >
          {Children.map(children, (child: any, index) =>
            cloneElement(child, {
              ...child.props,
              key: index,
              index,
              last: index === lastIndex,
            }),
          )}
        </ul>
      </div>
    );
  },
);

Stepper.displayName = 'Stepper';

const StepperItem = forwardRef<HTMLLIElement, StepperItemProps>(
  ({ index, last, className, ...props }, ref) => {
    return (
      <li
        {...props}
        className={cn(
          `inline-flex z-[3] items-center min-w-20 min-h-20`,
          { 'group-data-[orientation=horizontal]:justify-end': last },
          {
            'group-data-[orientation=horizontal]:justify-center':
              !last && index !== 0,
          },
          { 'group-data-[orientation=vertical]:items-start': index === 0 },
          { 'group-data-[orientation=vertical]:items-end': last },
          className,
        )}
        ref={ref}
      />
    );
  },
);

StepperItem.displayName = 'StepperItem';

export { Stepper, StepperItem, type StepperItemProps, type StepperProps };

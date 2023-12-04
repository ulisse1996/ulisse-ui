import type { RatingGroupProps } from '@ark-ui/react';
import { RatingGroup } from '@ark-ui/react';
import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { Label } from '@/label';

interface RatingProps extends RatingGroupProps {
  label?: string;
  halfIcon?: ReactNode;
  fullIcon?: ReactNode;
  emptyIcon?: ReactNode;
}

function HalfStar(props: HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
    </svg>
  );
}

function Star(props: HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
}

const Rating = forwardRef<HTMLDivElement, RatingProps>(
  ({ label, disabled, ...props }, ref) => {
    const { id } = props;
    const {
      halfIcon = (
        <HalfStar
          aria-disabled={disabled}
          className="fill-amber-400 stroke-transparent drop-shadow-sm"
        />
      ),
      fullIcon = (
        <Star
          aria-disabled={disabled}
          className="fill-amber-400 stroke-transparent drop-shadow-sm"
        />
      ),
      emptyIcon = (
        <Star
          aria-disabled={disabled}
          className="fill-amber-400/50 stroke-transparent drop-shadow-sm aria-[disabled=true]:fill-transparent"
        />
      ),
    } = props;
    return (
      <RatingGroup.Root
        className="grid w-full max-w-sm items-center gap-1.5"
        {...props}
        ref={ref}
      >
        {label && <Label htmlFor={id}>{label}</Label>}
        <RatingGroup.Control className="flex flex-row items-center gap-1">
          {({ items }) =>
            items.map((item) => (
              <RatingGroup.Item
                aria-disabled={disabled}
                key={item}
                index={item}
                className="!outline-none"
              >
                {({ isHalf, isHighlighted }) => {
                  if (isHalf) return halfIcon;
                  if (isHighlighted) return fullIcon;
                  return emptyIcon;
                }}
              </RatingGroup.Item>
            ))
          }
        </RatingGroup.Control>
      </RatingGroup.Root>
    );
  },
);

Rating.displayName = 'Rating';

export { Rating, type RatingProps };

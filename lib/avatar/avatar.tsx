import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type {
  ElementType,
  ForwardedRef,
  ForwardRefExoticComponent,
} from 'react';
import { forwardRef, useState } from 'react';

import type { PolymorphicProps } from '@/utils';
import { cn } from '@/utils';

const defaultElement = 'img';

const avatarVariants = cva(
  'relative box-border flex items-center justify-center overflow-hidden rounded-full bg-muted align-middle',
  {
    variants: {
      size: {
        sm: 'h-12 w-12',
        md: 'h-14 w-14',
        lg: 'h-16 w-16',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

type AvatarProps<E extends ElementType = typeof defaultElement> =
  PolymorphicProps<E> &
    VariantProps<typeof avatarVariants> & {
      alt: string;
      fallbackClassName?: string;
    };

function InternalAvatar<T extends ElementType = typeof defaultElement>(
  {
    as,
    src,
    size,
    className,
    alt,
    fallbackClassName,
    ...props
  }: AvatarProps<T>,
  ref: ForwardedRef<HTMLSpanElement>,
) {
  const Comp = as || 'img';
  const [showFallback, setShowFallback] = useState(typeof src === `undefined`);

  return (
    <span
      className={cn(avatarVariants({ size, className }))}
      tabIndex={-1}
      ref={ref}
    >
      {!showFallback && (
        <Comp
          {...props}
          onError={() => setShowFallback(true)}
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      )}
      {showFallback && (
        <p className={cn('uppercase text-black', fallbackClassName)}>
          {alt.charAt(0)}
        </p>
      )}
    </span>
  );
}

const Avatar = forwardRef(InternalAvatar) as <T extends ElementType>(
  props: AvatarProps<T> & { ref?: ForwardedRef<HTMLSpanElement> },
) => ReturnType<typeof InternalAvatar>;

(Avatar as ForwardRefExoticComponent<AvatarProps<any>>).displayName = 'Avatar';

export { Avatar, type AvatarProps };

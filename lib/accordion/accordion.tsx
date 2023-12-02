import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AccordionContent } from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  PropsWithoutRef,
} from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils';

type AccordionProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

interface AccordionItemProps
  extends PropsWithoutRef<AccordionPrimitive.AccordionItemProps> {
  title: string;
  subTitle?: string;
}

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, children, title, subTitle, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  >
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 font-medium text-primary transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
        <div className="flex flex-col items-start">
          <span className="font-semibold">{title}</span>
          {subTitle && (
            <span className="text-sm text-primary/70">{subTitle}</span>
          )}
        </div>
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
    <AccordionContent className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
      <div className="pb-4 pt-0">{children}</div>
    </AccordionContent>
  </AccordionPrimitive.Item>
));

AccordionItem.displayName = 'AccordionItem';

export {
  Accordion,
  AccordionItem,
  type AccordionItemProps,
  type AccordionProps,
};

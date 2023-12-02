import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentPropsWithoutRef, PropsWithoutRef } from 'react';
type AccordionProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;
interface AccordionItemProps extends PropsWithoutRef<AccordionPrimitive.AccordionItemProps> {
    title: string;
    subTitle?: string;
}
declare const Accordion: import("react").ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & import("react").RefAttributes<HTMLDivElement>>;
declare const AccordionItem: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionItem, type AccordionItemProps, type AccordionProps, };

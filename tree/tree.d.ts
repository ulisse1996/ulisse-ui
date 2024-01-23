import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { LucideProps } from 'lucide-react';
import type { ComponentPropsWithoutRef, PropsWithoutRef } from 'react';
type TreeLevelClasses = Record<number, string>;
declare const STANDARD_LEVELS: TreeLevelClasses;
type TreeProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    levelClasses?: TreeLevelClasses;
};
type TreeItemProps = PropsWithoutRef<AccordionPrimitive.AccordionItemProps>;
type TreeTriggerProps = PropsWithoutRef<AccordionPrimitive.AccordionTriggerProps>;
declare const Tree: import("react").ForwardRefExoticComponent<TreeProps & import("react").RefAttributes<HTMLDivElement>>;
declare const TreeTrigger: import("react").ForwardRefExoticComponent<AccordionPrimitive.AccordionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const TreeItem: import("react").ForwardRefExoticComponent<AccordionPrimitive.AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
declare function TreeTriggerIcon({ className, ...props }: LucideProps): import("react/jsx-runtime").JSX.Element;
export { STANDARD_LEVELS, Tree, TreeItem, type TreeItemProps, type TreeLevelClasses, type TreeProps, TreeTrigger, TreeTriggerIcon, type TreeTriggerProps, };

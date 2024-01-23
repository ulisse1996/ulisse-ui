import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { clsx } from 'clsx';
import type { LucideProps } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  PropsWithoutRef,
} from 'react';
import { createContext, forwardRef, useContext } from 'react';

type TreeLevelClasses = Record<number, string>;

const STANDARD_LEVELS: TreeLevelClasses = {
  1: 'pl-4',
  2: 'pl-8',
  3: 'pl-12',
  4: 'pl-16',
  5: 'pl-20',
  6: 'pl-24',
};

type TreeProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  levelClasses?: TreeLevelClasses;
};
type TreeItemProps = PropsWithoutRef<AccordionPrimitive.AccordionItemProps>;
type TreeTriggerProps =
  PropsWithoutRef<AccordionPrimitive.AccordionTriggerProps>;

const TreeContext = createContext<{
  level: number;
  levelClasses?: TreeLevelClasses;
}>({
  level: -1,
  levelClasses: undefined,
});

function useNextTreeLevel(customClasses: TreeLevelClasses) {
  const { level, levelClasses } = useContext(TreeContext);
  return {
    level: level + 1,
    levelClasses: levelClasses || customClasses,
  };
}

const Tree = forwardRef<ElementRef<typeof AccordionPrimitive.Root>, TreeProps>(
  ({ levelClasses = STANDARD_LEVELS, ...props }, ref) => {
    const treeState = useNextTreeLevel(levelClasses);

    if (treeState.level) {
      return (
        <AccordionPrimitive.Content
          className={clsx(
            'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
            treeState.levelClasses[treeState.level],
          )}
        >
          <TreeContext.Provider value={treeState}>
            <AccordionPrimitive.Root ref={ref} {...props} />
          </TreeContext.Provider>
        </AccordionPrimitive.Content>
      );
    }

    return (
      <TreeContext.Provider value={treeState}>
        <AccordionPrimitive.Root ref={ref} {...props} />
      </TreeContext.Provider>
    );
  },
);

const TreeTrigger = AccordionPrimitive.Trigger;

const TreeItem = AccordionPrimitive.Item;

function TreeTriggerIcon({ className, ...props }: LucideProps) {
  return (
    <ChevronDown
      className={clsx(
        'h-4 w-4 shrink-0 transition-transform duration-200',
        className,
      )}
      {...props}
    />
  );
}

export {
  STANDARD_LEVELS,
  Tree,
  TreeItem,
  type TreeItemProps,
  type TreeLevelClasses,
  type TreeProps,
  TreeTrigger,
  TreeTriggerIcon,
  type TreeTriggerProps,
};

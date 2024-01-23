import type { Meta, StoryObj } from '@storybook/react';
import { ArrowDownLeft, ArrowUpRight, Home, PieChart } from 'lucide-react';

import { Card } from '@/card';
import { ListItem } from '@/list';
import type { TreeLevelClasses } from '@/tree/tree';
import { Tree, TreeItem, TreeTrigger, TreeTriggerIcon } from '@/tree/tree';

const meta: Meta<typeof Tree> = {
  component: Tree,
  title: 'Components/Tree',
};

type Story = StoryObj<typeof Tree>;

export default meta;

const SimpleSelectionTree = ({
  type,
  levelClasses,
}: {
  type: 'single' | 'multiple';
  levelClasses?: TreeLevelClasses;
}) => {
  return (
    <Tree type={type} levelClasses={levelClasses} collapsible>
      <TreeItem value="first">
        <TreeTrigger className="flex items-center gap-2">
          First <TreeTriggerIcon />
        </TreeTrigger>
        <Tree type="multiple">
          <TreeItem value="first-1">First 1</TreeItem>
          <TreeItem value="first-2">First 2</TreeItem>
        </Tree>
      </TreeItem>
      <TreeItem value="second">
        <TreeTrigger className="flex items-center gap-2">
          Second <TreeTriggerIcon />
        </TreeTrigger>
        <Tree type="multiple">
          <TreeItem value="second-1">Second 1</TreeItem>
          <TreeItem value="second-2">Second 2</TreeItem>
        </Tree>
      </TreeItem>
    </Tree>
  );
};

const ComplexSelectionTree = ({
  type,
  levelClasses,
}: {
  type: 'single' | 'multiple';
  levelClasses?: TreeLevelClasses;
}) => {
  return (
    <Tree type={type} levelClasses={levelClasses} collapsible>
      <TreeItem value="first">
        <TreeTrigger className="flex items-center gap-2">
          First <TreeTriggerIcon />
        </TreeTrigger>
        <Tree type="multiple">
          <TreeItem value="first-1">
            <TreeTrigger className="flex items-center gap-2">
              First 1 <TreeTriggerIcon />
            </TreeTrigger>
            <Tree type="multiple">
              <TreeItem value="first-1-inner">First 1 Inner</TreeItem>
              <TreeItem value="first-2-inner">First 2 Inner</TreeItem>
            </Tree>
          </TreeItem>
          <TreeItem value="first-2">First 2</TreeItem>
        </Tree>
      </TreeItem>
      <TreeItem value="second">
        <TreeTrigger className="flex items-center gap-2">
          Second <TreeTriggerIcon />
        </TreeTrigger>
        <Tree type="multiple">
          <TreeItem value="second-1">Second 1</TreeItem>
          <TreeItem value="second-2">Second 2</TreeItem>
        </Tree>
      </TreeItem>
    </Tree>
  );
};

export const SingleSimpleSelectionTree: Story = {
  render: () => {
    return <SimpleSelectionTree type="single" />;
  },
};

export const CustomLevelClassesSimpleTree: Story = {
  render: () => {
    return (
      <SimpleSelectionTree
        type="single"
        levelClasses={{
          1: 'pl-8',
          2: 'pl-16',
          3: 'pl-24',
          4: 'pl-32',
          5: 'pl-40',
        }}
      />
    );
  },
};

export const MultipleSimpleSelectionTree: Story = {
  render: () => {
    return <SimpleSelectionTree type="multiple" />;
  },
};

export const SingleComplexSelectionTree: Story = {
  render: () => {
    return <ComplexSelectionTree type="single" />;
  },
};

export const CustomLevelClassesComplexTree: Story = {
  render: () => {
    return (
      <ComplexSelectionTree
        type="single"
        levelClasses={{
          1: 'pl-8',
          2: 'pl-16',
          3: 'pl-24',
          4: 'pl-32',
          5: 'pl-40',
        }}
      />
    );
  },
};

export const MultipleComplexSelectionTree: Story = {
  render: () => {
    return <ComplexSelectionTree type="multiple" />;
  },
};

export const SidebarMenu: Story = {
  render: () => {
    return (
      <Card className="h-svh max-w-56 p-2">
        <Tree type="single" collapsible>
          <TreeItem value="homepage">
            <ListItem>
              <Home />
              Homepage
            </ListItem>
          </TreeItem>
          <TreeItem className="py-2" value="reports">
            <TreeTrigger asChild className="flex items-center gap-2">
              <ListItem>
                <PieChart /> Reports <TreeTriggerIcon />
              </ListItem>
            </TreeTrigger>
            <Tree type="single" collapsible>
              <TreeItem className="pt-2" value="incomes">
                <ListItem>
                  <ArrowUpRight /> Incomes
                </ListItem>
              </TreeItem>
              <TreeItem className="pt-2" value="expenses">
                <ListItem>
                  <ArrowDownLeft />
                  Expenses
                </ListItem>
              </TreeItem>
            </Tree>
          </TreeItem>
        </Tree>
      </Card>
    );
  },
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ChevronRight,
  DollarSign,
  Presentation,
  Search,
  Users,
} from 'lucide-react';

import { Card } from '@/card';
import { Input } from '@/input';
import { List, ListItem } from '@/list';
import { Typography } from '@/typography';

const meta: Meta = {
  title: 'Layout/Sidebar',
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <Card className="flex h-svh max-w-64 flex-col gap-4 rounded-none p-4">
        <Typography variant="h5">My Company</Typography>
        <Input leftComponent={<Search />} />
        <List className="p-0">
          <Accordion type="single" collapsible>
            <AccordionItem value="dashboard">
              <AccordionTrigger asChild>
                <ListItem className="w-full justify-between">
                  <div className="flex items-center justify-start gap-4">
                    <Presentation size={16} /> Dashboard
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
                </ListItem>
              </AccordionTrigger>
              <AccordionContent className="w-full overflow-hidden py-2 text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <ListItem className="w-full gap-4">
                  <ChevronRight size={16} /> Report
                </ListItem>
                <ListItem className="w-full gap-4">
                  <ChevronRight size={16} /> Analytics
                </ListItem>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ListItem className="gap-4">
            <DollarSign size={16} /> Invoices
          </ListItem>
          <ListItem className="gap-4">
            <Users size={16} /> Users
          </ListItem>
        </List>
      </Card>
    );
  },
};

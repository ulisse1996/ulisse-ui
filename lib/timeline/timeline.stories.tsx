import { faker } from '@faker-js/faker';
import { useDateFormatter } from '@react-aria/i18n';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckIcon, X } from 'lucide-react';

import { Timeline, TimelineItem } from '@/timeline/';

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  title: 'Components/Timeline',
};

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => {
    return (
      <Timeline>
        <TimelineItem>
          <time className="mb-1 text-sm font-normal leading-none text-muted">
            February 2023
          </time>
          <h3 className="text-xl font-semibold">
            {faker.company.catchPhrase()}
          </h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
        <TimelineItem>
          <time className="mb-1 text-sm font-normal leading-none text-muted">
            August 2023
          </time>
          <h3 className="text-xl font-semibold">
            {faker.company.catchPhrase()}
          </h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
        <TimelineItem>
          <time className="mb-1 text-sm font-normal leading-none text-muted">
            December 2023
          </time>
          <h3 className="text-xl font-semibold">
            {faker.company.catchPhrase()}
          </h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
      </Timeline>
    );
  },
};

export const PackageTrack: Story = {
  render: () => {
    const formatter = useDateFormatter({
      dateStyle: 'medium',
      timeStyle: 'short',
    });
    const end = faker.date.recent();
    const middle = faker.date.past({ refDate: end });
    const start = faker.date.past({ refDate: middle });
    const confirmIcon = (
      <CheckIcon className="absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-green-500 text-white" />
    );

    const errorIcon = (
      <X className="absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-destructive text-destructive-foreground" />
    );

    const warningIcon = (
      <p className="absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-amber-500 text-center text-white">
        !
      </p>
    );

    return (
      <Timeline>
        <TimelineItem className="mt-2 border-green-500" icon={confirmIcon}>
          <time className="mb-2 text-sm font-normal leading-none text-muted">
            {formatter.format(start)}
          </time>
          <h3 className="text-xl font-semibold">Order received</h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
        <TimelineItem className="border-amber-500" icon={warningIcon}>
          <time className="mb-2 text-sm font-normal leading-none text-muted">
            {formatter.format(middle)}
          </time>
          <h3 className="text-xl font-semibold">Order sent to delivery</h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
        <TimelineItem className="border-destructive" icon={errorIcon}>
          <time className="mb-2 text-sm font-normal leading-none text-muted">
            {formatter.format(end)}
          </time>
          <h3 className="text-xl font-semibold">Order lost</h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
      </Timeline>
    );
  },
};

export default meta;

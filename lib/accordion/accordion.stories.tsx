import type { Meta, StoryObj } from '@storybook/react';

import { Accordion, AccordionItem } from '@/accordion';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
};

type Story = StoryObj<typeof Accordion>;

export default meta;

export const Default: Story = {
  render: () => {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem
          value="first"
          title="First Section"
          content="First Section"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in quam
          id erat semper lacinia id nec tortor. Praesent dignissim porttitor
          libero, sed iaculis enim facilisis ac. Donec vestibulum feugiat
          consequat. Proin interdum ipsum sed quam dictum, finibus blandit nulla
          vehicula. Cras dictum et lectus quis tincidunt. Etiam eu odio nulla.
          Cras ac neque nec enim malesuada lobortis. Phasellus dapibus mattis
          ante, non faucibus odio viverra at. Aliquam varius finibus sapien, et
          pharetra quam scelerisque at. Maecenas tempus felis sit amet finibus
          iaculis. Maecenas vulputate pellentesque pulvinar. Nulla commodo
          tempus lacus. Duis sed risus pharetra, eleifend lacus nec, condimentum
          ipsum. Nunc ullamcorper diam ac posuere malesuada.
        </AccordionItem>
        <AccordionItem
          value="second"
          title="Second Section"
          content="Second Section"
        >
          Donec nec facilisis nulla. Duis id nisl consequat, imperdiet nunc sit
          amet, efficitur neque. Integer vel malesuada turpis, eget volutpat
          enim. Sed ornare turpis at orci varius tempor. Nulla risus lorem,
          luctus non accumsan quis, faucibus eu diam. Nam vel suscipit dolor,
          eget hendrerit turpis. Proin consequat eleifend imperdiet.
        </AccordionItem>
        <AccordionItem
          value="third"
          title="Third Section"
          content="Third Section"
        >
          Curabitur efficitur sodales nunc, at rutrum mauris tincidunt sit amet.
          Pellentesque ut quam et dui facilisis fringilla. Cras maximus sodales
          interdum. Integer consectetur nunc vitae erat congue tincidunt.
          Praesent imperdiet, dui non dictum pulvinar, lacus magna feugiat ante,
          eu molestie lacus est id nunc. Phasellus nisi tellus, eleifend quis
          sagittis quis, consequat non velit. Suspendisse vel ligula porttitor
          purus pulvinar pretium vel quis risus. Sed vestibulum suscipit metus,
          a consectetur quam consequat a. Aliquam fringilla ornare enim, vel
          semper eros interdum ut. Fusce porttitor consequat laoreet.
        </AccordionItem>
      </Accordion>
    );
  },
};

export const WithSubtitle: Story = {
  render: () => {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem
          value="first"
          title="First Section"
          subTitle="First subtitle"
          content="First Section"
        >
          First Section
        </AccordionItem>
        <AccordionItem
          value="second"
          title="Second Section"
          subTitle="Second subtitle"
          content="Second Section"
        >
          Second Section
        </AccordionItem>
        <AccordionItem
          value="third"
          title="Third Section"
          subTitle="Third subtitle"
          content="Third Section"
        >
          Third section
        </AccordionItem>
      </Accordion>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    return (
      <Accordion type="multiple">
        <AccordionItem
          value="first"
          title="First Section"
          content="First Section"
        >
          First Section
        </AccordionItem>
        <AccordionItem
          value="second"
          title="Second Section"
          content="Second Section"
        >
          Second Section
        </AccordionItem>
        <AccordionItem
          value="third"
          title="Third Section"
          content="Third Section"
        >
          Third section
        </AccordionItem>
      </Accordion>
    );
  },
};

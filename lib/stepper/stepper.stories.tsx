import type { Meta, StoryObj } from '@storybook/react';
import { Check, Hotel, Menu, Phone, Star } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/button';
import { Stepper, StepperItem } from '@/stepper';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/tooltip';

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: 'Components/Stepper',
};

type Story = StoryObj<typeof Stepper>;

export const Horizontal: Story = {
  render: () => {
    const maxSteps = 2;
    const [step, setStep] = useState(0);

    const handleNext = () => {
      if (step === maxSteps) {
        return;
      }
      setStep((prev) => prev + 1);
    };

    const handlePrevious = () => {
      if (step === 0) {
        return;
      }
      setStep((prev) => prev - 1);
    };

    return (
      <div className="flex w-full flex-col gap-2">
        <Stepper step={step}>
          <StepperItem>
            <Button size="icon" variant={step >= 0 ? 'primary' : 'flat'}>
              <Hotel />
            </Button>
          </StepperItem>
          <StepperItem>
            <Button size="icon" variant={step >= 1 ? 'primary' : 'flat'}>
              <Star />
            </Button>
          </StepperItem>
          <StepperItem>
            <Button size="icon" variant={step >= 2 ? 'primary' : 'flat'}>
              <Phone />
            </Button>
          </StepperItem>
        </Stepper>
        <div className="flex flex-row justify-between">
          <Button disabled={step === 0} onClick={handlePrevious}>
            Previous
          </Button>
          <Button disabled={step === maxSteps} onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const maxSteps = 4;
    const [step, setStep] = useState(0);

    const handleNext = () => {
      if (step === maxSteps) {
        return;
      }
      setStep((prev) => prev + 1);
    };

    const handlePrevious = () => {
      if (step === 0) {
        return;
      }
      setStep((prev) => prev - 1);
    };

    return (
      <div className="flex flex-col gap-4">
        <div className="h-[80vh]">
          <Stepper step={step} orientation="vertical">
            <StepperItem>
              <Button size="icon" variant={step >= 0 ? 'primary' : 'flat'}>
                <Hotel />
              </Button>
            </StepperItem>
            <StepperItem>
              <Button size="icon" variant={step >= 1 ? 'primary' : 'flat'}>
                <Star />
              </Button>
            </StepperItem>
            <StepperItem>
              <Button size="icon" variant={step >= 2 ? 'primary' : 'flat'}>
                <Phone />
              </Button>
            </StepperItem>
            <StepperItem>
              <Button size="icon" variant={step >= 3 ? 'primary' : 'flat'}>
                <Menu />
              </Button>
            </StepperItem>
            <StepperItem>
              <Button size="icon" variant={step >= 4 ? 'primary' : 'flat'}>
                <Check />
              </Button>
            </StepperItem>
          </Stepper>
        </div>
        <div className="flex flex-row justify-between">
          <Button disabled={step === 0} onClick={handlePrevious}>
            Previous
          </Button>
          <Button disabled={step === maxSteps} onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    );
  },
};

export const WithLabelsAndTooltip: Story = {
  render: () => {
    const maxSteps = 2;
    const [step, setStep] = useState(0);

    const handleNext = () => {
      if (step === maxSteps) {
        return;
      }
      setStep((prev) => prev + 1);
    };

    const handlePrevious = () => {
      if (step === 0) {
        return;
      }
      setStep((prev) => prev - 1);
    };

    return (
      <div className="flex w-full flex-col gap-8">
        <Stepper step={step}>
          <StepperItem>
            <Button size="icon" variant={step >= 0 ? 'primary' : 'flat'}>
              <Hotel />
            </Button>
            <span className="absolute bottom-[-0.5rem] text-center">
              Step 1
            </span>
          </StepperItem>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <StepperItem>
                  <Button size="icon" variant={step >= 1 ? 'primary' : 'flat'}>
                    <Star />
                  </Button>
                  <span className="absolute bottom-[-0.5rem] text-center">
                    Step 2
                  </span>
                </StepperItem>
              </TooltipTrigger>
              <TooltipContent>Hello From Tooltip</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <StepperItem>
            <Button size="icon" variant={step >= 2 ? 'primary' : 'flat'}>
              <Phone />
            </Button>
            <span className="absolute bottom-[-0.5rem] text-center">
              Step 3
            </span>
            <div className="absolute top-5 h-3 w-3 rounded-full border-2 border-white bg-amber-500 text-center" />
          </StepperItem>
        </Stepper>
        <div className="flex flex-row justify-between">
          <Button disabled={step === 0} onClick={handlePrevious}>
            Previous
          </Button>
          <Button disabled={step === maxSteps} onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    );
  },
};

export default meta;

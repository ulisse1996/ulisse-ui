import type { TagsInputProps } from '@ark-ui/react';
import { TagsInput } from '@ark-ui/react';
import { forwardRef } from 'react';

import { Button } from '@/button';
import { Label } from '@/label';

interface TagsProps extends TagsInputProps {
  label?: string;
  clearLabel: string;
}

const Tags = forwardRef<HTMLInputElement, TagsProps>(
  ({ label, clearLabel, ...props }, ref) => {
    const { id, placeholder } = props;
    return (
      <TagsInput.Root {...props} ref={ref}>
        {(api) => (
          <>
            {label && (
              <Label htmlFor={`tags-input:${id}:hidden-input`}>{label}</Label>
            )}
            <TagsInput.Control className="border-input pointer-events-none mt-1.5 rounded-md border bg-background py-2 pe-1 ps-1 text-sm ring-offset-background hover:outline-none hover:ring-1 hover:ring-primary hover:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
              {api.value.map((value, index) => (
                <TagsInput.Item
                  className="pointer-events-auto m-1 inline-flex gap-1.5 rounded-lg bg-secondary/70 p-2 text-secondary-foreground"
                  key={index}
                  index={index}
                  value={value}
                >
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger className="text-card-foreground/60">
                    X
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
              <TagsInput.Input
                className="pointer-events-auto px-2 outline-none"
                placeholder={placeholder}
              />
            </TagsInput.Control>
            {api.value.length > 0 && (
              <TagsInput.ClearTrigger
                className="mt-1.5 flex flex-row justify-start"
                asChild
              >
                <Button variant="outline-primary">{clearLabel}</Button>
              </TagsInput.ClearTrigger>
            )}
          </>
        )}
      </TagsInput.Root>
    );
  },
);

Tags.displayName = 'Tags';

export { Tags, type TagsProps };

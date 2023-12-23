import type { TagsInputProps } from '@ark-ui/react';
interface TagsProps extends TagsInputProps {
    label?: string;
    clearLabel: string;
}
declare const Tags: import("react").ForwardRefExoticComponent<TagsProps & import("react").RefAttributes<HTMLInputElement>>;
export { Tags, type TagsProps };

import type { TextareaHTMLAttributes } from 'react';
import type { WithRequiredProperty } from '../utils';
interface TextareaWithLabel extends WithRequiredProperty<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
    label: string;
}
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> | TextareaWithLabel;
declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export { Textarea, type TextareaProps };

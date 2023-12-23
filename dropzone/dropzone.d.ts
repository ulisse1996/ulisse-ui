import type { InputProps } from '../input';
interface DropzoneProps extends Omit<InputProps, 'type'> {
    subTitle?: string;
    maxSize?: number;
}
declare const Dropzone: import("react").ForwardRefExoticComponent<DropzoneProps & import("react").RefAttributes<HTMLInputElement>>;
export { Dropzone, type DropzoneProps };

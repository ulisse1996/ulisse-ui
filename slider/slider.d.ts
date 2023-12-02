import * as SliderPrimitive from '@radix-ui/react-slider';
interface SliderProps extends SliderPrimitive.SliderProps {
    label?: string;
}
declare const Slider: import("react").ForwardRefExoticComponent<SliderProps & import("react").RefAttributes<HTMLSpanElement>>;
export { Slider, type SliderProps };

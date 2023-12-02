import type { DateFieldState, DateSegment as AriaDateSegment, TimeFieldState } from '@react-stately/datepicker';
interface DateSegmentProps {
    segment: AriaDateSegment;
    state: TimeFieldState | DateFieldState;
}
declare function DateSegment({ segment, state }: DateSegmentProps): import("react/jsx-runtime").JSX.Element;
export { DateSegment, type DateSegmentProps };

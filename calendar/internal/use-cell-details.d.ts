import type { CalendarCellAria, DateValue } from '@react-aria/calendar';
import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import type { ReactNode } from 'react';
export declare function useCellDetails(state: CalendarState | RangeCalendarState, { isSelected, isDisabled, formattedDate }: CalendarCellAria, date: DateValue, isFocusVisible: boolean): {
    className: string;
    component: ReactNode;
};

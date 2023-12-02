import { getDayOfWeek, isSameDay } from '@internationalized/date';
import type { CalendarCellAria, DateValue } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import type {
  CalendarState,
  RangeCalendarState,
} from '@react-stately/calendar';
import type { ReactNode } from 'react';

import { cn } from '@/utils';

export function useCellDetails(
  state: CalendarState | RangeCalendarState,
  { isSelected, isDisabled, formattedDate }: CalendarCellAria,
  date: DateValue,
  isFocusVisible: boolean,
): { className: string; component: ReactNode } {
  const isRanged = 'highlightedRange' in state;
  const { locale } = useLocale();
  if (isRanged) {
    const dayOfWeek = getDayOfWeek(date, locale);
    const isSelectionStart = state.highlightedRange
      ? isSameDay(date, state.highlightedRange.start)
      : isSelected;
    const isSelectionEnd = state.highlightedRange
      ? isSameDay(date, state.highlightedRange.end)
      : isSelected;
    const isRoundedLeft =
      isSelected && (isSelectionStart || dayOfWeek === 0 || date.day === 1);
    const isRoundedRight =
      isSelected &&
      (isSelectionEnd ||
        dayOfWeek === 6 ||
        date.day === date.calendar.getDaysInMonth(date));

    return {
      className: cn(
        'w-10 h-10 outline-none group',
        { 'rounded-l-full': isRoundedLeft },
        { 'rounded-r-full': isRoundedRight },
        { 'bg-primary/70 text-primary-foreground': isSelected },
        { disabled: isDisabled },
      ),
      component: (
        <div
          className={cn(
            'flex h-full w-full items-center justify-center rounded-full cursor-default',
            { 'text-gray-400 cursor-not-allowed': isDisabled },
            { 'ring-2 ring-primary/10 ring-offset-2': isFocusVisible },
            {
              'bg-primary text-primary-foreground':
                isSelectionStart || isSelectionEnd,
            },
            {
              'hover:bg-primary/80':
                isSelected && !(isSelectionStart || isSelectionEnd),
            },
            { 'hover:bg-primary/10': !isSelected && !isDisabled },
          )}
        >
          {formattedDate}
        </div>
      ),
    };
  }
  return {
    className: cn(
      'w-10 h-10 outline-none group',
      { 'bg-primary text-primary-foreground rounded-full': isSelected },
      { disabled: isDisabled },
    ),
    component: (
      <div
        className={cn(
          'flex h-full w-full items-center justify-center rounded-full cursor-default',
          { 'text-gray-400 cursor-not-allowed': isDisabled },
          { 'ring-2 ring-primary ring-offset-2': isFocusVisible },
          {
            'hover:bg-primary hover:text-primary-foreground':
              !isSelected && !isDisabled,
          },
        )}
      >
        {formattedDate}
      </div>
    ),
  };
}

'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { useDate, useTheme } from '@/contexts';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(`p-3`, className)}
      classNames={{
        months: `flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0`,
        month: `space-y-4`,
        caption: `flex justify-center pt-1 relative items-center`,
        caption_label: `text-sm font-medium`,
        nav: `space-x-1 flex items-center`,
        nav_button: cn(
          `h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100`,
        ),
        nav_button_previous: `absolute left-1`,
        nav_button_next: `absolute right-1`,
        table: `w-full border-collapse space-y-1`,
        head_row: `flex`,
        head_cell: `text-slate-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-slate-400`,
        row: `flex w-full mt-2`,
        cell: `h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-slate-800/50 dark:[&:has([aria-selected])]:bg-slate-800`,
        day: cn(`h-9 w-9 p-0 font-normal aria-selected:opacity-100`),
        day_range_end: `day-range-end`,
        day_selected: `bg-slate-900 text-slate-50 hover:bg-slate-900 hover:text-slate-50 focus:bg-slate-900 focus:text-slate-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50 dark:hover:text-slate-900 dark:focus:bg-slate-50 dark:focus:text-slate-900`,
        day_today: `bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50`,
        day_outside: `day-outside text-slate-500 opacity-50 aria-selected:bg-slate-100/50 aria-selected:text-slate-500 aria-selected:opacity-30 dark:text-slate-400 dark:aria-selected:bg-slate-800/50 dark:aria-selected:text-slate-400`,
        day_disabled: `text-slate-500 opacity-50 dark:text-slate-400`,
        day_range_middle: `aria-selected:bg-slate-100 aria-selected:text-slate-900 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50`,
        day_hidden: `invisible`,
        ...classNames,
      }}
      components={{
        IconLeft: () => {
          return <ChevronLeft className='h-8 w-8' />;
        },
        IconRight: () => {
          return <ChevronRight className='h-8 w-8' />;
        },
      }}
      {...props}
    />
  );
};
Calendar.displayName = `Calendar`;

type Calendar = {
  className?: string;
  value: string;
  onChangeValue: (date: string) => void;
};

const Component = ({ className, value, onChangeValue }: Calendar) => {
  const date = useDate();
  const theme = useTheme();

  return (
    <Calendar
      className={className}
      mode='single'
      selected={date.convert(value).toDate()}
      onSelect={(selectedDate) => {
        onChangeValue(date.format(selectedDate, `YYYY-MM-DD`));
      }}
      classNames={{
        months: `flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 h-full w-full`,
        month: `space-y-4 w-full flex flex-col`,
        caption: `flex grow justify-center pt-1 relative items-center`,
        caption_label: `font-bold text-xl`,
        table: `flex flex-col grow w-full border-collapse space-y-1`,
        head: `grow`,
        head_row: `flex justify-between`,
        head_cell: `rounded-md w-9 font-semibold text-lg`,
        tbody: `flex flex-col justify-between grow`,
        row: `flex w-full mt-1 justify-between`,
        day: cn(`h-9 w-9 p-0 font-semibold text-lg aria-selected:opacity-100`),
      }}
      styles={{
        head_cell: { color: theme.colors.primary },
        cell: { backgroundColor: theme.colors.secondary },
      }}
      modifiersStyles={{
        selected: {
          backgroundColor: theme.colors.primary,
          color: theme.colors.onPrimary,
          fontWeight: 700,
          borderRadius: 99999,
        },
        today: {
          borderRadius: 99999,
        },
      }}
    />
  );
};

export { Component };

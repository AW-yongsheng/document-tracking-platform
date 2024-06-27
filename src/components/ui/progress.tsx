'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts';

type ProgressBar = {
  classNameBar?: string;
  styleBar?: React.CSSProperties;
};

const Component = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & ProgressBar
>(({ classNameBar, styleBar, className, value, ...props }, ref) => {
  const theme = useTheme();

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        `relative h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800`,
        className,
      )}
      style={{ backgroundColor: theme.colors.text1 }}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          `h-full w-full flex-1 rounded-full bg-slate-900 transition-all dark:bg-slate-50`,
          classNameBar,
        )}
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          backgroundColor: theme.colors.primary,
          ...styleBar,
        }}
      />
    </ProgressPrimitive.Root>
  );
});

Component.displayName = ProgressPrimitive.Root.displayName;

export { Component };

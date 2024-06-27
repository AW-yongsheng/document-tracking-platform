'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from 'lib/utils';
import { useTheme } from '@/contexts';

type Slider = {
  className?: string;
  classNameTrack?: string;
  classNameRangeThumb?: string;
  styleTrack?: React.CSSProperties;
  styleRange?: React.CSSProperties;
  styleRangeThumb?: React.CSSProperties;
  value: string;
  step?: string;
  onChangeValue?: (value: string) => void;
  isDisabled?: boolean;
  minValue?: number;
  maxValue?: number;
};

const Component = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  Slider
>(
  (
    {
      className,
      classNameTrack,
      classNameRangeThumb,
      styleTrack,
      styleRange,
      styleRangeThumb,
      value,
      step = `1`,
      onChangeValue,
      isDisabled,
      minValue = 0,
      maxValue = 100,
    },
    ref,
  ) => {
    const theme = useTheme();

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          `relative flex w-full touch-none select-none items-center`,
          className,
        )}
        value={[parseFloat(value || `0`)]}
        step={parseFloat(step)}
        onValueChange={(value) => {
          return onChangeValue?.(`${value[0]}`);
        }}
        disabled={isDisabled}
        min={minValue}
        max={maxValue}
      >
        <SliderPrimitive.Track
          className={cn(
            `bg-secondary relative h-3 w-full grow overflow-hidden rounded-full`,
            classNameTrack,
          )}
          style={{ backgroundColor: theme.colors.onPrimary, ...styleTrack }}
        >
          <SliderPrimitive.Range
            className={cn(`bg-primary absolute h-full`)}
            style={{ backgroundColor: theme.colors.primary, ...styleRange }}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={cn(
            `border-primary bg-background ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
            classNameRangeThumb,
          )}
          style={{ backgroundColor: theme.colors.primary, ...styleRangeThumb }}
        />
      </SliderPrimitive.Root>
    );
  },
);

Component.displayName = SliderPrimitive.Root.displayName;

export { Component };

'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';
import { Label } from '..';
import { useTheme } from '@/contexts';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(`grid gap-2`, className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    isDisabled?: boolean;
  }
>(({ className, isDisabled, ...props }, ref) => {
  const theme = useTheme();

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        `aspect-square h-5 w-5 rounded-full border outline-none`,
        className,
      )}
      style={{
        borderColor: theme.colors.secondary,
        ...(isDisabled && {
          borderColor: theme.colors.masked,
        }),
      }}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
        <div
          className={`h-2.5 w-2.5 rounded-full`}
          style={{
            backgroundColor: theme.colors.primary,
            ...(isDisabled && {
              backgroundColor: theme.colors.masked,
            }),
          }}
        ></div>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

type RadioButton = {
  className?: string;
  value: boolean;
  onChangeValue?: (value: boolean) => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
};

const Component = ({
  className,
  value,
  onChangeValue,
  children,
  isDisabled,
}: RadioButton) => {
  return (
    <RadioGroup>
      <div className={cn(`flex items-center gap-2`, className)}>
        <RadioGroupItem
          value='default'
          id='r1'
          onClick={() => {
            if (!isDisabled) {
              onChangeValue?.(!value);
            }
          }}
          checked={value}
          isDisabled={isDisabled}
        />
        <Label className={`font-normal`} htmlFor='r1' value={children} />
      </div>
    </RadioGroup>
  );
};

export { Component };

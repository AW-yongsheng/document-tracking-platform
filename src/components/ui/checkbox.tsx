'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, style, checked, onCheckedChange, disabled }, ref) => {
  const theme = useTheme();

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(`peer mt-1 h-4 w-4 shrink-0 rounded-sm`, className)}
      style={{
        borderWidth: 1,
        borderColor: theme.colors.secondary,
        ...(checked && {
          backgroundColor: theme.colors.primary,
          color: theme.colors.onPrimary,
        }),
        ...style,
      }}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
    >
      <CheckboxPrimitive.Indicator
        className={cn(`flex items-center justify-center text-current`)}
      >
        <Check className='h-4 w-4' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

type CheckBox = {
  className?: string;
  style?: React.CSSProperties;
  value: boolean;
  onChangeValue?: (value: boolean) => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isRounded?: boolean;
};

const Component = ({
  className,
  style,
  children,
  value,
  onChangeValue,
  isDisabled,
  isRounded,
}: CheckBox) => {
  const theme = useTheme();

  return (
    <div className={cn(`flex gap-2`, className)}>
      <Checkbox
        className={isRounded ? `rounded-md` : ``}
        style={{
          ...(isDisabled && {
            backgroundColor: theme.colors.masked,
            borderColor: theme.colors.masked,
            color: theme.colors.text2,
          }),
          ...style,
        }}
        checked={value}
        onCheckedChange={(checked) => {
          return onChangeValue?.(!!checked);
        }}
        disabled={isDisabled}
      />
      {children}
    </div>
  );
};

export { Component };

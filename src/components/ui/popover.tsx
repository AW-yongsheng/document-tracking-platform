'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@/lib/utils';
import { utils } from '@/lib';
import { useTheme } from '@/contexts';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = `center`, sideOffset = 4, ...props }, ref) => {
  return (
    // <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      collisionPadding={10}
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        `z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50`,
        className,
      )}
      {...props}
    />
    // </PopoverPrimitive.Portal>
  );
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

type Popover = {
  className?: string;
  style?: React.CSSProperties;
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
  isVisible?: boolean;
  setIsVisible?: (isVisible: boolean) => void;
  children: React.ReactNode;
  content: React.ReactNode;
  align?: `center` | `start` | `end`;
  isDisabled?: boolean;
  variant?: `solid` | `solid1` | `outline` | `underline`;
};

const Component = ({
  className,
  style,
  buttonClassName,
  buttonStyle,
  isVisible,
  setIsVisible,
  children,
  content,
  align,
  isDisabled,
  variant,
}: Popover) => {
  const theme = useTheme();
  return (
    <Popover modal open={isVisible} onOpenChange={setIsVisible}>
      <PopoverTrigger
        className={utils.cn(
          variant && `w-fit px-3 py-2 text-center font-semibold`,
          ([`solid`, `solid1`] as (string | undefined)[]).includes(variant) &&
            `rounded-md border shadow-md`,
          buttonClassName,
        )}
        style={{
          ...(variant === `solid` && {
            backgroundColor: theme.colors.primary,
            color: theme.colors.onPrimary,
          }),
          ...(variant === `solid1` && {
            backgroundColor: theme.colors.onPrimary,
            color: theme.colors.primary,
          }),
          ...(variant === `outline` && {
            borderWidth: 1,
            borderColor: theme.colors.primary,
            color: theme.colors.primary,
          }),
          ...(variant === `underline` && {
            textDecorationLine: `underline`,
            textDecorationColor: theme.colors.primary,
            color: theme.colors.primary,
          }),
          ...(isDisabled && {
            backgroundColor: theme.colors.masked,
            cursor: `not-allowed`,
          }),
          ...buttonStyle,
        }}
        disabled={isDisabled}
      >
        {children}
      </PopoverTrigger>
      <PopoverContent className={className} style={style} align={align}>
        {content}
      </PopoverContent>
    </Popover>
  );
};

export { Popover, PopoverTrigger, PopoverContent, Component };

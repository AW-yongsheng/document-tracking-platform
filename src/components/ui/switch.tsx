'use client';

import React, { CSSProperties, useState } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';
import { Text } from '..';
import { useTheme } from '@/contexts';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);

  return (
    <SwitchPrimitives.Root
      className={cn(
        `peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 data-[state=checked]:${theme.colors.primary} data-[state=unchecked]:bg-slate-200 dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-slate-50 dark:data-[state=unchecked]:bg-slate-800`,
        className,
      )}
      {...props}
      ref={ref}
      /* onCheckedChange={() => {
        setChecked((prev) => {
          return !prev;
        });
      }} */
      style={{ backgroundColor: checked ? theme.colors.secondary : `` }}
      onClick={() => {
        setChecked((prev) => {
          return !prev;
        });
      }}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          `pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-950`,
        )}
        style={{ backgroundColor: checked ? theme.colors.primary : `` }}
        datatype=''
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

type Switch = {
  displayText: string;
  className?: string;
  classNameSwitch?: string;
  styleSwitch?: CSSProperties;
  onCheckedChange: () => void;
};

const Component = ({
  displayText,
  className,
  classNameSwitch,
  styleSwitch,
  onCheckedChange,
}: Switch) => {
  return (
    <div className={cn(`flex h-fit w-fit items-center gap-1`, className)}>
      <Switch
        onCheckedChange={onCheckedChange}
        className={classNameSwitch}
        style={styleSwitch}
      />
      <Text className='font-semibold leading-none'>{displayText}</Text>
    </div>
  );
};

export { Component };

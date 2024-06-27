'use client';

import React, { useRef, useState } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts';

type ExtraProps = {
  onScrollToBottom?: (isBottom: boolean) => void;
};

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & ExtraProps
>(({ className, children, onScrollToBottom, ...props }, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHorizontallyOverflowed, setIsHorizontallyOverflowed] =
    useState(false);
  const [isVerticallyOverflowed, setIsVerticallyOverflowed] = useState(false);

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn(`relative overflow-hidden`, className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={contentRef}
        className={cn(
          `h-full w-full rounded-[inherit]`,
          `max-h-[inherit]`,
          isHorizontallyOverflowed && `pb-3`,
          isVerticallyOverflowed && `pr-3`,
        )}
        onLoad={() => {
          if (contentRef.current) {
            setIsHorizontallyOverflowed(
              contentRef.current.offsetWidth < contentRef.current.scrollWidth,
            );

            setIsVerticallyOverflowed(
              contentRef.current?.offsetHeight <
                contentRef.current.scrollHeight,
            );
          }
        }}
        onScroll={(e) => {
          const isScrollToBottom =
            (e.target as HTMLDivElement).offsetHeight +
              (e.target as HTMLDivElement).scrollTop >=
            (e.target as HTMLDivElement).scrollHeight * 0.99;
          let isBottom = false;

          if (isScrollToBottom) {
            isBottom = true;
          }

          onScrollToBottom?.(isBottom);
        }}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation='vertical' />
      <ScrollBar orientation='horizontal' />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = `vertical`, ...props }, ref) => {
  const theme = useTheme();
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        `flex touch-none select-none transition-colors`,
        orientation === `vertical` &&
          `h-full w-2.5 border-l border-l-transparent p-[1px]`,
        orientation === `horizontal` &&
          `h-2.5 flex-col border-t border-t-transparent p-[1px]`,
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={`bg-border relative flex-1 rounded-full`}
        style={{ backgroundColor: theme.colors.overlayWhite }}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

type ScrollArea = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  isHorizontal?: boolean;
  onScrollToBottom?: (isBottom: boolean) => void;
};

const Component = ({
  className,
  style,
  children,
  onScrollToBottom,
}: ScrollArea) => {
  return (
    <ScrollArea
      className={className}
      style={style}
      onScrollToBottom={onScrollToBottom}
    >
      {children}
    </ScrollArea>
  );
};

export { Component };

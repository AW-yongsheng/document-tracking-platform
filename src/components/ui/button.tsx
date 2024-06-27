import React, { CSSProperties, forwardRef, ReactNode, MouseEvent } from 'react';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';

type Button = {
  className?: string;
  variant?: `solid` | `solid1` | `outline` | `underline`;
  children: ReactNode;
  type?: `button` | `submit`;
  onClick?: () => void;
  style?: CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseDown?: (event: MouseEvent) => void;
  isDisabled?: boolean;
};

const Component = forwardRef<HTMLButtonElement, Button>(
  (
    {
      className,
      style,
      variant,
      type = `button`,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      children,
      isDisabled,
    },
    ref,
  ) => {
    const theme = useTheme();

    return (
      <button
        className={utils.cn(
          variant && `w-fit px-3 py-2 text-center font-semibold`,
          ([`solid`, `solid1`] as (string | undefined)[]).includes(variant) &&
            `rounded-md shadow-md`,
          className,
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
            borderColor: theme.colors.secondary,
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
          ...style,
        }}
        ref={ref}
        type={type}
        onClick={() => {
          if (!isDisabled) {
            onClick?.();
          }
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
      >
        <>{children}</>
      </button>
    );
  },
);

Component.displayName = `Button`;

export { Component };

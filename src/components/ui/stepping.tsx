import React, { CSSProperties, forwardRef, Fragment, ReactNode } from 'react';
import { utils } from '@/lib';
import { Button, Text } from '@/components';
import { useTheme } from '@/contexts';

export type Stepping = {
  className?: string;
  style?: CSSProperties;
  classNameButton?: string;
  styleButton?: CSSProperties;
  variant?: `solid` | `solid1` | `underline` | `numbering` | `outline`;
  list: { children: ReactNode; value: string }[];
  value: { children: ReactNode; value: string };
  onChangeValue?: (item: { children: ReactNode; value: string }) => void;
  isDisabled?: boolean;
  isHorizontal?: boolean;
};

const Component = forwardRef<HTMLDivElement, Stepping>(
  (
    {
      className,
      style,
      classNameButton,
      styleButton,
      variant = `solid`,
      list,
      value,
      onChangeValue,
      isDisabled,
      isHorizontal,
    },
    ref,
  ) => {
    const theme = useTheme();

    return (
      <div className={`flex items-center justify-center`}>
        <div
          ref={ref}
          className={utils.cn(
            `flex flex-wrap justify-center gap-2`,
            variant === `solid` && ` p-1`,
            variant === `numbering` && `gap-0`,
            variant === `solid1` && `rounded-md p-2`,
            isHorizontal && `flex-col`,
            className,
          )}
          style={{
            ...(variant === `solid1` && {
              backgroundColor: theme.colors.primary,
            }),
            ...style,
          }}
        >
          {list.map<ReactNode>((item, index) => {
            return (
              <Fragment key={`stepping${index}`}>
                <div className={utils.cn(variant === `numbering` && `flex`)}>
                  {variant === `numbering` && (
                    <div
                      className={`h-7 w-7 self-center rounded-full border border-solid px-2 text-center`}
                      style={{
                        borderColor: `transparent`,
                        background: `linear-gradient(to right, white 0%, white 100% ) padding-box, 
                        linear-gradient(to right, ${theme.colors.stepping1} 0%, ${theme.colors.stepping2} 0%, ${theme.colors.stepping3} 100% ) border-box`,
                        ...(item.value === value?.value && {
                          color: theme.colors.text1,
                          background: `linear-gradient(to right, ${theme.colors.stepping1} 0%, transparent 0%, ${theme.colors.stepping3} 100% ) padding-box, 
                          linear-gradient(to right, ${theme.colors.stepping1} 0%, ${theme.colors.stepping2} 0%, ${theme.colors.stepping3} 100% ) border-box`,
                        }),
                        ...styleButton,
                      }}
                    >
                      <Text
                        className={`bg-clip-text text-sm`}
                        style={{
                          ...(item.value !== value?.value && {
                            background: `linear-gradient(to right, ${theme.colors.stepping1} 0%, transparent 0%, ${theme.colors.stepping3} 100% ) padding-box, 
                          linear-gradient(to right, ${theme.colors.stepping1} 0%, ${theme.colors.stepping2} 0%, ${theme.colors.stepping3} 100% )`,
                            color: `transparent`,
                            WebkitBackgroundClip: `text`,
                            WebkitTextFillColor: `transparent`,
                          }),
                        }}
                      >
                        {index + 1}
                      </Text>
                    </div>
                  )}
                  <Button
                    key={item.value}
                    className={utils.cn(
                      `w-fit rounded-3xl border px-6 py-2 font-semibold`,
                      variant === `numbering` && `border-0 font-bold`,
                      variant === `outline` &&
                        `rounded-none rounded-tr-lg pl-2 font-bold`,
                      variant === `solid1` && `rounded-md border-none`,
                      classNameButton,
                    )}
                    style={{
                      backgroundColor: `transparent`,
                      color: theme.colors.onPrimary,
                      ...(variant === `solid` && {
                        ...(item.value === value?.value && {
                          backgroundColor: theme.colors.tertiary,
                          color: theme.colors.onTertiary,
                          borderColor: theme.colors.tertiary,
                          ...styleButton,
                        }),
                      }),
                      ...(variant === `solid1` && {
                        ...(item.value === value?.value && {
                          backgroundColor: theme.colors.secondary,
                          color: theme.colors.onTertiary,
                          textDecorationColor: theme.colors.primary,
                          // borderColor: theme.colors.tertiary,
                          ...styleButton,
                        }),
                      }),
                      ...(variant === `underline` && {
                        ...(item.value === value?.value && {
                          color: theme.colors.primary,
                          textDecorationLine: `underline`,
                          textDecorationColor: theme.colors.primary,
                          ...styleButton,
                        }),
                      }),
                      ...(variant === `numbering` && {
                        color: `transparent`,
                        background: `linear-gradient(to right, ${theme.colors.stepping1} 0%, transparent 0%, ${theme.colors.stepping3} 100% ) padding-box, 
                          linear-gradient(to right, ${theme.colors.stepping1} 0%, ${theme.colors.stepping2} 0%, ${theme.colors.stepping3} 100% )`,
                        WebkitTextFillColor: `transparent`,
                        WebkitBackgroundClip: `text`,
                        ...(item.value === value?.value && {
                          WebkitTextFillColor: theme.colors.text1,
                        }),
                        ...styleButton,
                      }),
                      ...(variant === `outline` && {
                        borderColor: `transparent`,
                        ...(item.value === value?.value && {
                          borderColor: theme.colors.text,
                          color: theme.colors.text,
                          ...styleButton,
                        }),
                      }),
                    }}
                    onClick={() => {
                      if (!isDisabled) {
                        onChangeValue?.(JSON.parse(utils.stringify(item)));
                      }
                    }}
                    isDisabled={isDisabled}
                  >
                    {item.children}
                  </Button>
                </div>
                {variant === `numbering` && index < list.length - 1 && (
                  <div
                    className={`ml-[0.8rem] border-l-[1px] border-dashed border-l-gray-300 pt-20`}
                  ></div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  },
);

Component.displayName = `Stepping`;

export { Component };

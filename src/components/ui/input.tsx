'use client';

import {
  CSSProperties,
  DetailedHTMLProps,
  WheelEvent,
  InputHTMLAttributes,
  LegacyRef,
  Ref,
  TextareaHTMLAttributes,
  forwardRef,
  ReactNode,
} from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts';
import { ValidationMessage, Label, Text } from '@/components';
import { utils } from '@/lib';

type Input = {
  className?: string;
  style?: CSSProperties;
  classNameInput?: string;
  inputStyle?: CSSProperties;
  value: string | number;
  onChangeValue?: (value: string) => void;
  placeholder?: string;
  variant?: `outline`;
  type?: `email` | `number` | `password` | `tel` | `text` | `url`;
  isDisabled?: boolean;
  label?: string;
  isRequired?: boolean;
  validationMessage?: string;
  isValidationMessageShow?: boolean;
  selectedLanguage?: { label: ``; value: `en_us` | `ms_my` };
  isHorizontal?: boolean;
  isMultiline?: boolean;
  onEnterClick?: () => void;
  id?: string;
  leftComponent?: ReactNode;
  labelRemark?: string;
  classNameOuterInput?: string;
  styleOuterInput?: CSSProperties;
  classNameLabel?: string;
};

const Comp = forwardRef(
  (
    props: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > &
      DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      > & {
        isMultiline: boolean;
      },
    ref: LegacyRef<HTMLTextAreaElement & HTMLInputElement> | undefined,
  ) => {
    const { className, isMultiline, ...props1 } = props;
    if (isMultiline) {
      return (
        <textarea
          className={cn(`no-scrollbar resize-none overflow-scroll`, className)}
          {...props1}
          ref={ref}
        />
      );
    }

    return (
      <>
        <input
          className={cn(`overflow-hidden truncate`, className)}
          {...props1}
          ref={ref}
        />
      </>
    );
  },
);

Comp.displayName = `InputComponent`;

const Component = forwardRef(
  (
    {
      className,
      style,
      classNameInput,
      inputStyle,
      value = ``,
      onChangeValue,
      placeholder,
      variant,
      type = `text`,
      isDisabled,
      label,
      isRequired,
      validationMessage,
      isValidationMessageShow,
      selectedLanguage,
      isHorizontal,
      isMultiline = false,
      onEnterClick,
      id,
      leftComponent,
      labelRemark,
      classNameOuterInput,
      styleOuterInput,
      classNameLabel,
    }: Input,
    ref: Ref<HTMLInputElement & HTMLTextAreaElement>,
  ) => {
    const theme = useTheme();

    return (
      <div>
        <div
          id={id}
          className={utils.cn(
            `flex`,
            isHorizontal && `items-center`,
            !isHorizontal && `flex-col justify-between`,
            className,
          )}
          style={style}
          onKeyDown={(e) => {
            return e.stopPropagation();
          }}
        >
          {!utils.isEmpty(label) && (
            <div
              className={utils.cn(
                `flex items-center`,
                !isHorizontal && `mb-2`,
                isHorizontal && `mr-2`,
                classNameLabel,
              )}
            >
              <Label
                style={{ color: theme.colors.text1 }}
                className={`block`}
                value={label}
                isRequired={isRequired}
              />
              <Text
                style={{ color: theme.colors.text1 }}
                className={`ml-1 text-xs leading-5`}
              >
                {labelRemark}
              </Text>
            </div>
          )}
          <div
            className={cn(
              `flex items-center placeholder-gray-500 outline-none`,
              variant === `outline` && `rounded-md border px-2 py-1 shadow-md `,
              classNameOuterInput,
            )}
            style={{
              color: theme.colors.onPrimary,
              borderColor: theme.colors.secondary,
              backgroundColor: `transparent`,
              ...(isValidationMessageShow && {
                borderColor: theme.colors.error,
              }),
              ...(isDisabled && {
                backgroundColor: theme.colors.disabled,
              }),
              ...styleOuterInput,
            }}
          >
            {leftComponent}
            <Comp
              isMultiline={isMultiline}
              type={type}
              ref={ref}
              className={cn(`focus: w-full outline-none`, classNameInput)}
              style={{
                backgroundColor: `transparent`,
                ...inputStyle,
              }}
              value={value}
              onChange={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onChangeValue?.(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === `Enter`) {
                  onEnterClick?.();
                }
              }}
              disabled={isDisabled}
              placeholder={placeholder}
              onWheel={(
                e: WheelEvent<HTMLInputElement> &
                  WheelEvent<HTMLTextAreaElement>,
              ) => {
                return (e.target as HTMLElement).blur();
              }}
            />
          </div>
          {isHorizontal && isValidationMessageShow && (
            <ValidationMessage
              className={`ml-2`}
              isValidationMessageShow={isValidationMessageShow}
              validationMessage={validationMessage}
              selectedLanguage={selectedLanguage}
            />
          )}
        </div>
        {!isHorizontal && isValidationMessageShow && (
          <ValidationMessage
            isValidationMessageShow={isValidationMessageShow}
            validationMessage={validationMessage}
            selectedLanguage={selectedLanguage}
          />
        )}
      </div>
    );
  },
);

Component.displayName = `Input`;

export { Component };

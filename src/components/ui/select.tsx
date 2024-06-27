'use client';

import React, {
  CSSProperties,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { utils } from '@/lib';
import { useLanguage, useTheme } from '@/contexts';
import { Item } from '@/types';
import {
  Button,
  CheckBox,
  Image,
  Label,
  Popover,
  ScrollArea,
  Text,
  TextBox,
  ValidationMessage,
} from '@/components';
import { Images } from '@/assets';
import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    dropDownImage: string;
  }
>(({ className, children, dropDownImage, ...props }, ref) => {
  const theme = useTheme();
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={utils.cn(
        `flex select-none items-center justify-between overflow-hidden outline-none`,
        className,
      )}
      {...props}
    >
      <Text
        className={`line-clamp-1 text-start font-normal`}
        style={{
          color: theme.colors.text,
        }}
      >
        {children}
      </Text>
      <SelectPrimitive.Icon asChild>
        <Image className={`ml-2 h-4 w-4`} source={dropDownImage} alt={`down`} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = `popper`, ...props }, ref) => {
  const theme = useTheme();

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={utils.cn(
          `relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
          position === `popper` &&
            `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
          className,
        )}
        style={{
          backgroundColor: theme.colors.modalBackground,
          borderColor: theme.colors.secondary,
        }}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport className={utils.cn(`p-1`)}>
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.Label
      ref={ref}
      className={utils.cn(
        `py-1.5 pl-8 pr-2 text-base font-semibold`,
        className,
      )}
      {...props}
    />
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const theme = useTheme();

  return (
    <SelectPrimitive.Item
      ref={ref}
      className={utils.cn(
        `flex cursor-default select-none rounded-sm p-2 text-gray-900 outline-none focus:bg-gray-200 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
        `focus:bg-[#7452DB]`,
        `hover:bg-[#7452DB]`,
        className,
      )}
      style={{
        color: theme.colors.text,
      }}
      {...props}
    >
      <span className={`mr-1 h-4 w-4`}>
        <SelectPrimitive.ItemIndicator>
          <Image
            className={`h-full w-full`}
            source={Images.checked_white}
            alt={`checked`}
          />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.Separator
      ref={ref}
      className={utils.cn(
        `-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800`,
        className,
      )}
      {...props}
    />
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

type DropDown<T> = {
  list: T[];
  className?: string;
  classNameDropDown?: string;
  style?: CSSProperties;
  classNameLabel?: string;
  styleLabel?: CSSProperties;
  variant?: `outline` | `material`;
  placeholder?: string;
  onChangeValue?: (item: T) => void;
  label?: string;
  isRequired?: boolean;
  isHorizontal?: boolean;
  isDisabled?: boolean;
  dropDownTopComponent?: ReactNode;
  isValidationMessageShow?: boolean;
  validationMessage?: string;
  selectedLanguage?: { label: ``; value: `en_us` | `ms_my` };
  id?: string;
};

type SingleType<T> = {
  value: T;
  onChangeValue?: (item: T) => void;
  onOpenChange?: (value: boolean) => void;
};

type MultipleType<T> = {
  value: T[];
  onChangeValue?: (item: T[]) => void;
  searchText?: string;
  onChangeSearchText?: (value: string) => void;
  setDropDownFilter?: (value: string) => void;
};

const Component = memo(
  <T extends Item>({
    list,
    className,
    style,
    classNameLabel,
    styleLabel,
    variant,
    placeholder,
    value,
    onChangeValue,
    onOpenChange,
    label,
    isRequired,
    isHorizontal,
    isDisabled,
    dropDownTopComponent,
    isValidationMessageShow,
    validationMessage,
    selectedLanguage,
    id,
    classNameDropDown,
  }: DropDown<T> & SingleType<T>) => {
    const theme = useTheme();
    const dropdownComponentRef = useRef<HTMLDivElement>(null);

    let formattedList = [...list];
    if (
      list.findIndex((item) => {
        return item.value === value.value;
      }) < 0
    ) {
      formattedList = [value, ...formattedList];
    }

    return (
      <div
        id={id}
        className={utils.cn(
          `relative flex`,
          variant === `material` && `mt-1 rounded-md border px-4`,
          isHorizontal && `items-center`,
          !isHorizontal && `flex-col`,
          className,
        )}
        style={style}
      >
        {!utils.isEmpty(label) && (
          <Label
            className={utils.cn(
              `block min-w-fit`,
              !isHorizontal && `mb-2`,
              isHorizontal && `mr-2`,
              classNameLabel,
            )}
            style={{
              color: theme.colors.text1,
              ...(variant === `material` && {
                position: `absolute`,
                top: -7,
                fontSize: 10,
                background: `rgb(42, 36, 64, 1)`,
              }),
              ...styleLabel,
            }}
            value={label}
            isRequired={isRequired}
          />
        )}
        <Select
          disabled={isDisabled}
          value={value.value}
          onValueChange={(value) => {
            onChangeValue?.(
              list.find((item) => {
                return item.value === value;
              }) || list[0],
            );
          }}
          onOpenChange={(value) => {
            if (value) {
              setTimeout(() => {
                const inputElement =
                  dropdownComponentRef.current?.querySelector(`input`);
                inputElement?.focus();
              }, 0);
            }
            onOpenChange?.(value);
          }}
        >
          <SelectTrigger
            className={utils.cn(
              `w-full min-w-fit`,
              variant === `outline` && `rounded-md border px-2 py-1 shadow-md`,
              variant === `material` && `mt-2`,
              classNameDropDown,
            )}
            style={{
              borderColor: theme.colors.secondary,
              backgroundColor: `transparent`,
              ...(isValidationMessageShow && {
                borderColor: theme.colors.error,
              }),
              ...(isDisabled && {
                backgroundColor: theme.colors.onBackground,
              }),
            }}
            dropDownImage={
              variant === `material`
                ? Images.chevron_down_highlight
                : Images.chevron_down
            }
          >
            <SelectValue placeholder={placeholder ?? `‎`} />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectPrimitive.SelectGroup>
              <ScrollArea className={cn(`max-h-[20rem] max-w-[20rem]`)}>
                <SelectLabel
                  className={`sticky top-0 px-0 py-0 font-normal`}
                  style={{
                    backgroundColor: theme.colors.onBackground,
                  }}
                  ref={dropdownComponentRef}
                >
                  {dropDownTopComponent}
                </SelectLabel>
                {formattedList
                  .filter((item) => {
                    return item.value !== ``;
                  })
                  .map(({ label, value }, index) => {
                    return (
                      <SelectItem key={`${value}${index}`} value={value}>
                        {label}
                      </SelectItem>
                    );
                  })}
              </ScrollArea>
            </SelectPrimitive.SelectGroup>
          </SelectContent>
        </Select>
        {validationMessage && (
          <ValidationMessage
            className={`ml-2 flex`}
            isValidationMessageShow={isValidationMessageShow}
            validationMessage={validationMessage}
            selectedLanguage={selectedLanguage}
          />
        )}
      </div>
    );
  },
);

Component.displayName = `DropDown`;

const Component1 = memo(
  <T extends Item>({
    list,
    className,
    style,
    placeholder,
    value,
    onChangeValue,
    label,
    isRequired,
    isHorizontal,
    isDisabled,
    searchText,
    onChangeSearchText,
    setDropDownFilter,
  }: DropDown<T> & MultipleType<T>) => {
    const language = useLanguage();

    const [isVisible, setIsVisible] = useState(false);
    const [checkedItems, setCheckedItems] = useState<typeof value>([]);
    const [appliedItems, setAppliedItems] = useState<typeof value>([]);

    useEffect(() => {
      if (isVisible && checkedItems.length === appliedItems.length) {
        onChangeSearchText?.(``);
        setCheckedItems([]);
        setAppliedItems([]);
      }
    }, [
      appliedItems.length,
      checkedItems.length,
      isVisible,
      onChangeSearchText,
    ]);

    return (
      <div
        className={utils.cn(
          `flex`,
          isHorizontal && `items-center`,
          !isHorizontal && `flex-col justify-between`,
          className,
        )}
        style={style}
      >
        {!utils.isEmpty(label) && (
          <Label
            className={utils.cn(
              `block min-w-fit`,
              !isHorizontal && `mb-2`,
              isHorizontal && `mr-2`,
            )}
            value={label}
            isRequired={isRequired}
          />
        )}

        <Popover
          style={{}}
          isVisible={isVisible}
          setIsVisible={(value) => {
            setIsVisible(value);
            if (!value) {
              setDropDownFilter?.(``);
            }
          }}
          content={
            <div className={`flex max-h-[50vh] flex-col gap-2`}>
              <TextBox
                className={`border px-2 py-1`}
                value={searchText || ``}
                onChangeValue={onChangeSearchText}
                placeholder={placeholder}
                onEnterClick={() => {
                  setDropDownFilter?.(searchText || ``);
                }}
              />
              <ScrollArea className='max-h-[20vh]'>
                {list.map((item) => {
                  const isExist =
                    checkedItems.findIndex((item1) => {
                      return item1.value === item.value;
                    }) > -1;

                  return (
                    <div key={item.value} className={`flex gap-2`}>
                      <CheckBox
                        value={isExist}
                        onChangeValue={() => {
                          setCheckedItems((prev) => {
                            let array: typeof prev = JSON.parse(
                              JSON.stringify(prev),
                            );

                            if (isExist) {
                              array = array.filter((item1) => {
                                return item1.value !== item.value;
                              });
                            } else {
                              array = [...array, item];
                            }

                            return array;
                          });
                        }}
                      />
                      <Text>{item.label}</Text>
                    </div>
                  );
                })}
              </ScrollArea>
              <Button
                className={`self-end px-2 py-1`}
                variant={`solid`}
                onClick={() => {
                  onChangeValue?.(checkedItems);
                  setAppliedItems(checkedItems);
                  setIsVisible(false);
                }}
              >
                {language.translate(`t_apply`)}
              </Button>
            </div>
          }
          align={`start`}
          isDisabled={isDisabled}
        >
          <div className={`flex items-center justify-between`}>
            <Text className={`truncate`}>
              {utils.truncateString(
                appliedItems
                  .map((item) => {
                    return item.label;
                  })
                  .join(`, `),
                20,
              ) || `‎`}
            </Text>
            <Image
              className={`h-4 w-4`}
              source={Images.chevron_down}
              alt={`down`}
            />
          </div>
        </Popover>
      </div>
    );
  },
);

Component1.displayName = `MultiDropDown`;

export { Component, Component1 };

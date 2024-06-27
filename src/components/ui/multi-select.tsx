'use client';

import React, {
  useCallback,
  useRef,
  useState,
  KeyboardEvent,
  CSSProperties,
} from 'react';
import { Badge } from '@/components/ui/badge';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import { Command as CommandPrimitive } from 'cmdk';
import { Item } from '@/types';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';
import { Images } from '@/assets';
import { Image, Label } from '@/components';

type MultiSelect<T> = {
  className?: string;
  style?: CSSProperties;
  list: T[];
  label?: string;
  value: T[];
  onChangeValue?: (item: T[]) => void;
  placeholder?: string;
  isHorizontal?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
};

const Component = <T extends Item>({
  className,
  style,
  list,
  label,
  value,
  onChangeValue,
  placeholder,
  isHorizontal,
  isDisabled,
  isRequired,
}: MultiSelect<T>) => {
  const theme = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(``);

  const handleUnselect = useCallback(
    (framework: T) => {
      if (!isDisabled) {
        onChangeValue?.(
          value.filter((s) => {
            return s.value !== framework.value;
          }),
        );
      }
    },
    [isDisabled, onChangeValue, value],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!isDisabled) {
        const input = inputRef.current;
        if (input) {
          if (e.key === `Delete` || e.key === `Backspace`) {
            if (input.value === ``) {
              const newSelected = [...value];
              newSelected.pop();
              onChangeValue?.(newSelected);
            }
          }
          // This is not a default behaviour of the <input /> field
          if (e.key === `Escape`) {
            input.blur();
          }
        }
      }
    },
    [isDisabled, onChangeValue, value],
  );

  const selectables = list.filter((framework) => {
    return (
      value.findIndex((item) => {
        return item.value === framework.value;
      }) === -1
    );
  });

  return (
    <div>
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
              `block`,
              !isHorizontal && `mb-2`,
              isHorizontal && `mr-2`,
            )}
            value={label}
            isRequired={isRequired}
          />
        )}
        <Command onKeyDown={handleKeyDown} className={`overflow-visible`}>
          <div
            className={`border-input group rounded-md border px-2 py-1 shadow-md`}
            style={{
              ...(isDisabled && {
                backgroundColor: theme.colors.masked,
              }),
            }}
          >
            <div className={`flex flex-wrap gap-1`}>
              {value.map((framework) => {
                return (
                  <Badge
                    className={`rounded py-0 text-sm`}
                    style={{ backgroundColor: theme.colors.secondary }}
                    key={framework.value}
                    variant='secondary'
                  >
                    {
                      list.find((item) => {
                        return item.value === framework.value;
                      })?.label
                    }
                    {!isDisabled && (
                      <button
                        className='ml-1 rounded-full outline-none'
                        onKeyDown={(e) => {
                          if (e.key === `Enter`) {
                            handleUnselect(framework);
                          }
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onClick={() => {
                          return handleUnselect(framework);
                        }}
                      >
                        <Image
                          className={`h-5 w-5`}
                          alt={`cross`}
                          source={Images.close}
                        />
                      </button>
                    )}
                  </Badge>
                );
              })}
              {/* Avoid having the "Search" Icon */}
              <CommandPrimitive.Input
                className={`ml-2 w-full flex-1 bg-transparent outline-none`}
                ref={inputRef}
                value={inputValue}
                onValueChange={setInputValue}
                onBlur={() => {
                  return setOpen(false);
                }}
                onFocus={() => {
                  return setOpen(true);
                }}
                placeholder={placeholder}
                disabled={isDisabled}
              />
            </div>
          </div>
          <div className='relative'>
            {open && selectables.length > 0 ? (
              <div className='text-popover-foreground absolute top-0 z-10 w-full rounded-md border shadow-md outline-none animate-in'>
                <CommandGroup
                  className='h-full overflow-auto'
                  style={{ backgroundColor: theme.colors.onBackground }}
                >
                  {selectables.map((framework) => {
                    return (
                      <CommandItem
                        key={framework.value}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onSelect={() => {
                          setInputValue(``);
                          onChangeValue?.([...value, framework]);
                        }}
                        className={`cursor-pointer`}
                      >
                        {framework.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </div>
            ) : null}
          </div>
        </Command>
      </div>
    </div>
  );
};

export { Component };

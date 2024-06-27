'use client';

import {
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from '@/components/ui/command';
import { Command as CommandPrimitive } from 'cmdk';
import {
  useState,
  useRef,
  useCallback,
  type KeyboardEvent,
  useEffect,
} from 'react';
import { utils } from '@/lib';
import { Check } from 'lucide-react';
import { Item } from '@/types';
import { Label } from '@/components';
import { useTheme } from '@/contexts';

type AutoCompleteProps<T> = {
  className: string;
  list: (T & Item)[];
  emptyMessage?: string;
  label?: string;
  value: T & Item;
  onChangeValue?: (value: T & Item) => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  isHorizontal?: boolean;
};

const Component = function <T>({
  className,
  list,
  placeholder,
  emptyMessage,
  label,
  value,
  onChangeValue,
  isDisabled,
  isRequired,
  isLoading = false,
  isHorizontal = false,
}: AutoCompleteProps<T>) {
  const theme = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const [inputValue, setInputValue] = useState(value?.label);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true);
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === `Enter` && input.value !== ``) {
        const optionToSelect = list.find((option) => {
          return option.label === input.value;
        });
        if (optionToSelect) {
          setSelected(optionToSelect);
          onChangeValue?.(optionToSelect);
        }
      }

      if (event.key === `Escape`) {
        input.blur();
      }
    },
    [isOpen, list, onChangeValue],
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    setInputValue(selected?.label);
  }, [selected]);

  const handleSelectOption = useCallback(
    (selectedOption: T & Item) => {
      setInputValue(selectedOption.label);

      setSelected(selectedOption);
      onChangeValue?.(selectedOption);

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    [onChangeValue],
  );

  useEffect(() => {
    const filtered = list.find((item) => {
      return item.value === value.value;
    }) || { label: ``, value: `` };

    setInputValue(filtered.label);
    setSelected(filtered as T & Item);
  }, [list, value.value]);

  return (
    <div
      className={utils.cn(
        `flex`,
        isHorizontal && `items-center`,
        !isHorizontal && `flex-col justify-between`,
        className,
      )}
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
      <CommandPrimitive onKeyDown={handleKeyDown}>
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={isLoading ? undefined : setInputValue}
          onBlur={handleBlur}
          onFocus={() => {
            return setOpen(true);
          }}
          placeholder={placeholder}
          disabled={isDisabled}
          className={`h-auto rounded-md border px-0 py-0 text-base`}
          style={{
            ...(isDisabled && {
              backgroundColor: theme.colors.masked,
            }),
          }}
        />
        <div className='relative'>
          {isOpen ? (
            <div className='absolute top-0 z-10 w-full rounded-xl bg-stone-50 outline-none animate-in fade-in-0 zoom-in-95'>
              <CommandList className='rounded-lg ring-1 ring-slate-200'>
                {list.length > 0 && !isLoading ? (
                  <CommandGroup>
                    {list.map((option) => {
                      const isSelected = selected?.value === option.value;
                      return (
                        <CommandItem
                          key={option.value}
                          value={option.label}
                          onMouseDown={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                          }}
                          onSelect={() => {
                            return handleSelectOption(option);
                          }}
                          className={utils.cn(
                            `flex w-full items-center gap-2`,
                            !isSelected ? `pl-8` : null,
                          )}
                        >
                          {isSelected ? <Check className='w-4' /> : null}
                          {option.label}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                ) : null}
                {!isLoading ? (
                  <CommandPrimitive.Empty className='select-none rounded-sm px-2 py-3 text-center text-sm'>
                    {emptyMessage}
                  </CommandPrimitive.Empty>
                ) : null}
              </CommandList>
            </div>
          ) : null}
        </div>
      </CommandPrimitive>
    </div>
  );
};

export { Component };

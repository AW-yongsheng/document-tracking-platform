import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button, Label, Text } from '..';
import { useDate, useLanguage, useTheme } from '@/contexts';
import { utils } from '@/lib';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './calendar';
import React, { CSSProperties, useState } from 'react';

type Calendar = {
  className?: string;
  style?: CSSProperties;
  variant?: `outline`;
  label?: string;
  placeholder?: string;
  value: string;
  onChangeValue: (date: string) => void;
  isShowIcon?: boolean;
  isHorizontal?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isTimePickable?: boolean;
};

const Component = ({
  className,
  style,
  variant,
  label,
  placeholder = `(DD/MM/YYYY)`,
  value,
  onChangeValue,
  isShowIcon = true,
  isHorizontal,
  isRequired,
  isDisabled,
  isTimePickable = false,
}: Calendar) => {
  const theme = useTheme();
  const date = useDate();
  const language = useLanguage();

  const [dateValue, setDateValue] = useState(value);
  const [timeValue, setTimeValue] = useState(`00:00`);

  return (
    <div
      className={utils.cn(
        `flex`,
        isHorizontal && `items-center`,
        !isHorizontal && `flex-col justify-between`,
        // className,
      )}
    >
      {!utils.isEmpty(label) && (
        <Label
          className={utils.cn(
            `block`,
            !isHorizontal && `mb-2`,
            isHorizontal && `mr-2`,
          )}
          style={{ color: theme.colors.text1 }}
          value={label}
          isRequired={isRequired}
        />
      )}
      <Popover>
        <PopoverTrigger
          className={`rounded-md border px-2 py-1 shadow-md`}
          asChild
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault();
            }
          }}
        >
          <div
            className={utils.cn(
              `flex w-full cursor-pointer items-center justify-start text-left outline-none`,
              variant === `outline` && `rounded-md border px-2 py-1 shadow-md`,
              className,
            )}
            style={{
              borderColor: theme.colors.secondary,
              ...(isDisabled && {
                backgroundColor: theme.colors.masked,
              }),
              ...style,
            }}
          >
            {isShowIcon && <CalendarIcon className='mr-2 h-4 w-4' />}
            {value
              ? date.format(
                  value,
                  isTimePickable ? `DD-MM-YYYY, HH:mm` : `DD-MM-YYYY`,
                )
              : placeholder}
          </div>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            mode='single'
            selected={date.convert(isTimePickable ? dateValue : value).toDate()}
            onSelect={(selectedDate) => {
              isTimePickable
                ? setDateValue(date.format(selectedDate, `YYYY-MM-DD`))
                : onChangeValue(date.format(selectedDate, `YYYY-MM-DD`));
            }}
            initialFocus
            footer={
              <>
                {isTimePickable ? (
                  <div className='flex flex-col'>
                    <div className='flex gap-2'>
                      <Text>{language.translate(`s_select_a_time`)}:</Text>
                      <input
                        type='time'
                        value={timeValue}
                        onChange={(e) => {
                          setTimeValue(e.target.value);
                        }}
                      />
                    </div>
                    <Button
                      className='self-end'
                      variant='solid'
                      onClick={() => {
                        onChangeValue(dateValue + ` ` + timeValue);
                      }}
                    >
                      {language.translate(`t_apply`)}
                    </Button>
                  </div>
                ) : (
                  <></>
                )}
                {/* <p>
                  Selected date: {selected ? selected.toLocaleString() : `none`}
                </p> */}
              </>
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { Component };

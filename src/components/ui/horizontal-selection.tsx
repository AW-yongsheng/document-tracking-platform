import { Button, Label } from '@/components';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';
import { Item } from '@/types';
import { CSSProperties } from 'react';

type HorizontalSelection = {
  className?: string;
  style?: CSSProperties;
  classNameItemsWrapper?: string;
  classNameItem?: string;
  styleItem?: CSSProperties;
  styleItemsWrapper?: CSSProperties;
  list?: Item[];
  label?: string;
  value: Item;
  onChangeValue?: (Item: Item) => void;
  isHorizontal?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isSeperate?: boolean;
};

const Component = ({
  className,
  style,
  classNameItemsWrapper,
  classNameItem,
  styleItem,
  styleItemsWrapper,
  list,
  label,
  value,
  onChangeValue,
  isHorizontal,
  isRequired,
  isDisabled,
  isSeperate,
}: HorizontalSelection) => {
  const theme = useTheme();

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
            style={{ color: theme.colors.text1 }}
            value={label}
            isRequired={isRequired}
          />
        )}

        <div
          className={utils.cn(
            !isSeperate && `rounded-md border shadow-md`,
            `flex flex-1 gap-4 overflow-hidden`,
            classNameItemsWrapper,
          )}
          style={{
            ...styleItemsWrapper,
            ...(isDisabled && {
              backgroundColor: theme.colors.masked,
            }),
          }}
        >
          {list?.map((item) => {
            return (
              <Button
                key={item.value}
                className={utils.cn(
                  `px-6 py-1`,
                  isSeperate && `rounded-md border shadow-md`,
                  classNameItem,
                )}
                style={{
                  borderColor: theme.colors.secondary,
                  ...(item.value === value.value && {
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.onPrimary,
                  }),
                  ...styleItem,
                }}
                onClick={() => {
                  if (!isDisabled) {
                    return onChangeValue?.(item);
                  }
                }}
              >
                <Label className='font-semibold' value={item.label} />
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Component };

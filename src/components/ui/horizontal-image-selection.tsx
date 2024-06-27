import { Button, Label, Image } from '@/components';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';
import { Item } from '@/types';
import { CSSProperties } from 'react';

type selection = {
  label: string;
  value: string;
  image: string;
  description: string;
};

type HorizontalSelection = {
  className?: string;
  style?: CSSProperties;
  list?: selection[];
  label?: string;
  value: Item;
  onChangeValue?: (Item: Item) => void;
  isHorizontal?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
};

const Component = ({
  className,
  style,
  list,
  label,
  value,
  onChangeValue,
  isHorizontal,
  isRequired,
  isDisabled,
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

        <div
          className={utils.cn(
            `flex overflow-hidden rounded-md border shadow-md`,
          )}
          style={{
            ...style,
            ...(isDisabled && {
              backgroundColor: theme.colors.masked,
            }),
          }}
        >
          {list?.map((item) => {
            return (
              <Button
                key={item.value}
                className={`flex-1 px-6 py-8`}
                style={{
                  ...(item.value === value.value && {
                    backgroundColor: theme.colors.onBackground,
                    color: theme.colors.onPrimary,
                  }),
                }}
                onClick={() => {
                  if (!isDisabled) {
                    return onChangeValue?.(item);
                  }
                }}
              >
                <Image
                  className={`w-32`}
                  source={item.image}
                  alt={item.value}
                />
                <div className={`flex flex-col px-2 py-3`}>
                  <Label className='font-semibold' value={item.label} />
                  <Label className='text-sm' value={item.description} />
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Component };

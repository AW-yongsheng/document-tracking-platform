import { Text } from '@/components';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';
import { Item } from '@/types';
import { CSSProperties, Fragment } from 'react';

type SteppingBar = {
  className?: string;
  style?: CSSProperties;
  list: Item[];
  value: Item;
  onChangeValue?: (item: Item) => void;
};

const Component = ({
  className,
  style,
  list,
  value,
  onChangeValue,
}: SteppingBar) => {
  const theme = useTheme();

  return (
    <div className={utils.cn(`m-4 p-2`, className)}>
      <div
        className={utils.cn(`flex items-center justify-center px-3 py-2`)}
        style={{
          ...style,
        }}
      >
        {list.map((item, index) => {
          if (index === list.length - 1) {
            return (
              <div
                key={item.value}
                className={`h-5 w-5 cursor-pointer self-center rounded-full px-2 text-center`}
                style={{
                  backgroundColor: theme.colors.text1,
                  borderColor: theme.colors.text,
                  ...(item.value === value.value && {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.secondary,
                    boxShadow: `0 0 1.5px 1.5px ${theme.colors.text1}`,
                  }),
                }}
                onClick={() => {
                  onChangeValue?.(item);
                }}
              ></div>
            );
          }
          return (
            <Fragment key={item.value}>
              <div
                className={`h-5 w-5 cursor-pointer self-center rounded-full px-2 text-center`}
                style={{
                  backgroundColor: theme.colors.text1,
                  borderColor: theme.colors.text1,
                  ...(item.value === value.value && {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.secondary,
                    boxShadow: `0 0 1.5px 1.5px ${theme.colors.text1}`,
                  }),
                }}
                onClick={() => {
                  onChangeValue?.(item);
                }}
              ></div>
              <div
                className='h-2 flex-1 self-center'
                style={{
                  backgroundColor: theme.colors.text1,
                  borderColor: theme.colors.text1,
                }}
              ></div>
            </Fragment>
          );
        })}

        {/* <div
          className={`h-5 w-5 self-center rounded-full border border-solid px-2 text-center`}
          style={{
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.primary,
          }}
        ></div>
        <div
          className='h-2 flex-1 self-center border-y'
          style={{
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.primary,
          }}
        ></div>
        <div
          className={`h-5 w-5 self-center rounded-full border border-solid px-2 text-center`}
          style={{
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.primary,
          }}
        ></div>
        <div
          className='h-2 flex-1 self-center border-y'
          style={{
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.primary,
          }}
        ></div>
        <div
          className={`h-5 w-5 self-center rounded-full border border-solid px-2 text-center`}
          style={{
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.primary,
          }}
        ></div> */}
      </div>
      <div className={`flex justify-between`}>
        {list.map((item) => {
          return (
            <Text key={item.value} className={`w-12 text-sm`}>
              {item.label}
            </Text>
          );
        })}
      </div>
    </div>
  );
};

export { Component };

'use client';

import { Ref, forwardRef } from 'react';
import { Image, TextBox } from '@/components';
import { useTheme } from '@/contexts';
import { Images } from '@/assets';

type Search = {
  className?: string;
  value: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
};

const Component = forwardRef(
  (
    { className, value, onChangeValue, placeholder = `Search` }: Search,
    ref: Ref<HTMLDivElement>,
  ) => {
    const theme = useTheme();

    return (
      <div
        ref={ref}
        className={`flex items-center gap-2 rounded px-3 py-2`}
        style={{
          backgroundColor: theme.colors.masked,
        }}
      >
        <Image
          className={`h-6 w-6`}
          source={Images.search_gray}
          alt={`search`}
        />
        <TextBox
          className={className}
          value={value}
          onChangeValue={onChangeValue}
          placeholder={placeholder}
        />
      </div>
    );
  },
);

Component.displayName = `Search`;

export { Component };

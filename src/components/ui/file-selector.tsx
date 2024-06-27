'use client';

import { CSSProperties, ReactNode, useRef } from 'react';
import { utils } from '@/lib';
import { Button } from '..';

type Input = {
  className?: string;
  style?: CSSProperties;
  onChangeValue: (file: File) => void;
  children: ReactNode;
  acceptTypes?: (`jpg` | `png` | `pdf` | `jpeg`)[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Component = ({
  className,
  style,
  children,
  onChangeValue,
  acceptTypes,
  onMouseEnter,
  onMouseLeave,
}: Input) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={utils.cn(`w-fit select-none`, className, `px-0 py-0`)}
      style={style}
    >
      <Button
        className={className}
        onClick={() => {
          return ref.current?.click();
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </Button>
      <input
        ref={ref}
        className={`hidden`}
        type={`file`}
        accept={acceptTypes
          ?.map((accept) => {
            return `.${accept}`;
          })
          .join(`,`)}
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (!!file) {
            onChangeValue(file);
          }
        }}
      />
    </div>
  );
};

Component.displayName = `Input`;

export { Component };

'use client';

import { utils } from '@/lib';
import NextImage from 'next/image';
import { CSSProperties, Ref, forwardRef } from 'react';

type Image = {
  className?: string;
  style?: CSSProperties;
  alt: string;
  source: string;
  onClick?: () => void | undefined;
};

const Component = forwardRef(
  (
    { className, style, alt, source, onClick }: Image,
    ref: Ref<HTMLImageElement>,
  ) => {
    let classNameAppend = ``;

    if (typeof onClick === `function`) {
      classNameAppend = `cursor-pointer`;
    }

    if (utils.isEmpty(source)) {
      return <div className={className}></div>;
    }

    return (
      <NextImage
        ref={ref}
        draggable={false}
        className={utils.cn(
          `w-full select-none object-contain`,
          source === `` && `invisible`,
          classNameAppend,
          className,
        )}
        style={style}
        alt={alt}
        src={source}
        onClick={onClick}
        unoptimized
        priority={true}
        width={0}
        height={0}
      />
    );
  },
);

Component.displayName = `Image`;

export { Component };

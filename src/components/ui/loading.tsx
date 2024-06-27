'use client';

import React, { SVGProps, memo } from 'react';
import { Modal } from '..';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { stringify } from '@/lib/utils';

type Loading = {};

const LoadingSvgComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={100}
      height={100}
      fill='#855ef5'
      className='single-loader'
      overflow='visible'
      {...props}
    >
      <defs>
        <circle id='a' cx={50} cy={50} r={8} transform='translate(0 -30)' />
      </defs>
      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#a'>
        <animate
          attributeName='opacity'
          begin='0s'
          dur='3s'
          repeatCount='indefinite'
          values='0;1;0'
        />
      </use>
      <use
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xlinkHref='#a'
        transform='rotate(45 50 50)'
      >
        <animate
          attributeName='opacity'
          begin='0.375s'
          dur='3s'
          repeatCount='indefinite'
          values='0;1;0'
        />
      </use>
      <use
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xlinkHref='#a'
        transform='rotate(90 50 50)'
      >
        <animate
          attributeName='opacity'
          begin='0.75s'
          dur='3s'
          repeatCount='indefinite'
          values='0;1;0'
        />
      </use>
      <use
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xlinkHref='#a'
        transform='rotate(135 50 50)'
      >
        <animate
          attributeName='opacity'
          begin='1.125s'
          dur='3s'
          repeatCount='indefinite'
          values='0;1;0'
        />
      </use>
      <use
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xlinkHref='#a'
        transform='rotate(180 50 50)'
      >
        <animate
          attributeName='opacity'
          begin='1.5s'
          dur='3s'
          repeatCount='indefinite'
          values='0;1;0'
        />
      </use>
      <use
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xlinkHref='#a'
        transform='rotate(225 50 50)'
      >
        <animate
          attributeName='opacity'
          begin='1.875s'
          dur='3s'
          repeatCount='indefinite'
          values='0;1;0'
        />
      </use>
      <use
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xlinkHref='#a'
        transform='rotate(270 50 50)'
      >
        <animate
          attributeName='opacity'
          begin='2.25s'
          dur='3s'
          repeatCount='indefinite'
          values='0;1;0'
        />
      </use>
      <use
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xlinkHref='#a'
        transform='rotate(315 50 50)'
      >
        <animate
          attributeName='opacity'
          begin='2.625s'
          dur='3s'
          repeatCount='indefinite'
          values='0;1;0'
        />
      </use>
    </svg>
  );
};

const Component = memo(
  ({}: Loading) => {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();

    return (
      <Modal
        isVisible={isFetching > 0 || isMutating > 0}
        isShowClose={false}
        onClickClose={() => {}}
        style={{
          backgroundColor: `transparent`,
        }}
      >
        <div className={`flex w-28 flex-col items-center justify-center`}>
          <LoadingSvgComponent />
        </div>
      </Modal>
    );
  },
  (prevProps, nextProps) => {
    if (stringify(prevProps) !== stringify(nextProps)) {
      return false;
    }

    return true;
  },
);

Component.displayName = `Loading`;

export { Component };

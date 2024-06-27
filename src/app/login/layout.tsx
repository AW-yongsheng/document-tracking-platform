'use client';

import { HighOrderComponent } from '@/types';
import { Images } from '@/assets';
import { Image } from '@/components';

const Component = ({ children }: HighOrderComponent) => {
  return (
    <>
      <Image
        className={`absolute bottom-0 right-0 aspect-square w-[32rem] object-cover`}
        source={Images.background_logo}
        alt={`background_logo`}
      />
      <main>{children}</main>
    </>
  );
};

export default Component;

import { ReactNode } from 'react';
import { Images } from '@/assets';
import { Sheet, ScrollArea, Text, Image } from '@/components';
import { useLanguage } from '@/contexts';

type Cart<T> = {
  list: T[];
  renderItem: (item: T) => ReactNode;
};

const Component = function <T>({ list, renderItem }: Cart<T>) {
  const language = useLanguage();

  return (
    <Sheet
      className={`w-[30rem]`}
      button={
        <Image
          alt='notification'
          source={Images.cart_grey}
          className='h-6 w-auto'
        />
      }
    >
      <div className={``}>
        <Text className={`text-xl font-semibold`}>
          {language.translate(`t_cart`)}
        </Text>
        <ScrollArea className={`mt-2 max-h-[40vh]`}>
          <div className={`flex flex-col gap-4`}>
            <Text className='font-bold'>{language.translate(`t_today`)}</Text>
            <Text className='pb-4 font-bold'>
              {language.translate(`t_before`)}
            </Text>
            {list.map(renderItem)}
          </div>
        </ScrollArea>
      </div>
    </Sheet>
  );
};

export { Component };

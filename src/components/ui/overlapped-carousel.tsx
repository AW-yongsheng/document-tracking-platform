import { Image } from '@/components';
import { Images } from '@/assets';
import { utils } from '@/lib';
import { ReactNode, useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';

type OverlapppedCarousel = {
  className?: string;
  classNameCarousel?: string;
  contents: ReactNode[];
  isShowSlideButton?: boolean;
  isAllowOverlapped?: boolean;
  currentIndex?: number;
  numberOfItemDisplayed?: number;
  onClickPrevious?: (index: number) => void;
  onClickNext?: (index: number) => void;
};

const Component = ({
  className,
  classNameCarousel,
  contents,
  isShowSlideButton = true,
  isAllowOverlapped = true,
  currentIndex,
  numberOfItemDisplayed,
  onClickPrevious,
  onClickNext,
}: OverlapppedCarousel) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isInitialize, setIsInitialize] = useState(true);
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    disableGestures: true,
    itemsPerSlide: numberOfItemDisplayed ? numberOfItemDisplayed : 3,
    withLoop: true,
    initialStartingPosition: `center`,
    items: contents.map((item, index, array) => {
      const totalLength = array.length;
      const getPreviousIndex =
        (currentSlideIndex - (1 % totalLength) + totalLength) % totalLength;
      const getPrevious2Index =
        (currentSlideIndex - (2 % totalLength) + totalLength) % totalLength;
      const getNextIndex = (currentSlideIndex + 1) % array.length;
      const getNext2Index = (currentSlideIndex + 2) % array.length;
      return {
        renderItem: (
          <div
            key={index}
            className={utils.cn(
              `z-[1] h-[28rem] transition duration-150 ease-linear`,
              currentSlideIndex === index && `z-10`,
              isAllowOverlapped &&
                (index === getPreviousIndex || index === getNextIndex) &&
                `z-[5]`,
              isAllowOverlapped &&
                index === getPreviousIndex &&
                `absolute translate-x-[7rem]`,
              isAllowOverlapped &&
                index === getNextIndex &&
                `absolute -translate-x-[7rem]`,
              isAllowOverlapped &&
                index === getPrevious2Index &&
                `absolute translate-x-full`,
              isAllowOverlapped &&
                index === getNext2Index &&
                `absolute -translate-x-full`,
              className,
            )}
          >
            <div
              className={`rounded-md`}
              style={{
                backgroundColor: `rgba(255,255,255,0.2)`,
                position: `absolute`,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: `inherit`,
                ...(currentSlideIndex === index && {
                  backgroundColor: `rgba(255,255,255,0)`,
                }),
                ...((index === getPreviousIndex || index === getNextIndex) && {
                  backgroundColor: `rgba(255,255,255,0.1)`,
                }),
              }}
            ></div>
            {item}
          </div>
        ),
      };
    }),
  });
  useListenToCustomEvent(
    (event: { eventName: string; nextItem: { index: number } }) => {
      if (event.eventName === `onSlideStartChange`) {
        setCurrentSlideIndex(event?.nextItem?.index);
      }
    },
  );

  useEffect(() => {
    if (
      !utils.isEmpty(carouselFragment) &&
      isInitialize &&
      !utils.isEmpty(currentIndex)
    ) {
      slideToItem(currentIndex);
      setIsInitialize(false);
    }
  }, [carouselFragment, currentIndex, isInitialize, slideToItem]);

  useEffect(() => {
    if (!utils.isEmpty(currentIndex, true)) {
      slideToItem(currentIndex);
    }
  }, [currentIndex, slideToItem]);

  return (
    <div
      className={utils.cn(
        `w--full relative mx-auto h-fit w-fit overflow-x-clip py-2`,
        classNameCarousel,
      )}
    >
      <div
        className={utils.cn(
          `relative py-2`,
          (isAllowOverlapped || isShowSlideButton) &&
            `mx-auto w-[85%] overflow-x-clip`,
        )}
      >
        {carouselFragment}
      </div>
      {isShowSlideButton && (
        <>
          <Image
            className={`absolute left-[5%] top-1/2 h-6 w-auto -translate-x-full -translate-y-1/2`}
            source={Images.chevron_left_primary}
            alt={`chevron_left_primary`}
            onClick={() => {
              const latestSlide =
                (currentSlideIndex - (1 % contents.length) + contents.length) %
                contents.length; // because onSlideStartChange is use for initial the styling and onSlideChange only will be called after onClick
              slideToPrevItem();
              onClickPrevious?.(latestSlide);
            }}
          />
          <Image
            className={`absolute right-[5%] top-1/2 h-6 w-auto -translate-y-1/2 translate-x-full`}
            source={Images.chevron_right_primary}
            alt={`chevron_right_primary`}
            onClick={() => {
              const latestSlide = (currentSlideIndex + 1) % contents.length; // / because onSlideStartChange is use for initial the styling and onSlideChange only will be called after onClick
              slideToNextItem();
              onClickNext?.(latestSlide);
            }}
          />
        </>
      )}
    </div>
  );
};

export { Component };

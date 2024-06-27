'use client';

import * as React from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, Image } from '@/components';
import Autoplay from 'embla-carousel-autoplay';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';
import { Images } from '@/assets';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: `horizontal` | `vertical`;
  setApi?: (api: CarouselApi) => void;
  carouselIndex?: number;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  selectedIndex: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error(`useCarousel must be used within a <Carousel />`);
  }

  return context;
};

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = `horizontal`,
      opts,
      setApi,
      plugins,
      className,
      children,
      carouselIndex,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === `horizontal` ? `x` : `y`,
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setSelectedIndex(api.selectedScrollSnap());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const scrollTo = React.useCallback(
      (index: number) => {
        api?.scrollTo(index);
      },
      [api],
    );

    React.useEffect(() => {
      if (carouselIndex !== undefined && carouselIndex !== selectedIndex) {
        scrollTo(carouselIndex);
      }
    }, [carouselIndex, scrollTo, selectedIndex]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === `ArrowLeft`) {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === `ArrowRight`) {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on(`reInit`, onSelect);
      api.on(`select`, onSelect);

      return () => {
        api?.off(`select`, onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation:
            orientation || (opts?.axis === `y` ? `vertical` : `horizontal`),
          scrollPrev,
          scrollNext,
          scrollTo,
          carouselIndex,
          canScrollPrev,
          canScrollNext,
          selectedIndex,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn(`relative`, className)}
          role='region'
          aria-roledescription='carousel'
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = `Carousel`;

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className='overflow-hidden'>
      <div
        ref={ref}
        className={cn(
          `flex`,
          orientation === `horizontal`
            ? /* `-ml-4` */ ``
            : /* -mt-4  */ `flex-col`,
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = `CarouselContent`;

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role='group'
      aria-roledescription='slide'
      className={cn(
        `min-w-0 shrink-0 grow-0 basis-full`,
        orientation === `horizontal` ? `ml-4` : `mt-4`,
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = `CarouselItem`;

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = `outline`, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      // size={size}
      className={cn(
        // ` h-8 w-8 rounded-full`,
        orientation === `horizontal`
          ? `-left-12 top-1/2 -translate-y-1/2`
          : `-top-12 left-1/2 -translate-x-1/2 rotate-90`,
        `absolute border-none`,
        !canScrollPrev && `invisible`,
        className,
      )}
      isDisabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Image
        source={Images.arrow_left_grey}
        alt='arrow_left_grey'
        className='h-auto w-6'
      />
      {/* <ArrowLeft className='h-4 w-4' /> */}
      {/* <span className='sr-only'>Previous slide</span> */}
    </Button>
  );
});
CarouselPrevious.displayName = `CarouselPrevious`;

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = `outline`, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      // size={size}
      className={cn(
        // `absolute h-8 w-8 rounded-full`,
        orientation === `horizontal`
          ? `-right-12 top-1/2 -translate-y-1/2`
          : `-bottom-12 left-1/2 -translate-x-1/2 rotate-90`,
        `absolute border-none`,
        !canScrollNext && `invisible`,
        className,
      )}
      isDisabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Image
        source={Images.arrow_right_grey}
        alt='arrow_right_grey'
        className='h-auto w-6'
      />
      {/* <ArrowRight className='h-8 w-8' /> */}
      {/* <span className='sr-only'>Next slide</span> */}
    </Button>
  );
});
CarouselNext.displayName = `CarouselNext`;

const CarouselTo = ({
  contents,
}: {
  contents: React.ReactNode[];
  options?: CarouselOptions;
}) => {
  const { scrollTo, selectedIndex, api } = useCarousel();
  const theme = useTheme();

  const autoplay = api?.plugins().autoplay as
    | {
        play: (jump?: boolean) => void;
        stop: () => void;
        reset: () => void;
        isPlaying: () => boolean;
      }
    | undefined;

  return (
    <div className='absolute bottom-0 start-1/2 flex -translate-x-1/2 gap-1.5 p-2'>
      {contents.map((_, index) => {
        return (
          <Button
            key={index}
            className={`h-4 w-4 rounded-full border ${
              `opacity-80`
              // index === selectedIndex ? `opacity-90` : `opacity-50`
            }`}
            style={{
              backgroundColor:
                index === selectedIndex
                  ? theme.colors.primary
                  : theme.colors.disabled,
            }}
            onClick={() => {
              scrollTo(index);
            }}
            onMouseEnter={() => {
              autoplay?.stop();
            }}
            onMouseLeave={() => {
              autoplay?.play();
            }}
          >{``}</Button>
        );
      })}
    </div>
  );
};
CarouselTo.displayName = `CarouselTo`;

type Carousel = {
  className?: string;
  classNameItem?: string;
  contents: React.ReactNode[];
  canScrollTo?: boolean;
  hasScrollButton?: boolean;
  isAutoPlay?: boolean;
  isLooping?: boolean;
  carouselIndex?: number;
  isDraggable?: boolean;
};

const Component = ({
  className,
  classNameItem,
  contents,
  canScrollTo = false,
  hasScrollButton = false,
  isAutoPlay = true,
  isLooping = true,
  carouselIndex,
  isDraggable = true,
}: Carousel) => {
  return (
    <Carousel
      opts={{ loop: isLooping, watchDrag: isDraggable }}
      plugins={
        isAutoPlay
          ? [
              // eslint-disable-next-line new-cap
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]
          : []
      }
      className={utils.cn(hasScrollButton && `mx-12`, className)}
      carouselIndex={carouselIndex}
    >
      <CarouselContent className='relative'>
        {contents.map((item, index) => {
          return (
            <CarouselItem key={index} className={utils.cn(classNameItem)}>
              {item}
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {hasScrollButton && (
        <>
          <CarouselNext>{``}</CarouselNext>
          <CarouselPrevious>{``}</CarouselPrevious>
        </>
      )}
      {canScrollTo && <CarouselTo contents={contents} />}
    </Carousel>
  );
};

export { Component };

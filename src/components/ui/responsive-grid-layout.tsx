'use client';

import * as React from 'react';
import { useMemo, useState } from 'react';
import {
  WidthProvider as wrapWithWidthProvider,
  Responsive,
} from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Button, Image, ScrollArea, Text } from '..';
import { Images } from '@/assets';
import { useLanguage, useTheme } from '@/contexts';

type GridLayout = {
  isCustomizationModeOn: boolean;
  layouts: {
    value: string;
    x: number;
    y: number;
    width: number;
    height: number;
    content: React.JSX.Element;
  }[];
  hiddenLayouts: {
    value: string;
    alt: string;
    image: string;
    label: string;
  }[];
  setIsCustomizationModeOn: () => void;
  defaultPosition: { value: string; x: number; y: number }[];
  position: { value: string; x: number; y: number }[];
  setPosition: (value: { value: string; x: number; y: number }[]) => void;
  hiddenWidgets: string[];
  setHiddenWidgets: (value: string[]) => void;
  onResetPosition: () => void;
  setIsLayoutEdited: () => void;
};

const SCREEN_SIZES = {
  lg: { breakpoint: 1024, cols: 32 },
  md: { breakpoint: 768, cols: 24 },
  sm: { breakpoint: 640, cols: 18 },
  xs: { breakpoint: 640, cols: 18 },
  xxs: { breakpoint: 640, cols: 18 },
};

const Component = ({
  isCustomizationModeOn,
  layouts,
  hiddenLayouts,
  setIsCustomizationModeOn,
  defaultPosition,
  position,
  setPosition,
  hiddenWidgets,
  setHiddenWidgets,
  onResetPosition,
  setIsLayoutEdited,
}: GridLayout) => {
  const theme = useTheme();
  const language = useLanguage();
  const ResponsiveGridLayout = useMemo(() => {
    return wrapWithWidthProvider(Responsive);
  }, []);

  const [isBreakpointChange, setIsBreakpointChange] = useState(false);

  const originalWidgets = defaultPosition.map(({ value }) => {
    return value;
  });
  const [currentWidgets, setCurrentWidgets] = useState(originalWidgets);

  const currentLayouts = layouts.filter(({ value }) => {
    return currentWidgets.includes(value);
  });

  // const hiddenWidgets = originalWidgets.filter((item) => {
  //   return !currentWidgets.includes(item);
  // });
  // const currentHiddenLayouts = hiddenLayouts.filter(({ value }) => {
  //   return hiddenWidgets.includes(value);
  // });

  const generateDOM = () => {
    return currentLayouts.map(
      ({ value, x, y, width = 0, height = 0, content }, i) => {
        return (
          <div
            key={i}
            data-grid={{
              x,
              y,
              w: width,
              h: height,
              i: i.toString(),
              minW: width,
              minH: height,
              // resizeHandles: [`s`, `w`, `e`, `n`, `sw`, `nw`, `se`, `ne`],
            }}
            className={`grid-item relative`}
          >
            {isCustomizationModeOn && (
              <Button
                className='absolute right-2 top-2 z-40'
                onClick={() => {
                  setPosition(
                    position.filter((item) => {
                      return !(item.value === value);
                    }),
                  );
                  setCurrentWidgets((prev) => {
                    return prev.filter((item) => {
                      return !(item === value);
                    });
                  });
                  setHiddenWidgets([...hiddenWidgets, value]);
                  setIsLayoutEdited();
                }}
                onMouseDown={(event) => {
                  event.stopPropagation();
                }}
              >
                <Image
                  alt='remove_grey_background'
                  source={Images.remove_grey_background}
                  className='a-wuto h-6'
                />
              </Button>
            )}
            {content}
          </div>
        );
      },
    );
  };

  return (
    <>
      <ResponsiveGridLayout
        className={`layout`}
        isDraggable={isCustomizationModeOn}
        // isBounded={true}
        // autoSize={true}
        isResizable={false}
        breakpoints={{
          lg: SCREEN_SIZES.lg.breakpoint,
          md: SCREEN_SIZES.md.breakpoint,
          sm: SCREEN_SIZES.sm.breakpoint,
          xs: SCREEN_SIZES.xs.breakpoint,
          xxs: SCREEN_SIZES.xxs.breakpoint,
        }}
        cols={{
          lg: SCREEN_SIZES.lg.cols,
          md: SCREEN_SIZES.md.cols,
          sm: SCREEN_SIZES.sm.cols,
          xs: SCREEN_SIZES.xs.cols,
          xxs: SCREEN_SIZES.xxs.cols,
        }}
        containerPadding={[0, 0]}
        margin={[16, 16]}
        rowHeight={1 / SCREEN_SIZES.lg.cols}
        onLayoutChange={(layout, allLayout) => {
          if (Object.keys(allLayout).length === 2) {
            setIsBreakpointChange(true);
          }
          if (isBreakpointChange && Object.keys(allLayout).length === 1) {
            setPosition(
              position.map((item, i, array) => {
                const leftWidget = array.findIndex((other) => {
                  if (other.value === item.value) {
                    return false;
                  }
                  return (
                    (other.y >= item.y &&
                      other.y <
                        (currentLayouts.find(({ value }) => {
                          return value === item.value;
                        })?.height || 0) +
                          item.y) ||
                    ((currentLayouts.find(({ value }) => {
                      return value === other.value;
                    })?.height || 0) +
                      other.y >
                      item.y &&
                      (currentLayouts.find(({ value }) => {
                        return value === other.value;
                      })?.height || 0) +
                        other.y <=
                        (currentLayouts.find(({ value }) => {
                          return value === item.value;
                        })?.height || 0) +
                          item.y)
                  );
                });
                if (leftWidget === -1) {
                  return {
                    ...item,
                    x: 0,
                  };
                }
                return {
                  ...item,
                };
              }),
            );
            setIsBreakpointChange(false);
          } else {
            setPosition(
              position.map((item, i) => {
                return {
                  ...item,
                  x: layout[i].x,
                  y: layout[i].y,
                };
              }),
            );
          }
        }}
        onDrag={setIsLayoutEdited}
      >
        {generateDOM()}
      </ResponsiveGridLayout>
      {isCustomizationModeOn && (
        <div
          className='sticky bottom-0 right-0 flex w-full flex-col rounded-lg p-2 pb-2'
          style={{ backgroundColor: theme.colors.disabled }}
        >
          <div className='flex items-start justify-between pl-4'>
            <Text
              className='text-xl font-bold'
              style={{ color: theme.colors.onBackground }}
            >
              {language.translate(`t_widgets`)}
            </Text>
            <div className='flex justify-end gap-1'>
              <Image
                alt='reset_grey'
                source={Images.reset_grey}
                className='h-4 w-auto'
                onClick={() => {
                  setCurrentWidgets(originalWidgets);
                  setPosition(defaultPosition);
                  setHiddenWidgets([]);
                  onResetPosition();
                }}
              />
              <Image
                alt='close_round'
                source={Images.close_round}
                className='h-4 w-auto'
                onClick={() => {
                  setIsCustomizationModeOn();
                }}
              />
            </div>
          </div>
          <ScrollArea>
            <div className='flex min-h-[6rem] gap-4 px-4'>
              {hiddenLayouts.map((hiddenLayout) => {
                return (
                  <Button
                    key={hiddenLayout.value}
                    className='flex flex-none flex-col items-center gap-1'
                    onClick={() => {
                      /* const newIndex = [...widgetIndex];
                      const addIndex = widgetIndex.findIndex((current) => {
                        return current > hiddenLayout.index;
                      });
                      if (addIndex === -1) {
                        setWidgetIndex([...newIndex, hiddenLayout.index]);
                      }
                      if (addIndex >= 0) {
                        newIndex.splice(addIndex, 0, hiddenLayout.index);
                        setWidgetIndex(newIndex);
                      } */
                      setCurrentWidgets((prev) => {
                        return [...prev, hiddenLayout.value];
                      });
                      setPosition([
                        ...position,
                        {
                          value: hiddenLayout.value,
                          x: 0,
                          y: 999,
                        },
                      ]);
                      setHiddenWidgets(
                        hiddenWidgets.filter((item) => {
                          return !(hiddenLayout.value === item);
                        }),
                      );
                      setIsLayoutEdited();
                    }}
                  >
                    <Image
                      alt={hiddenLayout.alt}
                      source={hiddenLayout.image}
                      className='h-16 w-auto pr-1.5'
                    />
                    <Text
                      className='text-sm'
                      style={{ color: theme.colors.onBackground }}
                    >
                      {hiddenLayout.label}
                    </Text>
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      )}
    </>
  );
};

export { Component };

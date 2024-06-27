import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { GaugeChart, GaugeSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { utils } from '@/lib';
import { useTheme } from '@/contexts';

type GaugeChart = {
  className?: string;
  chartValue: number;
  label?: string;
  axisLineWidth?: number;
  pointerIcon?: string;
  pointerLength?: string | number;
  pointerWidth?: number;
  pointerHasShadow?: boolean;
};

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | GaugeSeriesOption
>;

const Component = ({
  className,
  chartValue,
  label,
  axisLineWidth = 30,
  pointerIcon = `triangle`,
  pointerLength = `90%`,
  pointerWidth = 6,
  pointerHasShadow = true,
}: GaugeChart) => {
  echarts.use([GridComponent, GaugeChart, CanvasRenderer, UniversalTransition]);
  const theme = useTheme();

  let pointer = pointerIcon;
  if (
    pointerIcon !== `circle` &&
    pointerIcon !== `rect` &&
    pointerIcon !== `roundRect` &&
    pointerIcon !== `triangle` &&
    pointerIcon !== `diamond` &&
    pointerIcon !== `pin` &&
    pointerIcon !== `arrow` &&
    pointerIcon !== `none`
  ) {
    pointer = `image://http://${window.location.host}/${pointerIcon}`;
  }

  const option: EChartsOption = {
    series: [
      {
        type: `gauge`,
        startAngle: 180,
        endAngle: 0,
        center: [`50%`, `90%`],
        radius: `150%`,
        // progress: {
        //   show: true,
        //   width: 40,
        //   itemStyle: {
        //     color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        //       {
        //         offset: 0,
        //         color: `rgba(119,86,248,1)`,
        //       },
        //       {
        //         offset: 1,
        //         color: `rgba(34,0,147,1)`,
        //       },
        //     ]),
        //   },
        // },
        axisLine: { show: false },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          length: 15,
          lineStyle: {
            width: 2,
            color: `#999`,
          },
        },
        axisLabel: {
          show: false,
          distance: 25,
          color: `#999`,
          fontSize: 20,
        },
        pointer: {
          show: true,
          icon: pointer,
          length: pointerLength,
          width: pointerWidth,
          ...(pointerHasShadow && {
            itemStyle: {
              color: `#FFF`,
              shadowColor: `#FFF`,
              shadowBlur: 4,
            },
          }),
        },
        // anchor: {
        //   showAbove: false,
        //   size: 30,
        //   itemStyle: {
        //     borderWidth: 10,
        //   },
        //   offsetCenter: [0, `5%`],
        // },
        data: [
          {
            name: label,
            title: {
              offsetCenter: [`120`, `-90%`],
              color: theme.colors.tertiary,
              fontWeight: `bold`,
              fontSize: 20,
              shadowColor: `rgba(0,0,0,0.3)`,
              shadowBlur: 5,
              shadowOffsetY: 8,
            },
            value: chartValue,
            detail: { show: false },
          },
        ],
      },
      {
        type: `gauge`,
        zlevel: -1,
        startAngle: 180,
        endAngle: 0,
        center: [`50%`, `90%`],
        radius: `150%`,
        data: [{ value: 100 }],
        progress: {
          show: true,
          width: axisLineWidth,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
              {
                offset: 0,
                color: `rgba(119,86,248,1)`,
              },
              {
                offset: 1,
                color: `rgba(34,0,147,1)`,
              },
            ]),
          },
        },
        pointer: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        splitLine: { show: false },
        detail: { show: false },
      },
    ],
  };

  return (
    <div className='relative'>
      <ReactEcharts className={utils.cn(className)} option={option} />
      {/* <Image
        className={`absolute left-1/2 top-1/2 w-28 origin-top-left rotate-180 `}
        style={{ transform: `rotate(${finalAngle}deg)` }}
        source={Images.arrow}
        alt={`arrow`}
      /> */}
      {/* <Image
      id=''
        src={Images.gauge_arrow_grey}
        alt={`f`}
        onLoadingComplete={(img) => {
          console.log(img);
        }}
      /> */}
    </div>
  );
};

export { Component };

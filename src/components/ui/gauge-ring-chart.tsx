import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { GaugeChart, GaugeSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { utils } from '@/lib';
import { useTheme } from '@/contexts';
import { ReactNode } from 'react';

type GaugeRingChart = {
  className?: string;
  chartValue: number;
  label?: string;
  axisLineWidth?: number;
  centerChildren?: ReactNode;
};

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | GaugeSeriesOption
>;

const Component = ({
  className,
  chartValue,
  axisLineWidth = 20,
  centerChildren,
}: GaugeRingChart) => {
  echarts.use([GridComponent, GaugeChart, CanvasRenderer, UniversalTransition]);
  const theme = useTheme();
  const option: EChartsOption = {
    series: [
      {
        type: `gauge`,
        startAngle: 90,
        endAngle: -270,
        radius: `100%`,
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          itemStyle: {
            color: theme.colors.primary,
          },
        },
        axisLine: {
          lineStyle: { width: axisLineWidth, color: [[1, theme.colors.text1]] },
        },
        pointer: {
          icon: `circle`,
          width: 30,
          length: `100%`,
          offsetCenter: [0, `-40%`],
          itemStyle: {
            color: theme.colors.primary,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: { show: false },
        axisLabel: { show: false },
        data: [
          {
            detail: { show: false },
            value: chartValue,
          },
        ],
      },
    ],
  };

  return (
    <div className='relative'>
      <ReactEcharts className={utils.cn(className)} option={option} />
      <div className='absolute inset-x-1/2 bottom-1/2 top-1/2 flex flex-col items-center justify-center'>
        {centerChildren}
      </div>
    </div>
  );
};

export { Component };

import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  GridComponentOption,
  LegendComponent,
  TooltipComponent,
  LegendComponentOption,
  TooltipComponentOption,
  TitleComponentOption,
  TitleComponent,
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { utils } from '@/lib';
import { useTheme } from '@/contexts';
import { truncate } from 'fs';

type BarChart = {
  className?: string;
  xAxisData: string[];
  yAxisData: { name: string; data: number[]; color?: string }[];
  subtitle?: string;
};

type EChartsOption = echarts.ComposeOption<
  | GridComponentOption
  | BarSeriesOption
  | TooltipComponentOption
  | LegendComponentOption
  | TitleComponentOption
>;

const Component = ({ className, xAxisData, yAxisData, subtitle }: BarChart) => {
  echarts.use([
    GridComponent,
    BarChart,
    CanvasRenderer,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
  ]);

  const theme = useTheme();

  const option: EChartsOption = {
    title: {
      subtext: subtitle,
      bottom: `0%`,
      left: `center`,
      subtextStyle: {
        color: theme.colors.text,
      },
    },
    grid: {
      right: `10%`,
    },
    xAxis: {
      type: `category`,
      data: xAxisData,
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: theme.colors.text,
        interval: 0,
        width: 100,
        overflow: `break`,
      },
    },
    yAxis: {
      type: `value`,
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: theme.colors.text,
      },
    },
    series: yAxisData.map(({ name, data, color }) => {
      return { name, data, type: `bar`, color, barGap: 0 };
    }),
    tooltip: {
      trigger: `axis`,
    },
    legend: {
      textStyle: {
        color: theme.colors.text,
      },
    },
  };

  if (utils.isEmpty(xAxisData) || utils.isEmpty(yAxisData)) {
    return null;
  }

  return <ReactEcharts className={utils.cn(className)} option={option} />;
};

export { Component };

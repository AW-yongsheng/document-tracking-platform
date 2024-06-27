import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
} from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { utils } from '@/lib';
import { useTheme } from '@/contexts';

type LineChart = {
  className?: string;
  xAxisData: (string | number)[];
  xAxisName?: string;
  xAxisNameLocation?: `start` | `middle` | `end`;
  yAxisData: (string | number)[] | (string | number)[][];
  yAxisLabel?: string;
  hasDataZoom?: boolean;
  gridLeftMargin?: string | number;
  gridRightMargin?: string | number;
  gridTopMargin?: string | number;
  gridBottomMargin?: string | number;
  targetLineWidth?: number;
  lineColor?: string | string[];
  areaFilledColor?: string[];
  xAxisLabelRotateAngle?: number;
  yAxisPosition?: `left` | `right`;
  isYAxisLabelInside?: boolean;
  isShowXAxisLine?: boolean;
  isShowXAxisLabel?: boolean;
  isShowYAxisLine?: boolean;
  xAxisLabelInterval?: number | ((index: number, value: string) => boolean);
  xAxisLineType?: `solid` | `dashed` | `dotted`;
  xAxisLineColor?: string;
  yAxisLineColor?: string;
  xAxisLabelColor?: string;
  yAxisLabelColor?: string;
  isShowYAxisSplitLine?: boolean;
  isYAxisShowMinLabel?: boolean;
  isShowXAxisTick?: boolean;
  isAreaColorFilled?: boolean;
  hasShadowLine?: boolean;
  yAxisScale?: boolean;
  xAxisLabelFormatter?: (value: string) => string;
  yAxisLabelFormatter?: (value: number) => string;
  xAxisLabelFontSize?: string | number;
  alignXAxisMinLabel?: `left` | `center` | `right`;
  alignXAxisMaxLabel?: `left` | `center` | `right`;
  isShowLegend?: boolean;
  legendNames?: string[];
};

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption | LegendComponentOption
>;

const Component = ({
  className,
  xAxisData,
  yAxisData,
  xAxisName,
  xAxisNameLocation = `middle`,
  yAxisLabel,
  hasDataZoom = false,
  gridLeftMargin = `10%`,
  gridRightMargin = `10%`,
  gridTopMargin = 20,
  gridBottomMargin = 20,
  targetLineWidth,
  lineColor,
  areaFilledColor,
  xAxisLabelRotateAngle = 0,
  yAxisPosition = `left`,
  isYAxisLabelInside = false,
  isShowXAxisLine = true,
  isShowXAxisLabel = true,
  isShowYAxisLine = true,
  xAxisLabelInterval,
  xAxisLineType = `solid`,
  xAxisLineColor,
  yAxisLineColor,
  xAxisLabelColor,
  yAxisLabelColor,
  isShowYAxisSplitLine = false,
  isYAxisShowMinLabel = true,
  isShowXAxisTick = true,
  isAreaColorFilled = true,
  hasShadowLine = false,
  yAxisScale = true,
  xAxisLabelFormatter,
  yAxisLabelFormatter,
  xAxisLabelFontSize,
  alignXAxisMinLabel = `center`,
  alignXAxisMaxLabel = `center`,
  isShowLegend = false,
  legendNames,
}: LineChart) => {
  echarts.use([
    GridComponent,
    LineChart,
    CanvasRenderer,
    UniversalTransition,
    LegendComponent,
  ]);
  const theme = useTheme();

  let seriesData = [[``]];
  if (Array.isArray(yAxisData[0])) {
    seriesData = yAxisData as [][];
  }
  if (typeof yAxisData[0] === `string` || typeof yAxisData[0] === `number`) {
    seriesData = [yAxisData as []];
  }

  const option: EChartsOption = {
    color: lineColor ?? theme.colors.primary,
    grid: {
      left: gridLeftMargin,
      right: gridRightMargin,
      top: gridTopMargin,
      bottom: gridBottomMargin,
    },
    legend: {
      show: isShowLegend,
      bottom: 0,
      lineStyle: { width: 12, cap: `round` },
      textStyle: { color: theme.colors.text, padding: [0, 0, 0, 10] },
    },
    xAxis: {
      type: `category`,
      data: xAxisData,
      boundaryGap: true,
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: isShowXAxisLabel,
        fontSize: xAxisLabelFontSize,
        rotate: xAxisLabelRotateAngle,
        color: xAxisLabelColor,
        alignMinLabel: alignXAxisMinLabel,
        alignMaxLabel: alignXAxisMaxLabel,
        ...(xAxisLabelFormatter && {
          formatter: xAxisLabelFormatter,
        }),
        ...(xAxisLabelInterval && {
          interval: xAxisLabelInterval,
        }),
      },
      name: xAxisName,
      nameLocation: xAxisNameLocation,
      nameGap: 20,
      axisLine: {
        show: isShowXAxisLine,
        lineStyle: {
          color: xAxisLineColor ?? theme.colors.primary,
          type: xAxisLineType,
        },
      },
      axisTick: {
        show: isShowXAxisTick,
      },
    },
    yAxis: {
      type: `value`,
      scale: yAxisScale,
      position: yAxisPosition,
      name: yAxisLabel,
      nameLocation: `middle`,
      nameTextStyle: {
        align: `center`,
        verticalAlign: `bottom`,
        lineHeight: 50,
      },
      splitLine: {
        show: isShowYAxisSplitLine,
        lineStyle: {
          type: `dashed`,
          color: theme.colors.text2,
        },
      },
      axisLabel: {
        inside: isYAxisLabelInside,
        color: yAxisLabelColor,
        showMinLabel: isYAxisShowMinLabel,
        ...(yAxisLabelFormatter && {
          formatter: yAxisLabelFormatter,
        }),
      },
      axisLine: {
        show: isShowYAxisLine,
        lineStyle: {
          color: yAxisLineColor ?? theme.colors.primary,
        },
      },
    },
    series: seriesData.map((item, index) => {
      return {
        ...(legendNames && { name: legendNames[index] }),
        data: item,
        type: `line`,
        smooth: true,
        showSymbol: false,
        symbol: `circle`,
        symbolSize: 10,
        lineStyle: {
          width: 2,
          ...(hasShadowLine && {
            shadowColor: Array.isArray(lineColor)
              ? lineColor[index]
              : lineColor,
            shadowBlur: 4,
            shadowOffsetY: 5,
          }),
        },
        ...(isAreaColorFilled &&
          index === 0 && {
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: areaFilledColor?.[0] ?? `rgba(154, 132, 242,0.39)`,
                },
                {
                  offset: 1,
                  color: areaFilledColor?.[1] ?? `rgba(70, 52, 139,0.14)`,
                },
              ]),
            },
          }),
        ...(targetLineWidth && {
          markLine: {
            data: [
              {
                yAxis: targetLineWidth,
              },
            ],
            symbol: `none`,
          },
        }),
      };
    }),
    dataZoom: [
      {
        show: hasDataZoom,
      },
    ],
    tooltip: {
      show: true,
      trigger: `axis`,
    },
  };

  if (utils.isEmpty(xAxisData) || utils.isEmpty(yAxisData)) {
    return null;
  }

  return <ReactEcharts className={utils.cn(className)} option={option} />;
};

export { Component };

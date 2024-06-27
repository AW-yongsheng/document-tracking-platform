import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  LegendComponent,
  LegendComponentOption,
  TooltipComponent,
  TooltipComponentOption,
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { CSSProperties, ReactNode } from 'react';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';
import { Text } from '..';

type PieChart = {
  className?: string;
  style?: CSSProperties;
  classNameChart?: string;
  styleChart?: CSSProperties;
  chartData: { name: string; value: number }[];
  color?: string[];
  centerChildren?: ReactNode;
  chartBottomChildren?: ReactNode;
  isShowLegend?: boolean;
  classNameLegend?: string;
  isShowLegendValue?: boolean;
  isLegendHorizontal?: boolean;
  isShowLabel?: boolean;
};

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | LegendComponentOption | PieSeriesOption
>;

const Component = ({
  className,
  style,
  classNameChart,
  styleChart,
  chartData,
  color,
  centerChildren,
  chartBottomChildren,
  isShowLabel = true,
  isShowLegend = false,
  classNameLegend,
  isShowLegendValue = true,
  isLegendHorizontal = false,
}: PieChart) => {
  echarts.use([
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout,
  ]);
  const theme = useTheme();
  // const defaultColor = [
  //   `#5470c6`,
  //   `#91cc75`,
  //   `#fac858`,
  //   `#ee6666`,
  //   `#73c0de`,
  //   `#3ba272`,
  //   `#fc8452`,
  //   `#9a60b4`,
  //   `#ea7ccc`,
  // ];
  // const categoryColorCode: Record<string, string> = {};
  // chartData.forEach((item, index) => {
  //   categoryColorCode[item.name] = item.color
  //     ? item.color
  //     : defaultColor[index % defaultColor.length];
  // });

  const option: EChartsOption = {
    tooltip: {
      trigger: `item`,
    },
    color: color ?? theme.colors.pieChart,
    series: [
      {
        data: chartData,
        type: `pie`,
        radius: [`55%`, `80%`],
        itemStyle: {
          borderWidth: 2,
          // color(param) {
          //   return categoryColorCode
          //     ? categoryColorCode[param.name]
          //     : `#5470c6`;
          // },
        },
        label: {
          formatter: `{b}  {d}%`,
          show: isShowLabel,
          position: `outside`,
          fontSize: 10,
          color: theme.colors.text,
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: `#FFF`,
          },
        },
        height: `auto`,
        center: [`50%`, `50%`],
        emphasis: { scale: true, scaleSize: 10 },
      },
    ],
    // legend: {
    //   icon: `circle`,
    //   show: isShowLegend,
    //   bottom: 100,
    //   orient: `horizontal`,
    //   selectedMode: false,
    //   textStyle: { color: `#fff` },
    // },
  };

  if (utils.isEmpty(chartData)) {
    return null;
  }

  return (
    <div className={utils.cn(`flex `, className)} style={style}>
      <div className='flex flex-1 flex-col'>
        <div
          className={utils.cn(`relative h-fit`, classNameChart)}
          style={styleChart}
        >
          <ReactEcharts
            option={option}
            className={`flex flex-col items-center`}
            style={{ height: `100%` }}
          />
          <div className='absolute inset-x-1/2 bottom-1/2 top-1/2 flex flex-col items-center justify-center'>
            {centerChildren}
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          {chartBottomChildren}
        </div>
      </div>
      {isShowLegend && (
        <div
          className={utils.cn(
            `flex flex-1 gap-2`,
            isLegendHorizontal ? `flex-wrap justify-evenly` : `flex-col`,
            classNameLegend,
          )}
        >
          {chartData.map((item, index) => {
            return (
              <div key={item.name} className='flex gap-2'>
                <div
                  className='mt-1 h-4 w-6 shrink-0 rounded'
                  style={{
                    backgroundColor: (color ?? theme.colors.pieChart)[index],
                  }}
                ></div>
                <Text>{`${item.name} ${
                  isShowLegendValue ? `(${item.value}%)` : ``
                }`}</Text>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { Component };

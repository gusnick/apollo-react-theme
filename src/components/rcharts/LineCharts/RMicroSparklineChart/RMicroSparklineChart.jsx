import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import {
  Line, XAxis, ComposedChart, Area, ResponsiveContainer,
} from 'recharts';
import { getHeight, heights } from '../../general/charts.helpers';
import NoChartData from '../../general/NoChartData/NoChartData';

function findMaxValueInfo(values) {
  const maxValue = Math.max(...values);
  return {
    maxValue,
    maxValueIndex: values.lastIndexOf(maxValue),
  };
}

function findMinValueInfo(values) {
  const minValue = Math.min(...values);
  return {
    minValue,
    minValueIndex: values.findIndex((value) => value === minValue),
  };
}

function CustomDot({
  cx, cy, maxValueIndex, minValueIndex, index,
}) {
  const theme = useTheme();
  const shouldShowDot = index === maxValueIndex || index === minValueIndex;
  return shouldShowDot ? (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      stroke={theme.palette.colorDataViz1.main}
      fill={theme.palette.colorWhite.main}
      strokeWidth={2}
    />
  ) : null;
}

function RMicroSparklineChart(props) {
  const {
    data, height, valueKey, xAxisLabelKey, isBanded, bandMidway,
  } = props;

  const theme = useTheme();
  const heightValue = getHeight(theme, height) + (xAxisLabelKey && getHeight(theme, heights.XAXIS));

  if (!data) {
    return (
      <ResponsiveContainer height={heightValue}>
        <NoChartData />
      </ResponsiveContainer>
    );
  }

  const allValues = data.map((item) => item[valueKey]);

  const maxValueInfo = findMaxValueInfo(allValues);
  let { maxValue } = maxValueInfo;
  const { maxValueIndex } = maxValueInfo;
  const { minValue, minValueIndex } = findMinValueInfo(allValues);

  if (minValue === maxValue && minValue === 0) {
    maxValue = 100;
  }

  const bandedData = data ? data.map((item) => ({
    ...item,
    bandBottom: bandMidway || (maxValue / 2),
    bandTop: bandMidway ? bandMidway * 2 : maxValue,
  })) : [];

  return (
    <ResponsiveContainer height={heightValue}>
      <ComposedChart
        data={bandedData}
        margin={{
          top: 0,
          left: xAxisLabelKey ? theme.spacing(2) : -theme.spacing(1.5),
          right: xAxisLabelKey ? theme.spacing(2) : -theme.spacing(1.5),
          bottom: 5,
        }}
      >
        { xAxisLabelKey && (
          <XAxis
            type="category"
            allowDuplicatedCategory={false}
            dataKey={xAxisLabelKey}
            tickLine={false}
            axisLine={false}
            scale="point"
            interval="preserveStartEnd"
          />
        )}
        <Area
          yAxisId="left"
          dataKey="bandTop"
          strokeWidth={0}
          fill={theme.palette.colorNeutral2.main}
        />
        {isBanded && (
          <Area
            yAxisId="left"
            dataKey="bandBottom"
            strokeWidth={0}
            fill={theme.palette.colorNeutral4.main}
          />
        )}
        <Line
          yAxisId="left"
          dataKey={valueKey}
          stroke={theme.palette.colorDataViz1.main}
          strokeWidth={3}
          dot={isBanded ? null
            : <CustomDot maxValueIndex={maxValueIndex} minValueIndex={minValueIndex} />}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default RMicroSparklineChart;

RMicroSparklineChart.defaultProps = {
  data: null,
  valueKey: null,
  xAxisLabelKey: null,
  isBanded: false,
  bandMidway: null,
};

RMicroSparklineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  valueKey: PropTypes.string,
  xAxisLabelKey: PropTypes.string,
  isBanded: PropTypes.bool,
  bandMidway: PropTypes.number,
  height: PropTypes.oneOf([
    heights.DEFAULT,
    heights.MULTI,
    heights.KPI,
    heights.TABLE,
    heights.MICROVIZ,
  ]).isRequired,
};

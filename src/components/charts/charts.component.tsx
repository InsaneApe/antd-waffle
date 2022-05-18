import React, { useRef } from 'react'
import UseChart from './useCharts.components';

export interface IChartProps {
  options?: any;
  className?: string;
  width?: string;
  height?: string;
}

const Chart = (props: IChartProps) => {
  const { options, className, width, height } = props;
  const chartRef = useRef(null);
  UseChart(chartRef, options);

  return (
    <div
      ref={chartRef}
      className={className}
      style={{width: width || "800px", height: height || "400px"}}
    />
  )
}

export default Chart
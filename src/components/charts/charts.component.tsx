import React, { useRef } from 'react';
import classnames from 'classnames';
import UseChart from './useCharts.components';

export interface IChartProps {
  PrefixCls:string;
  options?: any;
  className?: string;
  width?: string;
  height?: string;
}

const PrefixCls = `antd-waffle`;

const Charts = (props: IChartProps) => {
  const { options, className, width, height,PrefixCls } = props;
  const chartRef = useRef(null);
  UseChart(chartRef, options);

  return (
    <div
      ref={chartRef}
      className={classnames(className,`${PrefixCls}-charts`)}
      style={{width: width || "800px", height: height || "400px"}}
    />
  )
}

Charts.defaultProps = {
  PrefixCls:PrefixCls
}

export default Charts;
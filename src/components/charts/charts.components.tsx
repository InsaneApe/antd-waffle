import React from "react";
import { Line } from '@ant-design/charts';
import classnames from 'classnames';
import './charts.less';


export interface IChartsComponentProps {
  className?: string
  data: Record<string, any>[];
  title: { visible: boolean, text: string };
  description?: { visible: boolean, text: string };
  xField: string;
  yField: string;
}

const ChartsComponent = (props: IChartsComponentProps) => {
  const { className, ...config } = props;

  return (
    <div className={classnames('antd-waffle-line-root', className)} >
      <Line {...config} />
    </div>
  );
}

export default ChartsComponent;
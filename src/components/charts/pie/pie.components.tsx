import React from "react";
import { Pie, PieConfig } from '@ant-design/charts';
import classnames from 'classnames';
import './pie.less';

export interface IPieComponentProps extends PieConfig {
  className?: string
  data: Record<string, any>[];
}

const PieComponent = (props: IPieComponentProps) => {
  const { className, ...config } = props;

  return (
    <div className={classnames('antd-waffle-pie-root', className)} >
      <Pie {...config} />
    </div>
  );
}

export default PieComponent;
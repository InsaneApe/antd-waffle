import React from "react";
import { Line, LineConfig } from '@ant-design/charts';
import classnames from 'classnames';
import './line.less';

export interface ILineComponentProps extends LineConfig {
  className?: string
  data: Record<string, any>[];
}

const LineComponent = (props: ILineComponentProps) => {
  const { className, ...config } = props;

  return (
    <div className={classnames('antd-waffle-line-root', className)} >
      <Line {...config} />
    </div>
  );
}

export default LineComponent;
import React from "react";
import { Column, ColumnConfig } from '@ant-design/charts';
import classnames from 'classnames';
import './column.less';

export interface IColumnComponentProps extends ColumnConfig {
  className?: string
  data: Record<string, any>[];
}

const ColumnComponent = (props: IColumnComponentProps) => {
  const { className, ...config } = props;

  return (
    <div className={classnames('antd-waffle-column-root', className)} >
      <Column {...config} />
    </div>
  );
}

export default ColumnComponent;
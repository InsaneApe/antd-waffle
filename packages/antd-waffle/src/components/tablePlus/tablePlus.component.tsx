import React from 'react';
import { Table } from 'antd';
import { TablePlusProps } from './type';
import TablePlusTitle from './tablePlusTitle.component';
import TablePlusOperateRoot from './tablePlusOperate/tablePlusOperateRoot.component';
import classnames from 'classnames';
import './style/index.less';
import {
  TablePlusOptionContext,
} from '../../constants/config-provide';

const prefixCls = 'antd-waffle';

function TablePlus<RecordType extends object = any>(
  props: TablePlusProps<RecordType>
) {
  const {
    title,
    className,
    leftOption,
    rightOption,
    size,
    onSearch,
    reverse = false,
    onSelect,
    prefixClsTablePlus,
    ...other
  } = props;

  return (
    <TablePlusOptionContext.Provider
      value={{
        leftOption: leftOption,
        rightOption: rightOption,
      }}
    >
      <div className={classnames(`${prefixClsTablePlus}-container-root`, className)}>
        <TablePlusTitle title={title} />
        <TablePlusOperateRoot
          onSearch={onSearch}
          onSelect={onSelect}
          size={size}
          reverse={reverse}
          operateLeftOption={leftOption}
          rightOption={rightOption}
        />
        <Table {...other} size={size} />
      </div>
    </TablePlusOptionContext.Provider>
  );
}

TablePlus.defaultProps = {
  prefixClsTablePlus: `${prefixCls}-tablePlus`,
}


export default TablePlus;

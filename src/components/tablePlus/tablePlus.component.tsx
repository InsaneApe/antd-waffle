import React, { useContext } from 'react';
import { Table } from 'antd';
import { TablePlusProps } from './type';
import TablePlusTitle from './tablePlusTitle.component';
import TablePlusOperateRoot from './tablePlusOperate/tablePlusOperateRoot.component';
import classnames from 'classnames';
import './tablePlus.component.less';
import {
  ConfigContext,
  TablePlusOptionContext,
} from '@constants/config-provide';

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
    ...other
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tablePlus-container-root');

  return (
    <TablePlusOptionContext.Provider
      value={{
        leftOption: leftOption,
        rightOption: rightOption,
      }}
    >
      <div className={classnames(prefixCls, className)}>
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

export default TablePlus;

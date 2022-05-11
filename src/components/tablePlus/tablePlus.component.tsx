import React, { useContext, ReactNode } from 'react';
import { Table, TableProps } from 'antd';
import { TablePlusOperateOptions } from './type';
import TablePlusTitle from './tablePlusTitle.component';
import TablePlusOperateRoot from './tablePlusOperate/tablePlusOperateRoot.component';
import classnames from 'classnames';
import './tablePlus.component.less';
import {
  ConfigContext,
  TablePlusOptionContext,
} from '@constants/config-provide';

export interface TablePlusProps<RecordType>
  extends Omit<TableProps<RecordType>, 'title'|'size'> {
  title?: ReactNode | string;
  className?: string;
  leftOption?: TablePlusOperateOptions[];
  rightOption?: TablePlusOperateOptions[];
  size?: 'small' | 'middle' | 'large' | undefined;
  onSearch?: (value: string) => void;
}

function TablePlus<RecordType extends object = any>(
  props: TablePlusProps<RecordType>
) {
  const { title, className, leftOption, rightOption, size, onSearch, ...other} = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tablePlus-container-root');

  const onSearchChanges = (val) => {
    onSearch && onSearch(val);
  }
  
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
          onSearch={onSearchChanges}
          size={size}
        />
        <Table 
          {...other}
          size={size} 
          />
      </div>
    </TablePlusOptionContext.Provider>
  );
}

export default TablePlus;

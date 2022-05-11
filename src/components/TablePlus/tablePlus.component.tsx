import React, { useContext, ReactNode } from 'react';
import { Table, TableProps } from 'antd';
import TablePlusTitle from './tablePlusTitle.component';
import TablePlusOperatRoot from './tablePlusOperating/tablePlusOperatRoot.component';
import classnames from 'classnames';
import './tablePlus.component.less';
import {
  ConfigContext,
  TablePlusOptionContext,
} from '@constants/config-provide';
import { TablePlusOperatOptions } from './type';

export interface TablePlueProps<RecordType>
  extends Omit<TableProps<RecordType>, 'title'|'size'> {
  title?: ReactNode | string;
  className?: string;
  leftOption?: TablePlusOperatOptions[];
  rightOption?: TablePlusOperatOptions[];
  size?: 'small' | 'middle' | 'large' | undefined;
  onSearch?: (value: string) => void;
}

function TablePlus<RecordType extends object = any>(
  props: TablePlueProps<RecordType>
) {
  const { title, className, leftOption, rightOption, size, onSearch, ...other} = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tablePlue-container-root');

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
        <TablePlusOperatRoot
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

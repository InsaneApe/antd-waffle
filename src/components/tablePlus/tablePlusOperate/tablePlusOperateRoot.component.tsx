import React from 'react';
import classnames from 'classnames';
import TablePlusOperatingLeft from './tablePlusOperateLeft.component';
import TablePlusOperatingRight from './tablePlusOperateRight.component';

interface TablePlusOperateProps {
  searchPlaceholder?: string;
  onSearch?: (search: any) =>void;
  size?: "large" | "middle" | "small";
}

const TablePlusOperateRoot = (props: TablePlusOperateProps) => {
  const { searchPlaceholder='请输入', onSearch, size } = props;

  return (
    <div className={classnames('antd-waffle-tablePlus-operate')}>
      <TablePlusOperatingLeft
        onSearch={onSearch}
        searchPlaceholder={searchPlaceholder} 
        size={size}
      />
      <TablePlusOperatingRight
        onSearch={onSearch}
        size={size}
      />
    </div>
  );
};


export default TablePlusOperateRoot;

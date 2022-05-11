import React from 'react';
import classnames from 'classnames';
import TablePlusOperatingLeft from './tablePlusOperatingLeft.component';
import TablePlusOperatingRight from './tablePlusOperatingRight.component';

interface TablePlueOperatProps {
  searchPlaceholder?: string;
  onSearch?: (search: any) =>void;
  size?: "large" | "middle" | "small";
}

const TablePlusOperatRoot = (props: TablePlueOperatProps) => {
  const { searchPlaceholder='请输入', onSearch } = props;

  return (
    <div className={classnames('AntdPrivat-tablePlus-operat')}>
      <TablePlusOperatingLeft
        onSearch={onSearch}
        searchPlaceholder={searchPlaceholder} 
      />
      <TablePlusOperatingRight
        onSearch={onSearch}
      />
    </div>
  );
};


export default TablePlusOperatRoot;

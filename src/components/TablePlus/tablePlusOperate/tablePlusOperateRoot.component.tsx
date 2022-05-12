import React from 'react';
import classnames from 'classnames';
import TablePlusOperatingLeft from './tablePlusOperateLeft.component';
import TablePlusOperatingRight from './tablePlusOperateRight.component';

interface TablePlusOperateProps {
  searchPlaceholder?: string;
  onSearch?: (search: any) =>void;
  size?: 'small' | 'middle' | 'large';
  reverse:boolean;
  rightOption?:any;
  leftOption?:any;
  onSelect?: (value: any) => void;
}

const TablePlusOperateRoot = (props: TablePlusOperateProps) => {
  const { searchPlaceholder='请输入', onSearch, size,reverse,leftOption,rightOption,onSelect } = props;

  return (
    <div className={classnames('antd-waffle-tablePlus-operate',(reverse || (!leftOption))?'antd-waffle-tablePlus-operate-reverse':'')}>
      <TablePlusOperatingLeft
        onSearch={onSearch}
        searchPlaceholder={searchPlaceholder} 
        size={size}
        option={leftOption}
      />
      <TablePlusOperatingRight
        option={rightOption}
        onSearch={onSearch}
        onSelect={onSelect}
        size={size}
      />
    </div>
  );
};


export default TablePlusOperateRoot;

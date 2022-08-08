import React from 'react';
import classnames from 'classnames';
import TablePlusOperateLeft from './tablePlusOperateLeft.component';
import TablePlusOperatingRight from './tablePlusOperateRight.component';
import { TablePlusOperateRootProps } from '../type';

const TablePlusOperateRoot = (props: TablePlusOperateRootProps) => {
  const {
    searchPlaceholder = '请输入',
    onSearch,
    size,
    reverse,
    operateLeftOption,
    rightOption,
    onSelect,
    searchWidth,
    leftOperateClassName,
  } = props;

  return (
    <div
      className={classnames(
        'antd-waffle-tablePlus-operate',
        reverse || !operateLeftOption
          ? 'antd-waffle-tablePlus-operate-reverse'
          : ''
      )}
    >
      <TablePlusOperateLeft
        searchPlaceholder={searchPlaceholder}
        onSearch={onSearch}
        searchWidth={searchWidth}
        leftOperateClassName={leftOperateClassName}
        size={size}
        operateLeftOption={operateLeftOption}
      />
      <TablePlusOperatingRight
        operateRightOption={rightOption}
        onSelect={onSelect}
        size={size}
      />
    </div>
  );
};

export default TablePlusOperateRoot;

import React from 'react';
import { Space, Input } from 'antd';
import TablePlusOperate from '../tablePlusOperate.component';
import { TablePlusLeftOperateProps } from '../type';
import classnames from 'classnames';

const { Search } = Input;

const TablePlusOperateLeft = (props: TablePlusLeftOperateProps) => {
  const {
    searchPlaceholder,
    onSearch,
    searchWidth = 150,
    leftOperateClassName,
    size,
    operateLeftOption,
  } = props;

  const handleClickSearch = (val) => {
    onSearch && onSearch(val)
  }

  if (operateLeftOption || onSearch) {
    return (
      <div
        className={classnames(
          'antd-waffle-table-operate-left',
          leftOperateClassName
        )}
      >
        <Space>
          {onSearch && (
            <Space>
              <Search
                placeholder={searchPlaceholder}
                onSearch={handleClickSearch}
                style={{ width: searchWidth }}
                size={size}
              />
            </Space>
          )}
          {operateLeftOption && (
            <TablePlusOperate styleSize={size} option={operateLeftOption} />
          )}
        </Space>
      </div>
    );
  }
  return null;
};

export default TablePlusOperateLeft;

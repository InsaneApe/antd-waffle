import React from 'react';
import { Space, Input } from 'antd';
import TablePlusOperate from '../tablePlusOperate.component';
import { TablePlusLeftOperateProps } from '../type';
import classnames from 'classnames';

const { Search } = Input;

const TablePlusOperatingLeft = (props: TablePlusLeftOperateProps) => {
  const {
    searchPlaceholder,
    onSearch,
    width = 150,
    leftOperateClassName,
    size,
    option
  } = props;

  if (option || onSearch) {
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
                onSearch={onSearch}
                style={{ width: width }}
                size={size}
              />
            </Space>
          )}
          {option && (
            <TablePlusOperate styleSize={size} option={option} />
          )}
        </Space>
      </div>
    );
  }
  return null;
};

export default TablePlusOperatingLeft;

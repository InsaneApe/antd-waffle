import React, { useContext } from 'react';
import { Space, Input } from 'antd';
import TablePlusOperate from '../tablePlusOperate.component'
import { TablePlusLeftOperateProps } from '../type';
import { TablePlusOptionContext } from '@constants/config-provide';
import classnames from 'classnames';

const { Search } = Input;

const TablePlusOperatingLeft = (props: TablePlusLeftOperateProps) => {
  const { searchPlaceholder, onSearch, width, leftOperateClassName, size } = props;
  const { leftOption } = useContext(TablePlusOptionContext);

  return (
    <div className={classnames("antd-waffle-left", leftOperateClassName)}>
      <Space>
        {
          onSearch && 
          <Space>
            <Search
              placeholder={searchPlaceholder}
              onSearch={onSearch}
              style={{ width: width }}
              size={size}
            />
          </Space>
        }
        <TablePlusOperate option={leftOption} />
      </Space>
    </div>
  );
};


export default TablePlusOperatingLeft;

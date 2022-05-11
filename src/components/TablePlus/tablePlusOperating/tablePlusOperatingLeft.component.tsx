import React, { useContext } from 'react';
import { Space, Input } from 'antd';
import TablePlusOperat from '../tablePlusOperat.component'
import { TablePlusLeftOperatProps } from '../type';
import { TablePlusOptionContext } from '@constants/config-provide';
import classnames from 'classnames';

const { Search } = Input;

const TablePlusOperatingLeft = (props: TablePlusLeftOperatProps) => {
  const { searchPlaceholder, onSearch, width, leftOperatClassName, size } = props;
  const { leftOption } = useContext(TablePlusOptionContext);

  return (
    <div className={classnames("AntdPrivate-left", leftOperatClassName)}>
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
        <TablePlusOperat option={leftOption} />
      </Space>
    </div>
  );
};


export default TablePlusOperatingLeft;

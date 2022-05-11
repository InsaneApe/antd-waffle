import React, { ReactNode, useContext } from 'react';
import { Space, Input } from 'antd';
import TablePlusOperating from '../tablePlusOperating.component'
import { TablePlusOperatingProps } from '../type';
import { TablePlusOptionContext } from '@constants/config-provide';
const { Search } = Input;

const TablePlusOperatingLeft = (props: TablePlusOperatingProps) => {
  const { placeholder, onSearch, children } = props;

  const { leftOption } = useContext(TablePlusOptionContext);

  const onSearchClick = (val: any) => {
    onSearch && onSearch(val);
  };

  return (
    <div className="AntdPrivate-left">
      <Space>
        {
          onSearch && 
          <Space>
            <Search
              placeholder={placeholder}
              onSearch={onSearchClick}
              style={{ width: 200 }}
            />
          </Space>
        }
        <TablePlusOperating option={leftOption} />
      </Space>
      {children}
    </div>
  );
};


export default TablePlusOperatingLeft;

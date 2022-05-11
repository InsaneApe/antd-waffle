import React, { ReactNode, useContext } from 'react';
import { Space, Input } from 'antd';
import TablePlusOperating from '../tablePlusOperating.component'
import { TablePlusOperatingProps } from '../type';
import { TablePlusOptionContext } from '@constants/config-provide';

const { Search } = Input;

const TablePlusOperatingRight = (props: TablePlusOperatingProps) => {
  const { placeholder, onSearch, children} = props;

  const onSearchClick = (val: any) => {
    onSearch && onSearch(val);
  };

  const { rightOption } = useContext(TablePlusOptionContext);

  return (
    <div className="AntdPrivate-right">
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
        <TablePlusOperating option={rightOption}/>
      </Space>
      {children}
    </div>
  );
};


export default TablePlusOperatingRight;
import React from 'react';
import {Space,Input} from 'antd';

const { Search } = Input;

interface TablePlusOperatingLeftProps {
  placeholder?: string ;
  onSearch?: (search: any) =>void ;
}

const TablePlusOperatingLeft = (props: TablePlusOperatingLeftProps) => {
  const { placeholder, onSearch} = props;

  const onSearchClick = (val: any) => {
    onSearch && onSearch(val);
  }

  return (
    <div className="AntdPrivate-left">
      <Space>
        <Search
          placeholder={placeholder}
          onSearch={onSearchClick}
          style={{ width: 200 }}
        />
      </Space>
    </div>
  );
};


export default TablePlusOperatingLeft;

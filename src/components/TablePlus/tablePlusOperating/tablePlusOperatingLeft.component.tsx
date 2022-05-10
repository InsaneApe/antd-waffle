import React, {ReactNode} from 'react';
import {Space,Input} from 'antd';

const { Search } = Input;

interface TablePlusOperatingLeftProps {
  placeholder?: string ;
  onSearch?: (search: any) =>void;
  children?: ReactNode;
  size?: "large" | "middle" | "small"
}

const option = [{
  label:"新增",
  type:'button',
  onClick: () =>{
    console.log(1);
  },
  buttonType:'primary',
  disabled: false
},{
  label:'新增',
  type:'input',
  onChange:(value: any) =>{
    console.log(value);
  },
  disabled: false
},{
  label:'新增',
  type:'select',
  onChange:(value: any) =>{
    console.log(value);
  },
  option:[{
    label:'abc',
    value:'abc'
  },{
    label:'abc',
    value:'abc'
  }]
}]

const TablePlusOperatingLeft = (props: TablePlusOperatingLeftProps) => {
  const { placeholder, onSearch, children} = props;

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
      <Space>
        <Search
          placeholder={placeholder}
          onSearch={onSearchClick}
          style={{ width: 200 }}
        />
      </Space>
      {children}
    </div>
  );
};


export default TablePlusOperatingLeft;

import React, {ReactNode} from 'react';
import {Space,Input, Button} from 'antd';
import { TablePlusOperatingLeftProps, TablePlusOperatingLeftOptions } from '../type';

const { Search } = Input;

const option:TablePlusOperatingLeftOptions[] = [{
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
},{
  label:'导出',
  type:'export',
},{
  label:'导入',
  type:'import',
}
]

const TablePlusOperatingLeft = (props: TablePlusOperatingLeftProps) => {
  const { placeholder, onSearch, children} = props;

  const onSearchClick = (val: any) => {
    onSearch && onSearch(val);
  };

  const renderButton = (params, index) => {
    const {label, buttonType, ...other} = params;
    if(buttonType === 'danger'){
      return (
        <Button
        key={`AntdPrivat-button-item-${index}`}
       {...other}
       danger
       >
        {label}
      </Button>
      )
    }
    return (
      <Button
        key={`AntdPrivat-button-item-${index}`}
       {...other}
       type={buttonType}
       >
        {label}
      </Button>
    );
  };

  return (
    <div className="AntdPrivate-left">
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
      <Space>
        {
          option.map((item,index) => {
            console.log(item);
            if(item.type == 'button'){
              return renderButton(item, index);
            }
          })
        }
      </Space>
      {children}
    </div>
  );
};


export default TablePlusOperatingLeft;

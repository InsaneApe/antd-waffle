import React, { FC } from 'react';
import { Space,Input, Button, Select  } from 'antd';

import { TablePlusOperateOptions } from './type';

interface ITablePlusOperating {
  option: TablePlusOperateOptions[];
}

const { Option } = Select;

const TablePlusOperate: FC<ITablePlusOperating> = ({ option }) => {

  const renderButton = (params, index) => {
    const {label, buttonType, ...other} = params;
    console.log(other);
    if(buttonType === 'danger'){
      return (
        <Button
        key={`antd-waffle-button-item-${index}`}
       {...other}
       danger
       >
        {label}
      </Button>
      )
    }
    return (
      <Button
        key={`antd-waffle-button-item-${index}`}
       {...other}
       type={buttonType}
       >
        {label}
      </Button>
    );
  };

  const renderInput = (params, index) => {
    const {label, disabled, ...other} = params;

    if(disabled === true){
      return (
        <Input
          key={`antd-waffle-input-item-${index}`}
          placeholder={label}
          disabled
          {...other}
        />
      )
    }
    return (
      <Input
        key={`antd-waffle-input-item-${index}`}
        placeholder={label}
        {...other}
      />
    )
  };

  const renderSelect = (params, index) => {
    const {onChange, label, option } = params;
    return (
      <Select
        key={`antd-waffle-select-item-${index}`}
        placeholder={label}
        onChange={onChange}
      >
        {
          option && option.map((item, index) => {
            return <Option value={item.value} key={`antd-waffle-Select-Option-item-${index}`}>{item.label}</Option>
          })
        }
      </Select>
    )
  };

  const renderExport = (params, index) => {
    const { label, type } = params;

    console.log(label, type, index);

  };

  const renderImport = (params, index) => {
    const { label, type } = params;

    console.log(label, type, index);
  };

  return (
    <div className="antd-waffle-tablePlusOperate">
      <Space>
      {
        option && option.map((item,index) => {
            if(item.type == 'button'){
              return renderButton(item, index);
            }

            if(item.type == 'input') {
              return renderInput(item, index)
            }

            if(item.type == 'select') {
              return renderSelect(item, index);
            }

            if(item.type == 'export') {
              return renderExport(item, index);
            }

            if(item.type == 'import') {
              return renderImport(item, index);
            }
          })
        }
      </Space>
    </div>
  );
};

export default TablePlusOperate;

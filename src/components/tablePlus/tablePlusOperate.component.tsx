import React, { FC } from 'react';
import { Space, Input, Button, Select } from 'antd';

import { TablePlusOperateOptions } from './type';

interface ITablePlusOperating {
  option: TablePlusOperateOptions[];
  styleSize?: 'large' | 'middle' | 'small';
}

const { Option } = Select;

const TablePlusOperate: FC<ITablePlusOperating> = (props) => {
  const { option, styleSize } = props;

  const renderButton = (params, index) => {
    const { label, buttonType, size, ...other } = params;

    if (buttonType.type === 'danger') {
      return (
        <Button
          key={`antd-waffle-button-item-${index}`}
          {...other}
          size={size ? size : styleSize}
          danger
        >
          {label}
        </Button>
      );
    }
    return (
      <Button
        key={`antd-waffle-button-item-${index}`}
        {...other}
        type={buttonType.type}
        size={size ? size : styleSize}
      >
        {label}
      </Button>
    );
  };

  const renderInput = (params, index) => {
    const { label, disabled, size, ...other } = params;

    if (disabled === true) {
      return (
        <Input
          key={`antd-waffle-input-item-${index}`}
          placeholder={label}
          disabled
          size={size ? size : styleSize}
          {...other}
        />
      );
    }
    return (
      <Input
        key={`antd-waffle-input-item-${index}`}
        placeholder={label}
        size={size ? size : styleSize}
        {...other}
      />
    );
  };

  const renderSelect = (params, index) => {
    const { onChange, label, size, option } = params;
    return (
      <Select
        key={`antd-waffle-select-item-${index}`}
        placeholder={label}
        onChange={onChange}
        size={size ? size : styleSize}
      >
        {option &&
          option.map((item, index) => {
            return (
              <Option
                value={item.value}
                key={`antd-waffle-Select-Option-item-${index}`}
              >
                {item.label}
              </Option>
            );
          })}
      </Select>
    );
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
        {option.map((item, index) => {
          if (item.type === 'button') {
            return renderButton(item, index);
          }

          if (item.type === 'input') {
            return renderInput(item, index);
          }

          if (item.type === 'select') {
            return renderSelect(item, index);
          }

          if (item.type === 'export') {
            return renderExport(item, index);
          }
          if (item.type === 'import') {
            return renderImport(item, index);
          }
        })}
      </Space>
    </div>
  );
};

export default TablePlusOperate;

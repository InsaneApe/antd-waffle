import React from 'react';
import { Space, Select } from 'antd';
import TablePlusOperate from '../tablePlusOperate.component';
import { TablePlusRightOperateProps } from '../type';
import classnames from 'classnames';

const { Option } = Select;

const TablePlusOperatingRight = (props: TablePlusRightOperateProps) => {

    const {operateRightOption, onSelect,rightOperateClassName} = props;

    const handleSelect = (value: any) =>{
      onSelect && onSelect(value)
    };

    return (
      <div className={classnames("antd-waffle-right",rightOperateClassName)}>
        <Space>
          <Select
            placeholder="请选择"
            style={{ width: 90 }}
            onChange={handleSelect}
          >
            <Option value={'import'}>导入</Option>
            <Option value={'export'}>导出</Option>
          </Select>
          {
            operateRightOption && <TablePlusOperate option={operateRightOption} />
          }   
        </Space>
      </div>
    );
};

export default TablePlusOperatingRight;

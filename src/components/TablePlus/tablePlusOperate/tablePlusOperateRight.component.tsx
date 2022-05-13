import React from 'react';
import { Space, Button, Select } from 'antd';
import TablePlusOperate from '../tablePlusOperate.component';
import { TablePlusRightOperateProps } from '../type';

const { Option } = Select;

const TablePlusOperatingRight = (props: TablePlusRightOperateProps) => {

    const {option,onSelect} = props;

    const handleSelect = (value: any) =>{
      onSelect && onSelect(value)
    };

    return (
      <div className="antd-waffle-right">
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
            option && <TablePlusOperate option={option} />
          }   
        </Space>
      </div>
    );
};

export default TablePlusOperatingRight;

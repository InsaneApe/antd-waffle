import React, { useContext } from 'react';
import { Space, Button, Select } from 'antd';
import TablePlusOperate from '../tablePlusOperate.component'
import { TablePlusOperateProps } from '../type';
import { TablePlusOptionContext } from '@constants/config-provide';

const { Option } = Select;

const TablePlusOperatingRight = (props: TablePlusOperateProps) => {
  const {  children} = props;

  const { rightOption } = useContext(TablePlusOptionContext);

  return (
    <div className="antd-waffle-right">
       <TablePlusOperate option={rightOption}/>
       <div className="antd-waffle-right">
          <Space>
            <Button type="primary">新增</Button>
            <Button danger type="primary">
              删除
            </Button>
            <Select
              placeholder="请选择"
              style={{ width: 90 }}
              // onChange={handClick}
            >
              <Option value={'import'}>导入</Option>
              <Option value={'export'}>导出</Option>
            </Select>
          </Space>
        </div>
      {children}
    </div>
  );
};


export default TablePlusOperatingRight;
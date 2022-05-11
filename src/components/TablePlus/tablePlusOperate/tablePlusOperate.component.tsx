import React from 'react';
import {Button,Space,Select} from 'antd';
import classnames from 'classnames';
import TablePlusOperatingLeft from './tablePlusOperateLeft.component';
import TablePlusOperatingRight from './tablePlusOperateRight.component';


const { Option } = Select;

interface TablePlusOperatingProps {
  searchPlaceholder?: string;
  onSearch?: (search: any) =>void;
  size?: "large" | "middle" | "small";
}

const TablePlusOperate = (props: TablePlusOperatingProps) => {
  const { searchPlaceholder='请输入', onSearch } = props;
  const handClick = (val: any) => {
    console.log(val);
  };

  return (
    <div className={classnames('AntdPrivat-tablePlus-operating')}>
      <TablePlusOperatingLeft
        onSearch={onSearch}
        placeholder={searchPlaceholder} 
      />
      <TablePlusOperatingRight
        onSearch={onSearch}
        placeholder={searchPlaceholder} 
      />
      <div className="AntdPrivate-right">
        <Space>
          <Button type="primary">新增</Button>
          <Button danger type="primary">
            删除
          </Button>
          <Select
            placeholder="请选择"
            style={{ width: 90 }}
            onChange={handClick}
          >
            <Option value={'import'}>导入</Option>
            <Option value={'export'}>导出</Option>
          </Select>
        </Space>
        
      </div>
    </div>
  );
};


export default TablePlusOperate;

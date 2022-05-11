import React, { useContext, ReactNode } from 'react';
import { Table, TableProps } from 'antd';
import TablePlusTitle from './tablePlusTitle.component';
import TablePlusOperate from './tablePlusOperate/tablePlusOperate.component'
import classnames from 'classnames';
import './tablePlus.component.less';
import { ConfigContext, TablePlusOptionContext } from '@constants/config-provide';
import { TablePlusOperatingOptions } from './type';

export interface TablePlusProps<RecordType>
  extends Omit<TableProps<RecordType>, 'title'> {
  title?: ReactNode | string;
  className?: string;
  option?: TablePlusOperatingOptions[]
}

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const col = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function TablePlus<RecordType extends object = any>(
  props: TablePlusProps<RecordType>
) {
  const { title, className, option } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tablePlus-container-root');


  return (
    <TablePlusOptionContext.Provider value={{
      leftOption: option,
      rightOption: option
    }}>
      <div className={classnames(prefixCls, className)}>
        <TablePlusTitle
          title={title}
        />
        <TablePlusOperate
          onSearch={(val)=>{console.log(val)}}
        />
        <Table columns={col} dataSource={dataSource} />
      </div>
    </TablePlusOptionContext.Provider>
  );
}

export default TablePlus;

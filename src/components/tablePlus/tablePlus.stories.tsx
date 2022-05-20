import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TablePlus from './tablePlus.component';
import { tableData } from '@constants/tableData';

export default {
  title: 'UI components/TablePlus',
  component: TablePlus,
} as ComponentMeta<typeof TablePlus>;

const Template: ComponentStory<typeof TablePlus> = (args) => (
  <TablePlus {...args} />
);

export const TablePlusComponent = Template.bind({});
export const TablePlusLeftComponent = Template.bind({});
export const TablePlusRightComponent = Template.bind({});

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows:any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: any) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

TablePlusComponent.args = {
  size: 'small',
  title: '表格标题',
  rowSelection:{
    type: 'checkbox',
    ...rowSelection,
  },
  dataSource: tableData,
  columns: [
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
  ],
  rightOption: [
    {
      label: '新增',
      styleType: 'button',
      onClick: () => {
        console.log(1);
      },
      buttonType: {
        styleType: 'primary'
      },
      disabled: false,
      size: 'large',
    },
    {
      label: '新增',
      styleType: 'input',
      onChange: (value: any) => {
        console.log(value);
      },
      disabled: false,
    },
    {
      label: '新增',
      styleType: 'select',
      onChange: (value: any) => {
        console.log(value);
      },
      option: [
        {
          label: 'abc',
          value: 'abc',
        },
        {
          label: 'abcd',
          value: 'abcd',
        },
      ],
    },
    {
      label: '导出',
      styleType: 'export',
    },
    {
      label: '导入',
      styleType: 'import',
    },
  ],
};

TablePlusLeftComponent.args = {
  title: '表格标题',
  dataSource: tableData,
  columns: [
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
  ],
  leftOption: [
    {
      label: '新增',
      styleType: 'button',
      onClick: () => {
        console.log(1);
      },
      buttonType: {
        styleType: 'primary'
      },
      disabled: false,
      size: 'middle',
    },
    {
      label: '新增',
      styleType: 'input',
      onChange: (value: any) => {
        console.log(value);
      },
      disabled: false,
    },
    {
      label: '新增',
      styleType: 'select',
      onChange: (value: any) => {
        console.log(value);
      },
      option: [
        {
          label: 'abc',
          value: 'abc',
        },
        {
          label: 'abcd',
          value: 'abcd',
        },
      ],
    },
    {
      label: '导出',
      styleType: 'export',
    },
    {
      label: '导入',
      styleType: 'import',
    },
  ],
};

TablePlusRightComponent.args = {
  title: '表格标题',
  dataSource: tableData,
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ],
  // rightOption: [
  //   {
  //     label: '新增',
  //     type: 'button',
  //     onClick: () => {
  //       console.log(1);
  //     },
  //     buttonType: {
  //       type: 'primary'
  //     },
  //     disabled: false,
  //     size: 'large',
  //   },
  //   {
  //     label: '新增',
  //     type: 'input',
  //     onChange: (value: any) => {
  //       console.log(value);
  //     },
  //     disabled: false,
  //   },
  //   {
  //     label: '新增',
  //     type: 'select',
  //     onChange: (value: any) => {
  //       console.log(value);
  //     },
  //     option: [
  //       {
  //         label: 'abc',
  //         value: 'abc',
  //       },
  //       {
  //         label: 'abcd',
  //         value: 'abcd',
  //       },
  //     ],
  //   },
  //   {
  //     label: '导出',
  //     type: 'export',
  //   },
  //   {
  //     label: '导入',
  //     type: 'import',
  //   },
  // ],
};


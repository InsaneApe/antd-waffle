import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TablePlus from './tablePlus.component';

export default {
  title: 'UI components/TablePlus',
  component: TablePlus,
} as ComponentMeta<typeof TablePlus>;

const Template: ComponentStory<typeof TablePlus> = (args) => (
  <TablePlus {...args} />
);

export const TablePlusComponent = Template.bind({});

TablePlusComponent.args = {
  title: '表格标题',
  option: [{
    label:"新增",
    type:'button',
    onClick: () =>{
      console.log(1);
    },
    buttonType: 'primary',
    disabled: false,
    size: 'large'
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
      label:'abcd',
      value:'abcd'
    }]
  },{
    label:'导出',
    type:'export',
  },{
    label:'导入',
    type:'import',
  }]
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TablePlus  from './tablePlus.component';

export default {
  title: 'UI components/TablePlus',
  component: TablePlus,
} as ComponentMeta<typeof TablePlus>;

const Template: ComponentStory<typeof TablePlus> = (args) => <TablePlus {...args} />;

export const TablePlusComponent = Template.bind({});

TablePlusComponent.args = {
  title:'表格标题'
};
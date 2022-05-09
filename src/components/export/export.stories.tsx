import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExportComponent from './export.components';

export default {
  title: 'UI components/Export',
  component: ExportComponent,
  argTypes: {},
} as ComponentMeta<typeof ExportComponent>;

const Template: ComponentStory<typeof ExportComponent> = (args) => <ExportComponent {...args} />;

export const Default = Template.bind({});

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

Default.args = {
  data: csvData,
  type: 'primary'
};
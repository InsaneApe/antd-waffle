import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PieComponent from './pie.components';

export default {
  title: 'UI components/Charts',
  component: PieComponent,
  argTypes: {},
} as ComponentMeta<typeof PieComponent>;

const Template: ComponentStory<typeof PieComponent> = (args) => <PieComponent {...args} />;

export const Pie = Template.bind({});
const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: '其他',
    value: 5,
  },
];

Pie.args = {
  appendPadding: 10,
  data,
  angleField: 'value',
  colorField: 'type',
  radius: 0.9,
  label: {
    type: 'inner',
    offset: '-30%',
    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    style: {
      fontSize: 14,
      textAlign: 'center',
    },
  },
  interactions: [
    {
      type: 'element-active',
    },
  ],
}

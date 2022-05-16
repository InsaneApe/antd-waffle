import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LineComponent from './line.components';
import { multipleLineData, lineData } from '../data';

export default {
  title: 'UI components/Charts',
  component: LineComponent,
  argTypes: {},
} as ComponentMeta<typeof LineComponent>;

const Template: ComponentStory<typeof LineComponent> = (args) => <LineComponent {...args} />;

export const Line = Template.bind({});
export const MultipleLine = Template.bind({});


Line.args = {
  data: lineData,
  padding: 'auto',
  xField: 'Date',
  yField: 'scales',
  xAxis: {
    type: 'timeCat',
    tickCount: 5,
  },
}

MultipleLine.args = {
  data: multipleLineData,
  xField: 'year',
  yField: 'value',
  seriesField: 'category',
  xAxis: {
    type: 'time',
  },
  yAxis: {
    label: {
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
  },
}
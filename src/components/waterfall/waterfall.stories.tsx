import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Waterfall } from '../../index';

const dataImages = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/400',
  'https://picsum.photos/300/300',
  'https://picsum.photos/250/300',
  'https://picsum.photos/200/320',
  'https://picsum.photos/300/400',
  'https://picsum.photos/200/300',
  'https://picsum.photos/150/100',
  'https://picsum.photos/100/320',
  'https://picsum.photos/580/320',
  'https://picsum.photos/580/300',
  'https://picsum.photos/580/300',
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI components/Waterfall',
  component: Waterfall,
  argTypes: {
    source: {
      description: '图片地址的数组',
      defaultValue: {},
    },
    className: {
      description: '额外的class名',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Waterfall> = (args) => (
  <Waterfall {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  source: dataImages,
  waterFallSetting: {
    margin: { x: 10, y: 30 },
    columns: 3,
  },
};

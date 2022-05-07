import React from 'react';
import { ComponentStory } from '@storybook/react';
import WaterFall from './waterfall';

const dataImages = [
  "https://picsum.photos/640/200/?random",
  "https://picsum.photos/360/640/?random",
  "https://picsum.photos/480/720/?random",
  "https://picsum.photos/480/640/?random",
  "https://picsum.photos/360/?random",
  "https://picsum.photos/360/520/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/520/360/?random",
]


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI components/WaterFall',
  component: WaterFall,
  argTypes: {
    source: {
      description: '图片地址的数组',
      defaultValue: {},
    },
    className: {
      description: '额外的class名',
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WaterFall> = (args) => <WaterFall {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  source :dataImages,
  waterFallSetting:{}
};

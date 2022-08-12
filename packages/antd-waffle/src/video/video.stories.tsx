import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Video } from '@fengbeans/antd-waffle';
import Demo from '../ui/video/badapple.mp4';

export default {
  title: 'UI components/Video',
  component: Video,
  argTypes: {},
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;


export const Primary = Template.bind({});

Primary.args = {
  src: Demo
};

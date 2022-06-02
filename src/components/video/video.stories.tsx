import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Video } from './index';

export default {
  title: 'UI components/Video',
  component: Video,
  argTypes: {},
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;


export const Primary = Template.bind({});

Primary.args = {
  // src: 'http://localhost:6006/static/media/ui/video/dome1.mp4'
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VideoComponent } from './index';

export default {
  title: 'UI components/Video',
  component: VideoComponent,
  argTypes: {},
} as ComponentMeta<typeof VideoComponent>;

const Template: ComponentStory<typeof VideoComponent> = (args) => <VideoComponent {...args} />;


export const Primary = Template.bind({});

Primary.args = {
  // src: 'http://localhost:6006/static/media/ui/video/dome1.mp4'
};

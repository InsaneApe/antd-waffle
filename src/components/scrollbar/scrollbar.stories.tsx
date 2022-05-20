import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Scrollbar from './scrollbar.component';

export default {
  title: 'UI components/Scrollbar',
  component: Scrollbar,
  argTypes: {},
} as ComponentMeta<typeof Scrollbar>;

const Template: ComponentStory<typeof Scrollbar> = (args) => <Scrollbar {...args} />;

export const Default = Template.bind({});


const list = [12, 123, 1234, 12345, 123456, 1234567, 12345678];
const children = (
  <div>
    <ul>
      {list.map(item => (
        <li key={Math.random()}>{item}</li>
      ))}  
    </ul>
  </div>
);


Default.args = {
  children
}
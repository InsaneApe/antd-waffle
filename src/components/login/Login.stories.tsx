import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginComponent } from './login.component';

export default {
  title: 'UI components/Login',
  component: LoginComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginComponent>;

const Template: ComponentStory<typeof LoginComponent> = (args) => <LoginComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};
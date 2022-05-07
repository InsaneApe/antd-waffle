import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginComponent from "./login.component"

export default {
  title: 'UI components/Login',
  component: LoginComponent,
  argTypes: {},
} as ComponentMeta<typeof LoginComponent>;

const Template: ComponentStory<typeof LoginComponent> = (args) => <LoginComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  email: '登录使用的邮箱',
  password: '登录使用的密码',
  isRememberMe: true,
  handleChangeEmail: ()=> { },
  handleChangePassword: ()=> { },
  handleChangeRememberMe: () => { },
  handleLogin: () => { console.log('Login Success') }
};
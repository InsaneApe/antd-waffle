import React from 'react';
import { ComponentStory } from '@storybook/react';
import LeftToRightLogin from './leftToRightLogin';
import {Form, Input, Button, message} from 'antd';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI components/LeftToRightLogin',
  component: LeftToRightLogin,
  argTypes: {

  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LeftToRightLogin> = (args) => <LeftToRightLogin {...args} />;

const onFinish = () => {
  message.success('登录成功');
}

const onFinishFailed = () => {
  message.warn('登录失败');
}


const FormLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}
const LoginForm = () => {
  return (
    <Form
      {...FormLayout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="账号"
        name="username"
        rules={[{ required: true, message: '请输入你的账号!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入你的密码!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  logo :"http://localhost:6006/static/media/ui/image/shewai_logo.jpg",
  slogan:"http://localhost:6006/static/media/ui/image/shewai_logo.jpg",
  backgroundImg:'http://localhost:6006/static/media/ui/image/demo3.jpg',
  background:"#f0f0f0",
  statement:'湖南备案123456号',
  children:<LoginForm />
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginComponent from "./login.component"
import { Form, Input, Checkbox, Button, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from '@ant-design/icons';


export default {
  title: 'UI components/Login',
  component: LoginComponent,
  argTypes: {},
} as ComponentMeta<typeof LoginComponent>;

const Template: ComponentStory<typeof LoginComponent> = (args) => <LoginComponent {...args} />;

const onLogin = (values: any) => {
  console.log('Failed:', values.errorFields && values.errorFields.length);
  if (values.errorFields && values.errorFields.length > 0) {
    return message.warn('登录失败');;
  }
  console.log('Success:', values);
  setTimeout(() => {
    message.success('登录成功');
  }, 3000);
}

const children = (
  <Form
    name="basic"
    layout="vertical"
    initialValues={{ layout: "Vertical" }}
    onFinish={onLogin}
    onFinishFailed={onLogin}
    autoComplete="off"
    className='formBody'
  >
    <p className='title'>SIGN IN</p>
    <Form.Item
      name="email"
      rules={[{ required: true, message: '' }]}
    >
      <Input
        placeholder="Enter you email"
        prefix={<UserOutlined />}
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: '' }]}
    >
      <Input.Password
        placeholder="Enter you password"
        type="password"
        prefix={<LockOutlined />}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </Form.Item>
    <Form.Item name="remember" valuePropName="checked">
      <Checkbox>
        Remember me
      </Checkbox>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" block>
        Sign In
      </Button>
    </Form.Item>
  </Form>
);

export const Primary = Template.bind({});

Primary.args = {
  backImageUrl: 'http://localhost:6006/static/media/ui/image/demo3.jpg',
  children: children
};
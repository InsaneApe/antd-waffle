import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Input, Checkbox, Button, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from '@ant-design/icons';
import demo3 from '../ui/image/demo3.jpg';
import logo from '../ui//image/shewai_logo.jpg';
import whitetext from '../ui//image/whitetext.png';
import { Login } from "@fengbeans/antd-waffle";
import './style/index';

export default {
  title: 'UI components/Login',
  component: Login,
  argTypes: {},
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

const onLogin = (values: any) => {
  if (values.errorFields && values.errorFields.length > 0) {
    return message.warn('登录失败');;
  }
  return setTimeout(() => {
    message.success('登录成功');
  }, 3000);
}

const LoginFormDefault =() => (
  <Form
    name="basic"
    layout="vertical"
    initialValues={{ layout: "Vertical" }}
    onFinish={onLogin}
    onFinishFailed={onLogin}
    autoComplete="off"
  >
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

const FormLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
}

const LoginForm = () => (
  <Form
    {...FormLayout}
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onLogin}
    onFinishFailed={onLogin}
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
);

export const Default = Template.bind({});
export const LeftToRight = Template.bind({});

Default.args = {
  logo : logo,
  slogan: whitetext,
  backImageUrl: demo3,
  children: <LoginFormDefault />,
  statement: '湖南备案123456号',
  formTitle: "sign in"
};

LeftToRight.args = {
  logo : whitetext,
  slogan: whitetext,
  backImageUrl: demo3,
  background:"#F0F2F5",
  statement: '湖南备案123456号',
  isLeftAndRight: true,
  formTitle: "sign in",
  children:<LoginForm />
} 
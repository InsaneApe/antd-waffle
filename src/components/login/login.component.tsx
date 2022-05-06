import React, { useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import 'antd/dist/antd.css';
import './login.css';

export interface LoginComponentProps {
  email?: string;
  password?: string;
  isRememberMe?: boolean;
  handleChangeEmail?: () => void;
  handleChangePassword?: () => void;
  handleChangeRememberMe?: () => void;
}

export const LoginComponent = (props: LoginComponentProps) => {
  const { email, password, isRememberMe, handleChangeEmail, handleChangePassword, handleChangeRememberMe } = props;

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='content'>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{layout: "Vertical"}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Enter you email"
          name="email"
          rules={[{ required: true, message: 'The email is required.' }]}
        >
          <Input placeholder="Please input your email!" value={email} onChange={handleChangeEmail} />
        </Form.Item>
        <Form.Item
          label="Enter you password"
          name="password"
          rules={[{ required: true, message: 'The password is required.' }]}
        >
          <Input placeholder="Please input your password!" value={password} onChange={handleChangePassword} />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox value={isRememberMe} onChange={handleChangeRememberMe}>
            Remember me
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

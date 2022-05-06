import React, { useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css';

export interface LoginComponentProps {
  email?: string;
  password?: string;
  isRememberMe?: boolean;
  handleChangeEmail?: () => void;
  handleChangePassword?: () => void;
  handleChangeRememberMe?: () => void;
  handleLogin?: () => void;
}

export const LoginComponent = (props: LoginComponentProps) => {
  const { email, password, isRememberMe, handleChangeEmail, handleChangePassword, handleChangeRememberMe, handleLogin } = props;

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const onLogin = (values: any) => {
    console.log('Failed:', values.errorFields && values.errorFields.length);
    setIsLogin(true);
    if (values.errorFields && values.errorFields.length > 0) {
      return setIsLogin(false);
    }
    console.log('Success:', values);
    handleLogin();
    setTimeout(() => {
      setIsLogin(false);
    }, 3000);
  }

  return (
    <div className='content'>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{layout: "Vertical"}}
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
            value={email} onChange={handleChangeEmail}
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
            value={password}
            onChange={handleChangePassword}
            prefix={<LockOutlined />}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox value={isRememberMe} onChange={handleChangeRememberMe}>
            Remember me
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block disabled={isLogin}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

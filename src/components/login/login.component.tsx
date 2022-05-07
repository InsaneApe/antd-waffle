import React, { useContext, useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { ConfigContext } from '@constants/config-provide';
import './login.less';

export interface LoginComponentProps {
  email?: string;
  password?: string;
  isRememberMe?: boolean;
  className?: string;
  handleChangeEmail?: () => void;
  handleChangePassword?: () => void;
  handleChangeRememberMe?: () => void;
  handleLogin?: () => void;
  
}

const LoginComponent = (props: LoginComponentProps) => {
  const { email, password, isRememberMe, className, handleChangeEmail, handleChangePassword, handleChangeRememberMe, handleLogin } = props;

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('login');

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
    <div className={classnames(prefixCls, className)}>
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

export default LoginComponent;
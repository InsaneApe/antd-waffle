import React, { useContext } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '@constants/config-provide';
import './login.less';

export interface LoginComponentProps {
  className?: string;
  backImageUrl?: string
  children: React.ReactNode
}

const LoginComponent = (props: LoginComponentProps) => {
  const { className, backImageUrl, children } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('login');

  return (
    <div
      className={classnames(prefixCls, className)}
      style={{
        backgroundImage: `url(${backImageUrl})`,
        backgroundRepeat: "round"
      }}
    >
      {children}
    </div>
  );
};

export default LoginComponent;
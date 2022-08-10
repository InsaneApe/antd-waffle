import React, { useContext, ReactNode,FC  } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../constants/config-provide';

export interface ILoginProps {
  className?: string;
  backImageUrl?: string;
  isLeftAndRight?: boolean;
  background?: string,
  slogan?: string,
  logo?: string,
  children: ReactNode;
  statement?: ReactNode;
}

const Login:FC<ILoginProps> = (props ) => {
  const { className, backImageUrl, children, isLeftAndRight, background, slogan, logo, statement } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const loginPrefixCls = getPrefixCls('login');
  const leftAndRightLoginPrefixCls = getPrefixCls('leftAndRight-login-root');
  if (!isLeftAndRight) {
    return (
      <div
        className={classnames(loginPrefixCls, className)}
        style={{
          backgroundImage: `url(${backImageUrl})`,
          backgroundRepeat: "round"
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={classnames(leftAndRightLoginPrefixCls)}>
      <div
        className='antd-waffle-left-container'
        style={{
          backgroundImage: `url(${backImageUrl})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img className='antd-waffle-left-slogan' src={slogan} />
      </div>
      <div className='antd-waffle-right-container' style={{ background: `${background}` }}>
        <div className='antd-waffle-wrapper'>
          <div>
            <div style={{textAlign:'center'}}>
            {
              logo && <img className='antd-waffle-logo' src={logo} alt="logo" />
            }
            </div>
            <div className='antd-waffle-form-container'>
              {children}
            </div>
          </div>
        </div>
        <div className='antd-waffle-statement'>
          {statement}
        </div>
      </div>
    </div>
  );
};

export default Login;
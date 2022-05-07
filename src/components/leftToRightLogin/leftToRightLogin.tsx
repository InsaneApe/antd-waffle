import React, { useContext, FC } from 'react';
import { ConfigContext } from '@constants/config-provide/context';
import classnames from 'classnames';
import './leftToRightLogin.less';
import { LeftToRightLoginProps } from './types';

const LeftToRightLogin: FC<LeftToRightLoginProps> = (props) => {
  const {
    backgroundImg,
    background,
    slogan,
    logo,
    children,
    statement
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('login-container-root');
  return (
    <div className={classnames(prefixCls)}>

      <div
        className='AntdPrivate-left-container'
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img className='AntdPrivate-left-slogan' src={slogan} />
      </div>

      <div className='AntdPrivate-right-container' style={{ background: `${background}` }}>
        <div className='AntdPrivate-wrapper'>
          <div>
            <div style={{textAlign:'center'}}>
            {
              logo && <img className='AntdPrivate-logo' src={logo} alt="logo" />
            }
            </div>
            <div className='AntdPrivate-form-container'>
              {children}
            </div>
          </div>
        </div>
        <div className='AntdPrivate-statement'>
          {statement}
        </div>
      </div>

    </div>
  );
}

export default LeftToRightLogin;

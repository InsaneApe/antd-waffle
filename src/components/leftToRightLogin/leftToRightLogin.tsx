import React, { useContext, FC, ReactNode } from 'react';
import { ConfigContext } from '@constants/config-provide/context';
import classnames from 'classnames';
import './leftToRightLogin.less';


export interface LeftToRightLoginProps {
  backgroundImg?: string
  background?: string
  slogan?: string
  logo?: string
  statement: string | ReactNode
}

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
        className='MuiPlus-left-container'
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img className='MuiPlus-left-slogan' src={slogan} />
      </div>

      <div className='MuiPlus-right-container' style={{ background: `${background}` }}>
        <div className='MuiPlus-wrapper'>
          <div>
            <div style={{textAlign:'center'}}>
            {
              logo && <img className='MuiPlus-logo' src={logo} alt="logo" />
            }
            </div>
            <div className='MuiPlus-form-container'>
              {children}
            </div>
          </div>
        </div>
        <div className='MuiPlus-statement'>
          {statement}
        </div>
      </div>

    </div>
  );
}

export default LeftToRightLogin;

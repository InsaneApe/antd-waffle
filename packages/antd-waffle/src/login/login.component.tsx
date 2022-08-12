import React, { useContext, ReactNode, FC } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../constants/config-provide';

export interface ILoginProps {
  className?: string;
  formTitle?: string;
  backImageUrl?: string;
  isLeftAndRight?: boolean;
  background?: string;
  slogan?: string;
  logo?: string;
  children: ReactNode;
  statement?: ReactNode;
}

const Login: FC<ILoginProps> = (props) => {
  const {
    className,
    backImageUrl,
    children,
    isLeftAndRight,
    background,
    slogan,
    logo,
    statement,
    formTitle,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const loginPrefixCls = getPrefixCls('login');
  const leftAndRightLoginPrefixCls = getPrefixCls('leftAndRight-login');

  if (!isLeftAndRight) {
    return (
      <div
        className={classnames(loginPrefixCls, className)}
        style={{
          backgroundImage: `url(${backImageUrl})`,
          backgroundRepeat: 'round',
        }}
      >
        <div className={classnames(`${loginPrefixCls}-slogan`)}>
          <img className="antd-waffle-login-slogan" src={slogan} />
        </div>
        <div className={classnames(`${loginPrefixCls}-form`)}>
          <p className={classnames(`${loginPrefixCls}-title`)}>{formTitle}</p>
          {children}
        </div>
        <div className={classnames(`${loginPrefixCls}-statement`)}>
          {statement}
        </div>
      </div>
    );
  }

  return (
    <div className={classnames(leftAndRightLoginPrefixCls, className)}>
      <div
        className={`${leftAndRightLoginPrefixCls}-left-container`}
        style={{
          backgroundImage: `url(${backImageUrl})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          className={`${leftAndRightLoginPrefixCls}-left-slogan`}
          src={slogan}
        />
      </div>
      <div
        className={`${leftAndRightLoginPrefixCls}-right-container`}
        style={{ background: `${background}` }}
      >
        <div className={`${leftAndRightLoginPrefixCls}-wrapper`}>
          <div className={`${leftAndRightLoginPrefixCls}-header`}>
            {logo && (
              <img
                className={`${leftAndRightLoginPrefixCls}-logo`}
                src={logo}
                alt="logo"
              />
            )}
            {
              <p className={classnames(`${leftAndRightLoginPrefixCls}-title`)}>
                {formTitle}
              </p>
            }
          </div>
          <div className={`${leftAndRightLoginPrefixCls}-container`}>
            {children}
          </div>
        </div>
        <div className={`${leftAndRightLoginPrefixCls}-statement`}>
          {statement}
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, {  useRef } from 'react';
import classnames from 'classnames';
import './style/index.less';

export interface IScrollbarProps {
  children?: React.ReactNode;
  height?: string;
  className?: string;
  onScroll?: () => void;
  prefixClsScrollbar?: string;
}

const prefixCls = 'antd-waffle';

const Scrollbar = (props: IScrollbarProps) => {
  const { children, height, className, onScroll, prefixClsScrollbar } = props;
  const scrollRef = useRef(null);

  const handelOnScroll = () => {
    const height = parseInt(scrollRef.current.scrollTop + 1) + scrollRef.current.clientHeight;
    console.log(height, scrollRef.current.scrollHeight);
    if (height >= scrollRef.current.scrollHeight) {
      return onScroll();
    }
    return;
  };
  
  return (
    <div
      ref={scrollRef}
      className={classnames(prefixClsScrollbar, className)}
      style={{ height: height }}
      onScroll={() => { onScroll && handelOnScroll(); }}>
     {children}
    </div>
  );
};

Scrollbar.defaultProps = {
  prefixClsScrollbar: `${prefixCls}-scrollbar`,
}


export default Scrollbar;
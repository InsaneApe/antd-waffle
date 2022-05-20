import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import './scrollbar.less';

export interface IScrollbarProps {
  children?: React.ReactNode;
  height?: string;
  className?: string;
  onScroll?: () => void;
}


const Scrollbar = (props: IScrollbarProps) => {
  const { children, height, className, onScroll } = props;
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
      className={classnames("antd-waffle-scrollbar", className)}
      style={{ height: height }}
      onScroll={() => { onScroll && handelOnScroll(); }}>
     {children}
    </div>
  );
};

export default Scrollbar;
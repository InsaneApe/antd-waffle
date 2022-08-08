import React, {  useRef } from 'react';
import classnames from 'classnames';
import './style/index.less';

export interface IScrollbarProps {
  className?: string;
  prefixClsPalette?: string;
}

const prefixCls = 'antd-waffle';

const Palette = (props: IScrollbarProps) => {
  const { className, prefixClsPalette  } = props;
  const paletteRef = useRef(null);

  return (
    <div className={classnames(prefixClsPalette, className)}>
      <canvas ref={paletteRef} />
    </div>
  );
};

Palette.defaultProps = {
  prefixClsPalette: `${prefixCls}-palette`,
}

export default Palette;
import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import './palette.less';

export interface IScrollbarProps {
  className?: string;
}

const Palette = (props: IScrollbarProps) => {
  const { className } = props;
  const paletteRef = useRef(null);

  return (
    <div className={classnames("antd-waffle-palette", className)}>
      <canvas ref={paletteRef} />
    </div>
  );
};

export default Palette;
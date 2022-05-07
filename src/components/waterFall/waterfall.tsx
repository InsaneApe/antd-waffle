import React, { useEffect, useState, useContext, FC } from 'react';
import Macy from 'macy';
import { WaterFallProps } from './type';
import { ConfigContext } from '@Constants/config-provide';
import classnames from 'classnames';
import './waterfall.less';

const WaterFall:FC<WaterFallProps> = (props) => {
  const {
    className,
    source=[],
    waterFallSetting={
      trueOrder:false,
      waitForImages:false,
      useOwnImageLoader:false,
      margin: { x: 10, y: 15 },
      columns: 2,
    }
  } = props;
  const [masonry, setMasonry] = useState<any>();
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('waterfall');
  console.log(1);
  useEffect(() => {
    if (masonry) {
      masonry.reInit();
    } else {
      let masonry = new Macy({
        container: `.${prefixCls}`, 
        ...waterFallSetting
      })
      setMasonry(masonry);
    };
  }, []);

  return (
    <div className={classnames(prefixCls, className)}>
      {
        source && source.map((item: any, index: any) => {
          return (
            <img src={item} className="img_item" key={`${prefixCls}-img-${index}`} />
          )
        })
      }
    </div>
  )
}

export default WaterFall;
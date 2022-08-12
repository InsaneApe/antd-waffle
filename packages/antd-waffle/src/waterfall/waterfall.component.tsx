import React, { useEffect, useState, useContext, FC } from 'react';
import Macy from 'macy';
import { WaterfallProps } from './type';
import { ConfigContext } from '../constants/config-provide';
import classnames from 'classnames';
import { Image as ImageBox } from "antd";

const Waterfall: FC<WaterfallProps> = (props) => {
  const {
    className,
    source = [],
    waterFallSetting = {}
  } = props;

  const [macyInstance, setMacyInstance] = useState<any>();
  const [imgs, setImgs] = useState([]);
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('waterfall');


  const loadImage = (src) => {
    return new Promise(function (resolve, reject) {
      let img = new Image()
      img.src = src;
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        reject(src)
      }
    })
  }


  useEffect(() => {
    if(imgs.length===0) {
      if (macyInstance) {
        macyInstance.reInit();
      } else {
        let macyInstance = new Macy({
          container: `.${prefixCls}`,
          ...waterFallSetting
        })
        setMacyInstance(macyInstance);
      };
    }

    loadImage(source[imgs.length]).then(() => {
      if (imgs.length < source.length - 1) {
        setImgs([...imgs, source[imgs.length]]);
      }
      macyInstance?.recalculate();
    })
  }, [imgs]);

  return (
    <div className={classnames(prefixCls, className)}>
      {
        imgs && imgs.map((item: any, index: any) => {
          return (
            <ImageBox
              src={item}
              key={`${prefixCls}-img-${index}`}
              className={`${prefixCls}-img`}
            />
          )
        })
      }
    </div>
  )
}

export default Waterfall;
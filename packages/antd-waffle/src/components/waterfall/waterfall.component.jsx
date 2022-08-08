import React, { useEffect, useState, useContext } from 'react';
import Macy from 'macy';
import { ConfigContext } from '../../constants/config-provide';
import classnames from 'classnames';
import { Image as ImageBox } from "antd";
const Waterfall = (props) => {
    const { className, source = [], waterFallSetting = {} } = props;
    const [macyInstance, setMacyInstance] = useState();
    const [imgs, setImgs] = useState([]);
    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls('waterfall');
    function loadImage(src) {
        return new Promise(function (resolve, reject) {
            let img = new Image();
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function () {
                reject(src);
            };
        });
    }
    useEffect(() => {
        if (imgs.length === 0) {
            if (macyInstance) {
                macyInstance.reInit();
            }
            else {
                let macyInstance = new Macy(Object.assign({ container: `.${prefixCls}` }, waterFallSetting));
                setMacyInstance(macyInstance);
            }
            ;
        }
        loadImage(source[imgs.length]).then(() => {
            if (imgs.length < source.length - 1) {
                setImgs([...imgs, source[imgs.length]]);
            }
            macyInstance.recalculate();
        });
    }, [imgs]);
    return (<div className={classnames(prefixCls, className)}>
      {imgs && imgs.map((item, index) => {
            return (<ImageBox src={item} key={`${prefixCls}-img-${index}`} className="img_item"/>);
        })}
    </div>);
};
Waterfall.defaultProps = {};
export default Waterfall;

import { createContext } from 'react';

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

export const ConfigContext = createContext({
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `antd-waffle-${suffixCls}` : 'antd-waffle';
  },
});

export const ConfigConsumer = ConfigContext.Consumer;

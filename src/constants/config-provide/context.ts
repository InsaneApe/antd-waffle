import React, { createContext } from 'react';

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

export const ConfigContext = createContext<ConfigConsumerProps>({
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `antd-waffle-${suffixCls}` : 'antd-waffle';
  },
});

export const TablePlusOptionContext = createContext<any>({
  leftOption: [],
  rightOption: []
});

export const ConfigConsumer = ConfigContext.Consumer;

export const TablePlusOptionConsumer = TablePlusOptionContext.Consumer;


export interface WaterFallProps {
  /**
   * 添加额外的classname
   */
  className?: string;
  /**
   * 添加额外的classname
   */
  source: string[];
  /**
   *  waterFallSetting 瀑布流设置
   */
   waterFallSetting: WaterFallSettingProps
};

export interface WaterFallSettingProps {
  /**
   * 将此设置为 false 将优先考虑使每列的高度高于项目本身的顺序。
   */
  trueOrder?: boolean
  /**
   * 设置是否等待所有图像加载后在运行
   */
  waitForImages?: boolean
  /**
   * 是否使用不同的图像加载库
   */
  useOwnImageLoader?: boolean
  /**
   * 上下左右边距
   */
  margin?: {x: number,y:number}
  /**
   * 列数
   */
  columns?: number
  /**
   * 将此值设置为 true 将改变 breakAt 选项的工作方式。Macy 现在将以移动优先方式工作，因此默认值columns将是默认值，例如，如果您400: 2在 breakAt 对象中有，如果文档大于或等于 400px，则列数将为 2
   */
  mobileFirst?: boolean
  /**
   * 允许您指定总列数将如何根据视口的宽度变化
   */
  breakAt?:any
  /**
   * 是否开启promise
   */
  cancelLegacy?: boolean
  /**
   * 是否开启，断点选项基于容器元素宽度而不是文档宽度
   */
  useContainerForBreakpoints?: boolean
}

<h1 align="center">antd-waffle</h1>

**使用 Monorepo 管理组件库**


## Packages

| name        | Description                      |
| ----------- | -------------------------------- |
| antd-waffle | 使用 antd 二次封装的偏业务组件库 |
| waffle-tool | antd-waffle 的 node 工具库       |

## 如何使用

### 开发
```
// open the storybook in local 
pnpm run start:sb
```

### 打包
```
// build
pnpm run build
```

### 测试项目
在`umi`中运行
```
pnpm run start:u

```

在`typescript-react` 中运行
```
pnpm run start:tr
```

## antd-waffle

根据下列规范开发 `antd-waffle` 能让你尽快熟悉 `antd-waffle` 

### 命名

组件命名必须使用小驼峰法(Camel-Case)。 例如（fullScreen)
文件命名必须单词之间用`-`区分。例如（full-screen)

### 样式

组件样式不能使用`css_modules`，因为`class` 被混淆打乱，开发者难以使用`global`修改样式，`css_modules`更适用于业务开发
样式命名前缀和组件样式声明最好一致。

比如：

```less
// theme/index.less
@prefixCls: antd-waffle;

//components-names/styles/index.less
@stylesNames: ~"@{PrefixCls}-xxxx";
.@{stylesNames}-xxx: {
  //你需要书写的样式
}
```

可以调用`constants/config-provide` 的函数进行样式类名的添加

```tsx
import React, { useContext } from "react";
import { ConfigContext } from "../constants/config-provide";

const Test = () => {
  const { getPrefixCls } = useContext(ConfigContext);
  const PrefixCls = getPrefixCls("xxxx");
  return <div className={`${PrefixCls}-wrapper`}>wrapper</div>;
};
```

或者

```tsx
import React from "react";

const Test = (props) => {
  const { PrefixCls } = props;
  return <div className={`${PrefixCls}-wrapper`}>wrapper</div>;
};

Test.defaultProps = {
  PrefixCls = "antd-waffle-xxx",
};
```

### 文件格式

文件格式必须严格遵守：

```

  |-- component-name
  |   |-- index.tsx
  |   |-- componentName.component.tsx
  |   |-- componentName.stories.tsx
  |   |-- style
  |       |-- index.less
  |       |-- index.tsx

```

因为`antd-waffle`支持`按需加载`,使用的插件为`babel-import-plugin`。根据文件格式来自动加载样式。（本身可以在 gulp 打包的时候进行文件区分，但是它作为一个代码和开发规范更好）

### 组件内使用其他组件

当你的组件需要使用到其他的组件时候，比如你在 login 组件中需要使用 antd-waffle 其他样式，你需要单独引入，且在引入他的样式，或者从根目录下`index.tsx`中引入


## waffle-tool

一个使用 node 开发，帮助 antd-waffle 开发的工具库

| 姓名       | 描述                               |
| ---------- | ---------------------------------- |
| auto-entry | 根据项目结构自动生成入口文件的代码 |

### auto-entry

#### 如何使用

根据项目根目录下的`.waffle.ts`来配置

```
// use waffle-tool
npm run waffle-tool 
```


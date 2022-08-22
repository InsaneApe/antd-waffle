const Generator = require("yeoman-generator");
const glob = require("glob");
const path = require("path");
const { COMPONENT_MODULE } = require("../constants");
const { camelCase } = require('lodash');
const {titleCase } = require('../util')
const debug = require('debug')("create-generator:debug");



class componentGenerator extends Generator {
  constructor(opt) {
    super(opt);
    this.context = opt.componentConfig;
    this.opt = opt;    
  }

  createComponentFile() {
    const { name, componentName } = this.context;
    const content = `
    import React, { useContext } from 'react';
    import { ConfigContext } from '../constants/config-provide';

    const ${titleCase(componentName)} = () => {
      const { getPrefixCls } = useContext(ConfigContext);
      const ${componentName}PrefixCls = getPrefixCls('${componentName}');

      return (
        <div className={classnames(${componentName}PrefixCls)}>
        ${componentName}
        </div>
      );
    };

    export default ${titleCase(componentName)};
    `;
    this.fs.write(`${path.resolve(this.destinationPath(),camelCase(name))}.tsx`, content, {encoding:"utf-8"});
  }

  async writeFile() {
    const templatePath = await temPath(COMPONENT_MODULE);
    console.log(this.templatePath())
    
    glob
      .sync("**/*", {
        cwd: templatePath,
        dot: true,
      })
      .forEach(async (file) => {
        debug(`file:${file}`);
        // console.log(await temPath(file));
        // this.fs.copyTpl(
        //   await temPath(file),
        //   this.destinationPath(),
        //   this.context
        // );
      });
  }
}

module.exports = componentGenerator;

const Generator = require("yeoman-generator");
const glob = require("glob");
const path = require("path");
const { camelCase } = require("lodash");
const { titleCase } = require("../util");
const debug = require("debug")("create-generator:debug");

function noop() {
  return true;
}
class componentGenerator extends Generator {
  constructor(opt) {
    super(opt);
    this.context = opt.args;
    this.opt = opt;
  }

  createComponentFile() {}

  writeFile() {
    const { name, componentName } = this.context;

    glob
      .sync("**/*", {
        cwd: this.templatePath(),
        dot: true,
      })
      .filter(noop)
      .forEach((file) => {
        debug(`file:${file}`);
        this.fs.copyTpl(
          this.templatePath(file),
          path.join(this.destinationPath(file.replace(/^_/, "."))),
          this.context
        );
      });

    const content = `
      import React, { useContext } from 'react';
      import { ConfigContext } from '../constants/config-provide';
      import classnames from 'classnames';
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
    this.fs.write(
      `${path.resolve(this.destinationPath(), camelCase(name))}.tsx`,
      content,
      { encoding: "utf-8" }
    );
  }
}

module.exports = componentGenerator;

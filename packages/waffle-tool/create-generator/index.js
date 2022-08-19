const Generator = require("yeoman-generator");
const glob = require("glob");
const path = require("path");
const { writeFileSync } = require("fs");
const paths = require("../constants/paths");
const { CREATE_GENERATOR } = require("../constants");
const { camelCase } = require('lodash');
const debug = require('debug')("create-generator:debug");

const temPath = async (file) => {
  const { absToolPath } = await paths(path.dirname(__dirname));

  return path.resolve(
    absToolPath,
    CREATE_GENERATOR,
    "generators",
    file ? file : ""
  );
};

class componentGenerator extends Generator {
  constructor(opt) {
    super(opt);
    this.context = opt.componentConfig;
    this.opt = opt;
  }

  createComponentFile() {
    const { name, componentName } = this.context;
    const content = `
    import React from 'react';

    const ${componentName} = () => {
      const { getPrefixCls } = useContext(ConfigContext);
      const ${componentName}PrefixCls = getPrefixCls('${componentName}');

      return (
        <div>
        ${componentName}
        </div>
      );
    };

    export default ${componentName};
    `;
    writeFileSync(`${path.resolve(this.destinationPath(),camelCase(name))}.tsx`, content, {encoding:"utf-8"});
  }

  async writeFile() {
    const templatePath = await temPath();

    glob
      .sync("**/*", {
        cwd: templatePath,
        dot: true,
      })
      .forEach(async (file) => {
        debug(file)
        console.log(await temPath(file));
        this.fs.copyTpl(
          await temPath(file),
          this.destinationPath(),
          this.context
        );
      });
  }
}

module.exports = componentGenerator;

const fs = require("fs");
const path = require("path");
const { titleCase } = require("../util");
const { camelCase } = require('lodash');

const tips = "//请勿手动更新，自动更新;\n";

function config() {
  const config = {
    autoEntry: true,
  };
  try {
    const waffle = require(`${process.cwd()}/.waffle.ts`);
    if (waffle.autoEntryConfig.autoEntry) {
      createComponentsEntry(waffle.autoEntryConfig.autoEntryFilter);
    }
  } catch {
    if (config.autoEntry) {
      createComponentsEntry();
    }
    return console.log("没有.waffle.ts文件");
  }
};

const createComponentsEntry = (filter) => {
  const url = process.cwd();
  const filesArray = fs.readdirSync(path.resolve(`${url}/src`));
  const filterFilesArray  = filesArray.filter((file)=>{
    if(!!filter && filter.includes(file)){
      return false
    }
    return true
  });
  let entryFiles = tips;
  let entryFilesComponentsLess = tips;
  let entryFilesComponents = tips;
  const componentNameArray = [];
  for (let file = 0; file < filterFilesArray.length; file++) {
    componentNameArray.push(titleCase(camelCase(filterFilesArray[file])));
    entryFiles += `export { default as ${componentNameArray[file]} } from './${filterFilesArray[file]}/${camelCase(filterFilesArray[file])}.component';\n`;;
    entryFilesComponentsLess += `@import '../${filterFilesArray[file]}/style/index.less';\n`;
  }
  entryFilesComponents = `import './components.less';\nimport './index.less';\n`;

  fs.writeFileSync(path.resolve(`${url}/src/index.tsx`), entryFiles);
  fs.writeFileSync(
    path.resolve(`${url}/src/theme/index.ts`),
    entryFilesComponents
  );
  fs.writeFileSync(
    path.resolve(`${url}/src/theme/components.less`),
    entryFilesComponentsLess
  );
};

module.exports = config;

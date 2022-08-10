const fs = require("fs");
const path = require("path");
const { titleCase } = require("../util");

const tips = "//请勿手动更新，自动更新;\n";

const createComponentsEntry = (filter) => {
  const url = process.cwd();
  const filesArray = fs.readdirSync(path.resolve(`${url}/src`));
  const filterFilesArray  = filesArray.filter((file)=>{
    if(filter.includes(file)){
      return false
    }
    return true
  });
  let entryFiles = tips;
  let entryFilesComponentsLess = tips;
  let entryFilesComponents = tips;
  let componentExportString = "export {\n ";
  let componentExportDefaultString = "export default {\n";
  const componentNameArray = [];
  for (let file = 0; file < filterFilesArray.length; file++) {
    componentNameArray.push(titleCase(filterFilesArray[file]));
    componentExportString += `\t${componentNameArray[file]},\n`;
    componentExportDefaultString += `\t${componentNameArray[file]},\n`;

    entryFiles += `export { default as ${componentNameArray[file]} } from './${filterFilesArray[file]}/${filterFilesArray[file]}.component';\n`;
    //entryFiles += `export { default as ${componentNameArray[file]} } from './${filterFilesArray[file]}';\n`;
    entryFilesComponentsLess += `@import '../${filterFilesArray[file]}/style/index.less';\n`;
  }
  componentExportString += "};\n";
  componentExportDefaultString += "};\n";

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

module.exports = createComponentsEntry;

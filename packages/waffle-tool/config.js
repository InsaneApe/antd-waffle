const createComponentsEntry = require("./auto-entry/create-components-entry");
const createGenerator = require("./generator/createGenerator")
const { isEmpty } = require("lodash");

module.exports = function config(step, name) {
  console.log(step, name);
  const config = {
    autoEntry: true,
  };
  try {
    const waffle = require(`${process.cwd()}/.waffle.ts`);
    if (waffle.autoEntryConfig.autoEntry) {
      createComponentsEntry(waffle.autoEntryConfig.autoEntryFilter);
    }
    if (
      step === "create" &&
      waffle.generatorEntryConfig.generator &&
      !isEmpty(name)
    ) {
      createGenerator(name, waffle.generatorEntryConfig.generatorFile);
    }
    if (waffle.build === "rollup") {
      return;
    }
  } catch {
    if (config.autoEntry) {
      createComponentsEntry();
    }
    return console.log("没有.waffle.ts文件");
  }
};

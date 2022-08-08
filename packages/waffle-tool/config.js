const createComponentsEntry = require('./auto-entry/create-components-entry')

module.exports = function config() {
  const config = {
    autoEntry: true,
  }
  try{
    const waffle = require(`${process.cwd()}/.waffle.ts`);
    if(waffle.autoEntry){
      createComponentsEntry();
    }
    if(waffle.build==='rollup'){
      return
    }
  }catch{
    if(config.autoEntry){
      createComponentsEntry();
    }
    return console.log('没有.waffle.ts文件');
  }
};



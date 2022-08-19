const yeoman = require('yeoman-environment');
const mkdirp = require('mkdirp');
const path = require('path');
const { camelCase } = require('lodash');

const runGenerator = async ({type,cwd=process.cwd()}) => {
  let componentConfig = {
    name:type,
    componentName:"",
    componentNameHavSuffix:""
  }
  if (type) {
    cwd = path.join(path.resolve(cwd,'src'), type);
    mkdirp.sync(cwd);
 
    componentConfig.componentName += `${camelCase(type)}`;
    componentConfig.componentNameHavSuffix += `${camelCase(type)}.component`
  }
  const env = yeoman.createEnv([], {
    cwd
  });
  const generator = require('./index');
  const BasicGenerator = new generator({ componentConfig, env });
  BasicGenerator.run(()=>{
    console.log('生成成功');
  });
}

module.exports ={
  runGenerator
}



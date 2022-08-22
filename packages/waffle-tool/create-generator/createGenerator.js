const yeoman = require('yeoman-environment');
const mkdirp = require('mkdirp');
const path = require('path');
const { camelCase } = require('lodash');
const paths = require("../constants/paths");
const { CREATE_GENERATOR } = require("../constants");


const temPath = async (file) => {
  const { absToolPath } = await paths(path.dirname(__dirname));

  return path.resolve(
    absToolPath,
    CREATE_GENERATOR,
    "generators",
    file ? file : ""
  ); 
};

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
  const BasicGenerator = new generator({ componentConfig, env, resolve: temPath() });
  BasicGenerator.run(()=>{
    console.log('生成成功');
  });
}

module.exports ={
  runGenerator
}



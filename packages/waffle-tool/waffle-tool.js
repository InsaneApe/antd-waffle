const {Command} = require("commander");
const program = new Command();
const semver = require("semver");
const config = require("./auto-entry/create-components-entry");
const { runGenerator } = require('./create-generator/createGenerator');
const chalk = require('chalk');

program
  .version(require("./package.json").version)

program
  .command('create <type>')
  .alias('-c')
  .description('创建组件模板')
  .action(async function(type){
    console.log(type)
    console.log(chalk.green('创建组件模板'));
    await runGenerator({type});
  })

program
  .command('entry')
  .alias('-e')
  .description('构建入口文件')
  .action(async function(){
    console.log(chalk.green('构建入口文件'));
    await config();
  })

program.parse(process.argv);

if (!semver.satisfies(process.version, ">= 8.0.0")) {
  console.error(
    chalk.red("✘ The generator will only work with Node v8.0.0 and up!")
  );
  process.exit(1);
};

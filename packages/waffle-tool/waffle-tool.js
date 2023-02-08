const {Command} = require("commander");
const semver = require("semver");
const config = require("./auto-entry/create-components-entry");
const { runGenerator } = require('./create-generator/createGenerator');
const chalk = require('chalk');

const program = new Command();

program
  .version(require("./package.json").version);

console.log(1111);

program
  .command('create <type>')
  .description('创建组件模板')
  .action(async function (type) {

    console.log(chalk.green('🚀 创建组件模板,请稍等'));
    await runGenerator({ type });
    console.log(chalk.green('🚀 创建成功'));
  })

program
  .command('entry')
  .description('构建入口文件')
  .action(function () {
    console.log(chalk.green('🚀 构建入口文件中...'));
    config();
    console.log(chalk.green('🚀 构建入口文件成功！'));
  })

program.parse(process.argv);

if (!semver.satisfies(process.version, ">= 8.0.0")) {
  console.error(
    chalk.red("✘ The generator will only work with Node v8.0.0 and up!")
  );
  process.exit(1);
};

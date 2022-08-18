#!/usr/bin/env node

const program = require("commander");
const semver = require("semver");
const config = require("./config");

program
  .version(require("./package.json").version)
  .command("create")
  .description("this is description")
  .alias("i")
  .option("-t --tool")
  .option("-b --button")
  .option("-a --add")
  .option("-d --delete");
program.parse(process.argv);
if (!semver.satisfies(process.version, ">= 8.0.0")) {
  console.error(
    chalk.red("✘ The generator will only work with Node v8.0.0 and up!")
  );
  process.exit(1);
}
// 命令行程序
(() => {
  config(program.args[0], program.args[1]);
})();

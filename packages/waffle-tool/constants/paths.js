const { DEFAULT_CONFIG } = require("./index");
const path = require('path');

const paths = (cwd) => {
  return new Promise((resolve, rejects) => {
    const absSrcPath = path.resolve(cwd, "src");
    const absDefaultConfigPath = path.resolve(cwd, DEFAULT_CONFIG);
    const absToolPath = path.dirname(__dirname);
    const paths = {
      cwd,
      absSrcPath,
      absDefaultConfigPath,
      absToolPath
    };
    const pkg = require(path.resolve(cwd, "package.json"));
    resolve({ ...paths, pkg });
  });
};

module.exports = paths;
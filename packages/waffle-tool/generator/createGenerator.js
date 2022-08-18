const { readFileSync, readFile, mkdirSync, writeFileSync } = require("fs");
const path = require("path");
const ejs = require("ejs");

const createGenerator = async (name, createFileCatalog) => {
  const dirPath = path.join(__dirname, "../../antd-waffle/src/" + name);
  const autoCreateCatalog = (createFileCatalog) => {
    // fs.mkdirSync(dirPath);
    createFileCatalog.tsx.forEach((item) => {
      const filterFile = item === "index" ? item : name + "." + item;
      const templatePath = `../../antd-waffle/src/${name}/${filterFile}.tsx`;
      const readPath = `./template/${ item !== "index" ? "template." : ""}${item}.ejs`;
      const templateString = readFileSync(path.join(__dirname, readPath), "utf-8");
      const templateName = () => {
        if(item === 'index' ){
          return `${name}`
        }
        return `${name+item}`
      }
      const dictionary = { template: name };
      const templateContent = ejs.render(templateString, dictionary);
      // fs.writeFileSync(templatePath, templateContent);
    });
  };
  autoCreateCatalog(createFileCatalog);
};

module.exports = createGenerator;

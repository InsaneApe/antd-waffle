const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    plugin:[
      
      [
        "import",
        {
          "libraryName":"@fengbeans/antd-waffle",
          "libraryDirectory":"es",
          "style":true
        }
      ],

    ]
  }
};
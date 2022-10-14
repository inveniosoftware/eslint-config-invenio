const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

module.exports = yaml.safe(fs.readFileSync(path.join(__dirname, "configs/prettier.yaml"), "utf8"));

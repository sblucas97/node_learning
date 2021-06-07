const fs = require("fs");
const processArgv = process.argv;

const argFile = processArgv[2];
const file = fs.readFileSync(argFile);

const splitedText = file.toString().split("\n");

console.log(splitedText.length - 1);

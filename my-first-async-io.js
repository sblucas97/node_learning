const fs = require("fs");
const file = process.argv[2];

let total = 0;

const loadContent = (callback) => {
  fs.readFile(file, (err, content) => {
    if (err) return console.error(err);

    total = content.toString().split("\n").length - 1;

    callback();
  });
};

const logContent = () => {
  console.log(total);
};

loadContent(logContent);

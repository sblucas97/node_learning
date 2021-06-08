const fs = require("fs");
const path = require("path");

const dir = process.argv[2];
const extension = process.argv[3];

fs.readdir(dir, (err, content) => {
  if (err) return console.error(err);

  if (content.length < 1 || !extension) return;

  content.forEach((value) => {
    const currentContent = path.extname(value).replace(".", "");
    if (currentContent === extension) {
      console.log(value);
    }
  });
});

const fs = require("fs");
const path = require("path");

module.exports = function MyModule(dirName, extension, callback) {
  let files = [];

  fs.readdir(dirName, (err, content) => {
    if (err) return callback(err, files);

    if (content.length < 1)
      return callback("There are no files inside " + dirName, files);

    if (!extension)
      return callback(
        "You need to specify the extension files to filter",
        files
      );

    content.forEach((value) => {
      const currentContent = path.extname(value).replace(".", "");

      if (currentContent === extension) {
        files = [...files, value];
      }
    });

    callback(null, files);
  });
};

const MyModule = require("./mymodule");

const dir = process.argv[2];
const extension = process.argv[3];

const myCallback = (err, data) => {
  if (err) return console.error(err);

  data.forEach((file) => console.log(file));
};

MyModule(dir, extension, myCallback);

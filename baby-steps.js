const argsLength = process.argv.length;
const initialArgIndex = 2;
let total = 0;

for (let i = initialArgIndex; i < argsLength; i++) {
  let value = process.argv[i];

  if (typeof value === "string") value = Number(value);

  total += value;
}

console.log(total);

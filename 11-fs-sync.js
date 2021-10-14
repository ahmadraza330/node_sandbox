const { writeFileSync, readFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");

const second = writeFileSync(
  "./content/result.sync.txt",
  `Hello from writrefileSync: ${first}`,
  "utf-8"
);
console.log(second);

const { writeFile, readFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    return;
  }
  console.log(result);

  readFile("./content/result.sync.txt", "utf-8", (err, res) => {
    if (err) {
      return err;
    }
    console.log(res);

    readFile("./content/subfolder/test.text", "utf-8", (e, r) => {
      if (e) {
        return;
      }
      console.log(r);
    });
  });
});

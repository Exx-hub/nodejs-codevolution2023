const fs = require("node:fs");

console.log("first");
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

console.log("second");

// error first callback pattern
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("third");

fs.writeFileSync("./greet.txt", "hello!");

const fileContents2 = fs.readFileSync("./greet.txt", "utf-8");
console.log(fileContents2);

fs.writeFile("./greet.txt", " hi again", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written!");
  }
});

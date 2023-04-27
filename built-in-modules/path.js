// const path = require("node:path");
const path = require("path");

console.log(__filename);
console.log(__dirname);

// joins or concatenates to form a path
// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join(__dirname, "notes.txt"));

// // base name -> last portion of name
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// // extenstion name like .js .json
// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// // returns an object with properties like ext, root , dir, base etc
// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__filename)));

// // returns true if absolute path
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./"));

// path.resolve
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve(__dirname, "notes.txt"));

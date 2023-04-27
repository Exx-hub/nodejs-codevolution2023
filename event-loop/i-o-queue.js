// i/o quque --- most async methods from built in modules

const fs = require("node:fs");

fs.readFile(__filename, (err, data) => console.log("this is readFile 1"));

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("This is promise.resolve 1"));

// ====
// not guaranteed because of how setTimeout works, sometimes it has delay of 1 ms

setTimeout(() => console.log("setTimeout 1"), 0);

fs.readFile(__filename, (err, data) => console.log("this is readFile 1"));

// ============

fs.readFile(__filename, (err, data) => console.log("this is readFile 1"));

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("This is promise.resolve 1"));
setTimeout(() => console.log("setTimeout 1"), 0);

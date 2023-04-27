const fs = require("node:fs");

fs.readFile(__filename, (err, data) => console.log("this is readFile 1"));

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("This is promise.resolve 1"));
setTimeout(() => console.log("setTimeout 1"), 0);

setImmediate(() => console.log("set immediate 1"));

// /=================================================
const fs = require("node:fs");

fs.readFile(__filename, (err, data) => {
  console.log("this is readFile 1");
  setImmediate(() => console.log("inner set immediate 1"));
  process.nextTick(() => console.log("inner process.nextTick 1"));
  Promise.resolve().then(() => console.log("inner promise.resolve 1"));
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("This is promise.resolve 1"));
setTimeout(() => console.log("setTimeout 1"), 0);

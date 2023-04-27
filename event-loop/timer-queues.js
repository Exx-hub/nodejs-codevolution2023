// microtasks queues are executed before timer queues

setTimeout(() => console.log("set timeout 1"), 0);
setTimeout(() => {
  console.log("set timeout 2");
  process.nextTick(() => console.log("inner next tick inside set timeout"));
}, 0);
setTimeout(() => console.log("set timeout 3"), 0);

process.nextTick(() => console.log("next tick 1"));
process.nextTick(() => {
  console.log("next tick 2");
  process.nextTick(() => console.log("inner next tick inside next ticks"));
});
process.nextTick(() => console.log("next tick 3"));

Promise.resolve().then(() => console.log("promise.resolve 1"));
Promise.resolve().then(() => {
  console.log("promise.resolve 2");
  process.nextTick(() => console.log("inner next tick inside promises"));
});
Promise.resolve().then(() => console.log("promise.resolve 3"));

// output

// next tick 1
// next tick 2
// next tick 3
// inner next tick inside next ticks
// promise.resolve 1
// promise.resolve 2
// promise.resolve 3
// inner next tick inside promises
// set timeout 1
// set timeout 2
// inner next tick inside set timeout
// set timeout 3

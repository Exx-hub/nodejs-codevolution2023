// #1 experiment => synchronous code first then async code

// console.log("console.log 1");
// process.nextTick(() => console.log("this is process.nextTick 1"));
// console.log("console.log 2");

// #2 experiment => nextTick first then promise in micro tasks queues

// Promise.resolve().then(() => console.log("This is promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));

// #3 experiment

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

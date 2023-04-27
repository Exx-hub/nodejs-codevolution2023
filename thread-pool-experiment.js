// libuv => main thread offloads time consuming processess to libuv with thread pool

// libuv has 4 threads

// increase libuv thread pool size
// process.env.UV_THREADPOOL_SIZE = 6;

const crypto = require("node:crypto");

// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);

process.env.UV_THREADPOOL_SIZE = 4;

const MAX_CALLS = 4;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  console.log("in for loop");
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

// testing thread-pool when using network processess.
// ---network i/o does not use the thread pool

const https = require("node:https");

const MAX_CALLS1 = 12;

const start1 = Date.now();
for (let i = 0; i < MAX_CALLS1; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start1);
      });
    })
    .end();
}

const fs = require("fs");

// create a read stream from the file, to read it in chunks instead of all at once.
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  // highWaterMark: 2, // makes each chunk 2 bytes instead of the default 64 kilobytes
});

// this is similar but to write in chunks instead of write all at once
const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
  // fs.writeFileSync("./file2.txt", chunk);
});

// pipe is used to transfer data from one stream to another
// below is similar to above code
// used to connect a readable stream to a writable stream

readableStream.pipe(writableStream);

// sends readStream data to console --- will print file.txt to console
readableStream.pipe(process.stdout);

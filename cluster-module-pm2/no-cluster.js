// to simulate, open 2 tabs for both paths
// open network tab to see time
// refresh slow page then refresh fast page

// fast page will also take a long time, it is getting blocked by slow page

// run pm2 start no-cluster.js -i 0

// --- to automatically cluster for you -- pm2

// to stop run - pm2 stop <filename>

const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("home page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 6000000000; i++) {}
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow page");
  }
});

server.listen(8000, () => console.log("Server running on port 8000"));

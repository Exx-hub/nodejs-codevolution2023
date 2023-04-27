const http = require("node:http");

// const server = http.createServer();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello world!");
});

server.listen(3000, () => console.log("Server running!"));

// ===
// JSON Response

const superHero = {
  firstname: "Bruce",
  lastname: "Wayne",
};

res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify(superHero));

// ===
// html Response

res.writeHead(200, { "Content-Type": "text/html" });
res.end("<h1>My First API</h1>");

// ===
// html response read html from file with fs

const fs = require("node:fs");

const html1 = fs.readFileSync("./index.html", "utf-8");

res.writeHead(200, { "Content-Type": "text/html" });
res.end(html1);

// ===
// send html via stream and pipe to response

fs.createReadStream("./index.html").pipe(res);
// or
fs.createReadStream(__dirname + "/index.html").pipe(res);

// ===
// html template, adding name

const name = "Vishwas";
res.writeHead(200, { "Content-Type": "text/html" });
let html = fs.readFileSync("./index.html", "utf-8");
html = html.replace("{{name}}", name);
res.end(html);

// ===
// http routing

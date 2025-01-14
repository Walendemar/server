const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/" && req.method === "GET") {
    res.end("Hello, world!");
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("About page");
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("Server running");
  console.log("address: ", server.address());
});

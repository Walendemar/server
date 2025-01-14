const http = require("http");

const PORT = 8080;

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

console.log("address: ", server.address().address);

server.listen(PORT, () => {
  console.log("Server running");
});

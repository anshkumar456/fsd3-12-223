import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("content-type","text/html");

  if (req.url === "/") {
    res.write("<h1>Home page</h1>");
    res.end(`
      <a href="/product">product</a>
      <a href="/contact">contact</a>
      `);
     } else if (req.url === "/product") {

    const stream = createReadStream("product.html", { encoding: "utf-8" });
    stream.pipe(res);

    
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => console.log("prg6 is running..."));
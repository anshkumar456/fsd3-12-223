import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/product") {
    res.write(`
            <h1>iPhone XL</h1>
            <h1>Price: 87654</h1>
            <h1>Discount: 30%</h1>
        `);
    res.end();
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Us</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server runs on port 3000...");
});

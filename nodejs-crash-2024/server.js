import http from "http";
const PORT = 8000;

const srever = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;

  //we could do upper two in one line

  res.writeHead(500, { "Content-Type": "application/json" });

  //   res.write("Hello world of server!");
  //   res.end("<h1><i>Hello world of server!</i></h1>");
  res.end(JSON.stringify({ message: "Server ERROR!" }));
});

srever.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

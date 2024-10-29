import http from "http";
const PORT = process.env.PORT;

const srever = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;

  console.log(req.url);
  console.log(req.method);

  //we could do upper two in one line

  // res.writeHead(500, { "Content-Type": "application/json" });
  res.writeHead(200, { "Content-Type": "text/html" });

  //   res.write("Hello world of server!");
  //   res.end("<h1><i>Hello world of server!</i></h1>");

  // res.end(JSON.stringify({ message: "Server ERROR!" }));
  res.end("<h1>Hello world bro</h1>");
});

srever.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

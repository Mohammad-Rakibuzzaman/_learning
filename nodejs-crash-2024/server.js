import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const srever = http.createServer(async (req, res) => {
  //making only for get request but not post request
  try {
    //check if GET request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const srever = http.createServer((req, res) => {
//   //creating a simple router

//   //   res.setHeader("Content-Type", "text/html");
//   //   res.statusCode = 404;

//   console.log(req.url);
//   // console.log(req.method);

//   //we could do upper two in one line

//   // res.writeHead(500, { "Content-Type": "application/json" });
//   res.writeHead(200, { "Content-Type": "text/html" });

//   //   res.write("Hello world of server!");
//   //   res.end("<h1><i>Hello world of server!</i></h1>");

//   // res.end(JSON.stringify({ message: "Server ERROR!" }));
//   res.end("<h1>Hello world bro</h1>");
// });

// srever.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

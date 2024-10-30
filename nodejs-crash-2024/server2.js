import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 12, name: "Ratul Doe" },
  { id: 21, name: "Sarah Doe" },
  { id: 5, name: "Jennie Doe" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader("Content-Type", "application/json");
    if (user) {
      // const user = users.find((user) => user.id === parseInt(id)); // can use this upper
      res.write(JSON.stringify(user));
      // res.end();
    } else {
      // const user = users.find((user) => user.id === parseInt(id));
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User not found" }));
      // res.end();
    }
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

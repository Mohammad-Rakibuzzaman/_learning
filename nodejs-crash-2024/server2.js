import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 12, name: "Ratul Doe" },
  { id: 21, name: "Sarah Doe" },
  { id: 5, name: "Jennie Doe" },
];

//Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); //okay move on to the next middleware
};

//JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//creating individual handler function
// route handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

//Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    // const user = users.find((user) => user.id === parseInt(id));
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found" }));
    // res.end();
  }
  res.end();
};

//Not Found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};

//Route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = "";
  //Listen for data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//we can use this as well app.js or server.js

// console.log("hey its me RRRRR");
// console.log(global);
// console.log(process);

// const randomNumberGenerator = require("./utils");
// const { randomNumberGenerator, celciusToFahrenheit } = require("./utils");

// console.log(`Random Number is: ${randomNumberGenerator()}`);

// console.log(`Celcius to fahrenheit: ${celciusToFahrenheit(20)}`); //uses of template literal

import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());
console.log(`the total length is : ${getPostsLength()}`);

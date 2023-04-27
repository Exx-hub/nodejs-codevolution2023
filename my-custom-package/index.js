const { upperCase } = require("upper-case");

function greet(name) {
  console.log(upperCase(`Hello ${name}, welcome to Codevolution!`));
}

greet("Alvin");

module.exports = greet;

const buffer = new Buffer.from("Alvin Acosta");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());

buffer.write("Code");
console.log(buffer.toString());

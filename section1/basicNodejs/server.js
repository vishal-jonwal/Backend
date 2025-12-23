const fs = require("fs");
const text = fs.readFileSync(__dirname + "/text.txt"); //"utf-8"
console.log(text.toString());




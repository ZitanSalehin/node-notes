// var server = require('./nodeServer');
// var nodeServerWithPages = require('./nodeServerWithPages');
// console.log(global);
const path = require('path');
const os = require('os');
const {add,substract,multiply,divide} = require('./basicOperation');

// console.log(os);
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const obj = JSON.parse(jsonString);
// console.log(obj);
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
console.log(add(10,20));
console.log(substract(60,20));
console.log(multiply(10,20));
console.log(divide(40,20));


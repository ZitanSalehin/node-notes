// var server = require('./nodeServer');
// var nodeServerWithPages = require('./nodeServerWithPages');
// console.log(global);
const path = require('path');
const os = require('os');
const {add,substract,multiply,divide} = require('./basicOperation');
const fs = require('fs');

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

fs.readFile(path.join(__dirname,'readWriteFile','readfile.txt'), 'utf8', (err,data)=>{
    if(err) throw error;
    console.log(data);
});

fs.writeFile(path.join(__dirname,'readWriteFile','wriitenFile.txt'),'nice to meet writing', (err,data)=>{
    if(err) throw error;
    console.log("write completed");
});

console.log('hello....');
console.log(__dirname);

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

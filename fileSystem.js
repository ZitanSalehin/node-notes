const fs = require('fs');

fs.readFile('./readWriteFile/readfile.txt', (err,data)=>{
    if(err) throw error;
    console.log(data);
})
const fs = require('fs');

const rs = fs.createReadStream('./readWriteFile/createReadStream.txt', {encoding: 'utf-8'});

const ws = fs.createWriteStream('./readWriteFile/lorem.txt');

rs.on('data',(dataChunk)=>{
    ws.write(dataChunk);
})
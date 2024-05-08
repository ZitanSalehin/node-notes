const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const path = require('path');

function writeToFile(data) {
    const filename = path.join(__dirname, 'readWriteFile', `${uuid()}.txt`);
    const formattedDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

    const logData = `[${formattedDate}] ${data}\n`;

    fs.appendFile(filename, logData, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data written to file:', filename);
        }
    });
}

writeToFile('Event occurred!');

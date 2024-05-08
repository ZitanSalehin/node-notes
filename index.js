const {format} = require('date-fns');
const {v4:uuid} = require('uuid');

console.log(format(new Date(2024, 1, 4), "yyyy-MM-dd\tHH:mm:ss"));
console.log(uuid());
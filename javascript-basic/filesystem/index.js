const fs = require('fs');

const data = fs.readFileSync('notes.txt', 'UTF-8');
console.log(data);
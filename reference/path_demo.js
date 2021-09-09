const path = require('path');

//Base File name
console.log(path.basename(__filename));


//Directory name

console.log(path.dirname(__filename));

//file extension

console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

//concatenate path

// ../test/hello.html 
console.log(path.join(__dirname, 'test', 'hello.html'));
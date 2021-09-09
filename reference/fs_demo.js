const fs = require('fs');
const path = require('path');


// Create folder

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created ...');
// });

// create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'HELLO.txt'), 'Hello World!', err => {
//     if(err) throw err;
//     console.log('File Written to ...');
// });

// // File append
// fs.appendFile(path.join(__dirname, '/test', 'HELLO.txt'), 'Learning Node.js', err => {
//     if(err) throw err;
//     console.log('File Written to ...');
// });

// Read File


// fs.readFile(path.join(__dirname, '/test', 'HELLO.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// file renaming
fs.rename(path.join(__dirname, '/test', 'HELLO.txt'), 
path.join(__dirname, '/test', 'HELLOworld.txt'), (err) => {
    if(err) throw err;
    console.log('File Renamed');
});







const Logger = require('./Logger');
const path =  require('path');
const os = require('os');
const fs = require('fs');

/* let freeMem = os.freemem();
let totalMem = os.totalmem();
//Logger.log('free ', freeMem);
console.log('free: ', freeMem);
console.log('total: ', totalMem); */

//1 - Create a method to get all the files inside a given path
console.log('\n\t\t**EJER 1**');

let pathObj = path.parse(__filename);
Logger.log(pathObj);

//2 - Create a method to Print all the files
console.log('\n\t\t**EJER 2**');
let filesOfPath = [];

filesOfPath =  fs.readdirSync('./', (err, files) => {               //readdirSync() es 'sync y async es readdir()  se obtiene el resultado primero y el otro despues
    (err) ? console.log(err) : console.log('Files on path', files)
});

console.log('Las files del dir', pathObj.dir,'son: ', filesOfPath);


//3 - Create a method to sort and print the files
console.log('\n\t\t**EJER 3**');
console.log('Las files en orden inverso: ', filesOfPath.reverse());

//4 - Create a method to get the amount of files starting with one letter
console.log('\n\t\t**EJER 4**');
let count = 0;

filesOfPath.forEach(Element => {
    Element.startsWith('A') ? count++ : {};
});

console.log(count,'files comienzan con la letra \'A\'');


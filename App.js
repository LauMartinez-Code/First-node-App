/*let sayHello = (name) => {
    console.log('Hello ' + name);
};

sayHello('Lautarot');*/

const Logger = require('./Logger');
const path =  require('path');
const os = require('os');
const fs = require('fs');

//console.log(Logger);
//Logger.log('Lautarot');

let pathObj = path.parse(__filename);

Logger.log(pathObj);

let freeMem = os.freemem();
let totalMem = os.totalmem();

//Logger.log('free ', freeMem);
console.log('free: ', freeMem);
console.log('total: ', totalMem);

let rootDir = fs.readdirSync('./');
//console.log(rootDir);

fs.readdir('./', (err, files) => {
    (err) ? console.log(err) : console.log('async', files);
});

console.log('sync', rootDir); //se obtiene el resultado primero




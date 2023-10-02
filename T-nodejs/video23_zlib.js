/* zlib - provides loassless decompresion
Zlib module is used to provide compression and decompression (zip and unzip) functionalities.it is implemented using Gzip
 and deflate/inflate.Gzip

 deflate - compress
 inflate  - decompress

The zlib module can be accessed using - 
const zlib = require('zlib');
compressing and decompressing a file can be done by piping the source stream data into a destination
stream through zlib stream

https://www.baeldung.com/cs/zlib-vs-gzip-vs-zip
*/

// // inflate deflate 
// // https://www.baeldung.com/cs/zlib-vs-gzip-vs-zip
const zlib = require('zlib');
const fs = require("fs");
// const gzip = zlib.createGzip();
// const input = fs.createReadStream('add.html');
// const output = fs.createWriteStream('add.html.gz');
// input.pipe(gzip);
// input.pipe(output);


// // to get above file back in .html

// //const zlib = require('zlib');
// const fs = require('fs');
//const { pipeline } = require('stream');
const unzip = zlib.createUnzip();
const input1 = fs.createReadStream('add.html.gz');
const output1 = fs.createWriteStream('p.html');

input1.pipe(unzip);
input1.pipe(output1);











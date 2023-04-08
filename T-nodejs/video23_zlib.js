/* zlib
Zlib module is used to provide compression and decompression (zip and unzip) functionalities.it is implemented using Gzip
 and deflate/inflate.Gzip

The zlib module can be accessed using - 
const zlib = require('zlib');
compressing and decompressing a file can be done by piping the source stream data into a destination
stream through zlib stream


*/

const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');

const inp = fs.createReadStream('mybio.txt');
const out = fs.WriteStream('mybio.txt.gz');
inp.pipe(gzip).pipe(out);














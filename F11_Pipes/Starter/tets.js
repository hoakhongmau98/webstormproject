var fs = require('fs');
var zlib = require('zlib');
var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 8 * 1024});

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// read and write by chunk
// readable.on('data', function (chunk) {
//     console.log(chunk)
//     console.log(chunk.length)
//     writeable.write(chunk)
// });


// pipe is link on readable to writeable
// readable.pipe(writeable);

var compressed  = fs.createWriteStream(__dirname + '/greet.txt.gz');
// read from readable and any chunk read into gzip => pipe(compressed)
var gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed)

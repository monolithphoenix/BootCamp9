// const misc = require('./sm');
// console.log("If add %d to 10 we will have %d", misc.x, misc.addX(10));
// console.log(misc);


// const uSer = require('./sm');
// const u = new uSer('Ralf', 'red@DOMStringList.com');
// console.log(u);


// require('./sm')(90011);
// require('./sm')(896);


const path = require('path');
// console.log(path.extname('index.bdsm'));
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'));
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// console.log(path.join('/foo', '/bar', '/baz/asdf', '/quux', '../..'));
// console.log(path.parse('/home/user/dir/file.txt'));
// console.log(path.resolve('/foo/bar', './baz'));
// console.log(path.resolve('/foo/bar', 'tmp/file/'));
// console.log(path.resolve('/foo/bar', '/tmp/file/'));
console.log(path.resolve('wwwroot', 'static_field/png/', '../gif/image.gif'));
console.log(path.resolve('wwwroot', 'static_field', 'gif/image.gif'));




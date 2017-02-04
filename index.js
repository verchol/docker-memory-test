const _ = require('lodash');

console.log('start test')


setInterval(()=>{
  process.memoryUsage();
},1000);

var memory = [];
setInterval(()=>{
  //console.log('allocating 1K');
  var buffer = Buffer.allocUnsafe(1024*1024).fill('h');
  memory.push(buffer);
  console.log(`${memory.length} ,mem = ${JSON.stringify(process.memoryUsage())}`);

},100);

fs = require('fs')

fs.readFile(process.argv[2], function(err, file){
  file = file.toString('utf8').split('').reverse().join('')
  console.log(file)
});
console.log('NEXT LINE')


var testFolder = './data'; //data 와 동일
                          //data 디렉토리를 의미
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})

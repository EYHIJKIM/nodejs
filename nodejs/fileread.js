var fs = require('fs'); //파일시스템 가져

 //읽고싶은 파일을 넣는다
fs.readFile('sample.txt','utf8',function(err,data){
  console.log(data);
});

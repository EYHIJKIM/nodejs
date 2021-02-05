var http = require('http');
var fs = require('fs');
var url = require('url'); //모듈 url임

var app = http.createServer(function(request,response){
    var _url = request.url; //주소의 url을 가져옴
    var queryData = url.parse(_url, true).query; //url의 파라미터 객체
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;


    console.log(queryData);
    console.log(url.parse(_url,true));

if(pathname ==='/'){//경로에 제대로 접근했을 ;
    fs.readFile(`data/${queryData.id}`, 'utf-8',
    function(err, description){

      var template =`
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>

      `;

      response.writeHead(200); //200은 파일이 성공적으로 전송되었다는 의미
      response.end(template); //출력 화면
    }); //디렉토리 내의 파일을 불러옴
  } else{
    response.writeHead(404); //잘못된 경로로 접근했을 때.
    response.end('Not Found'); //출력 화면

  }





});
app.listen(3000);//포트번호

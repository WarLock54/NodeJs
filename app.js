var htpp = require("http");
var fs=require("fs");


htpp.createServer(function(req,res){
  console.log(req.url);
  fs.readFile(req.url.substring(1),function(err,data){
    if(err) throw err;
    res.writeHead(200);
    res.writeHead(data.toString('utf-8'));
    return res.end();

  })

    
}).listen(8085);


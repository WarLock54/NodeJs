var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("başarılı bir şekilde get çalıştı.")
})
app.get("/hello/",function(req,res){
    res.send("merhabaaa");
})
function hello(req, res, next) {
    res.write('Hello page. ')
    next()
 }
  
 function helloagain(req, res, next){
    res.write('Hello again. ')
    res.end()
 }
  
 // ikisini sırayla çağırabilirsin.
 app.get('/hello/', hello, helloagain)
 // define middleware function
function logger(req, res, next) {
    console.log(new Date(), req.url)
    next()
 }
  
 // cağrıları loglar 
 app.use(logger)

var server=app.listen(8000,function(){
    console.log("port açılıyor")
});


/*

Middleware Terminology
request – is the HTTP request that reaches the Express application when a client makes HTTP request like PUT, GET, etc. It contains properties like query string, url parameters, headers, etc.

response – object represents the HTTP response that an Express application sends when it gets an HTTP request.

next – next is used to continue with the next middleware in the middleware stack.

request-response cycle – The cycle of operations that get executed starting with a request hitting the Express application till a response leaves the application for the request.

middleware stack – stack of middleware functions that get executed for a request-response cycle.

*/
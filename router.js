var exp=require("express");
var app=exp();
var router=exp.Router();

router.use(function timeLog (req, res, next) {
    console.log('Requested URI Path : ', req.url)
    next()
  })
  router.get('/',function(res,req){
    res.send("onur ana sayfa");
  })
  router.get("about",function(res,req){
    res.send("onur cv");
  })
  module.exports=router;
  
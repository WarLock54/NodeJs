var mysql=require("mysql");
var con=mysql.createConnection({
    host:"",
    user:"",
    password:"",
    database:"" 
});
con.connect(function(err){
    if(err){
        throw err;
    }
    console.log("Bağlandııııııııııııı")
    con.query("select * from Tablo",function(err,result,fields){
        if(err) throw err;
        Object.keys(result).forEach(function(key){
            var nesne=result[key];
            console.log(key.name);
            //objenin özelliklerini çağırmak.
            
        })
    })
})
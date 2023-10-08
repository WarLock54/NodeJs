const {exec}=require('child_process');
const { stdout } = require('process');

exec('powershell.exe -Command "hostname"',(err,stdout)=>{
if(err){
    console.error("hata hostname")
    return err;
}
const hostname= stdout.trim();
console.log("Hostname:",hostname);
})



exec('echo %USERNAME%',(err,stdout)=>{
if(err){
    console.error("User error");
}
const curUser=stdout.trim();
console.log("Current user:",curUser);

});

exec('hostname',(err,stdout)=>{
    if(err){
        console.error("Hostname error");
    }

    const hostname=stdout.trim();
    console.log("Hostname info:",hostname);
}
)

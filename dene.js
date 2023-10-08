
var cal=require('./cal');
const fs = require('./dosya');
var a=10,b=5;
console.log(cal.topla(a,b));
console.log(cal.carp(a,b));
fs.printMessage("başarılı");
var data = fs.readFileSync('yenidosya.txt');
console.log("Reading file completed : " + new Date().toISOString());
 
console.log("After readFileSync statement : " + new Date().toISOString());

let arr=["dosyam.txt","son.txt","yeniDosya.txt"];

arr.forEach(function(element, index, array){
    console.log("bas")
    fs.readFile(element,'utf-8', (hata, veri) =>{
        if (hata) {
            console.error('Dosya okuma hatası:', hata);
            return;
        }
        console.log(index + ' : ' + veri + ' - ' + array[index])

        
        console.log("foreach");
    
})
});
/*fs (File System), 
Node.js'in yerleşik bir modülüdür ve bu modül sayesinde bilgisayarınızdaki dosya sistemi ile etkileşimde bulunabilirsiniz.
 Bu modül, dosya ile ilgili çeşitli işlemleri 
gerçekleştirmenizi sağlar. 
Bunlar arasında dosya okuma, yazma, dizin oluşturma, dosya silme ve daha birçok işlem bulunur.  */
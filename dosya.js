var fs=require('fs');

/*Buffer, veri depolamak, işlemek ve taşımak için kullanılan özel bir veri türüdür.
 Buffer, JavaScript'in temel veri türlerinden farklıdır ve özellikle verilerin işlenmesi 
 veya aktarılması gerektiğinde kullanılır */
const buf1=Buffer.allocUnsafe(11);
const len=buf1.write("merhaba ONUR",2,5,'utf-8');
const len2=buf1.write("merhaba 2");
for(const byt of buf1.values()){
console.log(byt);
}

const msg = '{"name":"John", "age":"22"}';
var jsonObj = JSON.parse(msg);
 
// convert JSON object to String
var jsonStr = JSON.stringify(jsonObj);
 
// read json string to Buffer
const buf = Buffer.from(jsonStr);
 
console.log("uzunluğu",buf.length);

var arr = [0x74, 0x32, 0x91];
const buf2 = Buffer.from(arr);
 
for(const byt of buf2.values()){
    console.log(byt);
}


fs.printMessage=function(str){
    console.log("yeni mesaj eklendi");
    console.log(str);
}

fs.readFile('dosyam.txt', 'utf8', (hata, veri) => {
    if (hata) {
        console.error('Dosya okuma hatası:', hata);
        return;
    }

    console.log('Dosya içeriği:', veri);
    console.log("//");
    try {
        const jsonVeri = JSON.parse(veri);
        console.log('JSON Veri:', jsonVeri);
    } catch (jsonHata) {
        console.error('JSON verisi ayrıştırma hatası:', jsonHata);
    }

});
const yeniDosya="yeniDosya.txt";
const content="veri";

fs.writeFile(yeniDosya,content,(err)=>{
    if (err) {
        console.error('Dosya yazma hatası:', err);
    } else {
        console.log(`${yeniDosya} oluşturuldu ve içeriği yazıldı.`);
    }
})
module.exports=fs;

   
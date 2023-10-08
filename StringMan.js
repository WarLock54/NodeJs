const { models } = require("mongoose");

function CounterNumber(val){
        return val.length;
}
function CounterWolwes(val){
    // map veya regex
  /*  val=val.toLowerCase();
    var count=0;
const wolwes=["a","e","i","o","u"];
for(let i=0;i<val.length;i++){
    if(wolwes.includes(val[i])){
        count++;
    }
}
return count;*/
val =val.toLowerCase();
const vowelRegex = /[aeiou]/g;
const matching=val.match(vowelRegex);
return matching?matching.length:0;
  
}
function CounterInclude(val,str){
    return val.include(str)?true:false;
}
function CounterReplaced(val){
    const replacedText = val.replace("Platform", "YeniKelime");

    return replacedText;
  }
function Largest(val){
    var bulmak=val.split(" ");
    var longst=bulmak[0];
        for(var i=1;i<bulmak.length;i++){
            
            if(bulmak.length>longst.length){
             longst=bulmak[i];
            }
        }
        return longst;
}
 module.exports= {CounterInclude,CounterReplaced,CounterNumber,CounterReplaced,Largest};
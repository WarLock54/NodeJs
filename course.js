

var cycling=parseInt(process.argv[2]);
var running=parseInt(process.argv[3]);
var swimming=parseInt(process.argv[4]);
var intake=parseInt(process.argv[5]);
var total=(cycling+running+swimming-intake)*30;
var pound=total/1000;

console.log("Sam's weight loss in a month in "+pound.toFixed(2)+"pounds");


var product=[
    {
        name:"deneme",
        price:22
    },
    {
        name:"deneme2",
        price:70
    },
    {
        name:"deneme3",
        price:31
    },
    {
        name:"deneme4",
        price:-10
    },
    {
        name:"deneme5",
        price:50
    },
    {
        name:"deneme6",
        price:100
    },
];

var preproduct=product.filter(x=>x.price>50).map(x=>{
    return{
        name:x.name.toUpperCase(),
        price:x.price
    }
}).reduce(((stk,curPro)=>{
let stkItem=stk.find(x=>x.name===curPro.name);
if(stkItem){
stkItem++;
}
else{
  stk.push({
    name:curPro.name,
    stock:1
  })  
  return stk;
}
}),[]);
console.log(preproduct);

const calculated=(bill,discountPercent)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(discountPercent<0){
                reject("Invalid discountPercent");
            }
            resolve(bill*discountPercent);

        }, 2000);
    })

}
const validate=(bill)=>{
    if(bill>0){
        console.log("valid")
    }
    else{
        console.log("not valid ");
    }
}
var billAmt=process.argv[2];
var disAmt=process.argv[3];
calculated(billAmt,disAmt).then((result)=>{
    console.log("Result",result);
}).catch(error=>console.log(error));
validate(billAmt);
const totalAmount=async(billAmt,disAmt)=>{
    const amount=await calculated(billAmt,disAmt);
    const valid=await validate(billAmt);

return totalAmount;
}
totalAmount(billAmt,disAmt);
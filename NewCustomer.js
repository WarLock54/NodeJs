var category=[
    {
        pl:1,
        val:1
    }
];
var customerList=[
    {
        Id:1,
            name:"onur",
Age:23,
Address:"balıkesir",
Contact_No:"5332072065" 
}
];
function add(name,Age,Address,Contact_No){
    var maxId=customerList.reduce((max,customer)=>(customer.Id>max?customer.Id:max),0);
    var newCustomer = {
        Id: maxId + 1, // Otomatik olarak artan ID
        name: name,
        Age: Age,
        Address: Address,
        Contact_No: Contact_No
      };
    
      // Yeni müşteriyi müşteri listesine ekle
      customerList.push(newCustomer);


      return customerList;
    
}
function update(id,name,Age,Address,Contact_No){
    const customerIndex=customerList.findIndex(x=>x.Id===id);
   if(customerIndex!==-1){
    customerList[customerIndex]={
        ...customerList[customerIndex],
        name,
        Age,
        Address,
        Contact_No
    }

   }
   else{
    console.log("böyle bir Id bulunmaktadır.")
   }
   return customerList;
}
console.log(update(1,"sjadjk",22,"uganda","22222222222222"));
console.log("update tamamlandı")
console.log(add("yeterrr",31,"yeter artık ","111111111"));
console.log("ekleme tamamlandı")

console.log("liste")
console.log(customerList);
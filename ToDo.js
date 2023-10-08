
const users=process.argv[2];
function  getAllUsers(){
  return new Promise((resolve,rejection)=>{

 
    if(users.length<=0){
        rejection("No user found")
    }
    resolve(users);
  })
}
function createUser(user){
    return new Promise((resolve,rejection)=>{
        if(user==null){
            rejection("No user found");
        }
        resolve(users.push(user));
    })
}
function getAUserByID(id){
    return new Promise((resolve,rejection)=>{
        const user=users.find((u)=>u.id==id)
        if(user){
                rejection("No user found")
        }
        resolve(user);
    })
}
async function  displayUsers(){
        var add=await createUser({id:3,name:"John"});
        const allusers=await getAllUsers();

    return    allusers;
}
async function displayAUser(id){
    var user=await getAUserByID(id);
    return user;
}

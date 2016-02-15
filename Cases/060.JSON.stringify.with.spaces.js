var user = {
    name:"Ann",
    age:25,
    roles:{
        isAdmin:false,
        isEditor:true
    }
}
var json = JSON.stringify(user,'',4);
console.log(json);
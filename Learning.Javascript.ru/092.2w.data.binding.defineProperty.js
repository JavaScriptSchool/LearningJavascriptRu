var user = {};
var nameValue = 'Roman';
Object.defineProperty(user,'name',{
    get:function(){
        return nameValue;
    },
    set:function(newValue){
        nameValue = newValue;
    }
});
console.log(user.name);
user.name = 'Dasha';
console.log(nameValue);
nameValue = 'Roman';
console.log(user.name);
console.log(JSON.stringify(user));

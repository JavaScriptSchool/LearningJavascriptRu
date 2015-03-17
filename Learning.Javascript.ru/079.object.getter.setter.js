/**
 * Created by rsamokhin on 17.03.15.
 */
var roman = Object.create(null);
Object.defineProperties(roman,{
    firstName:{
        value:'Roman',
        writable:true
    },
    lastName:{
        value:'Samokhin',
        writable:true
    }
});
function getFullName(){
    return this.firstName+' '+this.lastName;
}
function setFullName(newName){
    var names = newName.trim().split(/\s+/);
    this.firstName = names[0];
    this.lastName = names[1];
    return this;
}
Object.defineProperty(roman,'name',{
    get:getFullName,
    set:setFullName,
    configurable:true,
    enumerable:true
})
console.log(roman);
console.log(roman.name);
roman.name = 'Name Surname';
console.log(roman);
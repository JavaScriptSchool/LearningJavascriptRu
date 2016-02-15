/**
 * Created by rsamokhin on 16.03.15.
 */
var person = Object.create(null);
Object.defineProperty(person,'name',{
    get:getFullName,
    set:setFullName,
    configurable:true,
    enumerable:true
});
function getFullName(){
    return this.firstName+' '+this.lastName;
}
function setFullName(newName){
    var names = newName.trim().split(/\s+/);
    this.firstName = names[0];
    this.lastName = names[1];
}
person.greet = function(person){
    return this.name+': Hello there, '+((typeof person == 'string')?person:person.name)+'!';
}
var roman = Object.create(person);
roman.firstName = 'Roman';
roman.lastName = 'Samokhin';
roman.age = 24;
roman.gender = 'Male';
console.log(roman.name);
console.log(roman.greet('you'));
console.log(Object.keys(roman));

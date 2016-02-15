/**
 * Created by rsamokhin on 16.03.15.
 */
var roman = {
    firstName: 'Roman',
    lastName: 'Samokhin',
    age: 24,
    gender: 'male',
    get name(){
        return this.firstName+' '+this.lastName;
    },
    set name(newName){
        var names = newName.trim().split(/\s+/);
        this.firstName = names[0];
        this.lastName = names[1];
    }
}
console.log(roman);
console.log(roman.name);
roman.name = 'Name Surname';
console.log(roman.name);
console.log(Object.keys(roman));
console.log(Object.getOwnPropertyNames(roman));
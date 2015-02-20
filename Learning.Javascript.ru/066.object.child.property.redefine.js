function Animal(name){
    this.name = name;
    this.canWalk = false;
}
var animal = new Animal('cow');
function Rabbit(name){
    this.name = name;
    this.canWalk = true;
}
Rabbit.prototype = animal;
var rabbit = new Rabbit('small');
console.log(rabbit.name);
console.log(rabbit.canWalk);
function Animal(name){
    this.name = name;
    this.canWalk = true;
}
animal = new Animal('cow');

function Rabbit(name){
    this.name = name;
}
Rabbit.prototype = animal;

var big = new Rabbit('first');
var small = new Rabbit('second');

console.log(big.name);
console.log(big.canWalk);
console.log(small.name);

animal.canWalk = false;

console.log(big.canWalk);

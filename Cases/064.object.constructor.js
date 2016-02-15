function Animal(name){
    this.name = name;
    this.canWalk = true;
}
var animal = new Animal('cow');

console.log(animal.canWalk);
console.log(animal.name);
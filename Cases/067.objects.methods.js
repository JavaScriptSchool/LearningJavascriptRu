function Animal(name){
    this.name = name;
    this.canWalk = true;
    this.voice = function(){
        console.log('VOICE')
    }
}
var animal = new Animal('cow');
console.log(animal.name);
console.log(animal.canWalk);
Animal.prototype.move = function(n){
    this.position = n;
    console.log(this.position);
}
animal.move(10);
animal.voice();
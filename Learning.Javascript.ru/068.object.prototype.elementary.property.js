function Hamster (){
    this.food = [];
}
Hamster.prototype = {
    food : [], //only for documentation, it's an elementary property
    found: function(something){
        this.food.push(something);
    }
}
var speedy = new Hamster();
var slowy = new Hamster();
speedy.found('apple');
speedy.found('cherry');
slowy.found('orange');
console.log(speedy.food);
console.log(slowy.food);

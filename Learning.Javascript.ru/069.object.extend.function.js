function extend(Child,Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent;
}

// example
function Animal (name){
    this.name = name;
    this.canWalk = true;
}
function Rabbit(name){
    Rabbit.superclass.call(this);
    this.name = name;
}
extend(Rabbit,Animal);
var rabbit = new Rabbit('rab');
console.log(rabbit.canWalk);
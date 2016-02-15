function extend(Child,Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}
function Animal(name,walkSpeed){
    this.name = name;
    this.distance = 0;
    var speed = walkSpeed;
    this.walk = function(time){
        this.distance = this.distance+time*speed;
    };
    this.toString=function(){
        return this.name + ' on distance '+this.distance;
    }
}
function Bird(name,walkSpeed,flySpeed){
    Bird.superclass.constructor.call(this,name,walkSpeed);
    var fspeed = flySpeed;
    this.fly = function(time){
        this.distance = this.distance + time*fspeed;
    }
}
extend(Bird,Animal);


var bird = new Bird('my B',3,10);
console.log(bird.toString());
bird.fly(10);
bird.walk(3);
console.log(bird.toString());
function mixin(dst,src){
    var tobj = {};
    for (var x in src){
        if ((typeof tobj[x] == 'undefined')||(tobj[x]!=src[x]))
            dst[x]=src[x];
    }
}
//extend function once more
function extend(Child, Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent;
}
//example

//parent class
function Animal (name , walkSpeed){
    this.name = name;
    this.walkSpeed = walkSpeed;
}
//mixin with parent object's methods
mixin(Animal.prototype,{
    distance:0,
    walk:function(time){
        this.distance  = this.distance + time*this.walkSpeed;
    },
    toString:function(){
        return this.name + " distance "+ this.distance;
    }
});
//child class
function Bird(name,walkSpeed,flySpeed){
    Bird.superclass.constructor.call(this,name,walkSpeed);
    this.flySpeed = flySpeed;
}
extend(Bird,Animal);
//add method for child class
mixin(Bird.prototype,{
    fly:function(time){
        this.distance = this.distance + this.flySpeed*time;
    }
});
//gogo
var bird = new Bird('MyBird',10,100);
bird.walk(4);
console.log(bird);
bird.fly(2);
console.log(bird);


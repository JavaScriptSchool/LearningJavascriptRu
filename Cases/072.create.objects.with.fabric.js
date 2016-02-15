function Animal(name){
    var speed = 10;
    return {
        name:name,
        run:function(distance){
            this.time = this.time+ distance/speed;
        },
        time:0
    }
}
/*
var a1 = Animal('A1');
var a2 = Animal('A2');
a1.run(5);
a2.run(6)
console.log(a1);
console.log(a2);
*/
function Rabbit(name){
    var me = Animal(name);
    var jumps = 0;
    me.jump = function(){
        jumps++;
    };
    me.getJumps = function(){
        return jumps;
    };
    me.constructor = arguments.callee;
    return me;
}
var r1 = Rabbit('R1')
r1.run(5);
r1.jump();r1.jump();
console.log(r1.getJumps());
console.log(r1);

function f(){
    return arguments[0]+' '+ g.call([].slice.call(arguments,1));
}
function g(){
    return this.reduce(function(a,b){
        return a+b;
    });
}
f('tst',1,2,2,5,3);
f('test2',1,5,9,10);
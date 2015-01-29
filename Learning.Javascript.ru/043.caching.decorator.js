function f(a){
    return Math.random()*a;
}
function cache(func){
    var obj = {}
    return function(){
        obj[arguments[0]]=  obj[arguments[0]] || func.apply(this,arguments);
        return obj[arguments[0]];
    }
}
f = cache(f);
var a,b;
a = f(1);
b = f(1);
console.log('a = '+a);
console.log('b = '+b);
console.log('a = b = '+ (a===b));
b = f(100);
console.log('b = '+b);
console.log('a = b = '+ (a===b));

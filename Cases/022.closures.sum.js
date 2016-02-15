/**
 * Created by rsamokhin on 21.01.15.
 */
var t = sum(5)(6);
console.log(t);
function sum(a){
    return function (b){
        return a+b;
    }
}

/**
 * Created by rsamokhin on 21.01.15.
 */
var tRecursive = sumRecursive(5)(6)(5)(7);
console.log(tRecursive);
function sumRecursive(a){
    c = a;
    function f(b){
        c+=b;
        return f;
    }
    f.toString = function(){
        return c;
    }
    return f;
}
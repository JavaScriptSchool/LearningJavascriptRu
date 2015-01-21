/**
 * Created by rsamokhin on 21.01.15.
 */
var t = sum(5)(6)
console.log(t);
function sum(a){
    return function (b){
        return a+b;
    }
}

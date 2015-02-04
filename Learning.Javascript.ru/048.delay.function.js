function f(x){
    console.log(x);
}
function delay(func,d){
    return function() {
        var args = [].slice.call(arguments);
        setTimeout(function () {
            func.apply(this, args);
        }, d);
    }
}
var f3000 = delay(f,3000);
var f5000 = delay(f,5000);
f3000('test 3000');
f5000('test 5000');

function makeCounter(){
    return function f(){
        if (!f.counter)
            f.counter = 0;
        return ++f.counter;
    }
}
var c1 = makeCounter();
var c2 = makeCounter();
console.log(c1());
console.log(c1());
console.log(c2());
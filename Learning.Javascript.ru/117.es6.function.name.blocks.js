/**
 * Created by rsamokhin on 19/10/15.
 */

console.log('function property name')

function f() {}
console.log(f.name);
let g = function g() {};
console.log(g.name);
let y = function () {}; // y
let user =  {
    sayHi: function () {} //sayHi
};

console.log('function block visibility');

if (true) {
    sayHi();
    function sayHi () {
        console.log('hi');
    }
}
try{
    sayHi()
} catch (e) {
    console.log(`error - ${e}`)
}


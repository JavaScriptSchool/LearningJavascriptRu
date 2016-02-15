/**
 * Created by rsamokhin on 19/10/15.
 */
'use strict';

console.log('simple declaration');

let inc = x =>  x+1;
//let inc = function (x) { return x+1; }
console.log(inc(2));

console.log('several args');

let sum = (a, b) => a+b;
console.log(sum(1,5));

console.log('no args');

let showTime  = () => `ours = ${new Date().getHours()}`;
console.log(showTime());

console.log('function with large body');

let getFullTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes()
    return `{hours}:${minutes}`
};
console.log(getFullTime());

console.log('using arrows for callbacks');

let arr = [5, 8,3];
let sorted = arr.sort((a, b) => a-b);
console.log(sorted);

console.log('arrow functions have no theirs this');

let group = {
    title: 'our course',
    students: [
        'bob',
        'john',
        'peter'
    ],
    showList: function () {
        this.students.forEach(
            student => console.log(`${this.title}: ${student}`)
        );
    }
};
group.showList();

console.log('arrow functions use arguments pseudo array of parent function');

function f () {
    let showArgs = () => console.log(arguments);
    showArgs();
}
f(1, 2, 4);

console.log('decorator example with arrow function');

function defer (f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}
function sayHello (who) {
    console.log(`hello ${who}`);
}
let sayHelloDeffered = defer(sayHello, 5000);
sayHelloDeffered('Bob');
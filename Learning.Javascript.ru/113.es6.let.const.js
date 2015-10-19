/**
 * Created by rsamokhin on 19/10/15.
 */
'use strict';

console.log('vars');
var apples = 5;
if (true) {
    var apples = 10;
    console.log('internal' + apples);
}
console.log('external ' + apples);

console.log('lets');
let peach = 5;
if (true) {
    let peach = 10,
        test = 1;
    console.log('internal ' + peach);
    console.log('internal test ' + test);
}
console.log('external ' + peach);
//console.log('external test ' + test);


// function armu task

function makeArmy () {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        shooters.push(function () {
            console.log(i);
        })
    }
    return shooters;
}
var army = makeArmy();
army[0]();
army[5]();
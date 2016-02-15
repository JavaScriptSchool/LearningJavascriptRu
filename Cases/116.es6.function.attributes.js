/**
 * Created by rsamokhin on 19/10/15.
 */
console.log('default args');

function showMenu(title = 'No Title', width = 100, height = 200) {
    console.log(`title=${title} width ${width} height = ${height}`)
}
showMenu('Menu');
showMenu(undefined, null);

console.log('function result in args');

function sayHi(who = getCurrentUser().toUpperCase()) {
    console.log(`hi ${who}`);
}
function getCurrentUser() {
    return 'Roma';
}
sayHi();

console.log('using spread instead of args');

function showName(firstName, lastName, ...rest) {
    console.log(`${firstName} ${lastName} - ${rest}`);
}
showName('Julius', 'Caesar', 'Imperor', 'of', 'Rome');

console.log('sending params as list with spread');

let numbers = [2, 3, 5];
let max = Math.max(...numbers);
console.log(`max = ${max}`);

console.log('destructuring in params');

let options = {
    title: 'menu'
};
function showMenu1({title = 'Title', width:w = 200, height = 100}) {
    console.log(`${title} ${w} ${height}`);
}
showMenu1(options);

console.log('attrs destructuring without atts');

function showMenu2({title = 'Title', width:w = 200, height = 100} = {}) {
    console.log(`${title} ${w} ${height}`);
}
showMenu2();

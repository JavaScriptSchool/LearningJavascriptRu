/**
 * Created by rsamokhin on 19/10/15.
 */
'use strict';
console.log ('array destruct');
let [firstName, lastName] = ['Roman', 'Samokhin'];
console.log('fname ' + firstName);
console.log('lname ' + lastName);

console.log('array with unused elements');
let [, , title] = 'Julius Caesar Imperor of Rome'.split(' ');
console.log('title is ' + title);

console.log('spread');
let [fname, lname, ...rest] = 'Julius Caesar Imperor of Rome'.split(' ');
console.log('fname ' + fname);
console.log('lname ' + lname);
console.log('rest '+ rest);

console.log('setting up defaults');
let [fn, ln] = [];
console.log('fn = ' + fn);

let [fna = 'Roman', lna = 'Samokhin'] = [];
console.log('fna = ' + fna);

function defaultLastName() {
    return Date.now() + '-visitor';
}
let [fnam, lnam = defaultLastName()] = ['Bob'];
console.log('fnam ' + fnam);
console.log('lnam ' + lnam);

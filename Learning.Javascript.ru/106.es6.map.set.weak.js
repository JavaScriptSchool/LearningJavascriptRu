// Sets
var s = new Set();
s.add('hello').add('goodbye').add('hello');
console.log(s.size);
console.log(s.has('hello'));

//Maps
var m = new Map();
m.set('hello', 42);
m.set(s, 64);
console.log(m.size);
console.log(m.get(s));

//Weak Maps
var wm = new WeakMap();
wm.set(s, {extra: 42});
console.log(wm.size === undefined)

//Weak Sets
var ws = new WeakSet();
ws.add({data: 42});
console.log(ws.size === undefined)
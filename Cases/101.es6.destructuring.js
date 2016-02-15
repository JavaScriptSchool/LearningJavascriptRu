var [a, , b, ,c] = [1, 2, 3, 4, 5];
console.log(a,b,c);

function today() { return { d: 6, m: 2, y: 2013 }; }
var { m: month, y: year } = today();
console.log(JSON.stringify({m: month, y: year}, null, '\t'));

function g ({name: x}) {
    console.log(x);
}
g({name: 'Roman'});

var [a] = [];
console.log(a);
console.log(a === undefined);

var [a = 1] = [];
console.log(a);
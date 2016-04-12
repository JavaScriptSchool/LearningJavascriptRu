var mySymbol = Symbol();
var obj = {};
obj[mySymbol] = 'ok';
console.log(mySymbol);
console.log(obj[mySymbol]);
console.log(obj);
console.log(JSON.stringify(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));
console.log(typeof mySymbol);


console.log('=========================================');

var mySecondSYmbol = Symbol('cat');
obj[mySecondSYmbol] = 'tony';
console.log(obj[Symbol.for('cat')]);
/**
 * Created by rsamokhin on 13.03.15.
 */
var obj = new Object();
obj.foo = 'foo';
obj.bar = function(){};
obj.foo = 'bar';
console.log(obj);
Object.freeze(obj);
obj.foo = 'test';
delete obj.bar;
obj.test = 'foo';
console.log(obj);
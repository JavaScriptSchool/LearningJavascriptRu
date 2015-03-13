/**
 * Created by rsamokhin on 13.03.15.
 */
"use strict";
var obj = {};
Object.defineProperty(obj,'foo',{
    value:'foo',
    writable:true,
    configurable:true
});
Object.seal(obj);
console.log(obj);
obj.foo = 'bar';
obj.bar = 'foo';
console.log(obj);
delete  obj.foo;
console.log(obj);
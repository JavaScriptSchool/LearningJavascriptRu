var obj = Object.create(null);
obj.foo = 'bar';
Object.defineProperty(obj,'bar',{
    value:'true'
});
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
for (var p in obj)
    console.log(p);
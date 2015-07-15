'use strict'
class MyClass {
    get prop () {
        return 'getter';
    }
    set prop (value) {
        console.log('setter '+value);
    }
}
let inst = new MyClass();
inst.prop = 123;
console.log(inst.prop);
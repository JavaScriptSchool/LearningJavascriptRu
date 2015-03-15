/**
 * Created by rsamokhin on 13.03.15.
 */
var roman = Object.create(null);
Object.defineProperties(roman,{
    name:{
        value:'Roman',
        writable:false,
        configurable:true,
        enumerable:true
    },
    age:{
        value:24,
        writable:true,
        configurable:true,
        enumerable:true
    },
    gender:{
        value:'Male',
        writable:true,
        configurable:true,
        enumerable:true
    }
})

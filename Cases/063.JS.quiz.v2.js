(function(){
    return typeof arguments;
})();

var f = function g(){ return 23; };
typeof g();

(function(x){
    delete x;
    return x;
})(1);

var y = 1, x = y = typeof x;
x;

(function f(f){
    return typeof f();
})(function(){ return 1; });

var foo = {
    bar: function() { return this.baz; },
    baz: 1
};
(function(){
    return typeof arguments[0]();
})(foo.bar);

var foo = {
    bar: function(){ return this.baz; },
    baz: 1
}
typeof (f = foo.bar)();

var f = (function f(){ return "1"; }, function g(){ return 2; })();
typeof f;

var x = 1;
if (function f(){}) {
    x += typeof f;
}
x;

var x = [typeof x, typeof y][1];
typeof typeof x;

(function(foo){
    return typeof foo.bar;
})({ foo: { bar: 1 } });

(function f(){
    function f(){ return 1; }
    return f();
    function f(){ return 2; }
})();

function f(){ return f; }
new f() instanceof f;

with (function(x, undefined){}) length;

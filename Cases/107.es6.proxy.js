var target = {};
var handler = {
    get: function (receiver, name) {
        return `hello, ${name}!`;
    }
};
var p = new Proxy(target, handler);
console.log(p.world);

var target = function () {
    return 'i am the target';
}
var handler = {
    apply: function (receiver, ...args) {
        return 'i am the proxy';
    }
}
var p = new Proxy(target, handler);
console.log(p());
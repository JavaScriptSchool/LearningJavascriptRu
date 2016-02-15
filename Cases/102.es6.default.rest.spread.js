function f (x, y = 12) {
    return x + y;
}
console.log(f(1, 2));
console.log(f(3));

function g (x, ...y) {
    return x * y.length;
}
console.log(g(3, 'a', 5, 'c', 'd'));

function h (x, y, z) {
    return x + y + z;
}
console.log(h(...[1, 2, 3]));
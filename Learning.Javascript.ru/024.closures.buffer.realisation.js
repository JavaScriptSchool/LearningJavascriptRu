function makeBuffer() {
    var buf = '';
    return function (t) {
        if (t != undefined)
            return buf += t;
        return buf;
    }
}
var buffer = makeBuffer();
buffer('String 1 ');
buffer('String 2 ');
buffer('String 3 ');
console.log(buffer());

var testFigBuffer = makeBuffer();
testFigBuffer(0);
testFigBuffer(1);
testFigBuffer(4);
console.log(testFigBuffer());


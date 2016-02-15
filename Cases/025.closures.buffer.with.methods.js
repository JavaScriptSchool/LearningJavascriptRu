function makeBuffer() {
    var buf = '';
    function thisBuffer(t) {
        if (t != undefined)
            return buf += t;
        return buf;
    }
    thisBuffer.clear = function(){
        buf = '';
        return true;
    }
    return thisBuffer;

}
var buffer = makeBuffer();
buffer('String 1 ');
buffer('String 2 ');
buffer('String 3 ');
console.log(buffer());
buffer.clear();
console.log(buffer());


function createIterator(){
    var i = 0;
    return function(){
        console.log(++i);
    }
}
var iterator = createIterator();
var timer = setTimeout(function iterate(){
    var innerTimer = setTimeout(function(){
        iterate();
    },100)
    iterator();
    if (innerTimer-timer>=20){
        clearTimeout(innerTimer);
    }
},100);
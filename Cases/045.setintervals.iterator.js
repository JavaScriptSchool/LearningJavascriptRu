var iterator =new makeIterator();
var timer = setInterval(iterator,200);
function makeIterator(){
    var i = 0;
    return function(){
        if (i>20)
            clearInterval(timer);
        else
            return console.log(i++);
    };
}
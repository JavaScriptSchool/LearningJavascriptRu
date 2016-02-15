function f(е){
   console.log(е);
}
function debounce(func,d){
    var CD = false;
    return function(){
        if (!CD){
            CD=true;
            setTimeout(function(){
                CD=false
            },d)
            return func.call(this,arguments[0]);
        }
        return func.call(this,false);
    }
}
var f = debounce(f,1000);
f(1);
f(2);
setTimeout(function(){
    f(3);
},100);
setTimeout(function(){
    f(4);
},1100);
setTimeout(function(){
    f(5);
},5100);
setTimeout(function(){
    f(6);
},5500);
setTimeout(function(){
    f(7);
},6200);
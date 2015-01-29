function work(a){
    alert('Work done '+a);
}
function logging(func,logArray){
    return function(){
        logArray.push(arguments[0]);
        return func.apply(this,arguments);
    }
}
var log = [];
work = logging(work,log);
work(1);
work(4);
for (var i = 0 ; i < log.length ; i++){
    console.log(log[i]);
}
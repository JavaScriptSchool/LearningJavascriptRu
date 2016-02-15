function work(){
    var array = [].slice.call(arguments);
    console.log( [].reduce.call(array,function(a,b){
            return a+b;
    }));
}
function logger(f,l){
    return function() {
        debugger;
        l.push('summ added for '+arguments[0]);
        f.apply(this,[].slice.call(arguments,1));
    }
}
var log = [];
work = logger(work,log);
work('sum1',1,2,3);
for(var i = 0 ; i < log.length ; i++){
    console.log(log[i]);
}


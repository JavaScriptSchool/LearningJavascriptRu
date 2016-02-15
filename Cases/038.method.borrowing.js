function joinArgs(){
    arguments.join = [].join;
    return arguments.join('.');
}
console.log(joinArgs());
console.log(joinArgs(1,2,5,'2312'));

function joinCall(){
    var join = [].join;
    return join.call(arguments,'-');
}
console.log(joinCall());
console.log(joinCall(1,2,5,'2312'));

function joinApply(){
    var join = [].join;
    return join.apply(arguments,['-']);
}
console.log(joinApply());
console.log(joinApply(1,2,5,'2312'));

function sliceJoinArguments(){
    var args = [].join.call(arguments,'+');
    return args;
}
console.log(sliceJoinArguments(1,2,5,'2312'));
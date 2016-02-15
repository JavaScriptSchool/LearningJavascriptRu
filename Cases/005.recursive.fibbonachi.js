console.log(fib(55));
function fib(a){
    if (a>=3)
        return fib(a-1)+fib(a-2);
    return 1;
}
function doublingDecorator(func){
    return function(){
        return 2* func.apply(this,arguments);
    }
}
function sum(a,b){
    return a+b;
}
sum = doublingDecorator(sum);
console.log(sum(1,2));
console.log(sum(5,7));
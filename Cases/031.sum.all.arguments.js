function sum(){
    return (function(x){
        var summ = 0;
        for (var i = 0 ; i < x.length ; i++)
            summ+=x[i];
        return summ;
    })(arguments);
}
console.log(sum());
console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));

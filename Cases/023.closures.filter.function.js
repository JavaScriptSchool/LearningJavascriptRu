var arr = [1,2,3,4,5,6,7,8,9];
filter(arr,inBetween(3,6));
filter(arr,inArray([1,10,3]));
filter(arr,function(a){
    return a%2==0;
})
function filter(array,func){
    return array.filter(func);
}
function inBetween(a, b) {
    return function(x) {
        return x >=a && x <= b;
    };
}
function inArray(array){
    return function(x){
        return ~array.indexOf(x);
    }
}
var a = [1,1,2,4,1,34,2,5,4];
console.log(noDups(a));
function noDups(a){
    return a.filter(function(value,index,array){
        return index==array.indexOf(value);
    });
}
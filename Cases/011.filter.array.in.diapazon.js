var a = [5,4,3,8,0];
var filtered = filterArr(a,3,5);
console.log(filtered);
console.log(a);
function filterArr(a , b, e){
    return a.filter(function(el){
        return (el>=b)&&(el<=e);
    });
}
var array = [1,2,4,-5,3,-2,0,23];
function checkPositives(number){
    return number>0;
}
var positives = array.filter(checkPositives);
console.log(positives);
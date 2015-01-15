var a = ['a','b','c','true',false,true,'false'];
//element
a.forEach(function(e){
    console.log(e);
});
//filter - filers array for elements, that fit the condition
[5,6,12,3,65,8,4].filter(function(e){
   return e>10;
});
//every  if all of arrays els fit to the condition
[5,6,12,3,65,8,4].every(function(e){
    return e<66;
});
//if any of array els fit to the condition
[5,6,12,3,65,8,4].some(function(e){
    return e>64;
});
//map returns return the array of values from initial one, changed by function
var s = [1,2,3];
var r = s.map(function(e){
    return Math.pow(e,2);
});
//reduce returns the only value after loop through all the array left->rigth 
//(reduceRight exists also)
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
//reverse changes the order of array items a.concat(b) adds items or array b to the end of array a
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
].reduceRight(function(a,b){
    return (a).concat(b.reverse());
});
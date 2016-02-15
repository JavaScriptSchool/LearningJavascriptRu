var array = [3,4,2,6,5];
function getSums(arr){
    return arr.map(function(number,index,array){
       return  array.slice(0,index+1).reduce(function(previous,current,index,array){
            return previous+current;
        })
    })
}
console.log(getSums(array));
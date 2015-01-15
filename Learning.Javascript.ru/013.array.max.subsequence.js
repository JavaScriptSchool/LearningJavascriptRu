var arr = [1, -2, 3, 4, -9, 6];
console.log(findMax(arr));

function findMax(a){
    var max = 0;   
    for (var i = a.length ; i-- ;){
        for (var j = i+1 ; j-- ; ){
            var newSum = a.slice(j,i+1).reduce(function(r,t){
                return r+t;
            });
            max = max<newSum?newSum:max;
        }
    }
    return max;
}
var arr = [21,5,123,1,3,7,44,32,23];
console.log(arr);
filterRangeInPlace(arr,0,10);
function filterRangeInPlace(a,b,e){
    for(var i = a.length;i--;){
        if ((a[i]<b)||(a[i]>e)){
            a.splice(i,1);
        }
    }
}
console.log(arr);

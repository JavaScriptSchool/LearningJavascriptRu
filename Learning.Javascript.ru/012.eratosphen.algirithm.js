console.log(init(100));
function init(i){
    var a = [];
    while (i>=2) 
        a.unshift(i--);
    return era(a);
}
function era(a){
   if (a.length > 0 )
       return [a[0]].concat(era(a.filter(function(e){
          return e%a[0]!==0;
       })));
   return [];
}
console.log(fibb(77));
function fibb(a){
    if (a<2)
        return 1;
    else{
        var f1 = 1;
        var f2 = 2;
        for (var i = 3 ; i < a; i++){
            t = f2;
            f2 = f1+f2;
            f1 = t;
        }
        return f2;
    }
}
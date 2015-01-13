function sumRecursive(a){
    if (a>0)
        return a+sumRecursive(a-1);
    else
        return 0;
}
var b = new Date().getTime();
var r = sumRecursive(100000);
console.log(r);
var e = new Date().getTime();
console.log(e-b);

console.log(factorial(5));
function factorial(a){
    if (a>1)    
        return(a*factorial(a-1));
    return(1);
}
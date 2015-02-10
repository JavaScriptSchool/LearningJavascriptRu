function calc(){
    var expression = prompt('Enter expression');
    try{
        var result = eval(expression);
        if (!isNaN(result))
            console.log(result);
        else
            throw new Error('Wrong');
    }catch(e){
        console.log('Wrong expression '+e);
    }
}
calc();
function Calculator(){
    var methods = [{
        'sign':'-',
        'func':function(a,b){
            return a-b;
        }
    },{
        'sign':'+',
        'func':function(a,b){
            return a+b;
        }
    }]
    this.calculate = function(str){
        if(str.split(' ').length===3) {
            try {
                var a = Number.parseInt(str.split(' ')[0]);
                var b = Number.parseInt(str.split(' ')[2]);
                var sign = str.split(' ')[1];
                for (var i = 0; i < methods.length; i++) {
                    if (methods[i].sign === sign) {
                        return methods[i].func(a, b);
                    }
                }
                return 'No such method';
            }catch(e){
                return 'Incorrect data';
            }
        }else{
            return 'Incorrect string';
        }
    }
    this.addMethod = function(sign,func){
        methods.push({
            'sign':sign,
            'func':func
        });
        return 'Method added'
    }
}
var calc = new Calculator;
calc.calculate('4 145');
calc.calculate('45 +$+ 145');
calc.calculate('45 + 145');
calc.calculate('45 - 145');
calc.calculate('20 * 6');
calc.addMethod('*',function(a,b){
    return a*b;
});
calc.calculate('20 * 6');
calc.addMethod('/',function(a,b){
    return a/b;
});
calc.calculate('24 / 6');
calc.calculate('20 ** 6');
calc.addMethod('**',function(a,b){
    return Math.pow(a,b);
});
calc.calculate('2 ** 10');
function output(date){
    if (date==null)
        return 'Wrong format';
    if (~{}.toString.call(date).indexOf('Array'))
        return [].reduceRight.call(date,function(a,b){
            return a+'.'+b;
        })
    if (typeof date === 'number'){
        newDate = (new Date(date*1000));
        return newDate.getDate()+'.'+('0'+newDate.getMonth()).slice(-2)+'.'+newDate.getFullYear().toString().slice(-2);
    }
    if (typeof date === 'string')
        return [].reduceRight.call(date.split('-'),function(a,b){
            return a+'.'+b.slice(-2);
        })
    if (~{}.toString.call(date).indexOf('Date'))
        return output(Math.floor(new Date().getTime.call(date)/1000));
}
output('2015-02-01');
output(1234567890);
output([2000,0,1]);
output(new Date(2000,2,12));

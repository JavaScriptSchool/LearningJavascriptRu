var array = ['a','b','c','d','e'];
function join(previousValue,currentItem,index,array){
    console.log('index: '+index+' of array '+array+'. Before value is '+previousValue);
    return previousValue+currentItem;
}
console.log(array.reduce(join));
console.log(array.reduce(join,'R'));
console.log(array.reduceRight(join));

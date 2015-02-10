var array = ['apple','cherry','peach'];
function output(item,index,array){
    console.log('item: '+item+' is number '+index+' in array: '+array);
}
array.forEach(output);
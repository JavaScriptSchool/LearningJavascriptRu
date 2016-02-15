str0 = 'background-left-image';
str1 = '-background-left-image';
str2 = 'background--left-image';
str3 = 'background-left-image-';
console.log(camelize(str0));
console.log(camelize(str1));
console.log(camelize(str2));
console.log(camelize(str3));
function camelize(s){
    return s.split('-').map(function(e){
        return ([e.charAt(0).toUpperCase()].concat(e.toLowerCase().substr(-e.length+1))).join('');
    }).join('');
}
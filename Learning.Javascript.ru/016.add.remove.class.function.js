var o = {
    className: 'class1 class2'
};
function addClass(obj,cName){
    obj.className+=obj.className.split(' ').some(function(e){
        return e===cName;
    })?'':' '+cName;
}
addClass(o,'class1');
addClass(o,'class4');
console.log(o);
function removeClass(obj,cName){
    obj.className = obj.className.split(' ').filter(function(e){
        return e!==cName;
    }).join(' ');
}
removeClass(o,'class2');
removeClass(o,'class5');
console.log(o);

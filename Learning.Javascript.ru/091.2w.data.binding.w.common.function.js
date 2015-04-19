function bindObjPropToDomElem(object,property,element){
    Object.observe(object,function(changes){
        changes.forEach(function(change){
            element.value = object[property];
        });
    });
}
function bindDomElementToObjectProp(element, object, property){
    element.onchange = function(){
        object[property] = element.value;
        console.log("new property is " + object[property]);
    }
}
function bindModelView(object,property,element){
    bindObjPropToDomElem(object,property,element);
    bindDomElementToObjectProp(element,object,property);
}
var list = {value:1};
list.next = {value:2};
list.next.next = {value:3};
list.next.next.next = {value:4};
(function returnRecursive(e){
    if (e.next)
        ((arguments.callee)(e.next));
    console.log(e.value);
    return true;
})(list);

(function returnRecursiveNoReverse(e){
    console.log(e.value);
    if (e.next)
        ((arguments.callee)(e.next));
    return true;
})(list);

(function returnNoRecursiveNoReverse(e){
    while(e.hasOwnProperty('value')){
        console.log(e.value);
        if(!e.next)
            break;
        e=e.next;
    }
    return true;
})(list);

(function returnNoRecursiveNoReverse(e){
    var p = new Array();
    while(e.hasOwnProperty('value')){
        p.push(e.value);
        if(!e.next)
            break;
        e=e.next;
    }
    console.log(p.reverse());
    return true;;
})(list);
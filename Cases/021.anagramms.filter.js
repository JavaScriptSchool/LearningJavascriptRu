var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор",'a'];
console.log((function(a){
    return a.filter(function(el,i,ar){
        return !ar.some(function(element,index){
            return (element.toLowerCase()===el.toLowerCase().split('').reverse().join(''))&&(this>index);
        },i);
    });
})(arr));
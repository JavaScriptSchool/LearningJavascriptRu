var objA = [
    {name:'ann',age:20},{name:'peter',age:18},{name:'maggie',age:24}
];
function sortObjArray(a,b){
    return a.age-b.age;
}
objA.sort(sortObjArray);
objA.forEach(showName);

function showName(e){
    console.log(e.name);
}
var a = [1,2,3,4,5,6];
console.log(a);
a.sort(randomize);
console.log(a);
function randomize(){
    return Math.random()-0.5;
}
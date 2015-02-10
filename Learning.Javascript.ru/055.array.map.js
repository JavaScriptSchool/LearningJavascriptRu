var array = [1,2,3,4,5,6];
function squareArray(element){
    return element*element;
}
var squareArray = array.map(squareArray);
console.log(squareArray);
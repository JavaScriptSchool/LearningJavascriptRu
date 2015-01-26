function Summator(){
    this.sum = function(a,b){
        a = (a===undefined)?0:a;
        b = (b===undefined)?0:b;
        return(a+b);
    }
    this.run = function(){
        return this.sum(Number.parseInt(prompt('Enter a'),0),Number.parseInt(prompt('Enter b'),0));
    }
}
var s = new Summator();
console.log(s.sum(4,5));
console.log(s.sum());
console.log(s.run());
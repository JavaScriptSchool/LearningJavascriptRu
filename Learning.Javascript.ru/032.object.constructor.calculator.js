var calculator = {
    readValues:function(){
        this.a = Number.parseInt(prompt('Enter a',0));
        this.b = Number.parseInt(prompt('Enter b',0));
    },
    sum:function(){
        return +this.a + this.b;
    },
    mul:function(){
        return this.a*this.b;
    }
}
calculator.readValues();
console.log((calculator.sum()));
console.log((calculator.mul()));

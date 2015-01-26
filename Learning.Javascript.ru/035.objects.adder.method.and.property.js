function Adder(value){
    this.value = value;
    this.addInput = function(){
        this.value+=Number.parseInt(prompt('Enter x',0));
        return this;
    }
    this.showValue = function(){
        console.log(this.value);
        return this;
    }
}
var adder = new Adder(1);
adder.addInput();
adder.addInput();
adder.showValue();
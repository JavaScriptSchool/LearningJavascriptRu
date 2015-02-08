function f(){
    console.log(this.name);
}
f = f.bind({
    name:'Bob'
}).bind({
    name:'Ann'
});
f();